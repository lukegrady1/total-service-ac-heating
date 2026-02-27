import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://totalserviceacandheat.com";
  const now = new Date();

  return [
    // Core pages
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/free-estimate`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/financing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Service pages
    { url: `${baseUrl}/services/ac-repair`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/ac-installation`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/services/ac-maintenance`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/services/heating`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services/duct-cleaning`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services/indoor-air-quality`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Service area pages
    { url: `${baseUrl}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/service-areas/orlando`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/service-areas/winter-garden`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/service-areas/apopka`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/service-areas/windermere`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/service-areas/maitland`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Blog
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${baseUrl}/blog/how-often-should-you-service-your-ac-in-florida`,
      lastModified: new Date("2026-02-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/signs-your-ac-needs-replacement-orlando`,
      lastModified: new Date("2026-02-08"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/best-ac-temperature-settings-florida-summer`,
      lastModified: new Date("2026-01-28"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/hvac-maintenance-checklist-central-florida`,
      lastModified: new Date("2026-01-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/how-to-improve-indoor-air-quality-orlando`,
      lastModified: new Date("2026-01-05"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
