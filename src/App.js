import React from "react";
import DataHighlightingTable from "./components/DataHighlightingTable";
import ClassicTable from "./components/ClassicTable";
import ModernMinimalisticTable from "./components/ModernMinimalisticTable";
import CardBasedTable from "./components/CardBasedTable";
import DashboardTable from "./components/DashboardTable";

const App = () => {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto p-12">
        <h1 className="text-md border-b-2 font-black max-w-fit">
          Tailwind CSS Table Styling
        </h1>
        <div className="py-4">
          <ModernMinimalisticTable />
        </div>

        <div className="flex space-x-12">
          <div className="py-4">
            <ClassicTable />
          </div>
          <div className="py-4">
            <DataHighlightingTable />
          </div>
        </div>

        <div className="flex">
          <div className="">
            <CardBasedTable />
          </div>
        </div>

        <div>
          <DashboardTable />
        </div>
      </div>
    </div>
  );
};

export default App;
