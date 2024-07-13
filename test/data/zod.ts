import { z } from "zod";

export const ZodUserSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  profile_image: z.string(),
  status: z.string(),
  password: z.string(),
  meta_data: z.any(),
  settings: z.any(),
});

export const ZodOrganizationSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  meta_data: z.any(),
  settings: z.any(),
});

export const ZodUserToOrganizationSchema = z.object({
  id: z.number(),
  user_id: z.number(),
  organization_id: z.number(),
  type: z.string(),
});
