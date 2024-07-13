import { faker, simpleFaker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import { random } from ".";

export const mockSetings = {
  theme: "dark", // User's preferred theme, e.g., 'dark' or 'light'
  notifications: {
    email: true, // Whether the user wants email notifications
    sms: false, // Whether the user wants SMS notifications
    app: true, // Whether the user wants in-app notifications
  },
  privacy: {
    shareProfile: false, // Whether the user allows their profile to be public
    shareActivity: true, // Whether the user allows activity to be shared
  },
  localization: {
    language: "en-US", // User's preferred language
    timezone: "America/New_York", // User's timezone
  },
  dashboardLayout: {
    layoutType: "compact", // Layout type of the dashboard, e.g., 'compact' or 'spacious'
    widgets: ["calendar", "messages", "news"], // Widgets the user has on their dashboard
  },
  createdAt: "2024-07-12T08:00:00Z", // Creation timestamp
  updatedAt: "2024-07-12T08:00:00Z", // Last update timestamp
};
export const metadata = {
  recordId: 42, // Identifier for the record this metadata describes
  createdBy: "user123", // Username or ID of the user who created the record
  createdAt: "2024-07-12T08:00:00Z", // Timestamp when the record was created
  updatedBy: "user124", // Username or ID of the last user who updated the record
  updatedAt: "2024-07-12T08:00:00Z", // Timestamp when the record was last updated
  source: "web_form", // Source through which the data was entered, e.g., 'web_form', 'api', 'manual_entry'
  tags: ["important", "urgent", "review"], // Tags for categorization or filtering
  permissions: {
    // Details about who can view or interact with the record
    view: ["admin", "owner", "auditor"],
    edit: ["admin", "owner"],
  },
  changeLog: [
    // Array of objects tracking each change
    {
      changedBy: "user125",
      changedAt: "2024-07-12T10:00:00Z",
      changes: {
        field: "status",
        oldValue: "pending",
        newValue: "approved",
      },
      reason: "User completed required steps",
    },
  ],
  accessCount: 150, // Number of times the record has been accessed
  lastAccessed: "2024-07-12T12:00:00Z", // Timestamp of the last access
};
export const possibleKeyMap = {
  date: {
    keys: [
      "date",
      "dateTime",
      "date_time",
      "createdAt",
      "created_at",
      "createdat",
      "updatedAt",
      "updated_at",
      "updatedat",
      "expiryDate",
      "expiry_date",
      "expirydate",
      "expiredAt",
      "expired_at",
      "expiredat",
    ],
    randomFunction: () => faker.date.past().toISOString(),
  },
  email: {
    keys: ["email", "emailAddress", "email_address", "emailaddress"],
    randomFunction: () => faker.internet.email(),
  },
  firstName: {
    keys: ["firstName", "first_name", "firstname"],
    randomFunction: () => faker.person.firstName(),
  },
  lastName: {
    keys: ["lastName", "last_name", "lastname"],
    randomFunction: () => faker.person.lastName(),
  },
  name: {
    keys: ["name", "fullName", "full_name", "fullname"],
    randomFunction: () => faker.person.fullName(),
  },
  password: {
    keys: ["password", "pass", "pwd"],
    randomFunction: () => faker.internet.password(),
  },
  handle: {
    keys: ["handle", "username", "user", "userName"],
    randomFunction: () => faker.internet.userName().toLowerCase(),
  },
  uuid: {
    keys: ["uuid"],
    randomFunction: () => uuidv4(),
  },
  id: {
    keys: ["id", "user_id", "organization_id"],
    randomFunction: () => simpleFaker.number.int(100),
  },
  phoneNumber: {
    keys: ["phoneNumber", "phone_number", "phonenumber", "phone"],
    randomFunction: () => faker.phone.number(),
  },
  address: {
    keys: [
      "address",
      "address1",
      "address2",
      "address3",
      "address_1",
      "address_2",
      "address_3",
    ],
    randomFunction: () => faker.location.streetAddress(),
  },
  gender: {
    keys: ["gender", "genderCode", "gendercode"],
    randomFunction: () => random(["male", "female", "other"]),
  },
  country: {
    keys: ["country", "countryCode", "country_code"],
    randomFunction: () => faker.location.country(),
  },
  state: {
    keys: ["state", "stateCode", "state_code"],
    randomFunction: () => faker.location.state(),
  },
  city: {
    keys: ["city", "cityCode", "city_code"],
    randomFunction: () => faker.location.city(),
  },
  postalCode: {
    keys: ["postalCode", "postal_code", "postalcode"],
    randomFunction: () => faker.location.zipCode(),
  },
  color: {
    keys: [
      "color",
      "colour",
      "colorCode",
      "color_code",
      "colorcode",
      "colourCode",
      "colour_code",
      "product_color",
      "productColor",
      "product_colorCode",
      "product_color_code",
      "product_colorcode",
      "product_colourCode",
      "product_colour_code",
      "variant_color",
      "variantColor",
      "variant_colorCode",
      "variant_color_code",
      "variant_colorcode",
      "variant_colourCode",
      "variant_colour_code",
    ],
    randomFunction: () => faker.color.rgb(),
  },
  jobTitle: {
    keys: ["jobTitle", "job_title", "jobtitle", "job"],
    randomFunction: () => faker.person.jobTitle(),
  },
  description: {
    keys: ["description", "desc", "descriptionText", "descText"],
    randomFunction: () => faker.lorem.sentence(),
  },
  flightNumber: {
    keys: ["flightNumber", "flight_number", "flightnumber"],
    randomFunction: () => faker.airline.flightNumber(),
  },
  airline: {
    keys: ["airline", "airlineCode", "airline_code", "airline_name"],
    randomFunction: () => faker.commerce.department(),
  },
  airplane: {
    keys: ["airplane", "airplaneCode", "airplane_code", "airplane_name"],
    randomFunction: () => faker.commerce.productName(),
  },
  seat: {
    keys: ["seat", "seatNumber", "seat_number"],
    randomFunction: () => faker.airline.seat(),
  },
  companyName: {
    keys: ["companyName", "company_name", "companyname"],
    randomFunction: () => faker.company.name(),
  },
  companyBuzzNoun: {
    keys: ["companyBuzzNoun", "company_buzz_noun", "companybuzznoun"],
    randomFunction: () => faker.company.buzzNoun(),
  },
  companyBuzzPhrase: {
    keys: ["companyBuzzPhrase", "company_buzz_phrase", "companybuzzphrase"],
    randomFunction: () => faker.company.buzzAdjective(),
  },
  companyCatchPhrase: {
    keys: ["companyCatchPhrase", "company_catch_phrase", "companycatchphrase"],
    randomFunction: () => faker.company.catchPhrase(),
  },
  image: {
    keys: ["image", "imageUrl", "image_url"],
    randomFunction: () => faker.image.url(),
  },
  user_profile_image: {
    keys: [
      "user_profile_image",
      "userProfileImage",
      "userprofileimage",
      "user_profile",
      "avatar",
      "avatarUrl",
      "avatar_url",
      "profileImage",
      "profile_image",
      "profileimage",
    ],
    randomFunction: () => faker.image.avatar(),
  },
  amount: {
    keys: ["amount", "price", "subtotal", "total"],
    randomFunction: () => faker.commerce.price(),
  },
  currency: {
    keys: ["currency", "currencyCode", "currency_code"],
    randomFunction: () => faker.finance.currencyCode(),
  },
  creditCardNumber: {
    keys: [
      "creditCardNumber",
      "credit_card_number",
      "creditcardnumber",
      "creditcard",
    ],
    randomFunction: () => faker.finance.creditCardNumber(),
  },
  accountNumber: {
    keys: ["accountNumber", "account_number", "accountnumber"],
    randomFunction: () => faker.finance.account(),
  },
  bic: {
    keys: ["bic", "bankIdentifierCode", "bankidentifiercode"],
    randomFunction: () => faker.finance.bic(),
  },
  iban: {
    keys: [
      "iban",
      "internationalBankAccountNumber",
      "internationalbankaccountnumber",
    ],
    randomFunction: () => faker.finance.iban(),
  },
  routingNumber: {
    keys: ["routingNumber", "routing_number", "routingnumber"],
    randomFunction: () => faker.finance.routingNumber(),
  },
  creditCardCvv: {
    keys: ["creditCardCvv", "credit_card_cvv", "creditcardcvv"],
    randomFunction: () => faker.finance.creditCardCVV(),
  },
  creditCardIssuer: {
    keys: ["creditCardIssuer", "credit_card_issuer", "creditcardissuer"],
    randomFunction: () => faker.finance.creditCardIssuer(),
  },
  productTitle: {
    keys: ["product_title", "productTitle", "producttitle"],
    randomFunction: () => faker.commerce.productName(),
  },
  productDescription: {
    keys: ["product_description", "productDescription", "productdescription"],
    randomFunction: () => faker.commerce.productDescription(),
  },
  material: {
    keys: ["material", "materialType", "material_type"],
    randomFunction: () => faker.commerce.productMaterial(),
  },
  productCategory: {
    keys: ["product_category", "productCategory", "productcategory"],
    randomFunction: () => faker.commerce.department(),
  },
  productType: {
    keys: ["product_type", "productType", "producttype"],
    randomFunction: () => faker.commerce.product(),
  },
  productSize: {
    keys: ["product_size", "productSize", "productsize"],
    randomFunction: () => faker.commerce.productAdjective(),
  },
  productWeight: {
    keys: ["product_weight", "productWeight", "productweight"],
    randomFunction: () => faker.commerce.productMaterial(),
  },
  weight: {
    keys: ["weight", "weightUnit", "weight_unit"],
    randomFunction: () => simpleFaker.number.int(100),
  },
  shippingService: {
    keys: [
      "shipping_service",
      "shippingService",
      "shippingservice",
      "carrier",
      "shippingCarrier",
      "shipping_carrier",
      "delivery_service",
      "deliveryService",
      "deliveryservice",
    ],
    randomFunction: () => [
      "usps",
      "ups",
      "fedex",
      "dhl",
      "canada_post",
      "royal_mail",
      "australia_post",
      "deutsche_post",
      "japan_post",
      "china_post",
    ],
  },
  paymentMethod: {
    keys: ["payment_method", "paymentMethod", "paymentmethod"],
    randomFunction: () =>
      random([
        "credit_card",
        "debit_card",
        "paypal",
        "apple_pay",
        "google_pay",
        "bank_transfer",
        "cash",
        "check",
        "crypto",
      ]),
  },
  paymentProvider: {
    keys: ["payment_provider", "paymentProvider", "paymentprovider"],
    randomFunction: () =>
      random([
        "stripe",
        "paypal",
        "square",
        "adyen",
        "authorize_net",
        "klarna",
        "amazon_pay",
        "apple_pay",
        "google_pay",
        "braintree",
      ]),
  },
  countryCode: {
    keys: ["countryCode", "country_code", "countrycode"],
    randomFunction: () => faker.location.countryCode(),
  },
  direction: {
    keys: ["direction", "directionCode", "direction_code"],
    randomFunction: () => faker.location.direction(),
  },
  latitude: {
    keys: ["latitude", "latitudeNumber", "latitude_number"],
    randomFunction: () => faker.location.latitude(),
  },
  longitude: {
    keys: ["longitude", "longitudeNumber", "longitude_number"],
    randomFunction: () => faker.location.longitude(),
  },
  timezone: {
    keys: ["timezone", "timezoneCode", "timezone_code"],
    randomFunction: () => faker.location.timeZone(),
  },
  settings: {
    keys: [
      "settings",
      "settingsJson",
      "settings_json",
      "user_settings",
      "userSettings",
      "user_settings",
      "account_settings",
      "accountSettings",
      "account_settings",
    ],
    randomFunction: () => mockSetings,
  },
  metadata: {
    keys: [
      "metadata",
      "metadataJson",
      "metadata_json",
      "user_metadata",
      "userMetadata",
      "user_metadata",
      "account_metadata",
      "accountMetadata",
      "account_metadata",
    ],
    randomFunction: () => metadata,
  },
} as const;
