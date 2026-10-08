import React, { createContext, useCallback, useContext, useState } from "react";

export type SelectedTable = {
  id: number;
  pax: number;
  section: "Indoor" | "Outdoor";
};

type TableContextValue = {
  selectedTable: SelectedTable;
  setSelectedTable: (table: SelectedTable) => void;
};

const DEFAULT_TABLE: SelectedTable = {
  id: 13,
  pax: 4,
  section: "Indoor",
};

const TableContext = createContext<TableContextValue | undefined>(undefined);

export const TableProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedTable, setSelectedTableState] =
    useState<SelectedTable>(DEFAULT_TABLE);

  const setSelectedTable = useCallback((table: SelectedTable) => {
    setSelectedTableState(table);
  }, []);

  return (
    <TableContext.Provider
      value={{
        selectedTable,
        setSelectedTable,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export function useTable() {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("useTable must be used inside TableProvider");
  }

  return context;
}
