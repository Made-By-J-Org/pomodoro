import React, { useEffect } from "react";
import "./Application.scss";
import Counter from "@components/Counter/Counter";
import Controls from "@components/Controls/Controls";
import AddCounter from "@components/AddCounter/AddCounter";

const Application: React.FC = () => {

  return (
    <main>
      <Counter/>
      <Counter/>
      <Counter/>
      <AddCounter/>
      <Controls/>
    </main>
  );
};

export default Application;
