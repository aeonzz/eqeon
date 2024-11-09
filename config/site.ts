import { env } from "@/env";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "eqeon",
  description:
    "eqeon is a modern music application that allows users to discover, play, and organize their favorite tracks. With a sleek interface and personalized recommendations, eqeon enhances the music listening experience.",
  url: env.NEXT_PUBLIC_APP_URL,
  links: { github: "https://github.com/aeonzz/eqeon" },
};
