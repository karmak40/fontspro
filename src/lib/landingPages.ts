export type LandingPage = {
  slug: string;
  styleId: string;
  title: string;
  metaDescription: string;
  intro: string;
};

// Each page targets one specific search term people actually type, pointing
// at the one style in TEXT_STYLES that matches what that term means in
// practice (e.g. "cursive" almost always means our Script style, not the
// literal cursive/handwriting sense).
export const LANDING_PAGES: LandingPage[] = [
  {
    slug: "bold-text-generator",
    styleId: "bold",
    title: "Bold Text Generator",
    metaDescription:
      "Turn your text bold with real Unicode characters — no formatting menu required. Paste it anywhere plain text is all you get.",
    intro:
      "Most apps only let you bold text inside their own editor. This turns your words into Unicode characters that are bold by definition, so the styling survives the paste into a bio, a comment, or a username field that has no formatting options at all.",
  },
  {
    slug: "italic-text-generator",
    styleId: "italic",
    title: "Italic Text Generator",
    metaDescription:
      "Convert text to italic Unicode characters that paste as plain text — works in bios, captions and anywhere rich text isn't supported.",
    intro:
      "Italics used to mean picking a menu option in a text editor. Here it means picking different characters — ones that are slanted by design — so the look travels with the text itself, not with the app you typed it in.",
  },
  {
    slug: "cursive-text-generator",
    styleId: "script",
    title: "Cursive Text Generator",
    metaDescription:
      "Generate cursive-style script text you can copy and paste into Instagram, TikTok or Discord — no font installation needed.",
    intro:
      "What most people mean by \"cursive font\" online is this — a flowing script alphabet built from Unicode characters, not an actual installed font. Type below and the cursive version updates as you go.",
  },
  {
    slug: "gothic-text-generator",
    styleId: "fraktur",
    title: "Gothic Text Generator",
    metaDescription:
      "Create gothic (blackletter/fraktur) style text for usernames and bios. Flagged where it may not render on every app.",
    intro:
      "This is the blackletter look people usually mean by \"gothic font\" — technically called Fraktur. It's one of the more dramatic styles here, and also one of the pickier ones about rendering, which is why we flag it below.",
  },
  {
    slug: "bubble-text-generator",
    styleId: "circled",
    title: "Bubble Text Generator",
    metaDescription:
      "Wrap your letters in circles with a bubble text generator — copy and paste circled Unicode characters anywhere.",
    intro:
      "Every letter gets its own little circle around it. It reads as playful rather than sharp, which is why it tends to show up in usernames more than in captions.",
  },
  {
    slug: "upside-down-text-generator",
    styleId: "upside-down",
    title: "Upside Down Text Generator",
    metaDescription:
      "Flip your text upside down with mirrored Unicode characters — paste it anywhere and it reads flipped, letter for letter.",
    intro:
      "Each letter is swapped for a character that looks like it's been flipped, and the whole string is reversed so it reads correctly upside down, not backwards.",
  },
  {
    slug: "small-text-generator",
    styleId: "small-caps",
    title: "Small Text Generator",
    metaDescription:
      "Shrink your text with a small caps generator — a quieter, compact alternative to shouting in all caps.",
    intro:
      "Small caps keep the capital letters at full height and shrink everything else, which reads as understated rather than loud — the opposite effect of typing in all caps.",
  },
  {
    slug: "wide-text-generator",
    styleId: "fullwidth",
    title: "Wide Text Generator",
    metaDescription:
      "Space your letters out with a wide text generator — full-width Unicode characters that give every letter breathing room.",
    intro:
      "This swaps normal letters for their full-width equivalents, so every character claims the same amount of horizontal space — the spaced-out look you've probably seen in usernames.",
  },
  {
    slug: "strikethrough-text-generator",
    styleId: "strikethrough",
    title: "Strikethrough Text Generator",
    metaDescription:
      "Cross out your text with a strikethrough generator — paste a line straight through your words anywhere plain text works.",
    intro:
      "A thin line gets attached to every character, so the strikethrough travels with the text wherever you paste it — no rich-text editor required.",
  },
];

export function getLandingPage(slug: string) {
  return LANDING_PAGES.find((page) => page.slug === slug);
}
