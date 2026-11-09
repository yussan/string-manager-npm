export function toCamelCase(str: string): string
export function objToQuery(obj: Record<string, string | number | boolean>): string
export function queryToObj(str: string): Record<string, string | undefined>
export function stripTags(str?: string): string
export function nl2br(str?: string): string
export function htmlExcerpt(html?: string, limit?: number): string
export function toSingleSpace(str: string): string
export function truncate(str: string, limit?: number, suffix?: string): string
export function toSlug(str: string): string
export function currencyFormat(
  number: number,
  symbol?: string,
  delimiter?: string
): string
export function toMask(str: string, start?: number, end?: number): string
export function scaleNumber(number: number): string | number
