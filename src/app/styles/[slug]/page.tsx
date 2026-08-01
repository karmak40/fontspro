import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TextGenerator from "@/components/TextGenerator";
import { LANDING_PAGES, getLandingPage } from "@/lib/landingPages";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return LANDING_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};
  return {
    title: `${page.title} — Fontpro`,
    description: page.metaDescription,
  };
}

export default async function StyleLandingPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  return (
    <>
      <section className="px-6 pt-10 pb-6 sm:pt-14">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl italic leading-tight text-fg sm:text-4xl">
            {page.title}
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-mist">
            {page.intro}
          </p>
        </div>
      </section>

      <section className="flex flex-1 justify-center px-6 pb-16">
        <div className="w-full max-w-3xl">
          <TextGenerator highlightStyleId={page.styleId} />
        </div>
      </section>
    </>
  );
}
