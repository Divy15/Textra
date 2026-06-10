
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model BusinessUuid
 * 
 */
export type BusinessUuid = $Result.DefaultSelection<Prisma.$BusinessUuidPayload>
/**
 * Model BusinessOwner
 * 
 */
export type BusinessOwner = $Result.DefaultSelection<Prisma.$BusinessOwnerPayload>
/**
 * Model BusinessPhoto
 * 
 */
export type BusinessPhoto = $Result.DefaultSelection<Prisma.$BusinessPhotoPayload>
/**
 * Model BusinessOwnerDocument
 * 
 */
export type BusinessOwnerDocument = $Result.DefaultSelection<Prisma.$BusinessOwnerDocumentPayload>
/**
 * Model BusinessShopDocument
 * 
 */
export type BusinessShopDocument = $Result.DefaultSelection<Prisma.$BusinessShopDocumentPayload>
/**
 * Model ErrorLog
 * 
 */
export type ErrorLog = $Result.DefaultSelection<Prisma.$ErrorLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more BusinessUuids
 * const businessUuids = await prisma.businessUuid.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more BusinessUuids
   * const businessUuids = await prisma.businessUuid.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.businessUuid`: Exposes CRUD operations for the **BusinessUuid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessUuids
    * const businessUuids = await prisma.businessUuid.findMany()
    * ```
    */
  get businessUuid(): Prisma.BusinessUuidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessOwner`: Exposes CRUD operations for the **BusinessOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessOwners
    * const businessOwners = await prisma.businessOwner.findMany()
    * ```
    */
  get businessOwner(): Prisma.BusinessOwnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessPhoto`: Exposes CRUD operations for the **BusinessPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessPhotos
    * const businessPhotos = await prisma.businessPhoto.findMany()
    * ```
    */
  get businessPhoto(): Prisma.BusinessPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessOwnerDocument`: Exposes CRUD operations for the **BusinessOwnerDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessOwnerDocuments
    * const businessOwnerDocuments = await prisma.businessOwnerDocument.findMany()
    * ```
    */
  get businessOwnerDocument(): Prisma.BusinessOwnerDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.businessShopDocument`: Exposes CRUD operations for the **BusinessShopDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessShopDocuments
    * const businessShopDocuments = await prisma.businessShopDocument.findMany()
    * ```
    */
  get businessShopDocument(): Prisma.BusinessShopDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.errorLog`: Exposes CRUD operations for the **ErrorLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ErrorLogs
    * const errorLogs = await prisma.errorLog.findMany()
    * ```
    */
  get errorLog(): Prisma.ErrorLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    BusinessUuid: 'BusinessUuid',
    BusinessOwner: 'BusinessOwner',
    BusinessPhoto: 'BusinessPhoto',
    BusinessOwnerDocument: 'BusinessOwnerDocument',
    BusinessShopDocument: 'BusinessShopDocument',
    ErrorLog: 'ErrorLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "businessUuid" | "businessOwner" | "businessPhoto" | "businessOwnerDocument" | "businessShopDocument" | "errorLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      BusinessUuid: {
        payload: Prisma.$BusinessUuidPayload<ExtArgs>
        fields: Prisma.BusinessUuidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessUuidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessUuidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload>
          }
          findFirst: {
            args: Prisma.BusinessUuidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessUuidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload>
          }
          findMany: {
            args: Prisma.BusinessUuidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload>[]
          }
          create: {
            args: Prisma.BusinessUuidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload>
          }
          createMany: {
            args: Prisma.BusinessUuidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessUuidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload>[]
          }
          delete: {
            args: Prisma.BusinessUuidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload>
          }
          update: {
            args: Prisma.BusinessUuidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload>
          }
          deleteMany: {
            args: Prisma.BusinessUuidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUuidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUuidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUuidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessUuidPayload>
          }
          aggregate: {
            args: Prisma.BusinessUuidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessUuid>
          }
          groupBy: {
            args: Prisma.BusinessUuidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessUuidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessUuidCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessUuidCountAggregateOutputType> | number
          }
        }
      }
      BusinessOwner: {
        payload: Prisma.$BusinessOwnerPayload<ExtArgs>
        fields: Prisma.BusinessOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessOwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessOwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload>
          }
          findFirst: {
            args: Prisma.BusinessOwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessOwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload>
          }
          findMany: {
            args: Prisma.BusinessOwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload>[]
          }
          create: {
            args: Prisma.BusinessOwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload>
          }
          createMany: {
            args: Prisma.BusinessOwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessOwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload>[]
          }
          delete: {
            args: Prisma.BusinessOwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload>
          }
          update: {
            args: Prisma.BusinessOwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload>
          }
          deleteMany: {
            args: Prisma.BusinessOwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessOwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessOwnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload>[]
          }
          upsert: {
            args: Prisma.BusinessOwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerPayload>
          }
          aggregate: {
            args: Prisma.BusinessOwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessOwner>
          }
          groupBy: {
            args: Prisma.BusinessOwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessOwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessOwnerCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessOwnerCountAggregateOutputType> | number
          }
        }
      }
      BusinessPhoto: {
        payload: Prisma.$BusinessPhotoPayload<ExtArgs>
        fields: Prisma.BusinessPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload>
          }
          findFirst: {
            args: Prisma.BusinessPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload>
          }
          findMany: {
            args: Prisma.BusinessPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload>[]
          }
          create: {
            args: Prisma.BusinessPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload>
          }
          createMany: {
            args: Prisma.BusinessPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload>[]
          }
          delete: {
            args: Prisma.BusinessPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload>
          }
          update: {
            args: Prisma.BusinessPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload>
          }
          deleteMany: {
            args: Prisma.BusinessPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload>[]
          }
          upsert: {
            args: Prisma.BusinessPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPhotoPayload>
          }
          aggregate: {
            args: Prisma.BusinessPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessPhoto>
          }
          groupBy: {
            args: Prisma.BusinessPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessPhotoCountAggregateOutputType> | number
          }
        }
      }
      BusinessOwnerDocument: {
        payload: Prisma.$BusinessOwnerDocumentPayload<ExtArgs>
        fields: Prisma.BusinessOwnerDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessOwnerDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessOwnerDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload>
          }
          findFirst: {
            args: Prisma.BusinessOwnerDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessOwnerDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload>
          }
          findMany: {
            args: Prisma.BusinessOwnerDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload>[]
          }
          create: {
            args: Prisma.BusinessOwnerDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload>
          }
          createMany: {
            args: Prisma.BusinessOwnerDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessOwnerDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload>[]
          }
          delete: {
            args: Prisma.BusinessOwnerDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload>
          }
          update: {
            args: Prisma.BusinessOwnerDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload>
          }
          deleteMany: {
            args: Prisma.BusinessOwnerDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessOwnerDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessOwnerDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload>[]
          }
          upsert: {
            args: Prisma.BusinessOwnerDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessOwnerDocumentPayload>
          }
          aggregate: {
            args: Prisma.BusinessOwnerDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessOwnerDocument>
          }
          groupBy: {
            args: Prisma.BusinessOwnerDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessOwnerDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessOwnerDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessOwnerDocumentCountAggregateOutputType> | number
          }
        }
      }
      BusinessShopDocument: {
        payload: Prisma.$BusinessShopDocumentPayload<ExtArgs>
        fields: Prisma.BusinessShopDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessShopDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessShopDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload>
          }
          findFirst: {
            args: Prisma.BusinessShopDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessShopDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload>
          }
          findMany: {
            args: Prisma.BusinessShopDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload>[]
          }
          create: {
            args: Prisma.BusinessShopDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload>
          }
          createMany: {
            args: Prisma.BusinessShopDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessShopDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload>[]
          }
          delete: {
            args: Prisma.BusinessShopDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload>
          }
          update: {
            args: Prisma.BusinessShopDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload>
          }
          deleteMany: {
            args: Prisma.BusinessShopDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessShopDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessShopDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload>[]
          }
          upsert: {
            args: Prisma.BusinessShopDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessShopDocumentPayload>
          }
          aggregate: {
            args: Prisma.BusinessShopDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusinessShopDocument>
          }
          groupBy: {
            args: Prisma.BusinessShopDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessShopDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessShopDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessShopDocumentCountAggregateOutputType> | number
          }
        }
      }
      ErrorLog: {
        payload: Prisma.$ErrorLogPayload<ExtArgs>
        fields: Prisma.ErrorLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErrorLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErrorLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findFirst: {
            args: Prisma.ErrorLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErrorLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findMany: {
            args: Prisma.ErrorLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          create: {
            args: Prisma.ErrorLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          createMany: {
            args: Prisma.ErrorLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ErrorLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          delete: {
            args: Prisma.ErrorLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          update: {
            args: Prisma.ErrorLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          deleteMany: {
            args: Prisma.ErrorLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ErrorLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ErrorLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          upsert: {
            args: Prisma.ErrorLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          aggregate: {
            args: Prisma.ErrorLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateErrorLog>
          }
          groupBy: {
            args: Prisma.ErrorLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErrorLogCountArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    businessUuid?: BusinessUuidOmit
    businessOwner?: BusinessOwnerOmit
    businessPhoto?: BusinessPhotoOmit
    businessOwnerDocument?: BusinessOwnerDocumentOmit
    businessShopDocument?: BusinessShopDocumentOmit
    errorLog?: ErrorLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BusinessUuidCountOutputType
   */

  export type BusinessUuidCountOutputType = {
    owners: number
    photos: number
  }

  export type BusinessUuidCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | BusinessUuidCountOutputTypeCountOwnersArgs
    photos?: boolean | BusinessUuidCountOutputTypeCountPhotosArgs
  }

  // Custom InputTypes
  /**
   * BusinessUuidCountOutputType without action
   */
  export type BusinessUuidCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuidCountOutputType
     */
    select?: BusinessUuidCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessUuidCountOutputType without action
   */
  export type BusinessUuidCountOutputTypeCountOwnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessOwnerWhereInput
  }

  /**
   * BusinessUuidCountOutputType without action
   */
  export type BusinessUuidCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessPhotoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model BusinessUuid
   */

  export type AggregateBusinessUuid = {
    _count: BusinessUuidCountAggregateOutputType | null
    _avg: BusinessUuidAvgAggregateOutputType | null
    _sum: BusinessUuidSumAggregateOutputType | null
    _min: BusinessUuidMinAggregateOutputType | null
    _max: BusinessUuidMaxAggregateOutputType | null
  }

  export type BusinessUuidAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessUuidSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessUuidMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    business_type: string | null
    is_form_completed: boolean | null
    is_verified: boolean | null
    created_at: Date | null
  }

  export type BusinessUuidMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    business_type: string | null
    is_form_completed: boolean | null
    is_verified: boolean | null
    created_at: Date | null
  }

  export type BusinessUuidCountAggregateOutputType = {
    id: number
    uuid: number
    business_type: number
    is_form_completed: number
    is_verified: number
    created_at: number
    _all: number
  }


  export type BusinessUuidAvgAggregateInputType = {
    id?: true
  }

  export type BusinessUuidSumAggregateInputType = {
    id?: true
  }

  export type BusinessUuidMinAggregateInputType = {
    id?: true
    uuid?: true
    business_type?: true
    is_form_completed?: true
    is_verified?: true
    created_at?: true
  }

  export type BusinessUuidMaxAggregateInputType = {
    id?: true
    uuid?: true
    business_type?: true
    is_form_completed?: true
    is_verified?: true
    created_at?: true
  }

  export type BusinessUuidCountAggregateInputType = {
    id?: true
    uuid?: true
    business_type?: true
    is_form_completed?: true
    is_verified?: true
    created_at?: true
    _all?: true
  }

  export type BusinessUuidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessUuid to aggregate.
     */
    where?: BusinessUuidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUuids to fetch.
     */
    orderBy?: BusinessUuidOrderByWithRelationInput | BusinessUuidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessUuidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUuids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUuids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessUuids
    **/
    _count?: true | BusinessUuidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessUuidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessUuidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessUuidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessUuidMaxAggregateInputType
  }

  export type GetBusinessUuidAggregateType<T extends BusinessUuidAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessUuid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessUuid[P]>
      : GetScalarType<T[P], AggregateBusinessUuid[P]>
  }




  export type BusinessUuidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessUuidWhereInput
    orderBy?: BusinessUuidOrderByWithAggregationInput | BusinessUuidOrderByWithAggregationInput[]
    by: BusinessUuidScalarFieldEnum[] | BusinessUuidScalarFieldEnum
    having?: BusinessUuidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessUuidCountAggregateInputType | true
    _avg?: BusinessUuidAvgAggregateInputType
    _sum?: BusinessUuidSumAggregateInputType
    _min?: BusinessUuidMinAggregateInputType
    _max?: BusinessUuidMaxAggregateInputType
  }

  export type BusinessUuidGroupByOutputType = {
    id: number
    uuid: string
    business_type: string
    is_form_completed: boolean
    is_verified: boolean
    created_at: Date
    _count: BusinessUuidCountAggregateOutputType | null
    _avg: BusinessUuidAvgAggregateOutputType | null
    _sum: BusinessUuidSumAggregateOutputType | null
    _min: BusinessUuidMinAggregateOutputType | null
    _max: BusinessUuidMaxAggregateOutputType | null
  }

  type GetBusinessUuidGroupByPayload<T extends BusinessUuidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessUuidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessUuidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessUuidGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessUuidGroupByOutputType[P]>
        }
      >
    >


  export type BusinessUuidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    business_type?: boolean
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: boolean
    owners?: boolean | BusinessUuid$ownersArgs<ExtArgs>
    photos?: boolean | BusinessUuid$photosArgs<ExtArgs>
    owner_documents?: boolean | BusinessUuid$owner_documentsArgs<ExtArgs>
    shop_documents?: boolean | BusinessUuid$shop_documentsArgs<ExtArgs>
    _count?: boolean | BusinessUuidCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessUuid"]>

  export type BusinessUuidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    business_type?: boolean
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["businessUuid"]>

  export type BusinessUuidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    business_type?: boolean
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["businessUuid"]>

  export type BusinessUuidSelectScalar = {
    id?: boolean
    uuid?: boolean
    business_type?: boolean
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: boolean
  }

  export type BusinessUuidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "business_type" | "is_form_completed" | "is_verified" | "created_at", ExtArgs["result"]["businessUuid"]>
  export type BusinessUuidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owners?: boolean | BusinessUuid$ownersArgs<ExtArgs>
    photos?: boolean | BusinessUuid$photosArgs<ExtArgs>
    owner_documents?: boolean | BusinessUuid$owner_documentsArgs<ExtArgs>
    shop_documents?: boolean | BusinessUuid$shop_documentsArgs<ExtArgs>
    _count?: boolean | BusinessUuidCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessUuidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessUuidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessUuidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessUuid"
    objects: {
      owners: Prisma.$BusinessOwnerPayload<ExtArgs>[]
      photos: Prisma.$BusinessPhotoPayload<ExtArgs>[]
      owner_documents: Prisma.$BusinessOwnerDocumentPayload<ExtArgs> | null
      shop_documents: Prisma.$BusinessShopDocumentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      business_type: string
      is_form_completed: boolean
      is_verified: boolean
      created_at: Date
    }, ExtArgs["result"]["businessUuid"]>
    composites: {}
  }

  type BusinessUuidGetPayload<S extends boolean | null | undefined | BusinessUuidDefaultArgs> = $Result.GetResult<Prisma.$BusinessUuidPayload, S>

  type BusinessUuidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessUuidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessUuidCountAggregateInputType | true
    }

  export interface BusinessUuidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessUuid'], meta: { name: 'BusinessUuid' } }
    /**
     * Find zero or one BusinessUuid that matches the filter.
     * @param {BusinessUuidFindUniqueArgs} args - Arguments to find a BusinessUuid
     * @example
     * // Get one BusinessUuid
     * const businessUuid = await prisma.businessUuid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessUuidFindUniqueArgs>(args: SelectSubset<T, BusinessUuidFindUniqueArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessUuid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessUuidFindUniqueOrThrowArgs} args - Arguments to find a BusinessUuid
     * @example
     * // Get one BusinessUuid
     * const businessUuid = await prisma.businessUuid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessUuidFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessUuidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessUuid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUuidFindFirstArgs} args - Arguments to find a BusinessUuid
     * @example
     * // Get one BusinessUuid
     * const businessUuid = await prisma.businessUuid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessUuidFindFirstArgs>(args?: SelectSubset<T, BusinessUuidFindFirstArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessUuid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUuidFindFirstOrThrowArgs} args - Arguments to find a BusinessUuid
     * @example
     * // Get one BusinessUuid
     * const businessUuid = await prisma.businessUuid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessUuidFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessUuidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessUuids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUuidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessUuids
     * const businessUuids = await prisma.businessUuid.findMany()
     * 
     * // Get first 10 BusinessUuids
     * const businessUuids = await prisma.businessUuid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessUuidWithIdOnly = await prisma.businessUuid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessUuidFindManyArgs>(args?: SelectSubset<T, BusinessUuidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessUuid.
     * @param {BusinessUuidCreateArgs} args - Arguments to create a BusinessUuid.
     * @example
     * // Create one BusinessUuid
     * const BusinessUuid = await prisma.businessUuid.create({
     *   data: {
     *     // ... data to create a BusinessUuid
     *   }
     * })
     * 
     */
    create<T extends BusinessUuidCreateArgs>(args: SelectSubset<T, BusinessUuidCreateArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessUuids.
     * @param {BusinessUuidCreateManyArgs} args - Arguments to create many BusinessUuids.
     * @example
     * // Create many BusinessUuids
     * const businessUuid = await prisma.businessUuid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessUuidCreateManyArgs>(args?: SelectSubset<T, BusinessUuidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessUuids and returns the data saved in the database.
     * @param {BusinessUuidCreateManyAndReturnArgs} args - Arguments to create many BusinessUuids.
     * @example
     * // Create many BusinessUuids
     * const businessUuid = await prisma.businessUuid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessUuids and only return the `id`
     * const businessUuidWithIdOnly = await prisma.businessUuid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessUuidCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessUuidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessUuid.
     * @param {BusinessUuidDeleteArgs} args - Arguments to delete one BusinessUuid.
     * @example
     * // Delete one BusinessUuid
     * const BusinessUuid = await prisma.businessUuid.delete({
     *   where: {
     *     // ... filter to delete one BusinessUuid
     *   }
     * })
     * 
     */
    delete<T extends BusinessUuidDeleteArgs>(args: SelectSubset<T, BusinessUuidDeleteArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessUuid.
     * @param {BusinessUuidUpdateArgs} args - Arguments to update one BusinessUuid.
     * @example
     * // Update one BusinessUuid
     * const businessUuid = await prisma.businessUuid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUuidUpdateArgs>(args: SelectSubset<T, BusinessUuidUpdateArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessUuids.
     * @param {BusinessUuidDeleteManyArgs} args - Arguments to filter BusinessUuids to delete.
     * @example
     * // Delete a few BusinessUuids
     * const { count } = await prisma.businessUuid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessUuidDeleteManyArgs>(args?: SelectSubset<T, BusinessUuidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessUuids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUuidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessUuids
     * const businessUuid = await prisma.businessUuid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUuidUpdateManyArgs>(args: SelectSubset<T, BusinessUuidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessUuids and returns the data updated in the database.
     * @param {BusinessUuidUpdateManyAndReturnArgs} args - Arguments to update many BusinessUuids.
     * @example
     * // Update many BusinessUuids
     * const businessUuid = await prisma.businessUuid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessUuids and only return the `id`
     * const businessUuidWithIdOnly = await prisma.businessUuid.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessUuidUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUuidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessUuid.
     * @param {BusinessUuidUpsertArgs} args - Arguments to update or create a BusinessUuid.
     * @example
     * // Update or create a BusinessUuid
     * const businessUuid = await prisma.businessUuid.upsert({
     *   create: {
     *     // ... data to create a BusinessUuid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessUuid we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUuidUpsertArgs>(args: SelectSubset<T, BusinessUuidUpsertArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessUuids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUuidCountArgs} args - Arguments to filter BusinessUuids to count.
     * @example
     * // Count the number of BusinessUuids
     * const count = await prisma.businessUuid.count({
     *   where: {
     *     // ... the filter for the BusinessUuids we want to count
     *   }
     * })
    **/
    count<T extends BusinessUuidCountArgs>(
      args?: Subset<T, BusinessUuidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessUuidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessUuid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUuidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessUuidAggregateArgs>(args: Subset<T, BusinessUuidAggregateArgs>): Prisma.PrismaPromise<GetBusinessUuidAggregateType<T>>

    /**
     * Group by BusinessUuid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUuidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessUuidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessUuidGroupByArgs['orderBy'] }
        : { orderBy?: BusinessUuidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessUuidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessUuidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessUuid model
   */
  readonly fields: BusinessUuidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessUuid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessUuidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owners<T extends BusinessUuid$ownersArgs<ExtArgs> = {}>(args?: Subset<T, BusinessUuid$ownersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends BusinessUuid$photosArgs<ExtArgs> = {}>(args?: Subset<T, BusinessUuid$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner_documents<T extends BusinessUuid$owner_documentsArgs<ExtArgs> = {}>(args?: Subset<T, BusinessUuid$owner_documentsArgs<ExtArgs>>): Prisma__BusinessOwnerDocumentClient<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shop_documents<T extends BusinessUuid$shop_documentsArgs<ExtArgs> = {}>(args?: Subset<T, BusinessUuid$shop_documentsArgs<ExtArgs>>): Prisma__BusinessShopDocumentClient<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessUuid model
   */
  interface BusinessUuidFieldRefs {
    readonly id: FieldRef<"BusinessUuid", 'Int'>
    readonly uuid: FieldRef<"BusinessUuid", 'String'>
    readonly business_type: FieldRef<"BusinessUuid", 'String'>
    readonly is_form_completed: FieldRef<"BusinessUuid", 'Boolean'>
    readonly is_verified: FieldRef<"BusinessUuid", 'Boolean'>
    readonly created_at: FieldRef<"BusinessUuid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessUuid findUnique
   */
  export type BusinessUuidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUuid to fetch.
     */
    where: BusinessUuidWhereUniqueInput
  }

  /**
   * BusinessUuid findUniqueOrThrow
   */
  export type BusinessUuidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUuid to fetch.
     */
    where: BusinessUuidWhereUniqueInput
  }

  /**
   * BusinessUuid findFirst
   */
  export type BusinessUuidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUuid to fetch.
     */
    where?: BusinessUuidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUuids to fetch.
     */
    orderBy?: BusinessUuidOrderByWithRelationInput | BusinessUuidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessUuids.
     */
    cursor?: BusinessUuidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUuids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUuids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessUuids.
     */
    distinct?: BusinessUuidScalarFieldEnum | BusinessUuidScalarFieldEnum[]
  }

  /**
   * BusinessUuid findFirstOrThrow
   */
  export type BusinessUuidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUuid to fetch.
     */
    where?: BusinessUuidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUuids to fetch.
     */
    orderBy?: BusinessUuidOrderByWithRelationInput | BusinessUuidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessUuids.
     */
    cursor?: BusinessUuidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUuids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUuids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessUuids.
     */
    distinct?: BusinessUuidScalarFieldEnum | BusinessUuidScalarFieldEnum[]
  }

  /**
   * BusinessUuid findMany
   */
  export type BusinessUuidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
    /**
     * Filter, which BusinessUuids to fetch.
     */
    where?: BusinessUuidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessUuids to fetch.
     */
    orderBy?: BusinessUuidOrderByWithRelationInput | BusinessUuidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessUuids.
     */
    cursor?: BusinessUuidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessUuids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessUuids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessUuids.
     */
    distinct?: BusinessUuidScalarFieldEnum | BusinessUuidScalarFieldEnum[]
  }

  /**
   * BusinessUuid create
   */
  export type BusinessUuidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessUuid.
     */
    data: XOR<BusinessUuidCreateInput, BusinessUuidUncheckedCreateInput>
  }

  /**
   * BusinessUuid createMany
   */
  export type BusinessUuidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessUuids.
     */
    data: BusinessUuidCreateManyInput | BusinessUuidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessUuid createManyAndReturn
   */
  export type BusinessUuidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessUuids.
     */
    data: BusinessUuidCreateManyInput | BusinessUuidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessUuid update
   */
  export type BusinessUuidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessUuid.
     */
    data: XOR<BusinessUuidUpdateInput, BusinessUuidUncheckedUpdateInput>
    /**
     * Choose, which BusinessUuid to update.
     */
    where: BusinessUuidWhereUniqueInput
  }

  /**
   * BusinessUuid updateMany
   */
  export type BusinessUuidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessUuids.
     */
    data: XOR<BusinessUuidUpdateManyMutationInput, BusinessUuidUncheckedUpdateManyInput>
    /**
     * Filter which BusinessUuids to update
     */
    where?: BusinessUuidWhereInput
    /**
     * Limit how many BusinessUuids to update.
     */
    limit?: number
  }

  /**
   * BusinessUuid updateManyAndReturn
   */
  export type BusinessUuidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * The data used to update BusinessUuids.
     */
    data: XOR<BusinessUuidUpdateManyMutationInput, BusinessUuidUncheckedUpdateManyInput>
    /**
     * Filter which BusinessUuids to update
     */
    where?: BusinessUuidWhereInput
    /**
     * Limit how many BusinessUuids to update.
     */
    limit?: number
  }

  /**
   * BusinessUuid upsert
   */
  export type BusinessUuidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessUuid to update in case it exists.
     */
    where: BusinessUuidWhereUniqueInput
    /**
     * In case the BusinessUuid found by the `where` argument doesn't exist, create a new BusinessUuid with this data.
     */
    create: XOR<BusinessUuidCreateInput, BusinessUuidUncheckedCreateInput>
    /**
     * In case the BusinessUuid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUuidUpdateInput, BusinessUuidUncheckedUpdateInput>
  }

  /**
   * BusinessUuid delete
   */
  export type BusinessUuidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
    /**
     * Filter which BusinessUuid to delete.
     */
    where: BusinessUuidWhereUniqueInput
  }

  /**
   * BusinessUuid deleteMany
   */
  export type BusinessUuidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessUuids to delete
     */
    where?: BusinessUuidWhereInput
    /**
     * Limit how many BusinessUuids to delete.
     */
    limit?: number
  }

  /**
   * BusinessUuid.owners
   */
  export type BusinessUuid$ownersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    where?: BusinessOwnerWhereInput
    orderBy?: BusinessOwnerOrderByWithRelationInput | BusinessOwnerOrderByWithRelationInput[]
    cursor?: BusinessOwnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessOwnerScalarFieldEnum | BusinessOwnerScalarFieldEnum[]
  }

  /**
   * BusinessUuid.photos
   */
  export type BusinessUuid$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    where?: BusinessPhotoWhereInput
    orderBy?: BusinessPhotoOrderByWithRelationInput | BusinessPhotoOrderByWithRelationInput[]
    cursor?: BusinessPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusinessPhotoScalarFieldEnum | BusinessPhotoScalarFieldEnum[]
  }

  /**
   * BusinessUuid.owner_documents
   */
  export type BusinessUuid$owner_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    where?: BusinessOwnerDocumentWhereInput
  }

  /**
   * BusinessUuid.shop_documents
   */
  export type BusinessUuid$shop_documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    where?: BusinessShopDocumentWhereInput
  }

  /**
   * BusinessUuid without action
   */
  export type BusinessUuidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessUuid
     */
    select?: BusinessUuidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessUuid
     */
    omit?: BusinessUuidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessUuidInclude<ExtArgs> | null
  }


  /**
   * Model BusinessOwner
   */

  export type AggregateBusinessOwner = {
    _count: BusinessOwnerCountAggregateOutputType | null
    _avg: BusinessOwnerAvgAggregateOutputType | null
    _sum: BusinessOwnerSumAggregateOutputType | null
    _min: BusinessOwnerMinAggregateOutputType | null
    _max: BusinessOwnerMaxAggregateOutputType | null
  }

  export type BusinessOwnerAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessOwnerSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessOwnerMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    email: string | null
    mobile: string | null
  }

  export type BusinessOwnerMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    firstname: string | null
    middlename: string | null
    lastname: string | null
    email: string | null
    mobile: string | null
  }

  export type BusinessOwnerCountAggregateOutputType = {
    id: number
    uuid: number
    firstname: number
    middlename: number
    lastname: number
    email: number
    mobile: number
    _all: number
  }


  export type BusinessOwnerAvgAggregateInputType = {
    id?: true
  }

  export type BusinessOwnerSumAggregateInputType = {
    id?: true
  }

  export type BusinessOwnerMinAggregateInputType = {
    id?: true
    uuid?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    mobile?: true
  }

  export type BusinessOwnerMaxAggregateInputType = {
    id?: true
    uuid?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    mobile?: true
  }

  export type BusinessOwnerCountAggregateInputType = {
    id?: true
    uuid?: true
    firstname?: true
    middlename?: true
    lastname?: true
    email?: true
    mobile?: true
    _all?: true
  }

  export type BusinessOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessOwner to aggregate.
     */
    where?: BusinessOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessOwners to fetch.
     */
    orderBy?: BusinessOwnerOrderByWithRelationInput | BusinessOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessOwners
    **/
    _count?: true | BusinessOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessOwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessOwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessOwnerMaxAggregateInputType
  }

  export type GetBusinessOwnerAggregateType<T extends BusinessOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessOwner[P]>
      : GetScalarType<T[P], AggregateBusinessOwner[P]>
  }




  export type BusinessOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessOwnerWhereInput
    orderBy?: BusinessOwnerOrderByWithAggregationInput | BusinessOwnerOrderByWithAggregationInput[]
    by: BusinessOwnerScalarFieldEnum[] | BusinessOwnerScalarFieldEnum
    having?: BusinessOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessOwnerCountAggregateInputType | true
    _avg?: BusinessOwnerAvgAggregateInputType
    _sum?: BusinessOwnerSumAggregateInputType
    _min?: BusinessOwnerMinAggregateInputType
    _max?: BusinessOwnerMaxAggregateInputType
  }

  export type BusinessOwnerGroupByOutputType = {
    id: number
    uuid: string
    firstname: string
    middlename: string | null
    lastname: string
    email: string
    mobile: string
    _count: BusinessOwnerCountAggregateOutputType | null
    _avg: BusinessOwnerAvgAggregateOutputType | null
    _sum: BusinessOwnerSumAggregateOutputType | null
    _min: BusinessOwnerMinAggregateOutputType | null
    _max: BusinessOwnerMaxAggregateOutputType | null
  }

  type GetBusinessOwnerGroupByPayload<T extends BusinessOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessOwnerGroupByOutputType[P]>
        }
      >
    >


  export type BusinessOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    mobile?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessOwner"]>

  export type BusinessOwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    mobile?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessOwner"]>

  export type BusinessOwnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    mobile?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessOwner"]>

  export type BusinessOwnerSelectScalar = {
    id?: boolean
    uuid?: boolean
    firstname?: boolean
    middlename?: boolean
    lastname?: boolean
    email?: boolean
    mobile?: boolean
  }

  export type BusinessOwnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "firstname" | "middlename" | "lastname" | "email" | "mobile", ExtArgs["result"]["businessOwner"]>
  export type BusinessOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }
  export type BusinessOwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }
  export type BusinessOwnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }

  export type $BusinessOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessOwner"
    objects: {
      business: Prisma.$BusinessUuidPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      firstname: string
      middlename: string | null
      lastname: string
      email: string
      mobile: string
    }, ExtArgs["result"]["businessOwner"]>
    composites: {}
  }

  type BusinessOwnerGetPayload<S extends boolean | null | undefined | BusinessOwnerDefaultArgs> = $Result.GetResult<Prisma.$BusinessOwnerPayload, S>

  type BusinessOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessOwnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessOwnerCountAggregateInputType | true
    }

  export interface BusinessOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessOwner'], meta: { name: 'BusinessOwner' } }
    /**
     * Find zero or one BusinessOwner that matches the filter.
     * @param {BusinessOwnerFindUniqueArgs} args - Arguments to find a BusinessOwner
     * @example
     * // Get one BusinessOwner
     * const businessOwner = await prisma.businessOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessOwnerFindUniqueArgs>(args: SelectSubset<T, BusinessOwnerFindUniqueArgs<ExtArgs>>): Prisma__BusinessOwnerClient<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessOwner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessOwnerFindUniqueOrThrowArgs} args - Arguments to find a BusinessOwner
     * @example
     * // Get one BusinessOwner
     * const businessOwner = await prisma.businessOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessOwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessOwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessOwnerClient<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerFindFirstArgs} args - Arguments to find a BusinessOwner
     * @example
     * // Get one BusinessOwner
     * const businessOwner = await prisma.businessOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessOwnerFindFirstArgs>(args?: SelectSubset<T, BusinessOwnerFindFirstArgs<ExtArgs>>): Prisma__BusinessOwnerClient<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerFindFirstOrThrowArgs} args - Arguments to find a BusinessOwner
     * @example
     * // Get one BusinessOwner
     * const businessOwner = await prisma.businessOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessOwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessOwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessOwnerClient<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessOwners
     * const businessOwners = await prisma.businessOwner.findMany()
     * 
     * // Get first 10 BusinessOwners
     * const businessOwners = await prisma.businessOwner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessOwnerWithIdOnly = await prisma.businessOwner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessOwnerFindManyArgs>(args?: SelectSubset<T, BusinessOwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessOwner.
     * @param {BusinessOwnerCreateArgs} args - Arguments to create a BusinessOwner.
     * @example
     * // Create one BusinessOwner
     * const BusinessOwner = await prisma.businessOwner.create({
     *   data: {
     *     // ... data to create a BusinessOwner
     *   }
     * })
     * 
     */
    create<T extends BusinessOwnerCreateArgs>(args: SelectSubset<T, BusinessOwnerCreateArgs<ExtArgs>>): Prisma__BusinessOwnerClient<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessOwners.
     * @param {BusinessOwnerCreateManyArgs} args - Arguments to create many BusinessOwners.
     * @example
     * // Create many BusinessOwners
     * const businessOwner = await prisma.businessOwner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessOwnerCreateManyArgs>(args?: SelectSubset<T, BusinessOwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessOwners and returns the data saved in the database.
     * @param {BusinessOwnerCreateManyAndReturnArgs} args - Arguments to create many BusinessOwners.
     * @example
     * // Create many BusinessOwners
     * const businessOwner = await prisma.businessOwner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessOwners and only return the `id`
     * const businessOwnerWithIdOnly = await prisma.businessOwner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessOwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessOwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessOwner.
     * @param {BusinessOwnerDeleteArgs} args - Arguments to delete one BusinessOwner.
     * @example
     * // Delete one BusinessOwner
     * const BusinessOwner = await prisma.businessOwner.delete({
     *   where: {
     *     // ... filter to delete one BusinessOwner
     *   }
     * })
     * 
     */
    delete<T extends BusinessOwnerDeleteArgs>(args: SelectSubset<T, BusinessOwnerDeleteArgs<ExtArgs>>): Prisma__BusinessOwnerClient<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessOwner.
     * @param {BusinessOwnerUpdateArgs} args - Arguments to update one BusinessOwner.
     * @example
     * // Update one BusinessOwner
     * const businessOwner = await prisma.businessOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessOwnerUpdateArgs>(args: SelectSubset<T, BusinessOwnerUpdateArgs<ExtArgs>>): Prisma__BusinessOwnerClient<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessOwners.
     * @param {BusinessOwnerDeleteManyArgs} args - Arguments to filter BusinessOwners to delete.
     * @example
     * // Delete a few BusinessOwners
     * const { count } = await prisma.businessOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessOwnerDeleteManyArgs>(args?: SelectSubset<T, BusinessOwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessOwners
     * const businessOwner = await prisma.businessOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessOwnerUpdateManyArgs>(args: SelectSubset<T, BusinessOwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessOwners and returns the data updated in the database.
     * @param {BusinessOwnerUpdateManyAndReturnArgs} args - Arguments to update many BusinessOwners.
     * @example
     * // Update many BusinessOwners
     * const businessOwner = await prisma.businessOwner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessOwners and only return the `id`
     * const businessOwnerWithIdOnly = await prisma.businessOwner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessOwnerUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessOwnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessOwner.
     * @param {BusinessOwnerUpsertArgs} args - Arguments to update or create a BusinessOwner.
     * @example
     * // Update or create a BusinessOwner
     * const businessOwner = await prisma.businessOwner.upsert({
     *   create: {
     *     // ... data to create a BusinessOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessOwner we want to update
     *   }
     * })
     */
    upsert<T extends BusinessOwnerUpsertArgs>(args: SelectSubset<T, BusinessOwnerUpsertArgs<ExtArgs>>): Prisma__BusinessOwnerClient<$Result.GetResult<Prisma.$BusinessOwnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerCountArgs} args - Arguments to filter BusinessOwners to count.
     * @example
     * // Count the number of BusinessOwners
     * const count = await prisma.businessOwner.count({
     *   where: {
     *     // ... the filter for the BusinessOwners we want to count
     *   }
     * })
    **/
    count<T extends BusinessOwnerCountArgs>(
      args?: Subset<T, BusinessOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessOwnerAggregateArgs>(args: Subset<T, BusinessOwnerAggregateArgs>): Prisma.PrismaPromise<GetBusinessOwnerAggregateType<T>>

    /**
     * Group by BusinessOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessOwnerGroupByArgs['orderBy'] }
        : { orderBy?: BusinessOwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessOwner model
   */
  readonly fields: BusinessOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessUuidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessUuidDefaultArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessOwner model
   */
  interface BusinessOwnerFieldRefs {
    readonly id: FieldRef<"BusinessOwner", 'Int'>
    readonly uuid: FieldRef<"BusinessOwner", 'String'>
    readonly firstname: FieldRef<"BusinessOwner", 'String'>
    readonly middlename: FieldRef<"BusinessOwner", 'String'>
    readonly lastname: FieldRef<"BusinessOwner", 'String'>
    readonly email: FieldRef<"BusinessOwner", 'String'>
    readonly mobile: FieldRef<"BusinessOwner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessOwner findUnique
   */
  export type BusinessOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwner to fetch.
     */
    where: BusinessOwnerWhereUniqueInput
  }

  /**
   * BusinessOwner findUniqueOrThrow
   */
  export type BusinessOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwner to fetch.
     */
    where: BusinessOwnerWhereUniqueInput
  }

  /**
   * BusinessOwner findFirst
   */
  export type BusinessOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwner to fetch.
     */
    where?: BusinessOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessOwners to fetch.
     */
    orderBy?: BusinessOwnerOrderByWithRelationInput | BusinessOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessOwners.
     */
    cursor?: BusinessOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessOwners.
     */
    distinct?: BusinessOwnerScalarFieldEnum | BusinessOwnerScalarFieldEnum[]
  }

  /**
   * BusinessOwner findFirstOrThrow
   */
  export type BusinessOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwner to fetch.
     */
    where?: BusinessOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessOwners to fetch.
     */
    orderBy?: BusinessOwnerOrderByWithRelationInput | BusinessOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessOwners.
     */
    cursor?: BusinessOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessOwners.
     */
    distinct?: BusinessOwnerScalarFieldEnum | BusinessOwnerScalarFieldEnum[]
  }

  /**
   * BusinessOwner findMany
   */
  export type BusinessOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwners to fetch.
     */
    where?: BusinessOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessOwners to fetch.
     */
    orderBy?: BusinessOwnerOrderByWithRelationInput | BusinessOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessOwners.
     */
    cursor?: BusinessOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessOwners.
     */
    distinct?: BusinessOwnerScalarFieldEnum | BusinessOwnerScalarFieldEnum[]
  }

  /**
   * BusinessOwner create
   */
  export type BusinessOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessOwner.
     */
    data: XOR<BusinessOwnerCreateInput, BusinessOwnerUncheckedCreateInput>
  }

  /**
   * BusinessOwner createMany
   */
  export type BusinessOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessOwners.
     */
    data: BusinessOwnerCreateManyInput | BusinessOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessOwner createManyAndReturn
   */
  export type BusinessOwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessOwners.
     */
    data: BusinessOwnerCreateManyInput | BusinessOwnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessOwner update
   */
  export type BusinessOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessOwner.
     */
    data: XOR<BusinessOwnerUpdateInput, BusinessOwnerUncheckedUpdateInput>
    /**
     * Choose, which BusinessOwner to update.
     */
    where: BusinessOwnerWhereUniqueInput
  }

  /**
   * BusinessOwner updateMany
   */
  export type BusinessOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessOwners.
     */
    data: XOR<BusinessOwnerUpdateManyMutationInput, BusinessOwnerUncheckedUpdateManyInput>
    /**
     * Filter which BusinessOwners to update
     */
    where?: BusinessOwnerWhereInput
    /**
     * Limit how many BusinessOwners to update.
     */
    limit?: number
  }

  /**
   * BusinessOwner updateManyAndReturn
   */
  export type BusinessOwnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * The data used to update BusinessOwners.
     */
    data: XOR<BusinessOwnerUpdateManyMutationInput, BusinessOwnerUncheckedUpdateManyInput>
    /**
     * Filter which BusinessOwners to update
     */
    where?: BusinessOwnerWhereInput
    /**
     * Limit how many BusinessOwners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessOwner upsert
   */
  export type BusinessOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessOwner to update in case it exists.
     */
    where: BusinessOwnerWhereUniqueInput
    /**
     * In case the BusinessOwner found by the `where` argument doesn't exist, create a new BusinessOwner with this data.
     */
    create: XOR<BusinessOwnerCreateInput, BusinessOwnerUncheckedCreateInput>
    /**
     * In case the BusinessOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessOwnerUpdateInput, BusinessOwnerUncheckedUpdateInput>
  }

  /**
   * BusinessOwner delete
   */
  export type BusinessOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
    /**
     * Filter which BusinessOwner to delete.
     */
    where: BusinessOwnerWhereUniqueInput
  }

  /**
   * BusinessOwner deleteMany
   */
  export type BusinessOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessOwners to delete
     */
    where?: BusinessOwnerWhereInput
    /**
     * Limit how many BusinessOwners to delete.
     */
    limit?: number
  }

  /**
   * BusinessOwner without action
   */
  export type BusinessOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwner
     */
    select?: BusinessOwnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwner
     */
    omit?: BusinessOwnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerInclude<ExtArgs> | null
  }


  /**
   * Model BusinessPhoto
   */

  export type AggregateBusinessPhoto = {
    _count: BusinessPhotoCountAggregateOutputType | null
    _avg: BusinessPhotoAvgAggregateOutputType | null
    _sum: BusinessPhotoSumAggregateOutputType | null
    _min: BusinessPhotoMinAggregateOutputType | null
    _max: BusinessPhotoMaxAggregateOutputType | null
  }

  export type BusinessPhotoAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessPhotoSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessPhotoMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    photo_id: string | null
    upload_at: Date | null
  }

  export type BusinessPhotoMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    photo_id: string | null
    upload_at: Date | null
  }

  export type BusinessPhotoCountAggregateOutputType = {
    id: number
    uuid: number
    photo_id: number
    upload_at: number
    _all: number
  }


  export type BusinessPhotoAvgAggregateInputType = {
    id?: true
  }

  export type BusinessPhotoSumAggregateInputType = {
    id?: true
  }

  export type BusinessPhotoMinAggregateInputType = {
    id?: true
    uuid?: true
    photo_id?: true
    upload_at?: true
  }

  export type BusinessPhotoMaxAggregateInputType = {
    id?: true
    uuid?: true
    photo_id?: true
    upload_at?: true
  }

  export type BusinessPhotoCountAggregateInputType = {
    id?: true
    uuid?: true
    photo_id?: true
    upload_at?: true
    _all?: true
  }

  export type BusinessPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessPhoto to aggregate.
     */
    where?: BusinessPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPhotos to fetch.
     */
    orderBy?: BusinessPhotoOrderByWithRelationInput | BusinessPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessPhotos
    **/
    _count?: true | BusinessPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessPhotoMaxAggregateInputType
  }

  export type GetBusinessPhotoAggregateType<T extends BusinessPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessPhoto[P]>
      : GetScalarType<T[P], AggregateBusinessPhoto[P]>
  }




  export type BusinessPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessPhotoWhereInput
    orderBy?: BusinessPhotoOrderByWithAggregationInput | BusinessPhotoOrderByWithAggregationInput[]
    by: BusinessPhotoScalarFieldEnum[] | BusinessPhotoScalarFieldEnum
    having?: BusinessPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessPhotoCountAggregateInputType | true
    _avg?: BusinessPhotoAvgAggregateInputType
    _sum?: BusinessPhotoSumAggregateInputType
    _min?: BusinessPhotoMinAggregateInputType
    _max?: BusinessPhotoMaxAggregateInputType
  }

  export type BusinessPhotoGroupByOutputType = {
    id: number
    uuid: string
    photo_id: string
    upload_at: Date
    _count: BusinessPhotoCountAggregateOutputType | null
    _avg: BusinessPhotoAvgAggregateOutputType | null
    _sum: BusinessPhotoSumAggregateOutputType | null
    _min: BusinessPhotoMinAggregateOutputType | null
    _max: BusinessPhotoMaxAggregateOutputType | null
  }

  type GetBusinessPhotoGroupByPayload<T extends BusinessPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessPhotoGroupByOutputType[P]>
        }
      >
    >


  export type BusinessPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    photo_id?: boolean
    upload_at?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessPhoto"]>

  export type BusinessPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    photo_id?: boolean
    upload_at?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessPhoto"]>

  export type BusinessPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    photo_id?: boolean
    upload_at?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessPhoto"]>

  export type BusinessPhotoSelectScalar = {
    id?: boolean
    uuid?: boolean
    photo_id?: boolean
    upload_at?: boolean
  }

  export type BusinessPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "photo_id" | "upload_at", ExtArgs["result"]["businessPhoto"]>
  export type BusinessPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }
  export type BusinessPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }
  export type BusinessPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }

  export type $BusinessPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessPhoto"
    objects: {
      business: Prisma.$BusinessUuidPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      photo_id: string
      upload_at: Date
    }, ExtArgs["result"]["businessPhoto"]>
    composites: {}
  }

  type BusinessPhotoGetPayload<S extends boolean | null | undefined | BusinessPhotoDefaultArgs> = $Result.GetResult<Prisma.$BusinessPhotoPayload, S>

  type BusinessPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessPhotoCountAggregateInputType | true
    }

  export interface BusinessPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessPhoto'], meta: { name: 'BusinessPhoto' } }
    /**
     * Find zero or one BusinessPhoto that matches the filter.
     * @param {BusinessPhotoFindUniqueArgs} args - Arguments to find a BusinessPhoto
     * @example
     * // Get one BusinessPhoto
     * const businessPhoto = await prisma.businessPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessPhotoFindUniqueArgs>(args: SelectSubset<T, BusinessPhotoFindUniqueArgs<ExtArgs>>): Prisma__BusinessPhotoClient<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessPhotoFindUniqueOrThrowArgs} args - Arguments to find a BusinessPhoto
     * @example
     * // Get one BusinessPhoto
     * const businessPhoto = await prisma.businessPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessPhotoClient<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPhotoFindFirstArgs} args - Arguments to find a BusinessPhoto
     * @example
     * // Get one BusinessPhoto
     * const businessPhoto = await prisma.businessPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessPhotoFindFirstArgs>(args?: SelectSubset<T, BusinessPhotoFindFirstArgs<ExtArgs>>): Prisma__BusinessPhotoClient<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPhotoFindFirstOrThrowArgs} args - Arguments to find a BusinessPhoto
     * @example
     * // Get one BusinessPhoto
     * const businessPhoto = await prisma.businessPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessPhotoClient<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessPhotos
     * const businessPhotos = await prisma.businessPhoto.findMany()
     * 
     * // Get first 10 BusinessPhotos
     * const businessPhotos = await prisma.businessPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessPhotoWithIdOnly = await prisma.businessPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessPhotoFindManyArgs>(args?: SelectSubset<T, BusinessPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessPhoto.
     * @param {BusinessPhotoCreateArgs} args - Arguments to create a BusinessPhoto.
     * @example
     * // Create one BusinessPhoto
     * const BusinessPhoto = await prisma.businessPhoto.create({
     *   data: {
     *     // ... data to create a BusinessPhoto
     *   }
     * })
     * 
     */
    create<T extends BusinessPhotoCreateArgs>(args: SelectSubset<T, BusinessPhotoCreateArgs<ExtArgs>>): Prisma__BusinessPhotoClient<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessPhotos.
     * @param {BusinessPhotoCreateManyArgs} args - Arguments to create many BusinessPhotos.
     * @example
     * // Create many BusinessPhotos
     * const businessPhoto = await prisma.businessPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessPhotoCreateManyArgs>(args?: SelectSubset<T, BusinessPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessPhotos and returns the data saved in the database.
     * @param {BusinessPhotoCreateManyAndReturnArgs} args - Arguments to create many BusinessPhotos.
     * @example
     * // Create many BusinessPhotos
     * const businessPhoto = await prisma.businessPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessPhotos and only return the `id`
     * const businessPhotoWithIdOnly = await prisma.businessPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessPhoto.
     * @param {BusinessPhotoDeleteArgs} args - Arguments to delete one BusinessPhoto.
     * @example
     * // Delete one BusinessPhoto
     * const BusinessPhoto = await prisma.businessPhoto.delete({
     *   where: {
     *     // ... filter to delete one BusinessPhoto
     *   }
     * })
     * 
     */
    delete<T extends BusinessPhotoDeleteArgs>(args: SelectSubset<T, BusinessPhotoDeleteArgs<ExtArgs>>): Prisma__BusinessPhotoClient<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessPhoto.
     * @param {BusinessPhotoUpdateArgs} args - Arguments to update one BusinessPhoto.
     * @example
     * // Update one BusinessPhoto
     * const businessPhoto = await prisma.businessPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessPhotoUpdateArgs>(args: SelectSubset<T, BusinessPhotoUpdateArgs<ExtArgs>>): Prisma__BusinessPhotoClient<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessPhotos.
     * @param {BusinessPhotoDeleteManyArgs} args - Arguments to filter BusinessPhotos to delete.
     * @example
     * // Delete a few BusinessPhotos
     * const { count } = await prisma.businessPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessPhotoDeleteManyArgs>(args?: SelectSubset<T, BusinessPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessPhotos
     * const businessPhoto = await prisma.businessPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessPhotoUpdateManyArgs>(args: SelectSubset<T, BusinessPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessPhotos and returns the data updated in the database.
     * @param {BusinessPhotoUpdateManyAndReturnArgs} args - Arguments to update many BusinessPhotos.
     * @example
     * // Update many BusinessPhotos
     * const businessPhoto = await prisma.businessPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessPhotos and only return the `id`
     * const businessPhotoWithIdOnly = await prisma.businessPhoto.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessPhoto.
     * @param {BusinessPhotoUpsertArgs} args - Arguments to update or create a BusinessPhoto.
     * @example
     * // Update or create a BusinessPhoto
     * const businessPhoto = await prisma.businessPhoto.upsert({
     *   create: {
     *     // ... data to create a BusinessPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessPhoto we want to update
     *   }
     * })
     */
    upsert<T extends BusinessPhotoUpsertArgs>(args: SelectSubset<T, BusinessPhotoUpsertArgs<ExtArgs>>): Prisma__BusinessPhotoClient<$Result.GetResult<Prisma.$BusinessPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPhotoCountArgs} args - Arguments to filter BusinessPhotos to count.
     * @example
     * // Count the number of BusinessPhotos
     * const count = await prisma.businessPhoto.count({
     *   where: {
     *     // ... the filter for the BusinessPhotos we want to count
     *   }
     * })
    **/
    count<T extends BusinessPhotoCountArgs>(
      args?: Subset<T, BusinessPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessPhotoAggregateArgs>(args: Subset<T, BusinessPhotoAggregateArgs>): Prisma.PrismaPromise<GetBusinessPhotoAggregateType<T>>

    /**
     * Group by BusinessPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessPhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessPhotoGroupByArgs['orderBy'] }
        : { orderBy?: BusinessPhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessPhoto model
   */
  readonly fields: BusinessPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessUuidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessUuidDefaultArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessPhoto model
   */
  interface BusinessPhotoFieldRefs {
    readonly id: FieldRef<"BusinessPhoto", 'Int'>
    readonly uuid: FieldRef<"BusinessPhoto", 'String'>
    readonly photo_id: FieldRef<"BusinessPhoto", 'String'>
    readonly upload_at: FieldRef<"BusinessPhoto", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusinessPhoto findUnique
   */
  export type BusinessPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPhoto to fetch.
     */
    where: BusinessPhotoWhereUniqueInput
  }

  /**
   * BusinessPhoto findUniqueOrThrow
   */
  export type BusinessPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPhoto to fetch.
     */
    where: BusinessPhotoWhereUniqueInput
  }

  /**
   * BusinessPhoto findFirst
   */
  export type BusinessPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPhoto to fetch.
     */
    where?: BusinessPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPhotos to fetch.
     */
    orderBy?: BusinessPhotoOrderByWithRelationInput | BusinessPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessPhotos.
     */
    cursor?: BusinessPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessPhotos.
     */
    distinct?: BusinessPhotoScalarFieldEnum | BusinessPhotoScalarFieldEnum[]
  }

  /**
   * BusinessPhoto findFirstOrThrow
   */
  export type BusinessPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPhoto to fetch.
     */
    where?: BusinessPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPhotos to fetch.
     */
    orderBy?: BusinessPhotoOrderByWithRelationInput | BusinessPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessPhotos.
     */
    cursor?: BusinessPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessPhotos.
     */
    distinct?: BusinessPhotoScalarFieldEnum | BusinessPhotoScalarFieldEnum[]
  }

  /**
   * BusinessPhoto findMany
   */
  export type BusinessPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    /**
     * Filter, which BusinessPhotos to fetch.
     */
    where?: BusinessPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessPhotos to fetch.
     */
    orderBy?: BusinessPhotoOrderByWithRelationInput | BusinessPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessPhotos.
     */
    cursor?: BusinessPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessPhotos.
     */
    distinct?: BusinessPhotoScalarFieldEnum | BusinessPhotoScalarFieldEnum[]
  }

  /**
   * BusinessPhoto create
   */
  export type BusinessPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessPhoto.
     */
    data: XOR<BusinessPhotoCreateInput, BusinessPhotoUncheckedCreateInput>
  }

  /**
   * BusinessPhoto createMany
   */
  export type BusinessPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessPhotos.
     */
    data: BusinessPhotoCreateManyInput | BusinessPhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessPhoto createManyAndReturn
   */
  export type BusinessPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessPhotos.
     */
    data: BusinessPhotoCreateManyInput | BusinessPhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessPhoto update
   */
  export type BusinessPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessPhoto.
     */
    data: XOR<BusinessPhotoUpdateInput, BusinessPhotoUncheckedUpdateInput>
    /**
     * Choose, which BusinessPhoto to update.
     */
    where: BusinessPhotoWhereUniqueInput
  }

  /**
   * BusinessPhoto updateMany
   */
  export type BusinessPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessPhotos.
     */
    data: XOR<BusinessPhotoUpdateManyMutationInput, BusinessPhotoUncheckedUpdateManyInput>
    /**
     * Filter which BusinessPhotos to update
     */
    where?: BusinessPhotoWhereInput
    /**
     * Limit how many BusinessPhotos to update.
     */
    limit?: number
  }

  /**
   * BusinessPhoto updateManyAndReturn
   */
  export type BusinessPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * The data used to update BusinessPhotos.
     */
    data: XOR<BusinessPhotoUpdateManyMutationInput, BusinessPhotoUncheckedUpdateManyInput>
    /**
     * Filter which BusinessPhotos to update
     */
    where?: BusinessPhotoWhereInput
    /**
     * Limit how many BusinessPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessPhoto upsert
   */
  export type BusinessPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessPhoto to update in case it exists.
     */
    where: BusinessPhotoWhereUniqueInput
    /**
     * In case the BusinessPhoto found by the `where` argument doesn't exist, create a new BusinessPhoto with this data.
     */
    create: XOR<BusinessPhotoCreateInput, BusinessPhotoUncheckedCreateInput>
    /**
     * In case the BusinessPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessPhotoUpdateInput, BusinessPhotoUncheckedUpdateInput>
  }

  /**
   * BusinessPhoto delete
   */
  export type BusinessPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
    /**
     * Filter which BusinessPhoto to delete.
     */
    where: BusinessPhotoWhereUniqueInput
  }

  /**
   * BusinessPhoto deleteMany
   */
  export type BusinessPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessPhotos to delete
     */
    where?: BusinessPhotoWhereInput
    /**
     * Limit how many BusinessPhotos to delete.
     */
    limit?: number
  }

  /**
   * BusinessPhoto without action
   */
  export type BusinessPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessPhoto
     */
    select?: BusinessPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessPhoto
     */
    omit?: BusinessPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessPhotoInclude<ExtArgs> | null
  }


  /**
   * Model BusinessOwnerDocument
   */

  export type AggregateBusinessOwnerDocument = {
    _count: BusinessOwnerDocumentCountAggregateOutputType | null
    _avg: BusinessOwnerDocumentAvgAggregateOutputType | null
    _sum: BusinessOwnerDocumentSumAggregateOutputType | null
    _min: BusinessOwnerDocumentMinAggregateOutputType | null
    _max: BusinessOwnerDocumentMaxAggregateOutputType | null
  }

  export type BusinessOwnerDocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessOwnerDocumentSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessOwnerDocumentMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    aadharcard_nu: string | null
    aadharcard_photo_id: string | null
    pancard_nu: string | null
    pancard_photo_id: string | null
  }

  export type BusinessOwnerDocumentMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    aadharcard_nu: string | null
    aadharcard_photo_id: string | null
    pancard_nu: string | null
    pancard_photo_id: string | null
  }

  export type BusinessOwnerDocumentCountAggregateOutputType = {
    id: number
    uuid: number
    aadharcard_nu: number
    aadharcard_photo_id: number
    pancard_nu: number
    pancard_photo_id: number
    _all: number
  }


  export type BusinessOwnerDocumentAvgAggregateInputType = {
    id?: true
  }

  export type BusinessOwnerDocumentSumAggregateInputType = {
    id?: true
  }

  export type BusinessOwnerDocumentMinAggregateInputType = {
    id?: true
    uuid?: true
    aadharcard_nu?: true
    aadharcard_photo_id?: true
    pancard_nu?: true
    pancard_photo_id?: true
  }

  export type BusinessOwnerDocumentMaxAggregateInputType = {
    id?: true
    uuid?: true
    aadharcard_nu?: true
    aadharcard_photo_id?: true
    pancard_nu?: true
    pancard_photo_id?: true
  }

  export type BusinessOwnerDocumentCountAggregateInputType = {
    id?: true
    uuid?: true
    aadharcard_nu?: true
    aadharcard_photo_id?: true
    pancard_nu?: true
    pancard_photo_id?: true
    _all?: true
  }

  export type BusinessOwnerDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessOwnerDocument to aggregate.
     */
    where?: BusinessOwnerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessOwnerDocuments to fetch.
     */
    orderBy?: BusinessOwnerDocumentOrderByWithRelationInput | BusinessOwnerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessOwnerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessOwnerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessOwnerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessOwnerDocuments
    **/
    _count?: true | BusinessOwnerDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessOwnerDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessOwnerDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessOwnerDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessOwnerDocumentMaxAggregateInputType
  }

  export type GetBusinessOwnerDocumentAggregateType<T extends BusinessOwnerDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessOwnerDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessOwnerDocument[P]>
      : GetScalarType<T[P], AggregateBusinessOwnerDocument[P]>
  }




  export type BusinessOwnerDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessOwnerDocumentWhereInput
    orderBy?: BusinessOwnerDocumentOrderByWithAggregationInput | BusinessOwnerDocumentOrderByWithAggregationInput[]
    by: BusinessOwnerDocumentScalarFieldEnum[] | BusinessOwnerDocumentScalarFieldEnum
    having?: BusinessOwnerDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessOwnerDocumentCountAggregateInputType | true
    _avg?: BusinessOwnerDocumentAvgAggregateInputType
    _sum?: BusinessOwnerDocumentSumAggregateInputType
    _min?: BusinessOwnerDocumentMinAggregateInputType
    _max?: BusinessOwnerDocumentMaxAggregateInputType
  }

  export type BusinessOwnerDocumentGroupByOutputType = {
    id: number
    uuid: string
    aadharcard_nu: string
    aadharcard_photo_id: string
    pancard_nu: string
    pancard_photo_id: string
    _count: BusinessOwnerDocumentCountAggregateOutputType | null
    _avg: BusinessOwnerDocumentAvgAggregateOutputType | null
    _sum: BusinessOwnerDocumentSumAggregateOutputType | null
    _min: BusinessOwnerDocumentMinAggregateOutputType | null
    _max: BusinessOwnerDocumentMaxAggregateOutputType | null
  }

  type GetBusinessOwnerDocumentGroupByPayload<T extends BusinessOwnerDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessOwnerDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessOwnerDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessOwnerDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessOwnerDocumentGroupByOutputType[P]>
        }
      >
    >


  export type BusinessOwnerDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    aadharcard_nu?: boolean
    aadharcard_photo_id?: boolean
    pancard_nu?: boolean
    pancard_photo_id?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessOwnerDocument"]>

  export type BusinessOwnerDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    aadharcard_nu?: boolean
    aadharcard_photo_id?: boolean
    pancard_nu?: boolean
    pancard_photo_id?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessOwnerDocument"]>

  export type BusinessOwnerDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    aadharcard_nu?: boolean
    aadharcard_photo_id?: boolean
    pancard_nu?: boolean
    pancard_photo_id?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessOwnerDocument"]>

  export type BusinessOwnerDocumentSelectScalar = {
    id?: boolean
    uuid?: boolean
    aadharcard_nu?: boolean
    aadharcard_photo_id?: boolean
    pancard_nu?: boolean
    pancard_photo_id?: boolean
  }

  export type BusinessOwnerDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "aadharcard_nu" | "aadharcard_photo_id" | "pancard_nu" | "pancard_photo_id", ExtArgs["result"]["businessOwnerDocument"]>
  export type BusinessOwnerDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }
  export type BusinessOwnerDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }
  export type BusinessOwnerDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }

  export type $BusinessOwnerDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessOwnerDocument"
    objects: {
      business: Prisma.$BusinessUuidPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      aadharcard_nu: string
      aadharcard_photo_id: string
      pancard_nu: string
      pancard_photo_id: string
    }, ExtArgs["result"]["businessOwnerDocument"]>
    composites: {}
  }

  type BusinessOwnerDocumentGetPayload<S extends boolean | null | undefined | BusinessOwnerDocumentDefaultArgs> = $Result.GetResult<Prisma.$BusinessOwnerDocumentPayload, S>

  type BusinessOwnerDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessOwnerDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessOwnerDocumentCountAggregateInputType | true
    }

  export interface BusinessOwnerDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessOwnerDocument'], meta: { name: 'BusinessOwnerDocument' } }
    /**
     * Find zero or one BusinessOwnerDocument that matches the filter.
     * @param {BusinessOwnerDocumentFindUniqueArgs} args - Arguments to find a BusinessOwnerDocument
     * @example
     * // Get one BusinessOwnerDocument
     * const businessOwnerDocument = await prisma.businessOwnerDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessOwnerDocumentFindUniqueArgs>(args: SelectSubset<T, BusinessOwnerDocumentFindUniqueArgs<ExtArgs>>): Prisma__BusinessOwnerDocumentClient<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessOwnerDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessOwnerDocumentFindUniqueOrThrowArgs} args - Arguments to find a BusinessOwnerDocument
     * @example
     * // Get one BusinessOwnerDocument
     * const businessOwnerDocument = await prisma.businessOwnerDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessOwnerDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessOwnerDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessOwnerDocumentClient<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessOwnerDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerDocumentFindFirstArgs} args - Arguments to find a BusinessOwnerDocument
     * @example
     * // Get one BusinessOwnerDocument
     * const businessOwnerDocument = await prisma.businessOwnerDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessOwnerDocumentFindFirstArgs>(args?: SelectSubset<T, BusinessOwnerDocumentFindFirstArgs<ExtArgs>>): Prisma__BusinessOwnerDocumentClient<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessOwnerDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerDocumentFindFirstOrThrowArgs} args - Arguments to find a BusinessOwnerDocument
     * @example
     * // Get one BusinessOwnerDocument
     * const businessOwnerDocument = await prisma.businessOwnerDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessOwnerDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessOwnerDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessOwnerDocumentClient<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessOwnerDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessOwnerDocuments
     * const businessOwnerDocuments = await prisma.businessOwnerDocument.findMany()
     * 
     * // Get first 10 BusinessOwnerDocuments
     * const businessOwnerDocuments = await prisma.businessOwnerDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessOwnerDocumentWithIdOnly = await prisma.businessOwnerDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessOwnerDocumentFindManyArgs>(args?: SelectSubset<T, BusinessOwnerDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessOwnerDocument.
     * @param {BusinessOwnerDocumentCreateArgs} args - Arguments to create a BusinessOwnerDocument.
     * @example
     * // Create one BusinessOwnerDocument
     * const BusinessOwnerDocument = await prisma.businessOwnerDocument.create({
     *   data: {
     *     // ... data to create a BusinessOwnerDocument
     *   }
     * })
     * 
     */
    create<T extends BusinessOwnerDocumentCreateArgs>(args: SelectSubset<T, BusinessOwnerDocumentCreateArgs<ExtArgs>>): Prisma__BusinessOwnerDocumentClient<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessOwnerDocuments.
     * @param {BusinessOwnerDocumentCreateManyArgs} args - Arguments to create many BusinessOwnerDocuments.
     * @example
     * // Create many BusinessOwnerDocuments
     * const businessOwnerDocument = await prisma.businessOwnerDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessOwnerDocumentCreateManyArgs>(args?: SelectSubset<T, BusinessOwnerDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessOwnerDocuments and returns the data saved in the database.
     * @param {BusinessOwnerDocumentCreateManyAndReturnArgs} args - Arguments to create many BusinessOwnerDocuments.
     * @example
     * // Create many BusinessOwnerDocuments
     * const businessOwnerDocument = await prisma.businessOwnerDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessOwnerDocuments and only return the `id`
     * const businessOwnerDocumentWithIdOnly = await prisma.businessOwnerDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessOwnerDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessOwnerDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessOwnerDocument.
     * @param {BusinessOwnerDocumentDeleteArgs} args - Arguments to delete one BusinessOwnerDocument.
     * @example
     * // Delete one BusinessOwnerDocument
     * const BusinessOwnerDocument = await prisma.businessOwnerDocument.delete({
     *   where: {
     *     // ... filter to delete one BusinessOwnerDocument
     *   }
     * })
     * 
     */
    delete<T extends BusinessOwnerDocumentDeleteArgs>(args: SelectSubset<T, BusinessOwnerDocumentDeleteArgs<ExtArgs>>): Prisma__BusinessOwnerDocumentClient<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessOwnerDocument.
     * @param {BusinessOwnerDocumentUpdateArgs} args - Arguments to update one BusinessOwnerDocument.
     * @example
     * // Update one BusinessOwnerDocument
     * const businessOwnerDocument = await prisma.businessOwnerDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessOwnerDocumentUpdateArgs>(args: SelectSubset<T, BusinessOwnerDocumentUpdateArgs<ExtArgs>>): Prisma__BusinessOwnerDocumentClient<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessOwnerDocuments.
     * @param {BusinessOwnerDocumentDeleteManyArgs} args - Arguments to filter BusinessOwnerDocuments to delete.
     * @example
     * // Delete a few BusinessOwnerDocuments
     * const { count } = await prisma.businessOwnerDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessOwnerDocumentDeleteManyArgs>(args?: SelectSubset<T, BusinessOwnerDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessOwnerDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessOwnerDocuments
     * const businessOwnerDocument = await prisma.businessOwnerDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessOwnerDocumentUpdateManyArgs>(args: SelectSubset<T, BusinessOwnerDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessOwnerDocuments and returns the data updated in the database.
     * @param {BusinessOwnerDocumentUpdateManyAndReturnArgs} args - Arguments to update many BusinessOwnerDocuments.
     * @example
     * // Update many BusinessOwnerDocuments
     * const businessOwnerDocument = await prisma.businessOwnerDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessOwnerDocuments and only return the `id`
     * const businessOwnerDocumentWithIdOnly = await prisma.businessOwnerDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessOwnerDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessOwnerDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessOwnerDocument.
     * @param {BusinessOwnerDocumentUpsertArgs} args - Arguments to update or create a BusinessOwnerDocument.
     * @example
     * // Update or create a BusinessOwnerDocument
     * const businessOwnerDocument = await prisma.businessOwnerDocument.upsert({
     *   create: {
     *     // ... data to create a BusinessOwnerDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessOwnerDocument we want to update
     *   }
     * })
     */
    upsert<T extends BusinessOwnerDocumentUpsertArgs>(args: SelectSubset<T, BusinessOwnerDocumentUpsertArgs<ExtArgs>>): Prisma__BusinessOwnerDocumentClient<$Result.GetResult<Prisma.$BusinessOwnerDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessOwnerDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerDocumentCountArgs} args - Arguments to filter BusinessOwnerDocuments to count.
     * @example
     * // Count the number of BusinessOwnerDocuments
     * const count = await prisma.businessOwnerDocument.count({
     *   where: {
     *     // ... the filter for the BusinessOwnerDocuments we want to count
     *   }
     * })
    **/
    count<T extends BusinessOwnerDocumentCountArgs>(
      args?: Subset<T, BusinessOwnerDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessOwnerDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessOwnerDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessOwnerDocumentAggregateArgs>(args: Subset<T, BusinessOwnerDocumentAggregateArgs>): Prisma.PrismaPromise<GetBusinessOwnerDocumentAggregateType<T>>

    /**
     * Group by BusinessOwnerDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessOwnerDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessOwnerDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessOwnerDocumentGroupByArgs['orderBy'] }
        : { orderBy?: BusinessOwnerDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessOwnerDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessOwnerDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessOwnerDocument model
   */
  readonly fields: BusinessOwnerDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessOwnerDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessOwnerDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessUuidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessUuidDefaultArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessOwnerDocument model
   */
  interface BusinessOwnerDocumentFieldRefs {
    readonly id: FieldRef<"BusinessOwnerDocument", 'Int'>
    readonly uuid: FieldRef<"BusinessOwnerDocument", 'String'>
    readonly aadharcard_nu: FieldRef<"BusinessOwnerDocument", 'String'>
    readonly aadharcard_photo_id: FieldRef<"BusinessOwnerDocument", 'String'>
    readonly pancard_nu: FieldRef<"BusinessOwnerDocument", 'String'>
    readonly pancard_photo_id: FieldRef<"BusinessOwnerDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessOwnerDocument findUnique
   */
  export type BusinessOwnerDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwnerDocument to fetch.
     */
    where: BusinessOwnerDocumentWhereUniqueInput
  }

  /**
   * BusinessOwnerDocument findUniqueOrThrow
   */
  export type BusinessOwnerDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwnerDocument to fetch.
     */
    where: BusinessOwnerDocumentWhereUniqueInput
  }

  /**
   * BusinessOwnerDocument findFirst
   */
  export type BusinessOwnerDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwnerDocument to fetch.
     */
    where?: BusinessOwnerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessOwnerDocuments to fetch.
     */
    orderBy?: BusinessOwnerDocumentOrderByWithRelationInput | BusinessOwnerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessOwnerDocuments.
     */
    cursor?: BusinessOwnerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessOwnerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessOwnerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessOwnerDocuments.
     */
    distinct?: BusinessOwnerDocumentScalarFieldEnum | BusinessOwnerDocumentScalarFieldEnum[]
  }

  /**
   * BusinessOwnerDocument findFirstOrThrow
   */
  export type BusinessOwnerDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwnerDocument to fetch.
     */
    where?: BusinessOwnerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessOwnerDocuments to fetch.
     */
    orderBy?: BusinessOwnerDocumentOrderByWithRelationInput | BusinessOwnerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessOwnerDocuments.
     */
    cursor?: BusinessOwnerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessOwnerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessOwnerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessOwnerDocuments.
     */
    distinct?: BusinessOwnerDocumentScalarFieldEnum | BusinessOwnerDocumentScalarFieldEnum[]
  }

  /**
   * BusinessOwnerDocument findMany
   */
  export type BusinessOwnerDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessOwnerDocuments to fetch.
     */
    where?: BusinessOwnerDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessOwnerDocuments to fetch.
     */
    orderBy?: BusinessOwnerDocumentOrderByWithRelationInput | BusinessOwnerDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessOwnerDocuments.
     */
    cursor?: BusinessOwnerDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessOwnerDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessOwnerDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessOwnerDocuments.
     */
    distinct?: BusinessOwnerDocumentScalarFieldEnum | BusinessOwnerDocumentScalarFieldEnum[]
  }

  /**
   * BusinessOwnerDocument create
   */
  export type BusinessOwnerDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessOwnerDocument.
     */
    data: XOR<BusinessOwnerDocumentCreateInput, BusinessOwnerDocumentUncheckedCreateInput>
  }

  /**
   * BusinessOwnerDocument createMany
   */
  export type BusinessOwnerDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessOwnerDocuments.
     */
    data: BusinessOwnerDocumentCreateManyInput | BusinessOwnerDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessOwnerDocument createManyAndReturn
   */
  export type BusinessOwnerDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessOwnerDocuments.
     */
    data: BusinessOwnerDocumentCreateManyInput | BusinessOwnerDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessOwnerDocument update
   */
  export type BusinessOwnerDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessOwnerDocument.
     */
    data: XOR<BusinessOwnerDocumentUpdateInput, BusinessOwnerDocumentUncheckedUpdateInput>
    /**
     * Choose, which BusinessOwnerDocument to update.
     */
    where: BusinessOwnerDocumentWhereUniqueInput
  }

  /**
   * BusinessOwnerDocument updateMany
   */
  export type BusinessOwnerDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessOwnerDocuments.
     */
    data: XOR<BusinessOwnerDocumentUpdateManyMutationInput, BusinessOwnerDocumentUncheckedUpdateManyInput>
    /**
     * Filter which BusinessOwnerDocuments to update
     */
    where?: BusinessOwnerDocumentWhereInput
    /**
     * Limit how many BusinessOwnerDocuments to update.
     */
    limit?: number
  }

  /**
   * BusinessOwnerDocument updateManyAndReturn
   */
  export type BusinessOwnerDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * The data used to update BusinessOwnerDocuments.
     */
    data: XOR<BusinessOwnerDocumentUpdateManyMutationInput, BusinessOwnerDocumentUncheckedUpdateManyInput>
    /**
     * Filter which BusinessOwnerDocuments to update
     */
    where?: BusinessOwnerDocumentWhereInput
    /**
     * Limit how many BusinessOwnerDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessOwnerDocument upsert
   */
  export type BusinessOwnerDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessOwnerDocument to update in case it exists.
     */
    where: BusinessOwnerDocumentWhereUniqueInput
    /**
     * In case the BusinessOwnerDocument found by the `where` argument doesn't exist, create a new BusinessOwnerDocument with this data.
     */
    create: XOR<BusinessOwnerDocumentCreateInput, BusinessOwnerDocumentUncheckedCreateInput>
    /**
     * In case the BusinessOwnerDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessOwnerDocumentUpdateInput, BusinessOwnerDocumentUncheckedUpdateInput>
  }

  /**
   * BusinessOwnerDocument delete
   */
  export type BusinessOwnerDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
    /**
     * Filter which BusinessOwnerDocument to delete.
     */
    where: BusinessOwnerDocumentWhereUniqueInput
  }

  /**
   * BusinessOwnerDocument deleteMany
   */
  export type BusinessOwnerDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessOwnerDocuments to delete
     */
    where?: BusinessOwnerDocumentWhereInput
    /**
     * Limit how many BusinessOwnerDocuments to delete.
     */
    limit?: number
  }

  /**
   * BusinessOwnerDocument without action
   */
  export type BusinessOwnerDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessOwnerDocument
     */
    select?: BusinessOwnerDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessOwnerDocument
     */
    omit?: BusinessOwnerDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessOwnerDocumentInclude<ExtArgs> | null
  }


  /**
   * Model BusinessShopDocument
   */

  export type AggregateBusinessShopDocument = {
    _count: BusinessShopDocumentCountAggregateOutputType | null
    _avg: BusinessShopDocumentAvgAggregateOutputType | null
    _sum: BusinessShopDocumentSumAggregateOutputType | null
    _min: BusinessShopDocumentMinAggregateOutputType | null
    _max: BusinessShopDocumentMaxAggregateOutputType | null
  }

  export type BusinessShopDocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessShopDocumentSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessShopDocumentMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    gst_nu: string | null
    gst_photo_id: string | null
    shoplicense_nu: string | null
    shoplicense_photo_id: string | null
    udhayma_nu: string | null
    udhayma_photo_id: string | null
  }

  export type BusinessShopDocumentMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    gst_nu: string | null
    gst_photo_id: string | null
    shoplicense_nu: string | null
    shoplicense_photo_id: string | null
    udhayma_nu: string | null
    udhayma_photo_id: string | null
  }

  export type BusinessShopDocumentCountAggregateOutputType = {
    id: number
    uuid: number
    gst_nu: number
    gst_photo_id: number
    shoplicense_nu: number
    shoplicense_photo_id: number
    udhayma_nu: number
    udhayma_photo_id: number
    _all: number
  }


  export type BusinessShopDocumentAvgAggregateInputType = {
    id?: true
  }

  export type BusinessShopDocumentSumAggregateInputType = {
    id?: true
  }

  export type BusinessShopDocumentMinAggregateInputType = {
    id?: true
    uuid?: true
    gst_nu?: true
    gst_photo_id?: true
    shoplicense_nu?: true
    shoplicense_photo_id?: true
    udhayma_nu?: true
    udhayma_photo_id?: true
  }

  export type BusinessShopDocumentMaxAggregateInputType = {
    id?: true
    uuid?: true
    gst_nu?: true
    gst_photo_id?: true
    shoplicense_nu?: true
    shoplicense_photo_id?: true
    udhayma_nu?: true
    udhayma_photo_id?: true
  }

  export type BusinessShopDocumentCountAggregateInputType = {
    id?: true
    uuid?: true
    gst_nu?: true
    gst_photo_id?: true
    shoplicense_nu?: true
    shoplicense_photo_id?: true
    udhayma_nu?: true
    udhayma_photo_id?: true
    _all?: true
  }

  export type BusinessShopDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessShopDocument to aggregate.
     */
    where?: BusinessShopDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessShopDocuments to fetch.
     */
    orderBy?: BusinessShopDocumentOrderByWithRelationInput | BusinessShopDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessShopDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessShopDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessShopDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessShopDocuments
    **/
    _count?: true | BusinessShopDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessShopDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessShopDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessShopDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessShopDocumentMaxAggregateInputType
  }

  export type GetBusinessShopDocumentAggregateType<T extends BusinessShopDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessShopDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessShopDocument[P]>
      : GetScalarType<T[P], AggregateBusinessShopDocument[P]>
  }




  export type BusinessShopDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessShopDocumentWhereInput
    orderBy?: BusinessShopDocumentOrderByWithAggregationInput | BusinessShopDocumentOrderByWithAggregationInput[]
    by: BusinessShopDocumentScalarFieldEnum[] | BusinessShopDocumentScalarFieldEnum
    having?: BusinessShopDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessShopDocumentCountAggregateInputType | true
    _avg?: BusinessShopDocumentAvgAggregateInputType
    _sum?: BusinessShopDocumentSumAggregateInputType
    _min?: BusinessShopDocumentMinAggregateInputType
    _max?: BusinessShopDocumentMaxAggregateInputType
  }

  export type BusinessShopDocumentGroupByOutputType = {
    id: number
    uuid: string
    gst_nu: string | null
    gst_photo_id: string | null
    shoplicense_nu: string | null
    shoplicense_photo_id: string | null
    udhayma_nu: string | null
    udhayma_photo_id: string | null
    _count: BusinessShopDocumentCountAggregateOutputType | null
    _avg: BusinessShopDocumentAvgAggregateOutputType | null
    _sum: BusinessShopDocumentSumAggregateOutputType | null
    _min: BusinessShopDocumentMinAggregateOutputType | null
    _max: BusinessShopDocumentMaxAggregateOutputType | null
  }

  type GetBusinessShopDocumentGroupByPayload<T extends BusinessShopDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessShopDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessShopDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessShopDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessShopDocumentGroupByOutputType[P]>
        }
      >
    >


  export type BusinessShopDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    gst_nu?: boolean
    gst_photo_id?: boolean
    shoplicense_nu?: boolean
    shoplicense_photo_id?: boolean
    udhayma_nu?: boolean
    udhayma_photo_id?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessShopDocument"]>

  export type BusinessShopDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    gst_nu?: boolean
    gst_photo_id?: boolean
    shoplicense_nu?: boolean
    shoplicense_photo_id?: boolean
    udhayma_nu?: boolean
    udhayma_photo_id?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessShopDocument"]>

  export type BusinessShopDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    gst_nu?: boolean
    gst_photo_id?: boolean
    shoplicense_nu?: boolean
    shoplicense_photo_id?: boolean
    udhayma_nu?: boolean
    udhayma_photo_id?: boolean
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["businessShopDocument"]>

  export type BusinessShopDocumentSelectScalar = {
    id?: boolean
    uuid?: boolean
    gst_nu?: boolean
    gst_photo_id?: boolean
    shoplicense_nu?: boolean
    shoplicense_photo_id?: boolean
    udhayma_nu?: boolean
    udhayma_photo_id?: boolean
  }

  export type BusinessShopDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "gst_nu" | "gst_photo_id" | "shoplicense_nu" | "shoplicense_photo_id" | "udhayma_nu" | "udhayma_photo_id", ExtArgs["result"]["businessShopDocument"]>
  export type BusinessShopDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }
  export type BusinessShopDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }
  export type BusinessShopDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessUuidDefaultArgs<ExtArgs>
  }

  export type $BusinessShopDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusinessShopDocument"
    objects: {
      business: Prisma.$BusinessUuidPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      gst_nu: string | null
      gst_photo_id: string | null
      shoplicense_nu: string | null
      shoplicense_photo_id: string | null
      udhayma_nu: string | null
      udhayma_photo_id: string | null
    }, ExtArgs["result"]["businessShopDocument"]>
    composites: {}
  }

  type BusinessShopDocumentGetPayload<S extends boolean | null | undefined | BusinessShopDocumentDefaultArgs> = $Result.GetResult<Prisma.$BusinessShopDocumentPayload, S>

  type BusinessShopDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessShopDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessShopDocumentCountAggregateInputType | true
    }

  export interface BusinessShopDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessShopDocument'], meta: { name: 'BusinessShopDocument' } }
    /**
     * Find zero or one BusinessShopDocument that matches the filter.
     * @param {BusinessShopDocumentFindUniqueArgs} args - Arguments to find a BusinessShopDocument
     * @example
     * // Get one BusinessShopDocument
     * const businessShopDocument = await prisma.businessShopDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessShopDocumentFindUniqueArgs>(args: SelectSubset<T, BusinessShopDocumentFindUniqueArgs<ExtArgs>>): Prisma__BusinessShopDocumentClient<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusinessShopDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessShopDocumentFindUniqueOrThrowArgs} args - Arguments to find a BusinessShopDocument
     * @example
     * // Get one BusinessShopDocument
     * const businessShopDocument = await prisma.businessShopDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessShopDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessShopDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessShopDocumentClient<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessShopDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessShopDocumentFindFirstArgs} args - Arguments to find a BusinessShopDocument
     * @example
     * // Get one BusinessShopDocument
     * const businessShopDocument = await prisma.businessShopDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessShopDocumentFindFirstArgs>(args?: SelectSubset<T, BusinessShopDocumentFindFirstArgs<ExtArgs>>): Prisma__BusinessShopDocumentClient<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusinessShopDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessShopDocumentFindFirstOrThrowArgs} args - Arguments to find a BusinessShopDocument
     * @example
     * // Get one BusinessShopDocument
     * const businessShopDocument = await prisma.businessShopDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessShopDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessShopDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessShopDocumentClient<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusinessShopDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessShopDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessShopDocuments
     * const businessShopDocuments = await prisma.businessShopDocument.findMany()
     * 
     * // Get first 10 BusinessShopDocuments
     * const businessShopDocuments = await prisma.businessShopDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessShopDocumentWithIdOnly = await prisma.businessShopDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessShopDocumentFindManyArgs>(args?: SelectSubset<T, BusinessShopDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusinessShopDocument.
     * @param {BusinessShopDocumentCreateArgs} args - Arguments to create a BusinessShopDocument.
     * @example
     * // Create one BusinessShopDocument
     * const BusinessShopDocument = await prisma.businessShopDocument.create({
     *   data: {
     *     // ... data to create a BusinessShopDocument
     *   }
     * })
     * 
     */
    create<T extends BusinessShopDocumentCreateArgs>(args: SelectSubset<T, BusinessShopDocumentCreateArgs<ExtArgs>>): Prisma__BusinessShopDocumentClient<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusinessShopDocuments.
     * @param {BusinessShopDocumentCreateManyArgs} args - Arguments to create many BusinessShopDocuments.
     * @example
     * // Create many BusinessShopDocuments
     * const businessShopDocument = await prisma.businessShopDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessShopDocumentCreateManyArgs>(args?: SelectSubset<T, BusinessShopDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusinessShopDocuments and returns the data saved in the database.
     * @param {BusinessShopDocumentCreateManyAndReturnArgs} args - Arguments to create many BusinessShopDocuments.
     * @example
     * // Create many BusinessShopDocuments
     * const businessShopDocument = await prisma.businessShopDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusinessShopDocuments and only return the `id`
     * const businessShopDocumentWithIdOnly = await prisma.businessShopDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessShopDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessShopDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusinessShopDocument.
     * @param {BusinessShopDocumentDeleteArgs} args - Arguments to delete one BusinessShopDocument.
     * @example
     * // Delete one BusinessShopDocument
     * const BusinessShopDocument = await prisma.businessShopDocument.delete({
     *   where: {
     *     // ... filter to delete one BusinessShopDocument
     *   }
     * })
     * 
     */
    delete<T extends BusinessShopDocumentDeleteArgs>(args: SelectSubset<T, BusinessShopDocumentDeleteArgs<ExtArgs>>): Prisma__BusinessShopDocumentClient<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusinessShopDocument.
     * @param {BusinessShopDocumentUpdateArgs} args - Arguments to update one BusinessShopDocument.
     * @example
     * // Update one BusinessShopDocument
     * const businessShopDocument = await prisma.businessShopDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessShopDocumentUpdateArgs>(args: SelectSubset<T, BusinessShopDocumentUpdateArgs<ExtArgs>>): Prisma__BusinessShopDocumentClient<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusinessShopDocuments.
     * @param {BusinessShopDocumentDeleteManyArgs} args - Arguments to filter BusinessShopDocuments to delete.
     * @example
     * // Delete a few BusinessShopDocuments
     * const { count } = await prisma.businessShopDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessShopDocumentDeleteManyArgs>(args?: SelectSubset<T, BusinessShopDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessShopDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessShopDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessShopDocuments
     * const businessShopDocument = await prisma.businessShopDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessShopDocumentUpdateManyArgs>(args: SelectSubset<T, BusinessShopDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessShopDocuments and returns the data updated in the database.
     * @param {BusinessShopDocumentUpdateManyAndReturnArgs} args - Arguments to update many BusinessShopDocuments.
     * @example
     * // Update many BusinessShopDocuments
     * const businessShopDocument = await prisma.businessShopDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusinessShopDocuments and only return the `id`
     * const businessShopDocumentWithIdOnly = await prisma.businessShopDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusinessShopDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessShopDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusinessShopDocument.
     * @param {BusinessShopDocumentUpsertArgs} args - Arguments to update or create a BusinessShopDocument.
     * @example
     * // Update or create a BusinessShopDocument
     * const businessShopDocument = await prisma.businessShopDocument.upsert({
     *   create: {
     *     // ... data to create a BusinessShopDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessShopDocument we want to update
     *   }
     * })
     */
    upsert<T extends BusinessShopDocumentUpsertArgs>(args: SelectSubset<T, BusinessShopDocumentUpsertArgs<ExtArgs>>): Prisma__BusinessShopDocumentClient<$Result.GetResult<Prisma.$BusinessShopDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusinessShopDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessShopDocumentCountArgs} args - Arguments to filter BusinessShopDocuments to count.
     * @example
     * // Count the number of BusinessShopDocuments
     * const count = await prisma.businessShopDocument.count({
     *   where: {
     *     // ... the filter for the BusinessShopDocuments we want to count
     *   }
     * })
    **/
    count<T extends BusinessShopDocumentCountArgs>(
      args?: Subset<T, BusinessShopDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessShopDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessShopDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessShopDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessShopDocumentAggregateArgs>(args: Subset<T, BusinessShopDocumentAggregateArgs>): Prisma.PrismaPromise<GetBusinessShopDocumentAggregateType<T>>

    /**
     * Group by BusinessShopDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessShopDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessShopDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessShopDocumentGroupByArgs['orderBy'] }
        : { orderBy?: BusinessShopDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessShopDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessShopDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessShopDocument model
   */
  readonly fields: BusinessShopDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessShopDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessShopDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessUuidDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessUuidDefaultArgs<ExtArgs>>): Prisma__BusinessUuidClient<$Result.GetResult<Prisma.$BusinessUuidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusinessShopDocument model
   */
  interface BusinessShopDocumentFieldRefs {
    readonly id: FieldRef<"BusinessShopDocument", 'Int'>
    readonly uuid: FieldRef<"BusinessShopDocument", 'String'>
    readonly gst_nu: FieldRef<"BusinessShopDocument", 'String'>
    readonly gst_photo_id: FieldRef<"BusinessShopDocument", 'String'>
    readonly shoplicense_nu: FieldRef<"BusinessShopDocument", 'String'>
    readonly shoplicense_photo_id: FieldRef<"BusinessShopDocument", 'String'>
    readonly udhayma_nu: FieldRef<"BusinessShopDocument", 'String'>
    readonly udhayma_photo_id: FieldRef<"BusinessShopDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BusinessShopDocument findUnique
   */
  export type BusinessShopDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessShopDocument to fetch.
     */
    where: BusinessShopDocumentWhereUniqueInput
  }

  /**
   * BusinessShopDocument findUniqueOrThrow
   */
  export type BusinessShopDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessShopDocument to fetch.
     */
    where: BusinessShopDocumentWhereUniqueInput
  }

  /**
   * BusinessShopDocument findFirst
   */
  export type BusinessShopDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessShopDocument to fetch.
     */
    where?: BusinessShopDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessShopDocuments to fetch.
     */
    orderBy?: BusinessShopDocumentOrderByWithRelationInput | BusinessShopDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessShopDocuments.
     */
    cursor?: BusinessShopDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessShopDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessShopDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessShopDocuments.
     */
    distinct?: BusinessShopDocumentScalarFieldEnum | BusinessShopDocumentScalarFieldEnum[]
  }

  /**
   * BusinessShopDocument findFirstOrThrow
   */
  export type BusinessShopDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessShopDocument to fetch.
     */
    where?: BusinessShopDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessShopDocuments to fetch.
     */
    orderBy?: BusinessShopDocumentOrderByWithRelationInput | BusinessShopDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessShopDocuments.
     */
    cursor?: BusinessShopDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessShopDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessShopDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessShopDocuments.
     */
    distinct?: BusinessShopDocumentScalarFieldEnum | BusinessShopDocumentScalarFieldEnum[]
  }

  /**
   * BusinessShopDocument findMany
   */
  export type BusinessShopDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    /**
     * Filter, which BusinessShopDocuments to fetch.
     */
    where?: BusinessShopDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessShopDocuments to fetch.
     */
    orderBy?: BusinessShopDocumentOrderByWithRelationInput | BusinessShopDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessShopDocuments.
     */
    cursor?: BusinessShopDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessShopDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessShopDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessShopDocuments.
     */
    distinct?: BusinessShopDocumentScalarFieldEnum | BusinessShopDocumentScalarFieldEnum[]
  }

  /**
   * BusinessShopDocument create
   */
  export type BusinessShopDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a BusinessShopDocument.
     */
    data: XOR<BusinessShopDocumentCreateInput, BusinessShopDocumentUncheckedCreateInput>
  }

  /**
   * BusinessShopDocument createMany
   */
  export type BusinessShopDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessShopDocuments.
     */
    data: BusinessShopDocumentCreateManyInput | BusinessShopDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusinessShopDocument createManyAndReturn
   */
  export type BusinessShopDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many BusinessShopDocuments.
     */
    data: BusinessShopDocumentCreateManyInput | BusinessShopDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessShopDocument update
   */
  export type BusinessShopDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a BusinessShopDocument.
     */
    data: XOR<BusinessShopDocumentUpdateInput, BusinessShopDocumentUncheckedUpdateInput>
    /**
     * Choose, which BusinessShopDocument to update.
     */
    where: BusinessShopDocumentWhereUniqueInput
  }

  /**
   * BusinessShopDocument updateMany
   */
  export type BusinessShopDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessShopDocuments.
     */
    data: XOR<BusinessShopDocumentUpdateManyMutationInput, BusinessShopDocumentUncheckedUpdateManyInput>
    /**
     * Filter which BusinessShopDocuments to update
     */
    where?: BusinessShopDocumentWhereInput
    /**
     * Limit how many BusinessShopDocuments to update.
     */
    limit?: number
  }

  /**
   * BusinessShopDocument updateManyAndReturn
   */
  export type BusinessShopDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * The data used to update BusinessShopDocuments.
     */
    data: XOR<BusinessShopDocumentUpdateManyMutationInput, BusinessShopDocumentUncheckedUpdateManyInput>
    /**
     * Filter which BusinessShopDocuments to update
     */
    where?: BusinessShopDocumentWhereInput
    /**
     * Limit how many BusinessShopDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusinessShopDocument upsert
   */
  export type BusinessShopDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the BusinessShopDocument to update in case it exists.
     */
    where: BusinessShopDocumentWhereUniqueInput
    /**
     * In case the BusinessShopDocument found by the `where` argument doesn't exist, create a new BusinessShopDocument with this data.
     */
    create: XOR<BusinessShopDocumentCreateInput, BusinessShopDocumentUncheckedCreateInput>
    /**
     * In case the BusinessShopDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessShopDocumentUpdateInput, BusinessShopDocumentUncheckedUpdateInput>
  }

  /**
   * BusinessShopDocument delete
   */
  export type BusinessShopDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
    /**
     * Filter which BusinessShopDocument to delete.
     */
    where: BusinessShopDocumentWhereUniqueInput
  }

  /**
   * BusinessShopDocument deleteMany
   */
  export type BusinessShopDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessShopDocuments to delete
     */
    where?: BusinessShopDocumentWhereInput
    /**
     * Limit how many BusinessShopDocuments to delete.
     */
    limit?: number
  }

  /**
   * BusinessShopDocument without action
   */
  export type BusinessShopDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessShopDocument
     */
    select?: BusinessShopDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusinessShopDocument
     */
    omit?: BusinessShopDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessShopDocumentInclude<ExtArgs> | null
  }


  /**
   * Model ErrorLog
   */

  export type AggregateErrorLog = {
    _count: ErrorLogCountAggregateOutputType | null
    _avg: ErrorLogAvgAggregateOutputType | null
    _sum: ErrorLogSumAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  export type ErrorLogAvgAggregateOutputType = {
    id: number | null
  }

  export type ErrorLogSumAggregateOutputType = {
    id: number | null
  }

  export type ErrorLogMinAggregateOutputType = {
    id: number | null
    project_name: string | null
    error_id: string | null
    error_type: string | null
    user_footprint: string | null
    api: string | null
    created_at: Date | null
  }

  export type ErrorLogMaxAggregateOutputType = {
    id: number | null
    project_name: string | null
    error_id: string | null
    error_type: string | null
    user_footprint: string | null
    api: string | null
    created_at: Date | null
  }

  export type ErrorLogCountAggregateOutputType = {
    id: number
    project_name: number
    error_id: number
    error_type: number
    error: number
    user_footprint: number
    api: number
    req_body: number
    req_params: number
    req_query: number
    created_at: number
    _all: number
  }


  export type ErrorLogAvgAggregateInputType = {
    id?: true
  }

  export type ErrorLogSumAggregateInputType = {
    id?: true
  }

  export type ErrorLogMinAggregateInputType = {
    id?: true
    project_name?: true
    error_id?: true
    error_type?: true
    user_footprint?: true
    api?: true
    created_at?: true
  }

  export type ErrorLogMaxAggregateInputType = {
    id?: true
    project_name?: true
    error_id?: true
    error_type?: true
    user_footprint?: true
    api?: true
    created_at?: true
  }

  export type ErrorLogCountAggregateInputType = {
    id?: true
    project_name?: true
    error_id?: true
    error_type?: true
    error?: true
    user_footprint?: true
    api?: true
    req_body?: true
    req_params?: true
    req_query?: true
    created_at?: true
    _all?: true
  }

  export type ErrorLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLog to aggregate.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ErrorLogs
    **/
    _count?: true | ErrorLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ErrorLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ErrorLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorLogMaxAggregateInputType
  }

  export type GetErrorLogAggregateType<T extends ErrorLogAggregateArgs> = {
        [P in keyof T & keyof AggregateErrorLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErrorLog[P]>
      : GetScalarType<T[P], AggregateErrorLog[P]>
  }




  export type ErrorLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorLogWhereInput
    orderBy?: ErrorLogOrderByWithAggregationInput | ErrorLogOrderByWithAggregationInput[]
    by: ErrorLogScalarFieldEnum[] | ErrorLogScalarFieldEnum
    having?: ErrorLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorLogCountAggregateInputType | true
    _avg?: ErrorLogAvgAggregateInputType
    _sum?: ErrorLogSumAggregateInputType
    _min?: ErrorLogMinAggregateInputType
    _max?: ErrorLogMaxAggregateInputType
  }

  export type ErrorLogGroupByOutputType = {
    id: number
    project_name: string
    error_id: string
    error_type: string
    error: JsonValue
    user_footprint: string | null
    api: string
    req_body: JsonValue | null
    req_params: JsonValue | null
    req_query: JsonValue | null
    created_at: Date
    _count: ErrorLogCountAggregateOutputType | null
    _avg: ErrorLogAvgAggregateOutputType | null
    _sum: ErrorLogSumAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  type GetErrorLogGroupByPayload<T extends ErrorLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
        }
      >
    >


  export type ErrorLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_name?: boolean
    error_id?: boolean
    error_type?: boolean
    error?: boolean
    user_footprint?: boolean
    api?: boolean
    req_body?: boolean
    req_params?: boolean
    req_query?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_name?: boolean
    error_id?: boolean
    error_type?: boolean
    error?: boolean
    user_footprint?: boolean
    api?: boolean
    req_body?: boolean
    req_params?: boolean
    req_query?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    project_name?: boolean
    error_id?: boolean
    error_type?: boolean
    error?: boolean
    user_footprint?: boolean
    api?: boolean
    req_body?: boolean
    req_params?: boolean
    req_query?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectScalar = {
    id?: boolean
    project_name?: boolean
    error_id?: boolean
    error_type?: boolean
    error?: boolean
    user_footprint?: boolean
    api?: boolean
    req_body?: boolean
    req_params?: boolean
    req_query?: boolean
    created_at?: boolean
  }

  export type ErrorLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "project_name" | "error_id" | "error_type" | "error" | "user_footprint" | "api" | "req_body" | "req_params" | "req_query" | "created_at", ExtArgs["result"]["errorLog"]>

  export type $ErrorLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ErrorLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      project_name: string
      error_id: string
      error_type: string
      error: Prisma.JsonValue
      user_footprint: string | null
      api: string
      req_body: Prisma.JsonValue | null
      req_params: Prisma.JsonValue | null
      req_query: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["errorLog"]>
    composites: {}
  }

  type ErrorLogGetPayload<S extends boolean | null | undefined | ErrorLogDefaultArgs> = $Result.GetResult<Prisma.$ErrorLogPayload, S>

  type ErrorLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ErrorLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ErrorLogCountAggregateInputType | true
    }

  export interface ErrorLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ErrorLog'], meta: { name: 'ErrorLog' } }
    /**
     * Find zero or one ErrorLog that matches the filter.
     * @param {ErrorLogFindUniqueArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ErrorLogFindUniqueArgs>(args: SelectSubset<T, ErrorLogFindUniqueArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ErrorLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ErrorLogFindUniqueOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ErrorLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ErrorLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ErrorLogFindFirstArgs>(args?: SelectSubset<T, ErrorLogFindFirstArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ErrorLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ErrorLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ErrorLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany()
     * 
     * // Get first 10 ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ErrorLogFindManyArgs>(args?: SelectSubset<T, ErrorLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ErrorLog.
     * @param {ErrorLogCreateArgs} args - Arguments to create a ErrorLog.
     * @example
     * // Create one ErrorLog
     * const ErrorLog = await prisma.errorLog.create({
     *   data: {
     *     // ... data to create a ErrorLog
     *   }
     * })
     * 
     */
    create<T extends ErrorLogCreateArgs>(args: SelectSubset<T, ErrorLogCreateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ErrorLogs.
     * @param {ErrorLogCreateManyArgs} args - Arguments to create many ErrorLogs.
     * @example
     * // Create many ErrorLogs
     * const errorLog = await prisma.errorLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ErrorLogCreateManyArgs>(args?: SelectSubset<T, ErrorLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ErrorLogs and returns the data saved in the database.
     * @param {ErrorLogCreateManyAndReturnArgs} args - Arguments to create many ErrorLogs.
     * @example
     * // Create many ErrorLogs
     * const errorLog = await prisma.errorLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ErrorLogs and only return the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ErrorLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ErrorLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ErrorLog.
     * @param {ErrorLogDeleteArgs} args - Arguments to delete one ErrorLog.
     * @example
     * // Delete one ErrorLog
     * const ErrorLog = await prisma.errorLog.delete({
     *   where: {
     *     // ... filter to delete one ErrorLog
     *   }
     * })
     * 
     */
    delete<T extends ErrorLogDeleteArgs>(args: SelectSubset<T, ErrorLogDeleteArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ErrorLog.
     * @param {ErrorLogUpdateArgs} args - Arguments to update one ErrorLog.
     * @example
     * // Update one ErrorLog
     * const errorLog = await prisma.errorLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ErrorLogUpdateArgs>(args: SelectSubset<T, ErrorLogUpdateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ErrorLogs.
     * @param {ErrorLogDeleteManyArgs} args - Arguments to filter ErrorLogs to delete.
     * @example
     * // Delete a few ErrorLogs
     * const { count } = await prisma.errorLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ErrorLogDeleteManyArgs>(args?: SelectSubset<T, ErrorLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ErrorLogs
     * const errorLog = await prisma.errorLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ErrorLogUpdateManyArgs>(args: SelectSubset<T, ErrorLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorLogs and returns the data updated in the database.
     * @param {ErrorLogUpdateManyAndReturnArgs} args - Arguments to update many ErrorLogs.
     * @example
     * // Update many ErrorLogs
     * const errorLog = await prisma.errorLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ErrorLogs and only return the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ErrorLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ErrorLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ErrorLog.
     * @param {ErrorLogUpsertArgs} args - Arguments to update or create a ErrorLog.
     * @example
     * // Update or create a ErrorLog
     * const errorLog = await prisma.errorLog.upsert({
     *   create: {
     *     // ... data to create a ErrorLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ErrorLog we want to update
     *   }
     * })
     */
    upsert<T extends ErrorLogUpsertArgs>(args: SelectSubset<T, ErrorLogUpsertArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogCountArgs} args - Arguments to filter ErrorLogs to count.
     * @example
     * // Count the number of ErrorLogs
     * const count = await prisma.errorLog.count({
     *   where: {
     *     // ... the filter for the ErrorLogs we want to count
     *   }
     * })
    **/
    count<T extends ErrorLogCountArgs>(
      args?: Subset<T, ErrorLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ErrorLogAggregateArgs>(args: Subset<T, ErrorLogAggregateArgs>): Prisma.PrismaPromise<GetErrorLogAggregateType<T>>

    /**
     * Group by ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ErrorLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErrorLogGroupByArgs['orderBy'] }
        : { orderBy?: ErrorLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ErrorLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ErrorLog model
   */
  readonly fields: ErrorLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ErrorLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErrorLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ErrorLog model
   */
  interface ErrorLogFieldRefs {
    readonly id: FieldRef<"ErrorLog", 'Int'>
    readonly project_name: FieldRef<"ErrorLog", 'String'>
    readonly error_id: FieldRef<"ErrorLog", 'String'>
    readonly error_type: FieldRef<"ErrorLog", 'String'>
    readonly error: FieldRef<"ErrorLog", 'Json'>
    readonly user_footprint: FieldRef<"ErrorLog", 'String'>
    readonly api: FieldRef<"ErrorLog", 'String'>
    readonly req_body: FieldRef<"ErrorLog", 'Json'>
    readonly req_params: FieldRef<"ErrorLog", 'Json'>
    readonly req_query: FieldRef<"ErrorLog", 'Json'>
    readonly created_at: FieldRef<"ErrorLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ErrorLog findUnique
   */
  export type ErrorLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findUniqueOrThrow
   */
  export type ErrorLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findFirst
   */
  export type ErrorLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findFirstOrThrow
   */
  export type ErrorLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findMany
   */
  export type ErrorLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter, which ErrorLogs to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog create
   */
  export type ErrorLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ErrorLog.
     */
    data: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
  }

  /**
   * ErrorLog createMany
   */
  export type ErrorLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ErrorLogs.
     */
    data: ErrorLogCreateManyInput | ErrorLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ErrorLog createManyAndReturn
   */
  export type ErrorLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data used to create many ErrorLogs.
     */
    data: ErrorLogCreateManyInput | ErrorLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ErrorLog update
   */
  export type ErrorLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ErrorLog.
     */
    data: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
    /**
     * Choose, which ErrorLog to update.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog updateMany
   */
  export type ErrorLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ErrorLogs.
     */
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which ErrorLogs to update
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to update.
     */
    limit?: number
  }

  /**
   * ErrorLog updateManyAndReturn
   */
  export type ErrorLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data used to update ErrorLogs.
     */
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which ErrorLogs to update
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to update.
     */
    limit?: number
  }

  /**
   * ErrorLog upsert
   */
  export type ErrorLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ErrorLog to update in case it exists.
     */
    where: ErrorLogWhereUniqueInput
    /**
     * In case the ErrorLog found by the `where` argument doesn't exist, create a new ErrorLog with this data.
     */
    create: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
    /**
     * In case the ErrorLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
  }

  /**
   * ErrorLog delete
   */
  export type ErrorLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Filter which ErrorLog to delete.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog deleteMany
   */
  export type ErrorLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLogs to delete
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to delete.
     */
    limit?: number
  }

  /**
   * ErrorLog without action
   */
  export type ErrorLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BusinessUuidScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    business_type: 'business_type',
    is_form_completed: 'is_form_completed',
    is_verified: 'is_verified',
    created_at: 'created_at'
  };

  export type BusinessUuidScalarFieldEnum = (typeof BusinessUuidScalarFieldEnum)[keyof typeof BusinessUuidScalarFieldEnum]


  export const BusinessOwnerScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    firstname: 'firstname',
    middlename: 'middlename',
    lastname: 'lastname',
    email: 'email',
    mobile: 'mobile'
  };

  export type BusinessOwnerScalarFieldEnum = (typeof BusinessOwnerScalarFieldEnum)[keyof typeof BusinessOwnerScalarFieldEnum]


  export const BusinessPhotoScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    photo_id: 'photo_id',
    upload_at: 'upload_at'
  };

  export type BusinessPhotoScalarFieldEnum = (typeof BusinessPhotoScalarFieldEnum)[keyof typeof BusinessPhotoScalarFieldEnum]


  export const BusinessOwnerDocumentScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    aadharcard_nu: 'aadharcard_nu',
    aadharcard_photo_id: 'aadharcard_photo_id',
    pancard_nu: 'pancard_nu',
    pancard_photo_id: 'pancard_photo_id'
  };

  export type BusinessOwnerDocumentScalarFieldEnum = (typeof BusinessOwnerDocumentScalarFieldEnum)[keyof typeof BusinessOwnerDocumentScalarFieldEnum]


  export const BusinessShopDocumentScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    gst_nu: 'gst_nu',
    gst_photo_id: 'gst_photo_id',
    shoplicense_nu: 'shoplicense_nu',
    shoplicense_photo_id: 'shoplicense_photo_id',
    udhayma_nu: 'udhayma_nu',
    udhayma_photo_id: 'udhayma_photo_id'
  };

  export type BusinessShopDocumentScalarFieldEnum = (typeof BusinessShopDocumentScalarFieldEnum)[keyof typeof BusinessShopDocumentScalarFieldEnum]


  export const ErrorLogScalarFieldEnum: {
    id: 'id',
    project_name: 'project_name',
    error_id: 'error_id',
    error_type: 'error_type',
    error: 'error',
    user_footprint: 'user_footprint',
    api: 'api',
    req_body: 'req_body',
    req_params: 'req_params',
    req_query: 'req_query',
    created_at: 'created_at'
  };

  export type ErrorLogScalarFieldEnum = (typeof ErrorLogScalarFieldEnum)[keyof typeof ErrorLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BusinessUuidWhereInput = {
    AND?: BusinessUuidWhereInput | BusinessUuidWhereInput[]
    OR?: BusinessUuidWhereInput[]
    NOT?: BusinessUuidWhereInput | BusinessUuidWhereInput[]
    id?: IntFilter<"BusinessUuid"> | number
    uuid?: UuidFilter<"BusinessUuid"> | string
    business_type?: StringFilter<"BusinessUuid"> | string
    is_form_completed?: BoolFilter<"BusinessUuid"> | boolean
    is_verified?: BoolFilter<"BusinessUuid"> | boolean
    created_at?: DateTimeFilter<"BusinessUuid"> | Date | string
    owners?: BusinessOwnerListRelationFilter
    photos?: BusinessPhotoListRelationFilter
    owner_documents?: XOR<BusinessOwnerDocumentNullableScalarRelationFilter, BusinessOwnerDocumentWhereInput> | null
    shop_documents?: XOR<BusinessShopDocumentNullableScalarRelationFilter, BusinessShopDocumentWhereInput> | null
  }

  export type BusinessUuidOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    business_type?: SortOrder
    is_form_completed?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    owners?: BusinessOwnerOrderByRelationAggregateInput
    photos?: BusinessPhotoOrderByRelationAggregateInput
    owner_documents?: BusinessOwnerDocumentOrderByWithRelationInput
    shop_documents?: BusinessShopDocumentOrderByWithRelationInput
  }

  export type BusinessUuidWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: BusinessUuidWhereInput | BusinessUuidWhereInput[]
    OR?: BusinessUuidWhereInput[]
    NOT?: BusinessUuidWhereInput | BusinessUuidWhereInput[]
    business_type?: StringFilter<"BusinessUuid"> | string
    is_form_completed?: BoolFilter<"BusinessUuid"> | boolean
    is_verified?: BoolFilter<"BusinessUuid"> | boolean
    created_at?: DateTimeFilter<"BusinessUuid"> | Date | string
    owners?: BusinessOwnerListRelationFilter
    photos?: BusinessPhotoListRelationFilter
    owner_documents?: XOR<BusinessOwnerDocumentNullableScalarRelationFilter, BusinessOwnerDocumentWhereInput> | null
    shop_documents?: XOR<BusinessShopDocumentNullableScalarRelationFilter, BusinessShopDocumentWhereInput> | null
  }, "id" | "uuid">

  export type BusinessUuidOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    business_type?: SortOrder
    is_form_completed?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
    _count?: BusinessUuidCountOrderByAggregateInput
    _avg?: BusinessUuidAvgOrderByAggregateInput
    _max?: BusinessUuidMaxOrderByAggregateInput
    _min?: BusinessUuidMinOrderByAggregateInput
    _sum?: BusinessUuidSumOrderByAggregateInput
  }

  export type BusinessUuidScalarWhereWithAggregatesInput = {
    AND?: BusinessUuidScalarWhereWithAggregatesInput | BusinessUuidScalarWhereWithAggregatesInput[]
    OR?: BusinessUuidScalarWhereWithAggregatesInput[]
    NOT?: BusinessUuidScalarWhereWithAggregatesInput | BusinessUuidScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessUuid"> | number
    uuid?: UuidWithAggregatesFilter<"BusinessUuid"> | string
    business_type?: StringWithAggregatesFilter<"BusinessUuid"> | string
    is_form_completed?: BoolWithAggregatesFilter<"BusinessUuid"> | boolean
    is_verified?: BoolWithAggregatesFilter<"BusinessUuid"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"BusinessUuid"> | Date | string
  }

  export type BusinessOwnerWhereInput = {
    AND?: BusinessOwnerWhereInput | BusinessOwnerWhereInput[]
    OR?: BusinessOwnerWhereInput[]
    NOT?: BusinessOwnerWhereInput | BusinessOwnerWhereInput[]
    id?: IntFilter<"BusinessOwner"> | number
    uuid?: UuidFilter<"BusinessOwner"> | string
    firstname?: StringFilter<"BusinessOwner"> | string
    middlename?: StringNullableFilter<"BusinessOwner"> | string | null
    lastname?: StringFilter<"BusinessOwner"> | string
    email?: StringFilter<"BusinessOwner"> | string
    mobile?: StringFilter<"BusinessOwner"> | string
    business?: XOR<BusinessUuidScalarRelationFilter, BusinessUuidWhereInput>
  }

  export type BusinessOwnerOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    business?: BusinessUuidOrderByWithRelationInput
  }

  export type BusinessOwnerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid_email?: BusinessOwnerUuidEmailCompoundUniqueInput
    uuid_mobile?: BusinessOwnerUuidMobileCompoundUniqueInput
    AND?: BusinessOwnerWhereInput | BusinessOwnerWhereInput[]
    OR?: BusinessOwnerWhereInput[]
    NOT?: BusinessOwnerWhereInput | BusinessOwnerWhereInput[]
    uuid?: UuidFilter<"BusinessOwner"> | string
    firstname?: StringFilter<"BusinessOwner"> | string
    middlename?: StringNullableFilter<"BusinessOwner"> | string | null
    lastname?: StringFilter<"BusinessOwner"> | string
    email?: StringFilter<"BusinessOwner"> | string
    mobile?: StringFilter<"BusinessOwner"> | string
    business?: XOR<BusinessUuidScalarRelationFilter, BusinessUuidWhereInput>
  }, "id" | "uuid_email" | "uuid_mobile">

  export type BusinessOwnerOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrderInput | SortOrder
    lastname?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    _count?: BusinessOwnerCountOrderByAggregateInput
    _avg?: BusinessOwnerAvgOrderByAggregateInput
    _max?: BusinessOwnerMaxOrderByAggregateInput
    _min?: BusinessOwnerMinOrderByAggregateInput
    _sum?: BusinessOwnerSumOrderByAggregateInput
  }

  export type BusinessOwnerScalarWhereWithAggregatesInput = {
    AND?: BusinessOwnerScalarWhereWithAggregatesInput | BusinessOwnerScalarWhereWithAggregatesInput[]
    OR?: BusinessOwnerScalarWhereWithAggregatesInput[]
    NOT?: BusinessOwnerScalarWhereWithAggregatesInput | BusinessOwnerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessOwner"> | number
    uuid?: UuidWithAggregatesFilter<"BusinessOwner"> | string
    firstname?: StringWithAggregatesFilter<"BusinessOwner"> | string
    middlename?: StringNullableWithAggregatesFilter<"BusinessOwner"> | string | null
    lastname?: StringWithAggregatesFilter<"BusinessOwner"> | string
    email?: StringWithAggregatesFilter<"BusinessOwner"> | string
    mobile?: StringWithAggregatesFilter<"BusinessOwner"> | string
  }

  export type BusinessPhotoWhereInput = {
    AND?: BusinessPhotoWhereInput | BusinessPhotoWhereInput[]
    OR?: BusinessPhotoWhereInput[]
    NOT?: BusinessPhotoWhereInput | BusinessPhotoWhereInput[]
    id?: IntFilter<"BusinessPhoto"> | number
    uuid?: UuidFilter<"BusinessPhoto"> | string
    photo_id?: StringFilter<"BusinessPhoto"> | string
    upload_at?: DateTimeFilter<"BusinessPhoto"> | Date | string
    business?: XOR<BusinessUuidScalarRelationFilter, BusinessUuidWhereInput>
  }

  export type BusinessPhotoOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    photo_id?: SortOrder
    upload_at?: SortOrder
    business?: BusinessUuidOrderByWithRelationInput
  }

  export type BusinessPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    photo_id?: string
    AND?: BusinessPhotoWhereInput | BusinessPhotoWhereInput[]
    OR?: BusinessPhotoWhereInput[]
    NOT?: BusinessPhotoWhereInput | BusinessPhotoWhereInput[]
    uuid?: UuidFilter<"BusinessPhoto"> | string
    upload_at?: DateTimeFilter<"BusinessPhoto"> | Date | string
    business?: XOR<BusinessUuidScalarRelationFilter, BusinessUuidWhereInput>
  }, "id" | "photo_id">

  export type BusinessPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    photo_id?: SortOrder
    upload_at?: SortOrder
    _count?: BusinessPhotoCountOrderByAggregateInput
    _avg?: BusinessPhotoAvgOrderByAggregateInput
    _max?: BusinessPhotoMaxOrderByAggregateInput
    _min?: BusinessPhotoMinOrderByAggregateInput
    _sum?: BusinessPhotoSumOrderByAggregateInput
  }

  export type BusinessPhotoScalarWhereWithAggregatesInput = {
    AND?: BusinessPhotoScalarWhereWithAggregatesInput | BusinessPhotoScalarWhereWithAggregatesInput[]
    OR?: BusinessPhotoScalarWhereWithAggregatesInput[]
    NOT?: BusinessPhotoScalarWhereWithAggregatesInput | BusinessPhotoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessPhoto"> | number
    uuid?: UuidWithAggregatesFilter<"BusinessPhoto"> | string
    photo_id?: StringWithAggregatesFilter<"BusinessPhoto"> | string
    upload_at?: DateTimeWithAggregatesFilter<"BusinessPhoto"> | Date | string
  }

  export type BusinessOwnerDocumentWhereInput = {
    AND?: BusinessOwnerDocumentWhereInput | BusinessOwnerDocumentWhereInput[]
    OR?: BusinessOwnerDocumentWhereInput[]
    NOT?: BusinessOwnerDocumentWhereInput | BusinessOwnerDocumentWhereInput[]
    id?: IntFilter<"BusinessOwnerDocument"> | number
    uuid?: UuidFilter<"BusinessOwnerDocument"> | string
    aadharcard_nu?: StringFilter<"BusinessOwnerDocument"> | string
    aadharcard_photo_id?: StringFilter<"BusinessOwnerDocument"> | string
    pancard_nu?: StringFilter<"BusinessOwnerDocument"> | string
    pancard_photo_id?: StringFilter<"BusinessOwnerDocument"> | string
    business?: XOR<BusinessUuidScalarRelationFilter, BusinessUuidWhereInput>
  }

  export type BusinessOwnerDocumentOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    aadharcard_nu?: SortOrder
    aadharcard_photo_id?: SortOrder
    pancard_nu?: SortOrder
    pancard_photo_id?: SortOrder
    business?: BusinessUuidOrderByWithRelationInput
  }

  export type BusinessOwnerDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: BusinessOwnerDocumentWhereInput | BusinessOwnerDocumentWhereInput[]
    OR?: BusinessOwnerDocumentWhereInput[]
    NOT?: BusinessOwnerDocumentWhereInput | BusinessOwnerDocumentWhereInput[]
    aadharcard_nu?: StringFilter<"BusinessOwnerDocument"> | string
    aadharcard_photo_id?: StringFilter<"BusinessOwnerDocument"> | string
    pancard_nu?: StringFilter<"BusinessOwnerDocument"> | string
    pancard_photo_id?: StringFilter<"BusinessOwnerDocument"> | string
    business?: XOR<BusinessUuidScalarRelationFilter, BusinessUuidWhereInput>
  }, "id" | "uuid">

  export type BusinessOwnerDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    aadharcard_nu?: SortOrder
    aadharcard_photo_id?: SortOrder
    pancard_nu?: SortOrder
    pancard_photo_id?: SortOrder
    _count?: BusinessOwnerDocumentCountOrderByAggregateInput
    _avg?: BusinessOwnerDocumentAvgOrderByAggregateInput
    _max?: BusinessOwnerDocumentMaxOrderByAggregateInput
    _min?: BusinessOwnerDocumentMinOrderByAggregateInput
    _sum?: BusinessOwnerDocumentSumOrderByAggregateInput
  }

  export type BusinessOwnerDocumentScalarWhereWithAggregatesInput = {
    AND?: BusinessOwnerDocumentScalarWhereWithAggregatesInput | BusinessOwnerDocumentScalarWhereWithAggregatesInput[]
    OR?: BusinessOwnerDocumentScalarWhereWithAggregatesInput[]
    NOT?: BusinessOwnerDocumentScalarWhereWithAggregatesInput | BusinessOwnerDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessOwnerDocument"> | number
    uuid?: UuidWithAggregatesFilter<"BusinessOwnerDocument"> | string
    aadharcard_nu?: StringWithAggregatesFilter<"BusinessOwnerDocument"> | string
    aadharcard_photo_id?: StringWithAggregatesFilter<"BusinessOwnerDocument"> | string
    pancard_nu?: StringWithAggregatesFilter<"BusinessOwnerDocument"> | string
    pancard_photo_id?: StringWithAggregatesFilter<"BusinessOwnerDocument"> | string
  }

  export type BusinessShopDocumentWhereInput = {
    AND?: BusinessShopDocumentWhereInput | BusinessShopDocumentWhereInput[]
    OR?: BusinessShopDocumentWhereInput[]
    NOT?: BusinessShopDocumentWhereInput | BusinessShopDocumentWhereInput[]
    id?: IntFilter<"BusinessShopDocument"> | number
    uuid?: UuidFilter<"BusinessShopDocument"> | string
    gst_nu?: StringNullableFilter<"BusinessShopDocument"> | string | null
    gst_photo_id?: StringNullableFilter<"BusinessShopDocument"> | string | null
    shoplicense_nu?: StringNullableFilter<"BusinessShopDocument"> | string | null
    shoplicense_photo_id?: StringNullableFilter<"BusinessShopDocument"> | string | null
    udhayma_nu?: StringNullableFilter<"BusinessShopDocument"> | string | null
    udhayma_photo_id?: StringNullableFilter<"BusinessShopDocument"> | string | null
    business?: XOR<BusinessUuidScalarRelationFilter, BusinessUuidWhereInput>
  }

  export type BusinessShopDocumentOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    gst_nu?: SortOrderInput | SortOrder
    gst_photo_id?: SortOrderInput | SortOrder
    shoplicense_nu?: SortOrderInput | SortOrder
    shoplicense_photo_id?: SortOrderInput | SortOrder
    udhayma_nu?: SortOrderInput | SortOrder
    udhayma_photo_id?: SortOrderInput | SortOrder
    business?: BusinessUuidOrderByWithRelationInput
  }

  export type BusinessShopDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: BusinessShopDocumentWhereInput | BusinessShopDocumentWhereInput[]
    OR?: BusinessShopDocumentWhereInput[]
    NOT?: BusinessShopDocumentWhereInput | BusinessShopDocumentWhereInput[]
    gst_nu?: StringNullableFilter<"BusinessShopDocument"> | string | null
    gst_photo_id?: StringNullableFilter<"BusinessShopDocument"> | string | null
    shoplicense_nu?: StringNullableFilter<"BusinessShopDocument"> | string | null
    shoplicense_photo_id?: StringNullableFilter<"BusinessShopDocument"> | string | null
    udhayma_nu?: StringNullableFilter<"BusinessShopDocument"> | string | null
    udhayma_photo_id?: StringNullableFilter<"BusinessShopDocument"> | string | null
    business?: XOR<BusinessUuidScalarRelationFilter, BusinessUuidWhereInput>
  }, "id" | "uuid">

  export type BusinessShopDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    gst_nu?: SortOrderInput | SortOrder
    gst_photo_id?: SortOrderInput | SortOrder
    shoplicense_nu?: SortOrderInput | SortOrder
    shoplicense_photo_id?: SortOrderInput | SortOrder
    udhayma_nu?: SortOrderInput | SortOrder
    udhayma_photo_id?: SortOrderInput | SortOrder
    _count?: BusinessShopDocumentCountOrderByAggregateInput
    _avg?: BusinessShopDocumentAvgOrderByAggregateInput
    _max?: BusinessShopDocumentMaxOrderByAggregateInput
    _min?: BusinessShopDocumentMinOrderByAggregateInput
    _sum?: BusinessShopDocumentSumOrderByAggregateInput
  }

  export type BusinessShopDocumentScalarWhereWithAggregatesInput = {
    AND?: BusinessShopDocumentScalarWhereWithAggregatesInput | BusinessShopDocumentScalarWhereWithAggregatesInput[]
    OR?: BusinessShopDocumentScalarWhereWithAggregatesInput[]
    NOT?: BusinessShopDocumentScalarWhereWithAggregatesInput | BusinessShopDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessShopDocument"> | number
    uuid?: UuidWithAggregatesFilter<"BusinessShopDocument"> | string
    gst_nu?: StringNullableWithAggregatesFilter<"BusinessShopDocument"> | string | null
    gst_photo_id?: StringNullableWithAggregatesFilter<"BusinessShopDocument"> | string | null
    shoplicense_nu?: StringNullableWithAggregatesFilter<"BusinessShopDocument"> | string | null
    shoplicense_photo_id?: StringNullableWithAggregatesFilter<"BusinessShopDocument"> | string | null
    udhayma_nu?: StringNullableWithAggregatesFilter<"BusinessShopDocument"> | string | null
    udhayma_photo_id?: StringNullableWithAggregatesFilter<"BusinessShopDocument"> | string | null
  }

  export type ErrorLogWhereInput = {
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    id?: IntFilter<"ErrorLog"> | number
    project_name?: StringFilter<"ErrorLog"> | string
    error_id?: StringFilter<"ErrorLog"> | string
    error_type?: StringFilter<"ErrorLog"> | string
    error?: JsonFilter<"ErrorLog">
    user_footprint?: StringNullableFilter<"ErrorLog"> | string | null
    api?: StringFilter<"ErrorLog"> | string
    req_body?: JsonNullableFilter<"ErrorLog">
    req_params?: JsonNullableFilter<"ErrorLog">
    req_query?: JsonNullableFilter<"ErrorLog">
    created_at?: DateTimeFilter<"ErrorLog"> | Date | string
  }

  export type ErrorLogOrderByWithRelationInput = {
    id?: SortOrder
    project_name?: SortOrder
    error_id?: SortOrder
    error_type?: SortOrder
    error?: SortOrder
    user_footprint?: SortOrderInput | SortOrder
    api?: SortOrder
    req_body?: SortOrderInput | SortOrder
    req_params?: SortOrderInput | SortOrder
    req_query?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type ErrorLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    project_name?: StringFilter<"ErrorLog"> | string
    error_id?: StringFilter<"ErrorLog"> | string
    error_type?: StringFilter<"ErrorLog"> | string
    error?: JsonFilter<"ErrorLog">
    user_footprint?: StringNullableFilter<"ErrorLog"> | string | null
    api?: StringFilter<"ErrorLog"> | string
    req_body?: JsonNullableFilter<"ErrorLog">
    req_params?: JsonNullableFilter<"ErrorLog">
    req_query?: JsonNullableFilter<"ErrorLog">
    created_at?: DateTimeFilter<"ErrorLog"> | Date | string
  }, "id">

  export type ErrorLogOrderByWithAggregationInput = {
    id?: SortOrder
    project_name?: SortOrder
    error_id?: SortOrder
    error_type?: SortOrder
    error?: SortOrder
    user_footprint?: SortOrderInput | SortOrder
    api?: SortOrder
    req_body?: SortOrderInput | SortOrder
    req_params?: SortOrderInput | SortOrder
    req_query?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ErrorLogCountOrderByAggregateInput
    _avg?: ErrorLogAvgOrderByAggregateInput
    _max?: ErrorLogMaxOrderByAggregateInput
    _min?: ErrorLogMinOrderByAggregateInput
    _sum?: ErrorLogSumOrderByAggregateInput
  }

  export type ErrorLogScalarWhereWithAggregatesInput = {
    AND?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    OR?: ErrorLogScalarWhereWithAggregatesInput[]
    NOT?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ErrorLog"> | number
    project_name?: StringWithAggregatesFilter<"ErrorLog"> | string
    error_id?: StringWithAggregatesFilter<"ErrorLog"> | string
    error_type?: StringWithAggregatesFilter<"ErrorLog"> | string
    error?: JsonWithAggregatesFilter<"ErrorLog">
    user_footprint?: StringNullableWithAggregatesFilter<"ErrorLog"> | string | null
    api?: StringWithAggregatesFilter<"ErrorLog"> | string
    req_body?: JsonNullableWithAggregatesFilter<"ErrorLog">
    req_params?: JsonNullableWithAggregatesFilter<"ErrorLog">
    req_query?: JsonNullableWithAggregatesFilter<"ErrorLog">
    created_at?: DateTimeWithAggregatesFilter<"ErrorLog"> | Date | string
  }

  export type BusinessUuidCreateInput = {
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    owners?: BusinessOwnerCreateNestedManyWithoutBusinessInput
    photos?: BusinessPhotoCreateNestedManyWithoutBusinessInput
    owner_documents?: BusinessOwnerDocumentCreateNestedOneWithoutBusinessInput
    shop_documents?: BusinessShopDocumentCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidUncheckedCreateInput = {
    id?: number
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    owners?: BusinessOwnerUncheckedCreateNestedManyWithoutBusinessInput
    photos?: BusinessPhotoUncheckedCreateNestedManyWithoutBusinessInput
    owner_documents?: BusinessOwnerDocumentUncheckedCreateNestedOneWithoutBusinessInput
    shop_documents?: BusinessShopDocumentUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: BusinessOwnerUpdateManyWithoutBusinessNestedInput
    photos?: BusinessPhotoUpdateManyWithoutBusinessNestedInput
    owner_documents?: BusinessOwnerDocumentUpdateOneWithoutBusinessNestedInput
    shop_documents?: BusinessShopDocumentUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUuidUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: BusinessOwnerUncheckedUpdateManyWithoutBusinessNestedInput
    photos?: BusinessPhotoUncheckedUpdateManyWithoutBusinessNestedInput
    owner_documents?: BusinessOwnerDocumentUncheckedUpdateOneWithoutBusinessNestedInput
    shop_documents?: BusinessShopDocumentUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUuidCreateManyInput = {
    id?: number
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
  }

  export type BusinessUuidUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUuidUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessOwnerCreateInput = {
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    mobile: string
    business: BusinessUuidCreateNestedOneWithoutOwnersInput
  }

  export type BusinessOwnerUncheckedCreateInput = {
    id?: number
    uuid: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    mobile: string
  }

  export type BusinessOwnerUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    business?: BusinessUuidUpdateOneRequiredWithoutOwnersNestedInput
  }

  export type BusinessOwnerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessOwnerCreateManyInput = {
    id?: number
    uuid: string
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    mobile: string
  }

  export type BusinessOwnerUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessOwnerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessPhotoCreateInput = {
    photo_id: string
    upload_at?: Date | string
    business: BusinessUuidCreateNestedOneWithoutPhotosInput
  }

  export type BusinessPhotoUncheckedCreateInput = {
    id?: number
    uuid: string
    photo_id: string
    upload_at?: Date | string
  }

  export type BusinessPhotoUpdateInput = {
    photo_id?: StringFieldUpdateOperationsInput | string
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUuidUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type BusinessPhotoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    photo_id?: StringFieldUpdateOperationsInput | string
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPhotoCreateManyInput = {
    id?: number
    uuid: string
    photo_id: string
    upload_at?: Date | string
  }

  export type BusinessPhotoUpdateManyMutationInput = {
    photo_id?: StringFieldUpdateOperationsInput | string
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPhotoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    photo_id?: StringFieldUpdateOperationsInput | string
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessOwnerDocumentCreateInput = {
    aadharcard_nu: string
    aadharcard_photo_id: string
    pancard_nu: string
    pancard_photo_id: string
    business: BusinessUuidCreateNestedOneWithoutOwner_documentsInput
  }

  export type BusinessOwnerDocumentUncheckedCreateInput = {
    id?: number
    uuid: string
    aadharcard_nu: string
    aadharcard_photo_id: string
    pancard_nu: string
    pancard_photo_id: string
  }

  export type BusinessOwnerDocumentUpdateInput = {
    aadharcard_nu?: StringFieldUpdateOperationsInput | string
    aadharcard_photo_id?: StringFieldUpdateOperationsInput | string
    pancard_nu?: StringFieldUpdateOperationsInput | string
    pancard_photo_id?: StringFieldUpdateOperationsInput | string
    business?: BusinessUuidUpdateOneRequiredWithoutOwner_documentsNestedInput
  }

  export type BusinessOwnerDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    aadharcard_nu?: StringFieldUpdateOperationsInput | string
    aadharcard_photo_id?: StringFieldUpdateOperationsInput | string
    pancard_nu?: StringFieldUpdateOperationsInput | string
    pancard_photo_id?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessOwnerDocumentCreateManyInput = {
    id?: number
    uuid: string
    aadharcard_nu: string
    aadharcard_photo_id: string
    pancard_nu: string
    pancard_photo_id: string
  }

  export type BusinessOwnerDocumentUpdateManyMutationInput = {
    aadharcard_nu?: StringFieldUpdateOperationsInput | string
    aadharcard_photo_id?: StringFieldUpdateOperationsInput | string
    pancard_nu?: StringFieldUpdateOperationsInput | string
    pancard_photo_id?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessOwnerDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    aadharcard_nu?: StringFieldUpdateOperationsInput | string
    aadharcard_photo_id?: StringFieldUpdateOperationsInput | string
    pancard_nu?: StringFieldUpdateOperationsInput | string
    pancard_photo_id?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessShopDocumentCreateInput = {
    gst_nu?: string | null
    gst_photo_id?: string | null
    shoplicense_nu?: string | null
    shoplicense_photo_id?: string | null
    udhayma_nu?: string | null
    udhayma_photo_id?: string | null
    business: BusinessUuidCreateNestedOneWithoutShop_documentsInput
  }

  export type BusinessShopDocumentUncheckedCreateInput = {
    id?: number
    uuid: string
    gst_nu?: string | null
    gst_photo_id?: string | null
    shoplicense_nu?: string | null
    shoplicense_photo_id?: string | null
    udhayma_nu?: string | null
    udhayma_photo_id?: string | null
  }

  export type BusinessShopDocumentUpdateInput = {
    gst_nu?: NullableStringFieldUpdateOperationsInput | string | null
    gst_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_nu?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_nu?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    business?: BusinessUuidUpdateOneRequiredWithoutShop_documentsNestedInput
  }

  export type BusinessShopDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    gst_nu?: NullableStringFieldUpdateOperationsInput | string | null
    gst_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_nu?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_nu?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessShopDocumentCreateManyInput = {
    id?: number
    uuid: string
    gst_nu?: string | null
    gst_photo_id?: string | null
    shoplicense_nu?: string | null
    shoplicense_photo_id?: string | null
    udhayma_nu?: string | null
    udhayma_photo_id?: string | null
  }

  export type BusinessShopDocumentUpdateManyMutationInput = {
    gst_nu?: NullableStringFieldUpdateOperationsInput | string | null
    gst_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_nu?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_nu?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessShopDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    gst_nu?: NullableStringFieldUpdateOperationsInput | string | null
    gst_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_nu?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_nu?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ErrorLogCreateInput = {
    project_name: string
    error_id: string
    error_type: string
    error: JsonNullValueInput | InputJsonValue
    user_footprint?: string | null
    api: string
    req_body?: NullableJsonNullValueInput | InputJsonValue
    req_params?: NullableJsonNullValueInput | InputJsonValue
    req_query?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type ErrorLogUncheckedCreateInput = {
    id?: number
    project_name: string
    error_id: string
    error_type: string
    error: JsonNullValueInput | InputJsonValue
    user_footprint?: string | null
    api: string
    req_body?: NullableJsonNullValueInput | InputJsonValue
    req_params?: NullableJsonNullValueInput | InputJsonValue
    req_query?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type ErrorLogUpdateInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    error_id?: StringFieldUpdateOperationsInput | string
    error_type?: StringFieldUpdateOperationsInput | string
    error?: JsonNullValueInput | InputJsonValue
    user_footprint?: NullableStringFieldUpdateOperationsInput | string | null
    api?: StringFieldUpdateOperationsInput | string
    req_body?: NullableJsonNullValueInput | InputJsonValue
    req_params?: NullableJsonNullValueInput | InputJsonValue
    req_query?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    error_id?: StringFieldUpdateOperationsInput | string
    error_type?: StringFieldUpdateOperationsInput | string
    error?: JsonNullValueInput | InputJsonValue
    user_footprint?: NullableStringFieldUpdateOperationsInput | string | null
    api?: StringFieldUpdateOperationsInput | string
    req_body?: NullableJsonNullValueInput | InputJsonValue
    req_params?: NullableJsonNullValueInput | InputJsonValue
    req_query?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogCreateManyInput = {
    id?: number
    project_name: string
    error_id: string
    error_type: string
    error: JsonNullValueInput | InputJsonValue
    user_footprint?: string | null
    api: string
    req_body?: NullableJsonNullValueInput | InputJsonValue
    req_params?: NullableJsonNullValueInput | InputJsonValue
    req_query?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type ErrorLogUpdateManyMutationInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    error_id?: StringFieldUpdateOperationsInput | string
    error_type?: StringFieldUpdateOperationsInput | string
    error?: JsonNullValueInput | InputJsonValue
    user_footprint?: NullableStringFieldUpdateOperationsInput | string | null
    api?: StringFieldUpdateOperationsInput | string
    req_body?: NullableJsonNullValueInput | InputJsonValue
    req_params?: NullableJsonNullValueInput | InputJsonValue
    req_query?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    error_id?: StringFieldUpdateOperationsInput | string
    error_type?: StringFieldUpdateOperationsInput | string
    error?: JsonNullValueInput | InputJsonValue
    user_footprint?: NullableStringFieldUpdateOperationsInput | string | null
    api?: StringFieldUpdateOperationsInput | string
    req_body?: NullableJsonNullValueInput | InputJsonValue
    req_params?: NullableJsonNullValueInput | InputJsonValue
    req_query?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BusinessOwnerListRelationFilter = {
    every?: BusinessOwnerWhereInput
    some?: BusinessOwnerWhereInput
    none?: BusinessOwnerWhereInput
  }

  export type BusinessPhotoListRelationFilter = {
    every?: BusinessPhotoWhereInput
    some?: BusinessPhotoWhereInput
    none?: BusinessPhotoWhereInput
  }

  export type BusinessOwnerDocumentNullableScalarRelationFilter = {
    is?: BusinessOwnerDocumentWhereInput | null
    isNot?: BusinessOwnerDocumentWhereInput | null
  }

  export type BusinessShopDocumentNullableScalarRelationFilter = {
    is?: BusinessShopDocumentWhereInput | null
    isNot?: BusinessShopDocumentWhereInput | null
  }

  export type BusinessOwnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessUuidCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    business_type?: SortOrder
    is_form_completed?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
  }

  export type BusinessUuidAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessUuidMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    business_type?: SortOrder
    is_form_completed?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
  }

  export type BusinessUuidMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    business_type?: SortOrder
    is_form_completed?: SortOrder
    is_verified?: SortOrder
    created_at?: SortOrder
  }

  export type BusinessUuidSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BusinessUuidScalarRelationFilter = {
    is?: BusinessUuidWhereInput
    isNot?: BusinessUuidWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BusinessOwnerUuidEmailCompoundUniqueInput = {
    uuid: string
    email: string
  }

  export type BusinessOwnerUuidMobileCompoundUniqueInput = {
    uuid: string
    mobile: string
  }

  export type BusinessOwnerCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
  }

  export type BusinessOwnerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessOwnerMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
  }

  export type BusinessOwnerMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    firstname?: SortOrder
    middlename?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
  }

  export type BusinessOwnerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BusinessPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    photo_id?: SortOrder
    upload_at?: SortOrder
  }

  export type BusinessPhotoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    photo_id?: SortOrder
    upload_at?: SortOrder
  }

  export type BusinessPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    photo_id?: SortOrder
    upload_at?: SortOrder
  }

  export type BusinessPhotoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessOwnerDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    aadharcard_nu?: SortOrder
    aadharcard_photo_id?: SortOrder
    pancard_nu?: SortOrder
    pancard_photo_id?: SortOrder
  }

  export type BusinessOwnerDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessOwnerDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    aadharcard_nu?: SortOrder
    aadharcard_photo_id?: SortOrder
    pancard_nu?: SortOrder
    pancard_photo_id?: SortOrder
  }

  export type BusinessOwnerDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    aadharcard_nu?: SortOrder
    aadharcard_photo_id?: SortOrder
    pancard_nu?: SortOrder
    pancard_photo_id?: SortOrder
  }

  export type BusinessOwnerDocumentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessShopDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    gst_nu?: SortOrder
    gst_photo_id?: SortOrder
    shoplicense_nu?: SortOrder
    shoplicense_photo_id?: SortOrder
    udhayma_nu?: SortOrder
    udhayma_photo_id?: SortOrder
  }

  export type BusinessShopDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessShopDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    gst_nu?: SortOrder
    gst_photo_id?: SortOrder
    shoplicense_nu?: SortOrder
    shoplicense_photo_id?: SortOrder
    udhayma_nu?: SortOrder
    udhayma_photo_id?: SortOrder
  }

  export type BusinessShopDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    gst_nu?: SortOrder
    gst_photo_id?: SortOrder
    shoplicense_nu?: SortOrder
    shoplicense_photo_id?: SortOrder
    udhayma_nu?: SortOrder
    udhayma_photo_id?: SortOrder
  }

  export type BusinessShopDocumentSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ErrorLogCountOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    error_id?: SortOrder
    error_type?: SortOrder
    error?: SortOrder
    user_footprint?: SortOrder
    api?: SortOrder
    req_body?: SortOrder
    req_params?: SortOrder
    req_query?: SortOrder
    created_at?: SortOrder
  }

  export type ErrorLogAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ErrorLogMaxOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    error_id?: SortOrder
    error_type?: SortOrder
    user_footprint?: SortOrder
    api?: SortOrder
    created_at?: SortOrder
  }

  export type ErrorLogMinOrderByAggregateInput = {
    id?: SortOrder
    project_name?: SortOrder
    error_id?: SortOrder
    error_type?: SortOrder
    user_footprint?: SortOrder
    api?: SortOrder
    created_at?: SortOrder
  }

  export type ErrorLogSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BusinessOwnerCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessOwnerCreateWithoutBusinessInput, BusinessOwnerUncheckedCreateWithoutBusinessInput> | BusinessOwnerCreateWithoutBusinessInput[] | BusinessOwnerUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessOwnerCreateOrConnectWithoutBusinessInput | BusinessOwnerCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessOwnerCreateManyBusinessInputEnvelope
    connect?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
  }

  export type BusinessPhotoCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessPhotoCreateWithoutBusinessInput, BusinessPhotoUncheckedCreateWithoutBusinessInput> | BusinessPhotoCreateWithoutBusinessInput[] | BusinessPhotoUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessPhotoCreateOrConnectWithoutBusinessInput | BusinessPhotoCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessPhotoCreateManyBusinessInputEnvelope
    connect?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
  }

  export type BusinessOwnerDocumentCreateNestedOneWithoutBusinessInput = {
    create?: XOR<BusinessOwnerDocumentCreateWithoutBusinessInput, BusinessOwnerDocumentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessOwnerDocumentCreateOrConnectWithoutBusinessInput
    connect?: BusinessOwnerDocumentWhereUniqueInput
  }

  export type BusinessShopDocumentCreateNestedOneWithoutBusinessInput = {
    create?: XOR<BusinessShopDocumentCreateWithoutBusinessInput, BusinessShopDocumentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessShopDocumentCreateOrConnectWithoutBusinessInput
    connect?: BusinessShopDocumentWhereUniqueInput
  }

  export type BusinessOwnerUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessOwnerCreateWithoutBusinessInput, BusinessOwnerUncheckedCreateWithoutBusinessInput> | BusinessOwnerCreateWithoutBusinessInput[] | BusinessOwnerUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessOwnerCreateOrConnectWithoutBusinessInput | BusinessOwnerCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessOwnerCreateManyBusinessInputEnvelope
    connect?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
  }

  export type BusinessPhotoUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<BusinessPhotoCreateWithoutBusinessInput, BusinessPhotoUncheckedCreateWithoutBusinessInput> | BusinessPhotoCreateWithoutBusinessInput[] | BusinessPhotoUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessPhotoCreateOrConnectWithoutBusinessInput | BusinessPhotoCreateOrConnectWithoutBusinessInput[]
    createMany?: BusinessPhotoCreateManyBusinessInputEnvelope
    connect?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
  }

  export type BusinessOwnerDocumentUncheckedCreateNestedOneWithoutBusinessInput = {
    create?: XOR<BusinessOwnerDocumentCreateWithoutBusinessInput, BusinessOwnerDocumentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessOwnerDocumentCreateOrConnectWithoutBusinessInput
    connect?: BusinessOwnerDocumentWhereUniqueInput
  }

  export type BusinessShopDocumentUncheckedCreateNestedOneWithoutBusinessInput = {
    create?: XOR<BusinessShopDocumentCreateWithoutBusinessInput, BusinessShopDocumentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessShopDocumentCreateOrConnectWithoutBusinessInput
    connect?: BusinessShopDocumentWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BusinessOwnerUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessOwnerCreateWithoutBusinessInput, BusinessOwnerUncheckedCreateWithoutBusinessInput> | BusinessOwnerCreateWithoutBusinessInput[] | BusinessOwnerUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessOwnerCreateOrConnectWithoutBusinessInput | BusinessOwnerCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessOwnerUpsertWithWhereUniqueWithoutBusinessInput | BusinessOwnerUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessOwnerCreateManyBusinessInputEnvelope
    set?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
    disconnect?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
    delete?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
    connect?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
    update?: BusinessOwnerUpdateWithWhereUniqueWithoutBusinessInput | BusinessOwnerUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessOwnerUpdateManyWithWhereWithoutBusinessInput | BusinessOwnerUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessOwnerScalarWhereInput | BusinessOwnerScalarWhereInput[]
  }

  export type BusinessPhotoUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessPhotoCreateWithoutBusinessInput, BusinessPhotoUncheckedCreateWithoutBusinessInput> | BusinessPhotoCreateWithoutBusinessInput[] | BusinessPhotoUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessPhotoCreateOrConnectWithoutBusinessInput | BusinessPhotoCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessPhotoUpsertWithWhereUniqueWithoutBusinessInput | BusinessPhotoUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessPhotoCreateManyBusinessInputEnvelope
    set?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
    disconnect?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
    delete?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
    connect?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
    update?: BusinessPhotoUpdateWithWhereUniqueWithoutBusinessInput | BusinessPhotoUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessPhotoUpdateManyWithWhereWithoutBusinessInput | BusinessPhotoUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessPhotoScalarWhereInput | BusinessPhotoScalarWhereInput[]
  }

  export type BusinessOwnerDocumentUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<BusinessOwnerDocumentCreateWithoutBusinessInput, BusinessOwnerDocumentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessOwnerDocumentCreateOrConnectWithoutBusinessInput
    upsert?: BusinessOwnerDocumentUpsertWithoutBusinessInput
    disconnect?: BusinessOwnerDocumentWhereInput | boolean
    delete?: BusinessOwnerDocumentWhereInput | boolean
    connect?: BusinessOwnerDocumentWhereUniqueInput
    update?: XOR<XOR<BusinessOwnerDocumentUpdateToOneWithWhereWithoutBusinessInput, BusinessOwnerDocumentUpdateWithoutBusinessInput>, BusinessOwnerDocumentUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessShopDocumentUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<BusinessShopDocumentCreateWithoutBusinessInput, BusinessShopDocumentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessShopDocumentCreateOrConnectWithoutBusinessInput
    upsert?: BusinessShopDocumentUpsertWithoutBusinessInput
    disconnect?: BusinessShopDocumentWhereInput | boolean
    delete?: BusinessShopDocumentWhereInput | boolean
    connect?: BusinessShopDocumentWhereUniqueInput
    update?: XOR<XOR<BusinessShopDocumentUpdateToOneWithWhereWithoutBusinessInput, BusinessShopDocumentUpdateWithoutBusinessInput>, BusinessShopDocumentUncheckedUpdateWithoutBusinessInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessOwnerUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessOwnerCreateWithoutBusinessInput, BusinessOwnerUncheckedCreateWithoutBusinessInput> | BusinessOwnerCreateWithoutBusinessInput[] | BusinessOwnerUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessOwnerCreateOrConnectWithoutBusinessInput | BusinessOwnerCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessOwnerUpsertWithWhereUniqueWithoutBusinessInput | BusinessOwnerUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessOwnerCreateManyBusinessInputEnvelope
    set?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
    disconnect?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
    delete?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
    connect?: BusinessOwnerWhereUniqueInput | BusinessOwnerWhereUniqueInput[]
    update?: BusinessOwnerUpdateWithWhereUniqueWithoutBusinessInput | BusinessOwnerUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessOwnerUpdateManyWithWhereWithoutBusinessInput | BusinessOwnerUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessOwnerScalarWhereInput | BusinessOwnerScalarWhereInput[]
  }

  export type BusinessPhotoUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<BusinessPhotoCreateWithoutBusinessInput, BusinessPhotoUncheckedCreateWithoutBusinessInput> | BusinessPhotoCreateWithoutBusinessInput[] | BusinessPhotoUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: BusinessPhotoCreateOrConnectWithoutBusinessInput | BusinessPhotoCreateOrConnectWithoutBusinessInput[]
    upsert?: BusinessPhotoUpsertWithWhereUniqueWithoutBusinessInput | BusinessPhotoUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: BusinessPhotoCreateManyBusinessInputEnvelope
    set?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
    disconnect?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
    delete?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
    connect?: BusinessPhotoWhereUniqueInput | BusinessPhotoWhereUniqueInput[]
    update?: BusinessPhotoUpdateWithWhereUniqueWithoutBusinessInput | BusinessPhotoUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: BusinessPhotoUpdateManyWithWhereWithoutBusinessInput | BusinessPhotoUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: BusinessPhotoScalarWhereInput | BusinessPhotoScalarWhereInput[]
  }

  export type BusinessOwnerDocumentUncheckedUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<BusinessOwnerDocumentCreateWithoutBusinessInput, BusinessOwnerDocumentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessOwnerDocumentCreateOrConnectWithoutBusinessInput
    upsert?: BusinessOwnerDocumentUpsertWithoutBusinessInput
    disconnect?: BusinessOwnerDocumentWhereInput | boolean
    delete?: BusinessOwnerDocumentWhereInput | boolean
    connect?: BusinessOwnerDocumentWhereUniqueInput
    update?: XOR<XOR<BusinessOwnerDocumentUpdateToOneWithWhereWithoutBusinessInput, BusinessOwnerDocumentUpdateWithoutBusinessInput>, BusinessOwnerDocumentUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessShopDocumentUncheckedUpdateOneWithoutBusinessNestedInput = {
    create?: XOR<BusinessShopDocumentCreateWithoutBusinessInput, BusinessShopDocumentUncheckedCreateWithoutBusinessInput>
    connectOrCreate?: BusinessShopDocumentCreateOrConnectWithoutBusinessInput
    upsert?: BusinessShopDocumentUpsertWithoutBusinessInput
    disconnect?: BusinessShopDocumentWhereInput | boolean
    delete?: BusinessShopDocumentWhereInput | boolean
    connect?: BusinessShopDocumentWhereUniqueInput
    update?: XOR<XOR<BusinessShopDocumentUpdateToOneWithWhereWithoutBusinessInput, BusinessShopDocumentUpdateWithoutBusinessInput>, BusinessShopDocumentUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessUuidCreateNestedOneWithoutOwnersInput = {
    create?: XOR<BusinessUuidCreateWithoutOwnersInput, BusinessUuidUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: BusinessUuidCreateOrConnectWithoutOwnersInput
    connect?: BusinessUuidWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BusinessUuidUpdateOneRequiredWithoutOwnersNestedInput = {
    create?: XOR<BusinessUuidCreateWithoutOwnersInput, BusinessUuidUncheckedCreateWithoutOwnersInput>
    connectOrCreate?: BusinessUuidCreateOrConnectWithoutOwnersInput
    upsert?: BusinessUuidUpsertWithoutOwnersInput
    connect?: BusinessUuidWhereUniqueInput
    update?: XOR<XOR<BusinessUuidUpdateToOneWithWhereWithoutOwnersInput, BusinessUuidUpdateWithoutOwnersInput>, BusinessUuidUncheckedUpdateWithoutOwnersInput>
  }

  export type BusinessUuidCreateNestedOneWithoutPhotosInput = {
    create?: XOR<BusinessUuidCreateWithoutPhotosInput, BusinessUuidUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: BusinessUuidCreateOrConnectWithoutPhotosInput
    connect?: BusinessUuidWhereUniqueInput
  }

  export type BusinessUuidUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<BusinessUuidCreateWithoutPhotosInput, BusinessUuidUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: BusinessUuidCreateOrConnectWithoutPhotosInput
    upsert?: BusinessUuidUpsertWithoutPhotosInput
    connect?: BusinessUuidWhereUniqueInput
    update?: XOR<XOR<BusinessUuidUpdateToOneWithWhereWithoutPhotosInput, BusinessUuidUpdateWithoutPhotosInput>, BusinessUuidUncheckedUpdateWithoutPhotosInput>
  }

  export type BusinessUuidCreateNestedOneWithoutOwner_documentsInput = {
    create?: XOR<BusinessUuidCreateWithoutOwner_documentsInput, BusinessUuidUncheckedCreateWithoutOwner_documentsInput>
    connectOrCreate?: BusinessUuidCreateOrConnectWithoutOwner_documentsInput
    connect?: BusinessUuidWhereUniqueInput
  }

  export type BusinessUuidUpdateOneRequiredWithoutOwner_documentsNestedInput = {
    create?: XOR<BusinessUuidCreateWithoutOwner_documentsInput, BusinessUuidUncheckedCreateWithoutOwner_documentsInput>
    connectOrCreate?: BusinessUuidCreateOrConnectWithoutOwner_documentsInput
    upsert?: BusinessUuidUpsertWithoutOwner_documentsInput
    connect?: BusinessUuidWhereUniqueInput
    update?: XOR<XOR<BusinessUuidUpdateToOneWithWhereWithoutOwner_documentsInput, BusinessUuidUpdateWithoutOwner_documentsInput>, BusinessUuidUncheckedUpdateWithoutOwner_documentsInput>
  }

  export type BusinessUuidCreateNestedOneWithoutShop_documentsInput = {
    create?: XOR<BusinessUuidCreateWithoutShop_documentsInput, BusinessUuidUncheckedCreateWithoutShop_documentsInput>
    connectOrCreate?: BusinessUuidCreateOrConnectWithoutShop_documentsInput
    connect?: BusinessUuidWhereUniqueInput
  }

  export type BusinessUuidUpdateOneRequiredWithoutShop_documentsNestedInput = {
    create?: XOR<BusinessUuidCreateWithoutShop_documentsInput, BusinessUuidUncheckedCreateWithoutShop_documentsInput>
    connectOrCreate?: BusinessUuidCreateOrConnectWithoutShop_documentsInput
    upsert?: BusinessUuidUpsertWithoutShop_documentsInput
    connect?: BusinessUuidWhereUniqueInput
    update?: XOR<XOR<BusinessUuidUpdateToOneWithWhereWithoutShop_documentsInput, BusinessUuidUpdateWithoutShop_documentsInput>, BusinessUuidUncheckedUpdateWithoutShop_documentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BusinessOwnerCreateWithoutBusinessInput = {
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    mobile: string
  }

  export type BusinessOwnerUncheckedCreateWithoutBusinessInput = {
    id?: number
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    mobile: string
  }

  export type BusinessOwnerCreateOrConnectWithoutBusinessInput = {
    where: BusinessOwnerWhereUniqueInput
    create: XOR<BusinessOwnerCreateWithoutBusinessInput, BusinessOwnerUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessOwnerCreateManyBusinessInputEnvelope = {
    data: BusinessOwnerCreateManyBusinessInput | BusinessOwnerCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type BusinessPhotoCreateWithoutBusinessInput = {
    photo_id: string
    upload_at?: Date | string
  }

  export type BusinessPhotoUncheckedCreateWithoutBusinessInput = {
    id?: number
    photo_id: string
    upload_at?: Date | string
  }

  export type BusinessPhotoCreateOrConnectWithoutBusinessInput = {
    where: BusinessPhotoWhereUniqueInput
    create: XOR<BusinessPhotoCreateWithoutBusinessInput, BusinessPhotoUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessPhotoCreateManyBusinessInputEnvelope = {
    data: BusinessPhotoCreateManyBusinessInput | BusinessPhotoCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type BusinessOwnerDocumentCreateWithoutBusinessInput = {
    aadharcard_nu: string
    aadharcard_photo_id: string
    pancard_nu: string
    pancard_photo_id: string
  }

  export type BusinessOwnerDocumentUncheckedCreateWithoutBusinessInput = {
    id?: number
    aadharcard_nu: string
    aadharcard_photo_id: string
    pancard_nu: string
    pancard_photo_id: string
  }

  export type BusinessOwnerDocumentCreateOrConnectWithoutBusinessInput = {
    where: BusinessOwnerDocumentWhereUniqueInput
    create: XOR<BusinessOwnerDocumentCreateWithoutBusinessInput, BusinessOwnerDocumentUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessShopDocumentCreateWithoutBusinessInput = {
    gst_nu?: string | null
    gst_photo_id?: string | null
    shoplicense_nu?: string | null
    shoplicense_photo_id?: string | null
    udhayma_nu?: string | null
    udhayma_photo_id?: string | null
  }

  export type BusinessShopDocumentUncheckedCreateWithoutBusinessInput = {
    id?: number
    gst_nu?: string | null
    gst_photo_id?: string | null
    shoplicense_nu?: string | null
    shoplicense_photo_id?: string | null
    udhayma_nu?: string | null
    udhayma_photo_id?: string | null
  }

  export type BusinessShopDocumentCreateOrConnectWithoutBusinessInput = {
    where: BusinessShopDocumentWhereUniqueInput
    create: XOR<BusinessShopDocumentCreateWithoutBusinessInput, BusinessShopDocumentUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessOwnerUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BusinessOwnerWhereUniqueInput
    update: XOR<BusinessOwnerUpdateWithoutBusinessInput, BusinessOwnerUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessOwnerCreateWithoutBusinessInput, BusinessOwnerUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessOwnerUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BusinessOwnerWhereUniqueInput
    data: XOR<BusinessOwnerUpdateWithoutBusinessInput, BusinessOwnerUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessOwnerUpdateManyWithWhereWithoutBusinessInput = {
    where: BusinessOwnerScalarWhereInput
    data: XOR<BusinessOwnerUpdateManyMutationInput, BusinessOwnerUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessOwnerScalarWhereInput = {
    AND?: BusinessOwnerScalarWhereInput | BusinessOwnerScalarWhereInput[]
    OR?: BusinessOwnerScalarWhereInput[]
    NOT?: BusinessOwnerScalarWhereInput | BusinessOwnerScalarWhereInput[]
    id?: IntFilter<"BusinessOwner"> | number
    uuid?: UuidFilter<"BusinessOwner"> | string
    firstname?: StringFilter<"BusinessOwner"> | string
    middlename?: StringNullableFilter<"BusinessOwner"> | string | null
    lastname?: StringFilter<"BusinessOwner"> | string
    email?: StringFilter<"BusinessOwner"> | string
    mobile?: StringFilter<"BusinessOwner"> | string
  }

  export type BusinessPhotoUpsertWithWhereUniqueWithoutBusinessInput = {
    where: BusinessPhotoWhereUniqueInput
    update: XOR<BusinessPhotoUpdateWithoutBusinessInput, BusinessPhotoUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessPhotoCreateWithoutBusinessInput, BusinessPhotoUncheckedCreateWithoutBusinessInput>
  }

  export type BusinessPhotoUpdateWithWhereUniqueWithoutBusinessInput = {
    where: BusinessPhotoWhereUniqueInput
    data: XOR<BusinessPhotoUpdateWithoutBusinessInput, BusinessPhotoUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessPhotoUpdateManyWithWhereWithoutBusinessInput = {
    where: BusinessPhotoScalarWhereInput
    data: XOR<BusinessPhotoUpdateManyMutationInput, BusinessPhotoUncheckedUpdateManyWithoutBusinessInput>
  }

  export type BusinessPhotoScalarWhereInput = {
    AND?: BusinessPhotoScalarWhereInput | BusinessPhotoScalarWhereInput[]
    OR?: BusinessPhotoScalarWhereInput[]
    NOT?: BusinessPhotoScalarWhereInput | BusinessPhotoScalarWhereInput[]
    id?: IntFilter<"BusinessPhoto"> | number
    uuid?: UuidFilter<"BusinessPhoto"> | string
    photo_id?: StringFilter<"BusinessPhoto"> | string
    upload_at?: DateTimeFilter<"BusinessPhoto"> | Date | string
  }

  export type BusinessOwnerDocumentUpsertWithoutBusinessInput = {
    update: XOR<BusinessOwnerDocumentUpdateWithoutBusinessInput, BusinessOwnerDocumentUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessOwnerDocumentCreateWithoutBusinessInput, BusinessOwnerDocumentUncheckedCreateWithoutBusinessInput>
    where?: BusinessOwnerDocumentWhereInput
  }

  export type BusinessOwnerDocumentUpdateToOneWithWhereWithoutBusinessInput = {
    where?: BusinessOwnerDocumentWhereInput
    data: XOR<BusinessOwnerDocumentUpdateWithoutBusinessInput, BusinessOwnerDocumentUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessOwnerDocumentUpdateWithoutBusinessInput = {
    aadharcard_nu?: StringFieldUpdateOperationsInput | string
    aadharcard_photo_id?: StringFieldUpdateOperationsInput | string
    pancard_nu?: StringFieldUpdateOperationsInput | string
    pancard_photo_id?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessOwnerDocumentUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    aadharcard_nu?: StringFieldUpdateOperationsInput | string
    aadharcard_photo_id?: StringFieldUpdateOperationsInput | string
    pancard_nu?: StringFieldUpdateOperationsInput | string
    pancard_photo_id?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessShopDocumentUpsertWithoutBusinessInput = {
    update: XOR<BusinessShopDocumentUpdateWithoutBusinessInput, BusinessShopDocumentUncheckedUpdateWithoutBusinessInput>
    create: XOR<BusinessShopDocumentCreateWithoutBusinessInput, BusinessShopDocumentUncheckedCreateWithoutBusinessInput>
    where?: BusinessShopDocumentWhereInput
  }

  export type BusinessShopDocumentUpdateToOneWithWhereWithoutBusinessInput = {
    where?: BusinessShopDocumentWhereInput
    data: XOR<BusinessShopDocumentUpdateWithoutBusinessInput, BusinessShopDocumentUncheckedUpdateWithoutBusinessInput>
  }

  export type BusinessShopDocumentUpdateWithoutBusinessInput = {
    gst_nu?: NullableStringFieldUpdateOperationsInput | string | null
    gst_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_nu?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_nu?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessShopDocumentUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    gst_nu?: NullableStringFieldUpdateOperationsInput | string | null
    gst_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_nu?: NullableStringFieldUpdateOperationsInput | string | null
    shoplicense_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_nu?: NullableStringFieldUpdateOperationsInput | string | null
    udhayma_photo_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BusinessUuidCreateWithoutOwnersInput = {
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    photos?: BusinessPhotoCreateNestedManyWithoutBusinessInput
    owner_documents?: BusinessOwnerDocumentCreateNestedOneWithoutBusinessInput
    shop_documents?: BusinessShopDocumentCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidUncheckedCreateWithoutOwnersInput = {
    id?: number
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    photos?: BusinessPhotoUncheckedCreateNestedManyWithoutBusinessInput
    owner_documents?: BusinessOwnerDocumentUncheckedCreateNestedOneWithoutBusinessInput
    shop_documents?: BusinessShopDocumentUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidCreateOrConnectWithoutOwnersInput = {
    where: BusinessUuidWhereUniqueInput
    create: XOR<BusinessUuidCreateWithoutOwnersInput, BusinessUuidUncheckedCreateWithoutOwnersInput>
  }

  export type BusinessUuidUpsertWithoutOwnersInput = {
    update: XOR<BusinessUuidUpdateWithoutOwnersInput, BusinessUuidUncheckedUpdateWithoutOwnersInput>
    create: XOR<BusinessUuidCreateWithoutOwnersInput, BusinessUuidUncheckedCreateWithoutOwnersInput>
    where?: BusinessUuidWhereInput
  }

  export type BusinessUuidUpdateToOneWithWhereWithoutOwnersInput = {
    where?: BusinessUuidWhereInput
    data: XOR<BusinessUuidUpdateWithoutOwnersInput, BusinessUuidUncheckedUpdateWithoutOwnersInput>
  }

  export type BusinessUuidUpdateWithoutOwnersInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: BusinessPhotoUpdateManyWithoutBusinessNestedInput
    owner_documents?: BusinessOwnerDocumentUpdateOneWithoutBusinessNestedInput
    shop_documents?: BusinessShopDocumentUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUuidUncheckedUpdateWithoutOwnersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    photos?: BusinessPhotoUncheckedUpdateManyWithoutBusinessNestedInput
    owner_documents?: BusinessOwnerDocumentUncheckedUpdateOneWithoutBusinessNestedInput
    shop_documents?: BusinessShopDocumentUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUuidCreateWithoutPhotosInput = {
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    owners?: BusinessOwnerCreateNestedManyWithoutBusinessInput
    owner_documents?: BusinessOwnerDocumentCreateNestedOneWithoutBusinessInput
    shop_documents?: BusinessShopDocumentCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidUncheckedCreateWithoutPhotosInput = {
    id?: number
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    owners?: BusinessOwnerUncheckedCreateNestedManyWithoutBusinessInput
    owner_documents?: BusinessOwnerDocumentUncheckedCreateNestedOneWithoutBusinessInput
    shop_documents?: BusinessShopDocumentUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidCreateOrConnectWithoutPhotosInput = {
    where: BusinessUuidWhereUniqueInput
    create: XOR<BusinessUuidCreateWithoutPhotosInput, BusinessUuidUncheckedCreateWithoutPhotosInput>
  }

  export type BusinessUuidUpsertWithoutPhotosInput = {
    update: XOR<BusinessUuidUpdateWithoutPhotosInput, BusinessUuidUncheckedUpdateWithoutPhotosInput>
    create: XOR<BusinessUuidCreateWithoutPhotosInput, BusinessUuidUncheckedCreateWithoutPhotosInput>
    where?: BusinessUuidWhereInput
  }

  export type BusinessUuidUpdateToOneWithWhereWithoutPhotosInput = {
    where?: BusinessUuidWhereInput
    data: XOR<BusinessUuidUpdateWithoutPhotosInput, BusinessUuidUncheckedUpdateWithoutPhotosInput>
  }

  export type BusinessUuidUpdateWithoutPhotosInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: BusinessOwnerUpdateManyWithoutBusinessNestedInput
    owner_documents?: BusinessOwnerDocumentUpdateOneWithoutBusinessNestedInput
    shop_documents?: BusinessShopDocumentUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUuidUncheckedUpdateWithoutPhotosInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: BusinessOwnerUncheckedUpdateManyWithoutBusinessNestedInput
    owner_documents?: BusinessOwnerDocumentUncheckedUpdateOneWithoutBusinessNestedInput
    shop_documents?: BusinessShopDocumentUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUuidCreateWithoutOwner_documentsInput = {
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    owners?: BusinessOwnerCreateNestedManyWithoutBusinessInput
    photos?: BusinessPhotoCreateNestedManyWithoutBusinessInput
    shop_documents?: BusinessShopDocumentCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidUncheckedCreateWithoutOwner_documentsInput = {
    id?: number
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    owners?: BusinessOwnerUncheckedCreateNestedManyWithoutBusinessInput
    photos?: BusinessPhotoUncheckedCreateNestedManyWithoutBusinessInput
    shop_documents?: BusinessShopDocumentUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidCreateOrConnectWithoutOwner_documentsInput = {
    where: BusinessUuidWhereUniqueInput
    create: XOR<BusinessUuidCreateWithoutOwner_documentsInput, BusinessUuidUncheckedCreateWithoutOwner_documentsInput>
  }

  export type BusinessUuidUpsertWithoutOwner_documentsInput = {
    update: XOR<BusinessUuidUpdateWithoutOwner_documentsInput, BusinessUuidUncheckedUpdateWithoutOwner_documentsInput>
    create: XOR<BusinessUuidCreateWithoutOwner_documentsInput, BusinessUuidUncheckedCreateWithoutOwner_documentsInput>
    where?: BusinessUuidWhereInput
  }

  export type BusinessUuidUpdateToOneWithWhereWithoutOwner_documentsInput = {
    where?: BusinessUuidWhereInput
    data: XOR<BusinessUuidUpdateWithoutOwner_documentsInput, BusinessUuidUncheckedUpdateWithoutOwner_documentsInput>
  }

  export type BusinessUuidUpdateWithoutOwner_documentsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: BusinessOwnerUpdateManyWithoutBusinessNestedInput
    photos?: BusinessPhotoUpdateManyWithoutBusinessNestedInput
    shop_documents?: BusinessShopDocumentUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUuidUncheckedUpdateWithoutOwner_documentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: BusinessOwnerUncheckedUpdateManyWithoutBusinessNestedInput
    photos?: BusinessPhotoUncheckedUpdateManyWithoutBusinessNestedInput
    shop_documents?: BusinessShopDocumentUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUuidCreateWithoutShop_documentsInput = {
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    owners?: BusinessOwnerCreateNestedManyWithoutBusinessInput
    photos?: BusinessPhotoCreateNestedManyWithoutBusinessInput
    owner_documents?: BusinessOwnerDocumentCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidUncheckedCreateWithoutShop_documentsInput = {
    id?: number
    uuid?: string
    business_type: string
    is_form_completed?: boolean
    is_verified?: boolean
    created_at?: Date | string
    owners?: BusinessOwnerUncheckedCreateNestedManyWithoutBusinessInput
    photos?: BusinessPhotoUncheckedCreateNestedManyWithoutBusinessInput
    owner_documents?: BusinessOwnerDocumentUncheckedCreateNestedOneWithoutBusinessInput
  }

  export type BusinessUuidCreateOrConnectWithoutShop_documentsInput = {
    where: BusinessUuidWhereUniqueInput
    create: XOR<BusinessUuidCreateWithoutShop_documentsInput, BusinessUuidUncheckedCreateWithoutShop_documentsInput>
  }

  export type BusinessUuidUpsertWithoutShop_documentsInput = {
    update: XOR<BusinessUuidUpdateWithoutShop_documentsInput, BusinessUuidUncheckedUpdateWithoutShop_documentsInput>
    create: XOR<BusinessUuidCreateWithoutShop_documentsInput, BusinessUuidUncheckedCreateWithoutShop_documentsInput>
    where?: BusinessUuidWhereInput
  }

  export type BusinessUuidUpdateToOneWithWhereWithoutShop_documentsInput = {
    where?: BusinessUuidWhereInput
    data: XOR<BusinessUuidUpdateWithoutShop_documentsInput, BusinessUuidUncheckedUpdateWithoutShop_documentsInput>
  }

  export type BusinessUuidUpdateWithoutShop_documentsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: BusinessOwnerUpdateManyWithoutBusinessNestedInput
    photos?: BusinessPhotoUpdateManyWithoutBusinessNestedInput
    owner_documents?: BusinessOwnerDocumentUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessUuidUncheckedUpdateWithoutShop_documentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    business_type?: StringFieldUpdateOperationsInput | string
    is_form_completed?: BoolFieldUpdateOperationsInput | boolean
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owners?: BusinessOwnerUncheckedUpdateManyWithoutBusinessNestedInput
    photos?: BusinessPhotoUncheckedUpdateManyWithoutBusinessNestedInput
    owner_documents?: BusinessOwnerDocumentUncheckedUpdateOneWithoutBusinessNestedInput
  }

  export type BusinessOwnerCreateManyBusinessInput = {
    id?: number
    firstname: string
    middlename?: string | null
    lastname: string
    email: string
    mobile: string
  }

  export type BusinessPhotoCreateManyBusinessInput = {
    id?: number
    photo_id: string
    upload_at?: Date | string
  }

  export type BusinessOwnerUpdateWithoutBusinessInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessOwnerUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessOwnerUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    middlename?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
  }

  export type BusinessPhotoUpdateWithoutBusinessInput = {
    photo_id?: StringFieldUpdateOperationsInput | string
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPhotoUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: StringFieldUpdateOperationsInput | string
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessPhotoUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    photo_id?: StringFieldUpdateOperationsInput | string
    upload_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}