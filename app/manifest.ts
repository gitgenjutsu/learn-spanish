import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Habla: Daily Spanish Voice",
    short_name: "Habla",
    description: "Daily voice practice for Spanish learners",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a", // Dark slate theme
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
