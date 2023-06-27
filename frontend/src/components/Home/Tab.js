import { useState } from "react";
import "./Tab.css";
import TableCollapsible from "./TableCollapsible";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <TableCollapsible />
    </div>
  );
}

export default Tabs;
