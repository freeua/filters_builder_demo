import { useState } from "react";
import FiltersBuilder from "filters-builder";
import getItitialConditions from "./utils/getInitialConditions";

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
        {/* <FiltersBuilder conditions={conditions} onChange={handleChange} /> */}
      </main>
    </div>
  );
}
