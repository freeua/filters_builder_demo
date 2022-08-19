// Operators

export const operators = {
  string: [
    { id: "sEqual", label: "Equal" },
    { id: "sNotEqual", label: "Not Equal" },
    { id: "sStartsWith", label: "Starts With" },
    { id: "sEndWith", label: "End With" },
    { id: "sEmpty", label: "Empty" },
    { id: "sContains", label: "Contains" },
  ],
  number: [
    { id: "nEqual", label: "Equal" },
    { id: "nNotEqual", label: "Not Equal" },
    { id: "nLessThan", label: "Less Than" },
    { id: "nGreaterThan", label: "Greater Than" },
  ],
  list: [
    { id: "lEqual", label: "Equal" },
    { id: "lNotEqual", label: "Not Equal" },
    { id: "lIn", label: "In" },
    { id: "lNotIn", label: "Not In" },
  ],
  bool: [
    { id: "bIsTrue", label: "True" },
    { id: "bIsFalse", label: "Not True" },
  ],
  date: [
    { id: "dOnOrAfter", label: "On Or After" },
    { id: "dOnOrBefore", label: "On Or Before" },
    { id: "dToday", label: "Today" },
    { id: "dThisWeek", label: "This Week" },
    { id: "dThisMonth", label: "This Month" },
  ],
} as const;

export const operatorIds = Object.keys(operators).flatMap((fieldType) =>
  operators[fieldType as keyof typeof operators].map(({ id }) => id)
);

// Fields

export const fieldTypes = Object.keys(operators) as [keyof typeof operators];

export const DATE_FORMAT = "DD-MM-YYYY";

export const fields: {
  type: typeof fieldTypes[number] | "category";
  [key: string]: any;
}[] = [
  {
    fact: "name",
    objectPath: "$.name",
    label: "Full Name",
    type: "string",
  },
  {
    fact: "iaAdmin",
    objectPath: "$.iaAdmin",
    label: "Is Admin",
    type: "bool",
  },
  {
    fact: "age",
    objectPath: "$.age",
    label: "Age",
    type: "number",
    min: 13,
    max: 99,
  },
  {
    fact: "avatar_color",
    objectPath: "$.avatar_color",
    label: "Avatar Color",
    type: "list",
    listValue: [
      { value: "red", label: "Red" },
      { value: "yellow", label: "Yellow" },
      { value: "blue", label: "Blue" },
    ],
  },
  {
    fact: "register_date",
    objectPath: "$.register_date",
    label: "Register Date",
    type: "date",
    format: DATE_FORMAT,
  },
  {
    label: "Other",
    type: "category",
    items: [
      {
        fact: "other.favourite_animal",
        objectPath: "$.other.favourite_animal",
        label: "Favourite Animal",
        type: "string",
      },
      {
        fact: "other.favourite_color",
        objectPath: "$.other.favourite_color",
        label: "Favourite Color",
        type: "list",
        listValue: [
          { value: "red", label: "Red" },
          { value: "yellow", label: "Yellow" },
          { value: "blue", label: "Blue" },
        ],
      },
    ],
  },
];

// Test data

export const testData = [
  {
    name: "John Doe",
    iaAdmin: false,
    age: 23,
    avatar_color: "red",
    register_date: "03-08-2022",
    other: {
      favourite_animal: "cat",
      favourite_color: "red",
    },
  },
  {
    name: "Andrea Summer",
    iaAdmin: true,
    age: 19,
    avatar_color: "yellow",
    register_date: "18-08-2022",
    other: {
      favourite_animal: "",
      favourite_color: "yellow",
    },
  },
  {
    name: "Andrey Jonson",
    iaAdmin: true,
    age: 32,
    avatar_color: "red",
    register_date: "12-10-2021",
    other: {
      favourite_animal: "tiger",
      favourite_color: "red",
    },
  },
];
