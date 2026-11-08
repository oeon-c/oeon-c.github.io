import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    category: z.enum([
      "development",
      "ctf",
      "bug-bounty",
      "tech-writing",
      "papers",
      "contests",
    ]),
    date: z.coerce.date(),
    isSample: z.boolean().default(false),
  }),
});

export const collections = { posts };
