import { operatorEvaluators } from "./utils/operatorEvaluators";
import { Engine } from "json-rules-engine";
import { testData } from "./data";

export async function start(conditions: any) {
  const engine = new Engine();

  for (const [operator, callback] of Object.entries(operatorEvaluators)) {
    engine.addOperator(operator, callback);
  }

  engine.addRule({ conditions, event: { type: "all-good" } });

  let filtered: typeof testData = [];

  for (const facts of testData) {
    const res = await engine.run(facts);

    if (res.events.length > 0) filtered.push(facts);
  }

  console.log("====");

  if (filtered.length > 0) {
    console.table(filtered);
  } else {
    console.log("empty");
  }
}
