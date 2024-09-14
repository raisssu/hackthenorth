import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
// The schema provides more precise TypeScript types.
// export default defineSchema({
//   ...authTables,
//   messages: defineTable({
//     userId: v.id("users"),
//     body: v.string(),
//   }),
// });


export default defineSchema({
  ...authTables,
  files: defineTable({
    id: v.string(),
    name: v.string(),
    data: v.string(),
    uploadedAt: v.string(),
  }),
});