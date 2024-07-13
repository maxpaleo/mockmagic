"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.possibleKeyMap = exports.metadata = exports.mockSetings = void 0;
const faker_1 = require("@faker-js/faker");
const _1 = require(".");
exports.mockSetings = {
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
exports.metadata = {
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
exports.possibleKeyMap = {
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
        randomFunction: () => faker_1.faker.date.past().toISOString(),
    },
    email: {
        keys: ["email", "emailAddress", "email_address", "emailaddress"],
        randomFunction: () => faker_1.faker.internet.email(),
    },
    firstName: {
        keys: ["firstName", "first_name", "firstname"],
        randomFunction: () => faker_1.faker.person.firstName(),
    },
    lastName: {
        keys: ["lastName", "last_name", "lastname"],
        randomFunction: () => faker_1.faker.person.lastName(),
    },
    name: {
        keys: ["name", "fullName", "full_name", "fullname"],
        randomFunction: () => faker_1.faker.person.fullName(),
    },
    password: {
        keys: ["password", "pass", "pwd"],
        randomFunction: () => faker_1.faker.internet.password(),
    },
    handle: {
        keys: ["handle", "username", "user", "userName"],
        randomFunction: () => faker_1.faker.internet.userName().toLowerCase(),
    },
    uuid: {
        keys: ["uuid"],
        randomFunction: () => faker_1.faker.string.uuid(),
    },
    id: {
        keys: ["id", "user_id", "organization_id"],
        randomFunction: () => faker_1.simpleFaker.number.int(100),
    },
    phoneNumber: {
        keys: ["phoneNumber", "phone_number", "phonenumber", "phone"],
        randomFunction: () => faker_1.faker.phone.number(),
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
        randomFunction: () => faker_1.faker.location.streetAddress(),
    },
    gender: {
        keys: ["gender", "genderCode", "gendercode"],
        randomFunction: () => (0, _1.random)(["male", "female", "other"]),
    },
    country: {
        keys: ["country", "countryCode", "country_code"],
        randomFunction: () => faker_1.faker.location.country(),
    },
    state: {
        keys: ["state", "stateCode", "state_code"],
        randomFunction: () => faker_1.faker.location.state(),
    },
    city: {
        keys: ["city", "cityCode", "city_code"],
        randomFunction: () => faker_1.faker.location.city(),
    },
    postalCode: {
        keys: ["postalCode", "postal_code", "postalcode"],
        randomFunction: () => faker_1.faker.location.zipCode(),
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
        randomFunction: () => faker_1.faker.color.rgb(),
    },
    jobTitle: {
        keys: ["jobTitle", "job_title", "jobtitle", "job"],
        randomFunction: () => faker_1.faker.person.jobTitle(),
    },
    description: {
        keys: ["description", "desc", "descriptionText", "descText"],
        randomFunction: () => faker_1.faker.lorem.sentence(),
    },
    flightNumber: {
        keys: ["flightNumber", "flight_number", "flightnumber"],
        randomFunction: () => faker_1.faker.airline.flightNumber(),
    },
    airline: {
        keys: ["airline", "airlineCode", "airline_code", "airline_name"],
        randomFunction: () => faker_1.faker.commerce.department(),
    },
    airplane: {
        keys: ["airplane", "airplaneCode", "airplane_code", "airplane_name"],
        randomFunction: () => faker_1.faker.commerce.productName(),
    },
    seat: {
        keys: ["seat", "seatNumber", "seat_number"],
        randomFunction: () => faker_1.faker.airline.seat(),
    },
    companyName: {
        keys: ["companyName", "company_name", "companyname"],
        randomFunction: () => faker_1.faker.company.name(),
    },
    companyBuzzNoun: {
        keys: ["companyBuzzNoun", "company_buzz_noun", "companybuzznoun"],
        randomFunction: () => faker_1.faker.company.buzzNoun(),
    },
    companyBuzzPhrase: {
        keys: ["companyBuzzPhrase", "company_buzz_phrase", "companybuzzphrase"],
        randomFunction: () => faker_1.faker.company.buzzAdjective(),
    },
    companyCatchPhrase: {
        keys: ["companyCatchPhrase", "company_catch_phrase", "companycatchphrase"],
        randomFunction: () => faker_1.faker.company.catchPhrase(),
    },
    image: {
        keys: ["image", "imageUrl", "image_url"],
        randomFunction: () => faker_1.faker.image.url(),
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
        randomFunction: () => faker_1.faker.image.avatar(),
    },
    amount: {
        keys: ["amount", "price", "subtotal", "total"],
        randomFunction: () => faker_1.faker.commerce.price(),
    },
    currency: {
        keys: ["currency", "currencyCode", "currency_code"],
        randomFunction: () => faker_1.faker.finance.currencyCode(),
    },
    creditCardNumber: {
        keys: [
            "creditCardNumber",
            "credit_card_number",
            "creditcardnumber",
            "creditcard",
        ],
        randomFunction: () => faker_1.faker.finance.creditCardNumber(),
    },
    accountNumber: {
        keys: ["accountNumber", "account_number", "accountnumber"],
        randomFunction: () => faker_1.faker.finance.account(),
    },
    bic: {
        keys: ["bic", "bankIdentifierCode", "bankidentifiercode"],
        randomFunction: () => faker_1.faker.finance.bic(),
    },
    iban: {
        keys: [
            "iban",
            "internationalBankAccountNumber",
            "internationalbankaccountnumber",
        ],
        randomFunction: () => faker_1.faker.finance.iban(),
    },
    routingNumber: {
        keys: ["routingNumber", "routing_number", "routingnumber"],
        randomFunction: () => faker_1.faker.finance.routingNumber(),
    },
    creditCardCvv: {
        keys: ["creditCardCvv", "credit_card_cvv", "creditcardcvv"],
        randomFunction: () => faker_1.faker.finance.creditCardCVV(),
    },
    creditCardIssuer: {
        keys: ["creditCardIssuer", "credit_card_issuer", "creditcardissuer"],
        randomFunction: () => faker_1.faker.finance.creditCardIssuer(),
    },
    productTitle: {
        keys: ["product_title", "productTitle", "producttitle"],
        randomFunction: () => faker_1.faker.commerce.productName(),
    },
    productDescription: {
        keys: ["product_description", "productDescription", "productdescription"],
        randomFunction: () => faker_1.faker.commerce.productDescription(),
    },
    material: {
        keys: ["material", "materialType", "material_type"],
        randomFunction: () => faker_1.faker.commerce.productMaterial(),
    },
    productCategory: {
        keys: ["product_category", "productCategory", "productcategory"],
        randomFunction: () => faker_1.faker.commerce.department(),
    },
    productType: {
        keys: ["product_type", "productType", "producttype"],
        randomFunction: () => faker_1.faker.commerce.product(),
    },
    productSize: {
        keys: ["product_size", "productSize", "productsize"],
        randomFunction: () => faker_1.faker.commerce.productAdjective(),
    },
    productWeight: {
        keys: ["product_weight", "productWeight", "productweight"],
        randomFunction: () => faker_1.faker.commerce.productMaterial(),
    },
    weight: {
        keys: ["weight", "weightUnit", "weight_unit"],
        randomFunction: () => faker_1.simpleFaker.number.int(100),
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
        randomFunction: () => (0, _1.random)([
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
        randomFunction: () => (0, _1.random)([
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
        randomFunction: () => faker_1.faker.location.countryCode(),
    },
    direction: {
        keys: ["direction", "directionCode", "direction_code"],
        randomFunction: () => faker_1.faker.location.direction(),
    },
    latitude: {
        keys: ["latitude", "latitudeNumber", "latitude_number"],
        randomFunction: () => faker_1.faker.location.latitude(),
    },
    longitude: {
        keys: ["longitude", "longitudeNumber", "longitude_number"],
        randomFunction: () => faker_1.faker.location.longitude(),
    },
    timezone: {
        keys: ["timezone", "timezoneCode", "timezone_code"],
        randomFunction: () => faker_1.faker.location.timeZone(),
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
        randomFunction: () => exports.mockSetings,
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
        randomFunction: () => exports.metadata,
    },
};
