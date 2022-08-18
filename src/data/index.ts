export const fields = [
  {
    fact: "name",
    objectPath: "$.name",
    label: "Full Name",
    type: "string",
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
    label: "Profile",
    type: "category",
    items: [
      {
        fact: "profile.favourite_animal",
        objectPath: "$.profile.favourite_animal",
        label: "Favourite Animal",
        type: "string",
      },
      {
        fact: "profile.favourite_color",
        objectPath: "$.profile.favourite_color",
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
  {
    fact: "iaAdmin",
    objectPath: "$.iaAdmin",
    label: "Is Admin",
    type: "bool",
  },
  {
    fact: "register_date",
    objectPath: "$.register_date",
    label: "Register Date",
    type: "date",
    format: "DD-MM-YYYY",
  },
];

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
};

export const testData = [
  {
    name: "John Doe",
    age: 23,
    profile: {
      favourite_animal: "cat",
      favourite_color: "red",
    },
    iaAdmin: false,
    register_date: "03-08-2022",
  },
  {
    name: "Andrea Summer",
    age: 19,
    profile: {
      favourite_animal: "elephant",
      favourite_color: "yellow",
    },
    iaAdmin: true,
    register_date: "18-08-2022",
  },
  {
    name: "Andrey Jonson",
    age: 32,
    profile: {
      favourite_animal: "tiger",
      favourite_color: "red",
    },
    iaAdmin: true,
    register_date: "12-10-2021",
  },
];
