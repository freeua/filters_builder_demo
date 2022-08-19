import { useEffect, useState } from "react";
import FiltersBuilder from "filters-builder";
import { Button } from "antd";
import getItitialConditions from "./utils/getInitialConditions";
import { fields, operators, testData } from "./data";
import { start } from "./engine";

import "filters-builder/styles";

export default function App() {
  const [conditions, setConditions] = useState(getItitialConditions(null));

  useEffect(() => console.table(testData), []);

  const handleChange = (conditions: any) => {
    setConditions(conditions);

    // Example of saving the nodes to localStorage
    localStorage.setItem("defaultConditions", JSON.stringify(conditions));
  };

  const handleStartEngine = async () => await start(conditions);

  return (
    <div className='wrapper'>
      <header>
        <h1>Filters Builder</h1>
      </header>

      <main>
        <FiltersBuilder
          conditions={conditions}
          fields={fields as any}
          operators={operators as any}
          onChange={handleChange}
        />
      </main>

      <div className='code-wrapper'>
        <div className='code-block'>
          <Button type='ghost' onClick={handleStartEngine}>
            Start Engine
          </Button>

          <pre>{JSON.stringify(conditions, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
