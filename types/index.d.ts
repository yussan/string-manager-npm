declare module 'string-manager' {
  export const toCamelCase: (str: string) => string
  export const objToQuery: (obj: Object) => string
  export const queryToObj: (str: string) => Object
  export const stripTags: (str: string) => string
  export const nl2br: (str: string) => string
  export const toSingleSpace: (str: string) => string
  export const truncate: (str: string, limit: number, suffix: string) => string
  export const toSlug: (str: string) => string
  export const currencyFormat: (
    number: number,
    symbol: string,
    delimiter: string
  ) => string
  export const toMask: (str: string, start: number, end: number) => string
  export const scaleNumber: (number: number) => number
  interface StringManagerI {
    toCamelCase: (str: string) => string
    objToQuery: (obj: Object) => string
    queryToObj: (str: string) => Object
    stripTags: (str: string) => string
    nl2br: (str: string) => string
    toSingleSpace: (str: string) => string
    truncate: (str: string, limit: number, suffix: string) => string
    toSlug: (str: string) => string
    currencyFormat: (
      number: number,
      symbol: string,
      delimiter: string
    ) => string
    toMask: (str: string, start: number, end: number) => string
    scaleNumber: (number: number) => number
  }
  const stringManager: StringManagerI = {
    toCamelCase,
    objToQuery,
    queryToObj,
    stripTags,
    nl2br,
    toSingleSpace,
    truncate,
    toSlug,
    currencyFormat,
    toMask,
    scaleNumber,
  }

  export default stringManager
}
