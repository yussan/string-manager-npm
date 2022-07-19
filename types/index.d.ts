// export as namespace stringManager;

// interface HisakoPayloadI {
//   baseUrl: string;
//   initialIV: string;
//   initialSecret: string;
//   storageIV?: string;
//   storageSecret?: string;
//   storageName?: string;
// }
// interface AuthPayloadI {
//   token: string;
//   iv: string;
//   secret: string;
// }

// interface HisakoServices {
//   toCamelCase: (str: string) => string;
//   objToQuery: (obj: Object) => string;
//   queryToObj: (str: string) => Object;
//   stripTags: (str: string) => string;
//   nl2br: (str: string) => string;
//   toSingleSpace: (str: string) => string;
//   truncate: (str: string, limit: number, suffix: string) => string;
//   toSlug: (str: string) => string;
//   currencyFormat: (number: number, symbol: string, delimiter: string) => string;
//   toMask: (str: string, start: number, end: number) => string;
//   scaleNumber: (number: number) => number;
// }

// export default function hisakoFunc(payload:HisakoPayloadI): HisakoServices

declare module 'string-manager' {
  interface StringManagerI {
    toCamelCase: (str: string) => string;
    objToQuery: (obj: Object) => string;
    queryToObj: (str: string) => Object;
    stripTags: (str: string) => string;
    nl2br: (str: string) => string;
    toSingleSpace: (str: string) => string;
    truncate: (str: string, limit: number, suffix: string) => string;
    toSlug: (str: string) => string;
    currencyFormat: (number: number, symbol: string, delimiter: string) => string;
    toMask: (str: string, start: number, end: number) => string;
    scaleNumber: (number: number) => number;
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
    scaleNumber
  }
  export default stringManager;
}