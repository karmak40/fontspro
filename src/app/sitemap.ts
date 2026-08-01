import type { MetadataRoute } from "next";
import { LANDING_PAGES } from "@/lib/landingPages";
import { SITE_URL } from "@/lib/site";

const STATIC_ROUTES = [
  "",
  "/about",
  "/blog",
  "/blog/fancy-text-generator-stylish-text-tiktok-instagram",
  "/emoji",
  "/aesthetics",
  "/styles",
  "/terms",
  "/privacy",
  "/refund",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.6,
  }));

  const styleEntries = LANDING_PAGES.map((page) => ({
    url: `${SITE_URL}/styles/${page.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...styleEntries];
}
