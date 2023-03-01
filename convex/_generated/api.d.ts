/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.9.1.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as TDShape from "../TDShape";
import type * as clear from "../clear";
import type * as getPresence from "../getPresence";
import type * as getRoom from "../getRoom";
import type * as storage from "../storage";
import type * as updatePresence from "../updatePresence";
import type * as updateRoom from "../updateRoom";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  TDShape: typeof TDShape;
  clear: typeof clear;
  getPresence: typeof getPresence;
  getRoom: typeof getRoom;
  storage: typeof storage;
  updatePresence: typeof updatePresence;
  updateRoom: typeof updateRoom;
}>;
