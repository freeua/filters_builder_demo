import { Field } from "filters-builder/dist/types";

export const fields: Field[] = [
  {
    fact: "pageUrl",
    objectPath: "$.page.url",
    label: "Page Url",
    type: "string",
  },
  {
    fact: "referrer",
    objectPath: "$.page.referrer",
    label: "Page Referrer",
    type: "string",
  },
  {
    label: "UTM Params",
    type: "category",
    items: [
      {
        fact: "params.utm_source",
        objectPath: "$.page.params.utm_source",
        label: "utm_source",
        type: "string",
      },
      {
        fact: "params.utm_medium",
        objectPath: "$.page.params.utm_medium",
        label: "utm_medium",
        type: "string",
      },
      {
        fact: "params.utm_campaign",
        objectPath: "$.page.params.utm_campaign",
        label: "utm_campaign",
        type: "string",
      },
      {
        fact: "params.utm_term",
        objectPath: "$.page.params.utm_term",
        label: "utm_term",
        type: "string",
      },
      {
        fact: "params.utm_content",
        objectPath: "$.page.params.utm_content",
        label: "utm_content",
        type: "string",
      },
    ],
  },
  {
    label: "Location",
    type: "category",
    items: [
      {
        fact: "location.ip",
        objectPath: "$.location.ip",
        label: "IP Address",
        type: "string",
      },
      {
        fact: "location.country",
        objectPath: "$.location.country",
        label: "Country",
        type: "string",
      },
      {
        fact: "location.city",
        objectPath: "$.location.city",
        label: "City",
        type: "string",
      },
      {
        fact: "location.organization",
        objectPath: "$.location.organization",
        label: "Organization",
        type: "string",
      },
    ],
  },
  {
    label: "Visitor",
    type: "category",
    items: [
      {
        fact: "visitor.visits",
        objectPath: "$.visitor.visits",
        label: "Visits",
        type: "number",
        min: 0,
      },
      {
        fact: "visitor.email",
        objectPath: "$.visitor.email",
        label: "Email",
        type: "string",
      },
      {
        fact: "visitor.fullName",
        objectPath: "$.visitor.fullName",
        label: "Full Name",
        type: "string",
      },
      {
        fact: "visitor.country",
        objectPath: "$.visitor.country",
        label: "Country",
        type: "string",
      },
      {
        fact: "visitor.state",
        objectPath: "$.visitor.state",
        label: "State",
        type: "string",
      },
      {
        fact: "visitor.city",
        objectPath: "$.visitor.city",
        label: "City",
        type: "string",
      },
      {
        fact: "visitor.phone",
        objectPath: "$.visitor.phone",
        label: "Phone",
        type: "string",
      },
    ],
  },
  {
    label: "Integrations",
    type: "category",
    items: [
      {
        label: "Dynamics",
        type: "category",
        items: [
          {
            fact: "integrations.dynamics.emailaddress1",
            objectPath: "$.visitor.dynamics.emailaddress1",
            label: "Email",
            type: "string",
          },
          {
            fact: "integrations.dynamics.hasOpportunities",
            objectPath: "$.visitor.dynamics.hasOpportunities",
            label: "Has opportunities",
            type: "bool",
          },
          {
            fact: "integrations.dynamics.owner",
            objectPath: "$.visitor.dynamics.owner",
            label: "Owner",
            type: "string",
          },
        ],
      },
    ],
  },
];

export const operators = {
  string: [
    { id: "sEqual", label: "Equal" },
    { id: "sNotEqual", label: "Not Equal" },
    { id: "sStartsWith", label: "tarts With" },
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
