import React from 'react';
import Header from "../Header";
import {Layout} from "../../models";

const LayoutApp: React.FunctionComponent<Layout> = ({ children }) => {
  return (
    <div className="layout-container bg-white">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default LayoutApp;
