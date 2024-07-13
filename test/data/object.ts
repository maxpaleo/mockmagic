export const objectUserSchema = {
  id: "number",
  first_name: "string",
  last_name: "string",
  email: "string",
  profile_image: "string",
  status: "string",
  password: "string",
  meta_data: "jsonb",
  settings: "jsonb",
};

export const objectOrganizationSchema = {
  id: "number",
  name: "string",
  description: "string",
  meta_data: "jsonb",
  settings: "jsonb",
};

export const objectUserToOrganizationSchema = {
  id: "number",
  user_id: "number",
  organization_id: "number",
  type: "string",
};
