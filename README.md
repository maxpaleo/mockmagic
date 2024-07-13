# MockMagic

## Introduction
MockMagic is designed to instantly generate mock data from any object schema for testing and development purposes. 
It's extremely simple and only requires an object schema to generate mock data.

#### Quick Start

```typescript
const mockData = generate(schema); // Pass in any object schema to generate mock data
```

### When should I use this?
Use MockMagic when you need to quickly generate realistic mock data in bulk. It's particularly effective for populating data for different types of data schemas or databases without having to manually assign data types.

### How It Works
MockMagic prioritizes key-based data generation. 

It recognizes and generates data for common key names (e.g., id, first_name, phone_number, profile_image) in any naming convention—camelCase, snake_case, PascalCase, etc. 

If a key isn't recognized, MockMagic defaults to generating data based on the data type specified in the schema. This approach ensures compatibility with various schema definitions, including:

- Zod schemas
- DrizzleOrm schemas
- TypeORM schemas
- etc

The library includes a test suite that covers: regular objects, [@Zod schemas](https://www.npmjs.com/package/zod), and [@DrizzleOrm schemas](hhttps://www.npmjs.com/package/drizzle-orm).

## Features
- Generate mock data based on any object schema.
- Map custom keys with data groups.
- Easily override default data generation for specific keys or data types.
- Supports skipping keys to return `null` values.
- Instantly generate modal for tools like Zod, DrizzleOrm, etc.

## Installation
Install MockMagic via npm:
```bash
npm i mockmagic
```

## Import 
```typescript
import { generate } from "mockmagic";
```

## Simple Usage
All you need to do to generate mock data is to pass an object schema to the generate function:

```typescript

const schema = { // Object schema
  id: 'number',
  name: 'name',
  email: 'email',
  phone: 'phone',
};

const mockData = generate(schema); // Pass in any object schema to generate mock data
/** 
 * { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' }
 */
```

#### Using a Zod schema:

```typescript
import { z } from 'zod';

const schema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10).max(12),
});

const mockData = generate(schema);
/** 
 * { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' }
 */
```

#### Using a DrizzleOrm schema:

```typescript
import { User } from 'drizzle-orm';

const schema = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  first_name: text("first_name"),
  last_name: text("last_name"),
  email: text("email").notNull(),
  status: userStatusEnum("status").default("active"),
});

const mockData = generate(schema);
/** 
 * { id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', status: 'active' }
 */
```

## Options 
MockMagic includes options to customize the data generation process.

### Rounds 
You can specify the number of rounds to generate data for:

```typescript
const mockData = generate(schema, { rounds: 3 }); // Generates 3 sets of mock data
/** 
 * [{ id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
 *  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
 *  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '555-123-4567' }]
 */
```

### Override By Data Group 
You can override the default data generation for specific keys by mapping them to a data group. This is useful if you have key names that aren't recognized by the library.

For example: MagicMock recognizes: 
##### first_name as
> `firstName`, `first_name`, `FirstName`, `firstname`, ...
##### last_name as
> `lastName`, `last_name`, `LastName`, `lastname`, ...
##### email as
> `email`, `emailAddress`, `email_address`, `emailaddress`, `user_email`, `userEmail`, `user_email`, ...
##### description as
> `description`, `Description`, `desc`, `descText`, ...
##### color as
> `color`, `colorCode`, `colour`, `colour_code`, `variant_color`, `product_color`, ...

But `student_first_name` isn't recognized, so you can map it to the `firstName` data group:

```typescript
const mockData = generate(schema, {
  overrideByDataGroup: {
    firstName: "student_first_name" // Map student_first_name to firstName data group
    description: "product_summary" // Map product_summary to description data group
  }
});

/** 
 * { id: 1, student_first_name: 'Frank', email: 'frank.smith@example.com'},
 * { id: 2, student_first_name: 'Jane', email: 'jane.doe@example.com'}
```

### Override by Key 
You can completely override the default generateion for specific keys. This is useful for enum type keys for example. 
In this case, you can override the generation and assign the enum values directly. 

You can use the `random()` function to randomly assign values from an array of values.

```typescript
import { generate, random } from "mockmagic";

const mockData = generate(schema, {
  overrideByKey: {
    status: random(["active", "inactive", "suspended", "archived"]),
    publishing_status: random(["draft", "pending_review", "scheduled"]),
  }
});
/** 
 * { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'active' },
 * { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'inactive' },
 * { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', status: 'suspended' },
 */
```

### Skip Keys
You can skip keys to return `null` values. This is usseful if you want to generate data for some keys but not others.

```typescript
const mockData = generate(schema, {
  skipKeys: ["phone", "settings"]
});
/** 
 * { id: 1, first_name: "Eric" phone: null, settings: null },
 * { id: 2, first_name: "John" phone: null, settings: null },
 */
```

### Custom Key
You can assign a custom key to overwrite the default generate based on the object key. This is useful if you have an object with keys.

```typescript
const mockData = generate(schema, {
  customKey: "name"
});
```

### Data type key 
You can assign a data type key to fallback to when the key isn't recognized. 

```typescript
const mockData = generate(schema, {
    dataTypeKey: "dataType"
});
```

## Advanced Usage

```typescript
const mockData = generate(schema, {
  rounds: 3, // Generate 3 sets of mock data
  customKeyMap: {
    firstName: ["user_first_name", "password", "student_name"], // These keys will be regonized as firstName
    email: ["company_email", "user_email"], // These keys will be regonized as email
  },
  overrideByGroup: {
    settings: { device: "mobile" }, // All settings keys will be assigned an object with device: "mobile"
    metadata: { device: "mobile" },
  },
  overrideByKey: {
    status: random(["active", "inactive", "suspended", "archived"]), // Assign random status values
    publishing_status: random(["draft", "pending_review", "scheduled"]),
  },
  skipKeys: ["settings"], // Assign null values to settings keys
});
```


### Dependencies
- `faker-js/faker` to create realistic data sets.

<img src="https://github.com/maxpaleo/mockmagic/raw/main/media/example-drizzle.png">
<img src="https://raw.githubusercontent.com/maxpaleo/mockmagic/main/media/generated-data.png">