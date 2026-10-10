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
