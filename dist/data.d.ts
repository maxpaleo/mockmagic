export declare const mockSetings: {
    theme: string;
    notifications: {
        email: boolean;
        sms: boolean;
        app: boolean;
    };
    privacy: {
        shareProfile: boolean;
        shareActivity: boolean;
    };
    localization: {
        language: string;
        timezone: string;
    };
    dashboardLayout: {
        layoutType: string;
        widgets: string[];
    };
    createdAt: string;
    updatedAt: string;
};
export declare const metadata: {
    recordId: number;
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
    source: string;
    tags: string[];
    permissions: {
        view: string[];
        edit: string[];
    };
    changeLog: {
        changedBy: string;
        changedAt: string;
        changes: {
            field: string;
            oldValue: string;
            newValue: string;
        };
        reason: string;
    }[];
    accessCount: number;
    lastAccessed: string;
};
export declare const possibleKeyMap: {
    readonly date: {
        readonly keys: readonly ["date", "dateTime", "date_time", "createdAt", "created_at", "createdat", "updatedAt", "updated_at", "updatedat", "expiryDate", "expiry_date", "expirydate", "expiredAt", "expired_at", "expiredat"];
        readonly randomFunction: () => string;
    };
    readonly email: {
        readonly keys: readonly ["email", "emailAddress", "email_address", "emailaddress"];
        readonly randomFunction: () => string;
    };
    readonly firstName: {
        readonly keys: readonly ["firstName", "first_name", "firstname"];
        readonly randomFunction: () => string;
    };
    readonly lastName: {
        readonly keys: readonly ["lastName", "last_name", "lastname"];
        readonly randomFunction: () => string;
    };
    readonly name: {
        readonly keys: readonly ["name", "fullName", "full_name", "fullname"];
        readonly randomFunction: () => string;
    };
    readonly password: {
        readonly keys: readonly ["password", "pass", "pwd"];
        readonly randomFunction: () => string;
    };
    readonly handle: {
        readonly keys: readonly ["handle", "username", "user", "userName"];
        readonly randomFunction: () => string;
    };
    readonly uuid: {
        readonly keys: readonly ["uuid"];
        readonly randomFunction: () => void;
    };
    readonly id: {
        readonly keys: readonly ["id"];
        readonly randomFunction: () => number;
    };
    readonly phoneNumber: {
        readonly keys: readonly ["phoneNumber", "phone_number", "phonenumber", "phone"];
        readonly randomFunction: () => string;
    };
    readonly address: {
        readonly keys: readonly ["address", "address1", "address2", "address3", "address_1", "address_2", "address_3"];
        readonly randomFunction: () => string;
    };
    readonly gender: {
        readonly keys: readonly ["gender", "genderCode", "gendercode"];
        readonly randomFunction: () => string;
    };
    readonly country: {
        readonly keys: readonly ["country", "countryCode", "country_code"];
        readonly randomFunction: () => string;
    };
    readonly state: {
        readonly keys: readonly ["state", "stateCode", "state_code"];
        readonly randomFunction: () => string;
    };
    readonly city: {
        readonly keys: readonly ["city", "cityCode", "city_code"];
        readonly randomFunction: () => string;
    };
    readonly postalCode: {
        readonly keys: readonly ["postalCode", "postal_code", "postalcode"];
        readonly randomFunction: () => string;
    };
    readonly color: {
        readonly keys: readonly ["color", "colour", "colorCode", "color_code", "colorcode", "colourCode", "colour_code"];
        readonly randomFunction: () => string;
    };
    readonly jobTitle: {
        readonly keys: readonly ["jobTitle", "job_title", "jobtitle", "job"];
        readonly randomFunction: () => string;
    };
    readonly description: {
        readonly keys: readonly ["description", "desc", "descriptionText", "descText"];
        readonly randomFunction: () => string;
    };
    readonly flightNumber: {
        readonly keys: readonly ["flightNumber", "flight_number", "flightnumber"];
        readonly randomFunction: () => string;
    };
    readonly airline: {
        readonly keys: readonly ["airline", "airlineCode", "airline_code", "airline_name"];
        readonly randomFunction: () => string;
    };
    readonly airplane: {
        readonly keys: readonly ["airplane", "airplaneCode", "airplane_code", "airplane_name"];
        readonly randomFunction: () => string;
    };
    readonly seat: {
        readonly keys: readonly ["seat", "seatNumber", "seat_number"];
        readonly randomFunction: () => string;
    };
    readonly companyName: {
        readonly keys: readonly ["companyName", "company_name", "companyname"];
        readonly randomFunction: () => string;
    };
    readonly companyBuzzNoun: {
        readonly keys: readonly ["companyBuzzNoun", "company_buzz_noun", "companybuzznoun"];
        readonly randomFunction: () => string;
    };
    readonly companyBuzzPhrase: {
        readonly keys: readonly ["companyBuzzPhrase", "company_buzz_phrase", "companybuzzphrase"];
        readonly randomFunction: () => string;
    };
    readonly companyCatchPhrase: {
        readonly keys: readonly ["companyCatchPhrase", "company_catch_phrase", "companycatchphrase"];
        readonly randomFunction: () => string;
    };
    readonly image: {
        readonly keys: readonly ["image", "imageUrl", "image_url"];
        readonly randomFunction: () => string;
    };
    readonly user_profile_image: {
        readonly keys: readonly ["user_profile_image", "userProfileImage", "userprofileimage", "user_profile", "avatar", "avatarUrl", "avatar_url", "profileImage", "profile_image", "profileimage"];
        readonly randomFunction: () => string;
    };
    readonly amount: {
        readonly keys: readonly ["amount", "price", "subtotal", "total"];
        readonly randomFunction: () => string;
    };
    readonly currency: {
        readonly keys: readonly ["currency", "currencyCode", "currency_code"];
        readonly randomFunction: () => string;
    };
    readonly creditCardNumber: {
        readonly keys: readonly ["creditCardNumber", "credit_card_number", "creditcardnumber", "creditcard"];
        readonly randomFunction: () => string;
    };
    readonly accountNumber: {
        readonly keys: readonly ["accountNumber", "account_number", "accountnumber"];
        readonly randomFunction: () => string;
    };
    readonly bic: {
        readonly keys: readonly ["bic", "bankIdentifierCode", "bankidentifiercode"];
        readonly randomFunction: () => string;
    };
    readonly iban: {
        readonly keys: readonly ["iban", "internationalBankAccountNumber", "internationalbankaccountnumber"];
        readonly randomFunction: () => string;
    };
    readonly routingNumber: {
        readonly keys: readonly ["routingNumber", "routing_number", "routingnumber"];
        readonly randomFunction: () => string;
    };
    readonly creditCardCvv: {
        readonly keys: readonly ["creditCardCvv", "credit_card_cvv", "creditcardcvv"];
        readonly randomFunction: () => string;
    };
    readonly creditCardIssuer: {
        readonly keys: readonly ["creditCardIssuer", "credit_card_issuer", "creditcardissuer"];
        readonly randomFunction: () => string;
    };
    readonly productTitle: {
        readonly keys: readonly ["product_title", "productTitle", "producttitle"];
        readonly randomFunction: () => string;
    };
    readonly productDescription: {
        readonly keys: readonly ["product_description", "productDescription", "productdescription"];
        readonly randomFunction: () => string;
    };
    readonly material: {
        readonly keys: readonly ["material", "materialType", "material_type"];
        readonly randomFunction: () => string;
    };
    readonly productCategory: {
        readonly keys: readonly ["product_category", "productCategory", "productcategory"];
        readonly randomFunction: () => string;
    };
    readonly productType: {
        readonly keys: readonly ["product_type", "productType", "producttype"];
        readonly randomFunction: () => string;
    };
    readonly productSize: {
        readonly keys: readonly ["product_size", "productSize", "productsize"];
        readonly randomFunction: () => string;
    };
    readonly productWeight: {
        readonly keys: readonly ["product_weight", "productWeight", "productweight"];
        readonly randomFunction: () => string;
    };
    readonly weight: {
        readonly keys: readonly ["weight", "weightUnit", "weight_unit"];
        readonly randomFunction: () => number;
    };
    readonly shippingService: {
        readonly keys: readonly ["shipping_service", "shippingService", "shippingservice", "carrier", "shippingCarrier", "shipping_carrier", "delivery_service", "deliveryService", "deliveryservice"];
        readonly randomFunction: () => string[];
    };
    readonly paymentMethod: {
        readonly keys: readonly ["payment_method", "paymentMethod", "paymentmethod"];
        readonly randomFunction: () => string;
    };
    readonly paymentProvider: {
        readonly keys: readonly ["payment_provider", "paymentProvider", "paymentprovider"];
        readonly randomFunction: () => string;
    };
    readonly countryCode: {
        readonly keys: readonly ["countryCode", "country_code", "countrycode"];
        readonly randomFunction: () => string;
    };
    readonly direction: {
        readonly keys: readonly ["direction", "directionCode", "direction_code"];
        readonly randomFunction: () => string;
    };
    readonly latitude: {
        readonly keys: readonly ["latitude", "latitudeNumber", "latitude_number"];
        readonly randomFunction: () => number;
    };
    readonly longitude: {
        readonly keys: readonly ["longitude", "longitudeNumber", "longitude_number"];
        readonly randomFunction: () => number;
    };
    readonly timezone: {
        readonly keys: readonly ["timezone", "timezoneCode", "timezone_code"];
        readonly randomFunction: () => string;
    };
    readonly settings: {
        readonly keys: readonly ["settings", "settingsJson", "settings_json", "user_settings", "userSettings", "user_settings", "account_settings", "accountSettings", "account_settings"];
        readonly randomFunction: () => {
            theme: string;
            notifications: {
                email: boolean;
                sms: boolean;
                app: boolean;
            };
            privacy: {
                shareProfile: boolean;
                shareActivity: boolean;
            };
            localization: {
                language: string;
                timezone: string;
            };
            dashboardLayout: {
                layoutType: string;
                widgets: string[];
            };
            createdAt: string;
            updatedAt: string;
        };
    };
    readonly metadata: {
        readonly keys: readonly ["metadata", "metadataJson", "metadata_json", "user_metadata", "userMetadata", "user_metadata", "account_metadata", "accountMetadata", "account_metadata"];
        readonly randomFunction: () => {
            recordId: number;
            createdBy: string;
            createdAt: string;
            updatedBy: string;
            updatedAt: string;
            source: string;
            tags: string[];
            permissions: {
                view: string[];
                edit: string[];
            };
            changeLog: {
                changedBy: string;
                changedAt: string;
                changes: {
                    field: string;
                    oldValue: string;
                    newValue: string;
                };
                reason: string;
            }[];
            accessCount: number;
            lastAccessed: string;
        };
    };
};
