import { generate, MockMagicOptions, random } from "../src";
import {
  drizzleUser,
  drizzleOrganization,
  drizzleUsersToOrganizations,
} from "./data/drizzle-orm";
import {
  objectUserSchema,
  objectOrganizationSchema,
  objectUserToOrganizationSchema,
} from "./data/object";
import {
  ZodUserSchema,
  ZodOrganizationSchema,
  ZodUserToOrganizationSchema,
} from "./data/zod";

/* --------------------------------- Drizzle -------------------------------- */
const DRIZZLE_USER_SCHEMA = drizzleUser;
const DRIZZLE_ORGANIZATION = drizzleOrganization;
const DRIZZLE_USER_TO_ORGANIZATION = drizzleUsersToOrganizations;

/* --------------------------------- Zod ----------------------------------- */
const ZOD_USER_SCHEMA = ZodUserSchema;
const ZOD_ORGANIZATION_SCHEMA = ZodOrganizationSchema;
const ZOD_USER_TO_ORGANIZATION_SCHEMA = ZodUserToOrganizationSchema;

/* --------------------------------- Object -------------------------------- */
const OBJECT_USER_SCHEMA = objectUserSchema;
const OBJECT_ORGANIZATION_SCHEMA = objectOrganizationSchema;
const OBJECT_USER_TO_ORGANIZATION_SCHEMA = objectUserToOrganizationSchema;

/* --------------------------- Function definition -------------------------- */

function generateWithAllProps(schema: any) {
  return generate(schema, {
    rounds: 3,
    customKey: "levant",
    dataTypeKey: "levantus",
    customKeyMap: {
      firstName: ["user_first_name", "password", "student_name"],
      email: ["company_email", "user_email"],
    },
    overrideByGroup: {
      settings: { device: "mobile" },
      metadata: { device: "mobile" },
      firstName: "User",
    },
    overrideByKey: {
      status: random(["active", "inactive", "suspended", "archived"]),
      publishing_status: random(["draft", "pending_review", "scheduled"]),
    },
    skipKeys: ["settings"],
  });
}

function generateSimple(schema: any, options: MockMagicOptions = {}) {
  return generate(schema, options);
}

/* -------------------------------------------------------------------------- */
/*                   Run all data generation with all props                   */
/* -------------------------------------------------------------------------- */

const runGenerateAllProps = () => {
  const drizzleData = generateWithAllProps(DRIZZLE_USER_SCHEMA);
  // console.log("Drizzle data:", drizzleData);

  const zodData = generateWithAllProps(ZOD_USER_SCHEMA.shape);
  // console.log("Zod data:", zodData);

  const objectData = generateWithAllProps(OBJECT_USER_SCHEMA);
  // console.log("Object data:", objectData);
};
// runGenerateAllProps();

/* -------------------------------------------------------------------------- */
/*                       Run all data simple generation                       */
/* -------------------------------------------------------------------------- */

const runGenerateSimple = () => {
  const drizzleData = generateSimple(DRIZZLE_USER_SCHEMA);
  // console.log("Drizzle data:", drizzleData);

  const zodData = generateSimple(ZOD_USER_SCHEMA.shape);
  // console.log("Zod data:", zodData);

  const objectData = generateSimple(OBJECT_USER_SCHEMA);
  // console.log("Object data:", objectData);
};
// runGenerateSimple();

/* -------------------------------------------------------------------------- */
/*                         Run all Zod data generation                        */
/* -------------------------------------------------------------------------- */

const runGenerateSimpleZod = () => {
  const zodData = generateSimple(ZOD_USER_SCHEMA.shape, {
    skipKeys: ["settings"],
  });
  // console.log("Zod data:", zodData);

  const zodOrganizationData = generateSimple(ZOD_ORGANIZATION_SCHEMA.shape, {
    skipKeys: ["settings"],
  });
  // console.log("Zod organization data:", zodOrganizationData);

  const zodUserToOrganizationData = generateSimple(
    ZOD_USER_TO_ORGANIZATION_SCHEMA.shape,
    {
      skipKeys: ["settings"],
      rounds: 10,
    }
  );
  // console.log("Zod user to organization data:", zodUserToOrganizationData);
};
runGenerateSimpleZod();

/* -------------------------------------------------------------------------- */
/*                       Run all Object data generation                       */
/* -------------------------------------------------------------------------- */

const runGenerateSimpleObject = () => {
  const objectData = generateSimple(OBJECT_USER_SCHEMA);
  // console.log("Object data:", objectData);

  const objectOrganizationData = generateSimple(OBJECT_ORGANIZATION_SCHEMA);
  // console.log("Object organization data:", objectOrganizationData);

  const objectUserToOrganizationData = generateSimple(
    OBJECT_USER_TO_ORGANIZATION_SCHEMA
  );
  // // console.log(
  //   "Object user to organization data:",
  //   objectUserToOrganizationData
  // );
};
// runGenerateSimpleObject();

/* -------------------------------------------------------------------------- */
/*                       Run all Drizzle data generation                      */
/* -------------------------------------------------------------------------- */

const runGenerateSimpleDrizzle = () => {
  const drizzleData = generateSimple(DRIZZLE_USER_SCHEMA);
  // console.log("Drizzle data:", drizzleData);

  const drizzleOrganizationData = generateSimple(DRIZZLE_ORGANIZATION);
  // console.log("Drizzle organization data:", drizzleOrganizationData);

  const drizzleUserToOrganizationData = generateSimple(
    DRIZZLE_USER_TO_ORGANIZATION
  );
  // // console.log(
  //   "Drizzle user to organization data:",
  //   drizzleUserToOrganizationData
  // );
};
// runGenerateSimpleDrizzle();
