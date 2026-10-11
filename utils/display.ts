import type { PublicImage } from '@mintfolio/core/theme';

/** Read a public image URL without importing content collections or host assets. */
export function imageSrc(image?: string | PublicImage): string | undefined {
  return typeof image === 'string' ? image || undefined : image?.src;
}

/** Format an ISO date in the configured locale and archive timezone. */
export function formatDate(value: string, language = 'zh-CN', timezone = 'UTC'): string {
  const date = new Date(value);
  try {
    return new Intl.DateTimeFormat(language, { year: 'numeric', month: 'short', day: 'numeric', timeZone: timezone }).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}

/** Print a two-digit editorial index, preserving larger numbers. */
export function indexLabel(index: number): string { return String(index).padStart(2, '0'); }

const SOCIAL_LABELS: Record<string, string> = {
  github: 'GitHub', gitlab: 'GitLab', email: 'Email', mail: 'Email', twitter: 'X', x: 'X', bilibili: 'Bilibili',
  linkedin: 'LinkedIn', juejin: '掘金', zhihu: '知乎', weibo: '微博', mastodon: 'Mastodon', youtube: 'YouTube',
  instagram: 'Instagram', telegram: 'Telegram', rss: 'RSS',
};

/** Display name for a social platform identifier; unknown identifiers pass through unchanged. */
export function socialLabel(platform: string): string { return SOCIAL_LABELS[platform.toLowerCase()] ?? platform; }

/**
 * Estimated width of the uppercase masthead in em, measured against Impact with a small margin
 * so fallback faces still fit. CSS divides the available row width by it to size the type.
 */
export function mastheadUnits(text: string): number {
  let units = 0;
  for (const char of text.toUpperCase()) {
    if (/[\u2e80-\u9fff\uac00-\ud7af\uf900-\ufaff\uff00-\uffef]/.test(char)) units += 1;
    else if (/[MW@%]/.test(char)) units += 0.76;
    else if (/[IJ1\s.,:;'!|\-]/.test(char)) units += 0.3;
    else units += 0.52;
  }
  return Math.max(units, 1);
}

/**
 * Compare Core navigation URLs across trailing-slash modes without changing their targets.
 * @param url Core-provided navigation or page URL.
 * @param siteUrl Absolute site URL used to resolve same-site links.
 * @returns Origin and normalized route, retaining query and fragment distinctions.
 */
export function navigationKey(url: string, siteUrl: string): string {
  const parsed = new URL(url, siteUrl);
  return parsed.origin + parsed.pathname.replace(/\/+$/u, '') + parsed.search + parsed.hash;
}
