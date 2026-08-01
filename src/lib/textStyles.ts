// Unicode "fancy text" style engine.
//
// Most styles map onto the Mathematical Alphanumeric Symbols block, which is
// laid out as contiguous runs per style: A-Z, then a-z, then (for some styles)
// 0-9. We generate those runs by code-point offset instead of hand-writing
// 60+ character maps.
//
// A few of the older styles (plain Script, plain Fraktur, Double-struck) were
// assigned *after* a handful of their letters already existed as standalone
// legacy symbols (e.g. ℬ Script capital B pre-dates the math block), so
// Unicode left those code points unassigned rather than duplicate them. Every
// naive clone gets this wrong and silently renders a tofu box for those
// letters. We patch the known holes below.

export type TextStyle = {
  id: string;
  label: string;
  category: "letters" | "shapes" | "effects";
  transform: (input: string) => string;
};

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";

/** Builds a char -> char map by offsetting each run's starting code point. */
function offsetMap(
  upperStart: number | null,
  lowerStart: number | null,
  digitStart: number | null,
  overrides: Record<string, string> = {}
): Record<string, string> {
  const map: Record<string, string> = {};
  const fill = (chars: string, start: number | null) => {
    if (start === null) return;
    for (let i = 0; i < chars.length; i++) {
      map[chars[i]] = String.fromCodePoint(start + i);
    }
  };
  fill(UPPER, upperStart);
  fill(LOWER, lowerStart);
  fill(DIGITS, digitStart);
  return { ...map, ...overrides };
}

function applyMap(map: Record<string, string>) {
  return (input: string) =>
    Array.from(input)
      .map((ch) => map[ch] ?? ch)
      .join("");
}

// --- Known holes in the legacy-adjacent math-alphanumeric styles ---------

const SCRIPT_OVERRIDES = {
  B: "ℬ", E: "ℰ", F: "ℱ", H: "ℋ", I: "ℐ",
  L: "ℒ", M: "ℳ", R: "ℛ",
  e: "ℯ", g: "ℊ", o: "ℴ",
};

const FRAKTUR_OVERRIDES = {
  C: "ℭ", H: "ℌ", I: "ℑ", R: "ℜ", Z: "ℨ",
};

// Italic has exactly one gap: lowercase h's "expected" code point was left
// unassigned because U+210E (the Planck-constant symbol) already served as
// italic h.
const ITALIC_OVERRIDES = { h: "ℎ" };

const DOUBLE_STRUCK_OVERRIDES = {
  C: "ℂ", H: "ℍ", N: "ℕ", P: "ℙ", Q: "ℚ",
  R: "ℝ", Z: "ℤ",
};

// --- Explicit (non-offset) maps -------------------------------------------

const CIRCLED_UPPER = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ";
const CIRCLED_LOWER = "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ";
const CIRCLED_DIGIT = "⓪①②③④⑤⑥⑦⑧⑨";

const SQUARED_UPPER = "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉";

// Unicode has no true small-capital "x" glyph; every generator either drops
// to plain "x" or reaches for an unrelated IPA symbol. We keep plain "x".
const SMALL_CAPS_LOWER =
  "ᴀʙᴄᴅᴇꜰɢʜɪᴊ" +
  "ᴋʟᴍɴᴏᴘꞯʀꜱᴛ" +
  "ᴜᴠᴡxʏᴢ";

const UPSIDE_DOWN_LOWER =
  "ɐqɔpǝɟbɥıɾʞןɯuodbɹsʇnʌʍxʎz";
const UPSIDE_DOWN_UPPER =
  "∀BƆDƎꟻ⅁HIſꓘӼWNOԀꝹᴚS┴∩ʌMXʎZ";

const bold = offsetMap(0x1d400, 0x1d41a, 0x1d7ce);
const italic = offsetMap(0x1d434, 0x1d44e, null, ITALIC_OVERRIDES);
const boldItalic = offsetMap(0x1d468, 0x1d482, null);
const script = offsetMap(0x1d49c, 0x1d4b6, null, SCRIPT_OVERRIDES);
const boldScript = offsetMap(0x1d4d0, 0x1d4ea, null);
const fraktur = offsetMap(0x1d504, 0x1d51e, null, FRAKTUR_OVERRIDES);
const boldFraktur = offsetMap(0x1d56c, 0x1d586, null);
const doubleStruck = offsetMap(0x1d538, 0x1d552, 0x1d7d8, DOUBLE_STRUCK_OVERRIDES);
const sansSerif = offsetMap(0x1d5a0, 0x1d5ba, 0x1d7e2);
const sansBold = offsetMap(0x1d5d4, 0x1d5ee, 0x1d7ec);
const sansItalic = offsetMap(0x1d608, 0x1d622, null);
const sansBoldItalic = offsetMap(0x1d63c, 0x1d656, null);
const monospace = offsetMap(0x1d670, 0x1d68a, 0x1d7f6);
const fullwidth = offsetMap(0xff21, 0xff41, 0xff10);

function circledMap() {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[UPPER[i]] = CIRCLED_UPPER[i];
    map[LOWER[i]] = CIRCLED_LOWER[i];
  }
  for (let i = 0; i < 10; i++) map[DIGITS[i]] = CIRCLED_DIGIT[i];
  return map;
}

function squaredMap() {
  // These glyphs live outside the BMP (surrogate pairs), so indexing the
  // string by UTF-16 code unit would slice characters in half. Split into
  // code points first.
  const squared = Array.from(SQUARED_UPPER);
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[UPPER[i]] = squared[i];
    map[LOWER[i]] = squared[i]; // no lowercase squared block; reuse
  }
  return map;
}

function smallCapsMap() {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[UPPER[i]] = UPPER[i]; // capitals stay capital
    map[LOWER[i]] = SMALL_CAPS_LOWER[i];
  }
  return map;
}

/** Flips + mirrors the string, the way upside-down text generators do. */
function upsideDown(input: string) {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    map[UPPER[i]] = UPSIDE_DOWN_UPPER[i];
    map[LOWER[i]] = UPSIDE_DOWN_LOWER[i];
  }
  return Array.from(input)
    .reverse()
    .map((ch) => map[ch] ?? ch)
    .join("");
}

/** Inserts a combining character after every visible character. */
function withCombining(codePoint: number) {
  const mark = String.fromCodePoint(codePoint);
  return (input: string) =>
    Array.from(input)
      .map((ch) => (ch === " " ? ch : ch + mark))
      .join("");
}

export const TEXT_STYLES: TextStyle[] = [
  { id: "bold", label: "Bold", category: "letters", transform: applyMap(bold) },
  { id: "italic", label: "Italic", category: "letters", transform: applyMap(italic) },
  { id: "bold-italic", label: "Bold Italic", category: "letters", transform: applyMap(boldItalic) },
  { id: "script", label: "Script", category: "letters", transform: applyMap(script) },
  { id: "bold-script", label: "Bold Script", category: "letters", transform: applyMap(boldScript) },
  { id: "fraktur", label: "Fraktur", category: "letters", transform: applyMap(fraktur) },
  { id: "bold-fraktur", label: "Bold Fraktur", category: "letters", transform: applyMap(boldFraktur) },
  { id: "double-struck", label: "Double-Struck", category: "letters", transform: applyMap(doubleStruck) },
  { id: "sans", label: "Sans-Serif", category: "letters", transform: applyMap(sansSerif) },
  { id: "sans-bold", label: "Sans Bold", category: "letters", transform: applyMap(sansBold) },
  { id: "sans-italic", label: "Sans Italic", category: "letters", transform: applyMap(sansItalic) },
  { id: "sans-bold-italic", label: "Sans Bold Italic", category: "letters", transform: applyMap(sansBoldItalic) },
  { id: "monospace", label: "Monospace", category: "letters", transform: applyMap(monospace) },
  { id: "fullwidth", label: "Fullwidth", category: "letters", transform: applyMap(fullwidth) },
  { id: "small-caps", label: "Small Caps", category: "letters", transform: applyMap(smallCapsMap()) },
  { id: "circled", label: "Circled", category: "shapes", transform: applyMap(circledMap()) },
  { id: "squared", label: "Squared", category: "shapes", transform: applyMap(squaredMap()) },
  { id: "upside-down", label: "Upside Down", category: "effects", transform: upsideDown },
  { id: "strikethrough", label: "Strikethrough", category: "effects", transform: withCombining(0x0336) },
  { id: "underline", label: "Underline", category: "effects", transform: withCombining(0x0332) },
];

export function isRenderRisky(styleId: string) {
  // Styles most likely to show as tofu/boxes on older Android keyboards or
  // in places with restricted font fallback (some Discord/TikTok clients).
  return ["fraktur", "bold-fraktur", "double-struck", "squared"].includes(styleId);
}
