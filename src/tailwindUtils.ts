import classnames from "classnames";
import ClassName from "./tailwindClasses.d";

// Wrapper for 'classnames' module with strict typing
// Multiple type parameters are so that TS is able to inference each parameter individually
export function cn<S1, S2, S3, S4, S5, S6, S7, S8, S9, S10>(
 c1?: TailwindClassParameterValue<S1>,
 c2?: TailwindClassParameterValue<S2>,
 c3?: TailwindClassParameterValue<S3>,
 c4?: TailwindClassParameterValue<S4>,
 c5?: TailwindClassParameterValue<S5>,
 c6?: TailwindClassParameterValue<S6>,
 c7?: TailwindClassParameterValue<S7>,
 c8?: TailwindClassParameterValue<S8>,
 c9?: TailwindClassParameterValue<S9>,
 c10?: TailwindClassParameterValue<S10>

 // If more than 5 class parameters are required, simply add new ones
): string {
 return classnames(c1, c2, c3, c4, c5, c6, c7, c8, c9, c10);
}

type InstantiationDepthReducingWhitespace = "   " | "  " | " " | "\n";

type TrimStart<T extends string> =
 T extends `${InstantiationDepthReducingWhitespace}${infer Tail}`
  ? TrimStart<Tail>
  : T;

type TrimEnd<T extends string> =
 T extends `${infer Prefix}${InstantiationDepthReducingWhitespace}`
  ? TrimEnd<Prefix>
  : T;

type Trim<T extends string> = TrimEnd<TrimStart<T>>;

type Err<Message extends string> = `Error: ${Message}`;

type SplitToTailwindClassNames<T extends string> =
 SplitToTailwindClassNamesInner<Trim<T>>;

type SplitToTailwindClassNamesInner<T extends string> =
 T extends `${ClassName}${infer Tail}`
  ? T extends `${infer C}${Tail}`
    ? [C, ...SplitToTailwindClassNames<Trim<Tail>>]
    : Err<"Should not happen">
  : // Added error handling
  // Handles cases where `T` does not match
  // ${ClassName}${Tail}. For example
  // 'block', '', '\n\n', 'invalid', or 'invalid  block'
  //
  // Note: `Tail` has already been trimmed from whitespace
  T extends `${infer Tail}`
  ? Tail extends ClassName
    ? // `Tail` equals a valid Tailwind class.
      // End recursion succesfully.
      [Tail]
    : Trim<Tail> extends ""
    ? // `Tail` has only whitespace left.
      // End recursion succesfully.
      []
    : // Something else was found.
      // Raise an error
      [Err<`'${Tail}' is not a valid Tailwind class`>]
  : // Should never happen as `T` is a string.
    [Err<"Should not happen">];

// Gets the first string of an array that starts with 'Error: '
// Must be used only when `T` actually includes an error item
type GetFirstError<T extends unknown[]> = T extends [infer Head, ...infer Tail]
 ? Head extends `Error: `
   ? // Match found, return
     Head
   : // Continue searching for an error string
     GetFirstError<Tail>
 : never;

type IsValidTailwindClassString<T extends string> = string extends T
 ? Err<"Unexpected generic string">
 : // Make sure each item is a valid `ClassName`
 SplitToTailwindClassNames<T> extends ClassName[]
 ? // If yes, success and return `T`
   T
 : // If no, raise an error
   GetFirstError<SplitToTailwindClassNames<T>>;

// The object format for 'classnames' module
type ClassNamesObject = { [key: string]: boolean };

// See https://stackoverflow.com/questions/65737948/how-to-type-check-if-object-keys-conform-a-conditional-recursive-template-type
export type TailwindClassNamesObject<T extends ClassNamesObject> = {
 // `& string` explained at https://github.com/microsoft/TypeScript/pull/40336#issuecomment-717319022
 [K in keyof T & string]: K extends IsValidTailwindClassString<K>
  ? T[K]
  : // If invalid class found, return the error
    IsValidTailwindClassString<K>;
};

// This version is done using a complicated recursion.
// I later realized there's a much more simpler version
// using mapped types.

// Validates `InputItems` which is an array of Tailwind class strings
// The utility uses recursion to iterate through each item in the array,
// and appends validated class strings into `Validated` type paremeter
// Note: don't pass the second type parameter, as it is for internal tracking
//       during the recursive loop
export type TailwindClassNamesArrayRecursiveVersion<
 InputItems extends unknown[],
 Validated extends unknown[] = []
> =
 // Have we consumed the whole input array?
 InputItems extends []
  ? // Yes, we are at the end of array and all items were valid
    Validated
  : // No, use inference to get the head and tail
  InputItems extends [infer Head, ...infer Tail]
  ? // Make sure the unknown is a string
    // For some reason using string[] types directly in type parameters does not work
    Head extends string
    ? // Is the first item valid?
      Head extends IsValidTailwindClassString<Head>
      ? // Yes, continue to next item
        TailwindClassNamesArrayRecursiveVersion<Tail, [...Validated, Head]>
      : // No, return the error
        IsValidTailwindClassString<Head>
    : // If for some case `InputItems` array contains something else than
      // string types
      never
  : never;

type TailwindClassNamesArray<T> = {
 [K in keyof T]: K extends IsValidTailwindClassString<T[K] & string>
  ? T[K]
  : // If invalid class found, return the error
    IsValidTailwindClassString<T[K] & string>;
};

// Parameter can be a string, array or object format
export type TailwindClassParameterValue<S> = S extends string
 ? IsValidTailwindClassString<S>
 : S extends []
 ? TailwindClassNamesArray<S>
 : S extends ClassNamesObject
 ? TailwindClassNamesObject<S>
 : // Format not supported
   never;
