import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fontpro — Fancy Text Generator",
    short_name: "Fontpro",
    description:
      "Turn plain text into bold, italic, script, circled and other stylish Unicode fonts.",
    start_url: "/",
    display: "standalone",
    background_color: "#130f1d",
    theme_color: "#130f1d",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
