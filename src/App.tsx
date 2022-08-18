import { useState } from "react";
import FiltersBuilder from "filters-builder";
import getItitialConditions from "./utils/getInitialConditions";
import { fields, operators } from "./data";

import "filters-builder/styles";

export default function App() {
  const [conditions, setConditions] = useState(getItitialConditions(null));

  const handleChange = (conditions: any) => {
    setConditions(conditions);

    // Example of saving the nodes to localStorage
    localStorage.setItem("defaultConditions", JSON.stringify(conditions));
  };

  return (
    <div className='wrapper'>
      <header>
        <h1>Filters Builder</h1>
      </header>

      <main>
        <FiltersBuilder
          conditions={conditions}
          fields={fields as any}
          operators={operators}
          onChange={handleChange}
        />
      </main>

      <div className='code-wrapper'>
        <div className='code-block'>
          <pre>{JSON.stringify(conditions, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
