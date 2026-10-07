import { Mail } from "lucide-react";

import { Nav } from "@/components/ui/layout/Nav";
import { Footer } from "@/components/ui/layout/Footer";
import common from "@/content/common.json";
import t from "@/content/contact.json";

export function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Nav />
      <main className="flex-1 border-b border-slate-200 bg-gradient-to-b from-sky-50/60 via-white to-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-600">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {t.hero.subtitle}
          </p>

          <div className="mx-auto mt-12 max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 text-sky-600">
              <Mail className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              {t.email.label}
            </p>
            <a
              href={`mailto:${common.contactEmail}`}
              className="mt-1 block break-all font-mono text-lg text-slate-900 hover:text-sky-700"
            >
              {common.contactEmail}
            </a>
            <a
              href={`mailto:${common.contactEmail}`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              <Mail className="h-4 w-4" />
              {t.email.cta}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
