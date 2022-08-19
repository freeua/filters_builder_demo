import moment from "moment";
import { OperatorEvaluator } from "json-rules-engine";
import { operatorIds, DATE_FORMAT } from "../data";

type OperatorIdsType = typeof operatorIds[number];

export const operatorEvaluators: {
  [operatorId in OperatorIdsType]: OperatorEvaluator<unknown, unknown>;
} = {
  sEqual: (factValue, jsonValue) => {
    if (typeof factValue !== "string" || typeof jsonValue !== "string") {
      return false;
    }

    return factValue.toLocaleLowerCase() === jsonValue.toLocaleLowerCase();
  },

  sNotEqual: (factValue, jsonValue) => {
    if (typeof factValue !== "string" || typeof jsonValue !== "string") {
      return false;
    }

    return factValue.toLocaleLowerCase() !== jsonValue.toLocaleLowerCase();
  },

  sStartsWith: (factValue, jsonValue) => {
    if (typeof factValue !== "string" || typeof jsonValue !== "string") {
      return false;
    }

    return factValue
      .toLocaleLowerCase()
      .startsWith(jsonValue.toLocaleLowerCase());
  },

  sEndWith: (factValue, jsonValue) => {
    if (typeof factValue !== "string" || typeof jsonValue !== "string") {
      return false;
    }

    return factValue
      .toLocaleLowerCase()
      .endsWith(jsonValue.toLocaleLowerCase());
  },

  sEmpty: (factValue) => {
    if (typeof factValue !== "string") {
      return false;
    }

    return factValue.length === 0;
  },

  sContains: (factValue, jsonValue) => {
    if (typeof factValue !== "string" || typeof jsonValue !== "string") {
      return false;
    }

    return factValue
      .toLocaleLowerCase()
      .includes(jsonValue.toLocaleLowerCase());
  },

  nEqual: (factValue, jsonValue) => {
    if (
      typeof factValue !== "number" ||
      isNaN(factValue) ||
      typeof jsonValue !== "number" ||
      isNaN(jsonValue)
    ) {
      return false;
    }

    return factValue === jsonValue;
  },

  nNotEqual: (factValue, jsonValue) => {
    if (
      typeof factValue !== "number" ||
      isNaN(factValue) ||
      typeof jsonValue !== "number" ||
      isNaN(jsonValue)
    ) {
      return false;
    }

    return factValue !== jsonValue;
  },

  nLessThan: (factValue, jsonValue) => {
    if (
      typeof factValue !== "number" ||
      isNaN(factValue) ||
      typeof jsonValue !== "number" ||
      isNaN(jsonValue)
    ) {
      return false;
    }

    return factValue < jsonValue;
  },

  nGreaterThan: (factValue, jsonValue) => {
    if (
      typeof factValue !== "number" ||
      isNaN(factValue) ||
      typeof jsonValue !== "number" ||
      isNaN(jsonValue)
    ) {
      return false;
    }

    return factValue > jsonValue;
  },

  lEqual: (factValue, jsonValue) => {
    if (typeof factValue !== "string" || typeof jsonValue !== "string") {
      return false;
    }

    return factValue.toLocaleLowerCase() === jsonValue.toLocaleLowerCase();
  },

  lNotEqual: (factValue, jsonValue) => {
    if (typeof factValue !== "string" || typeof jsonValue !== "string") {
      return false;
    }

    return factValue.toLocaleLowerCase() !== jsonValue.toLocaleLowerCase();
  },

  lIn: (factValue, jsonValue) => {
    if (
      typeof factValue !== "string" ||
      !(
        jsonValue instanceof Array &&
        jsonValue.every((value) => typeof value === "string")
      )
    ) {
      return false;
    }

    const formatValues = jsonValue.map((value) => value.toLocaleLowerCase());

    return formatValues.includes(factValue.toLocaleLowerCase());
  },

  lNotIn: (factValue, jsonValue) => {
    if (
      typeof factValue !== "string" ||
      !(
        jsonValue instanceof Array &&
        jsonValue.every((i) => typeof i === "string")
      )
    ) {
      return false;
    }

    const formatValues = jsonValue.map((value) => value.toLocaleLowerCase());

    return !formatValues.includes(factValue.toLocaleLowerCase());
  },

  bIsTrue: (factValue) => {
    if (typeof factValue !== "boolean") {
      return false;
    }

    return factValue;
  },

  bIsFalse: (factValue) => {
    if (typeof factValue !== "boolean") {
      return false;
    }

    return !factValue;
  },

  dOnOrAfter: (factValue, jsonValue) => {
    if (
      typeof factValue !== "string" ||
      typeof jsonValue !== "string" ||
      !moment(factValue, DATE_FORMAT) ||
      !moment(jsonValue, DATE_FORMAT)
    ) {
      return false;
    }

    return moment(factValue, DATE_FORMAT).isSameOrAfter(
      moment(jsonValue, DATE_FORMAT)
    );
  },

  dOnOrBefore: (factValue, jsonValue) => {
    if (
      typeof factValue !== "string" ||
      typeof jsonValue !== "string" ||
      !moment(factValue, DATE_FORMAT) ||
      !moment(jsonValue, DATE_FORMAT)
    ) {
      return false;
    }

    return moment(factValue, DATE_FORMAT).isSameOrBefore(
      moment(jsonValue, DATE_FORMAT)
    );
  },

  dToday: (factValue) => {
    if (typeof factValue !== "string" || !moment(factValue, DATE_FORMAT)) {
      return false;
    }

    return moment(factValue, DATE_FORMAT).isSame(moment(), "day");
  },

  dThisWeek: (factValue) => {
    if (typeof factValue !== "string" || !moment(factValue, DATE_FORMAT)) {
      return false;
    }

    return moment(factValue, DATE_FORMAT).isSame(moment(), "week");
  },

  dThisMonth: (factValue) => {
    if (typeof factValue !== "string" || !moment(factValue, DATE_FORMAT)) {
      return false;
    }

    return moment(factValue, DATE_FORMAT).isSame(moment(), "month");
  },
};
