import {
  pgTable,
  serial,
  text,
  integer,
  uuid,
  timestamp,
  jsonb,
  pgEnum,
} from "drizzle-orm/pg-core";
/* ----------------------------- Default Columns ---------------------------- */
/**
 * Default id columns for all tables
 */
const defaultIds = {
  id: serial("id").primaryKey().notNull(),
  uuid: uuid("uuid").defaultRandom(),
};

const defaultAudits = {
  created_by: serial("created_by").notNull(),
  updated_by: serial("updated_by").notNull(),
};

/**
 * Default timestamp columns for all tables
 * - created_at: timestamp when the record was created
 * - updated_at: timestamp when the record was last updated
 */
const defaultTimeStamps = {
  created_at: timestamp("created_at").$defaultFn(() => new Date()),
  updated_at: timestamp("updated_at").$onUpdateFn(() => new Date()),
};

export const userStatusEnum = pgEnum("user_status", [
  "active",
  "inactive",
  "suspended",
  "banned",
  "removed",
]);

/* -------------------------------------------------------------------------- */
/*                                    User                                    */
/* -------------------------------------------------------------------------- */

export type User = typeof drizzleUser.$inferSelect;
export type NewUser = typeof drizzleUser.$inferInsert;

export const drizzleUser = pgTable("users", {
  /** IDs */
  ...defaultIds,
  handle: text("handle"),
  /** Timestamps */
  ...defaultTimeStamps,
  /** Details */
  first_name: text("first_name"),
  last_name: text("last_name"),
  email: text("email").notNull(),
  profile_image: text("profile_image"),
  /** State/Condition */
  status: userStatusEnum("status").default("active"),
  /** Secrets */
  password: text("password").notNull(),
  /** JSON */
  meta_data: jsonb("meta_data").default({}),
  settings: jsonb("settings").default({}),
  /** Joins */
});

/* -------------------------------------------------------------------------- */
/*                                Organization                                */
/* -------------------------------------------------------------------------- */

export type Organization = typeof drizzleOrganization.$inferSelect;
export type NewOrganization = typeof drizzleOrganization.$inferInsert;

export const organizationStatusEnum = pgEnum("organization_status", [
  "active",
  "inactive",
  "suspended",
  "banned",
  "removed",
  "archived",
]);

export const drizzleOrganization = pgTable("organization", {
  /** IDs */
  ...defaultIds,
  /** Audits */
  ...defaultAudits,
  /** Timestamps */
  ...defaultTimeStamps,
  /** Details */
  name: text("name"),
  description: text("description"),
  /** State/Condition */
  /** JSON */
  meta_data: jsonb("meta_data").default({}),
  settings: jsonb("settings").default({}),
  /** Joins */
});

/* -------------------------------------------------------------------------- */
/*                        User To Organization Mapping                        */
/* -------------------------------------------------------------------------- */

export const userToOrganizationStatusEnum = pgEnum(
  "user_to_organization_status",
  ["pending", "active", "inactive", "archived"]
);

export const drizzleUsersToOrganizations = pgTable("usersToOrganizations", {
  /** IDs */
  ...defaultIds,
  /** Timestamps */
  ...defaultTimeStamps,
  /** Joins */
  userId: integer("user_id")
    .notNull()
    .references(() => drizzleUser.id),
  organizationId: integer("organization_id")
    .notNull()
    .references(() => drizzleOrganization.id),
  type: text("type").notNull(),
  status: userToOrganizationStatusEnum("status").default("pending"),
});
