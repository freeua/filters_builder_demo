export default function getItitialConditions(
  defaultState: any,
  itemName = "defaultConditions"
) {
  if (typeof window === "undefined") return defaultState;

  const defaultConditions = localStorage.getItem(itemName);

  // Validate from localStorage
  if (!defaultConditions) {
    return defaultState;
  }

  try {
    // Might be an error during the parse
    if (
      !JSON.parse(defaultConditions) ||
      typeof JSON.parse(defaultConditions) !== "object"
    ) {
      return defaultState;
    }

    return JSON.parse(defaultConditions);
  } catch (error) {
    console.error(error);
    localStorage.removeItem(itemName);
  }

  return defaultState;
}
