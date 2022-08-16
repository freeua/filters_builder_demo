import { Field } from "filters-builder/dist/types";

export const fields: Field[] = [
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
        fact: "profile.avatar_color",
        objectPath: "$.profile.avatar_color",
        label: "Avatar Color",
        type: "list",
        listValue: [
          { value: "red", label: "Red" },
          { value: "yellow", label: "Yellow" },
          { value: "blue", label: "Blue" },
        ],
      },
      {
        fact: "profile.register_date",
        objectPath: "$.profile.register_date",
        label: "Register Date",
        type: "date",
        format: "DD-MM-YYYY",
      },
    ],
  },
  {
    fact: "iaAdmin",
    objectPath: "$.iaAdmin",
    label: "Is Admin",
    type: "bool",
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
