// Update NEXT_PUBLIC_SITE_URL in your environment (or Vercel project settings)
// once this site has a real domain. Must be a full URL including the protocol
// (e.g. "https://malcomjohnson.vercel.app") — falls back to a placeholder if
// unset or malformed, so a bad value can't break the production build.
const fallbackSiteUrl = "https://malcom-johnson.vercel.app";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL;
  if (!value) return fallbackSiteUrl;

  try {
    return new URL(value).toString().replace(/\/$/, "");
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteUrl = resolveSiteUrl();
