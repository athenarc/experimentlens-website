import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/pages/contact/ContactPage";
import t from "@/content/contact.json";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: t.meta.title },
      { name: "description", content: t.meta.description },
      { property: "og:title", content: t.meta.ogTitle },
      { property: "og:description", content: t.meta.ogDescription },
    ],
  }),
});
