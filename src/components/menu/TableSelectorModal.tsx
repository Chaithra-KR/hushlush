import React, { useState } from "react";
import { Users, X, Check, Armchair } from "lucide-react";

import { useTable, type SelectedTable } from "../../context/TableContext";

interface TableSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TABLES: SelectedTable[] = [
  { id: 1, pax: 2, section: "Indoor" },
  { id: 2, pax: 2, section: "Indoor" },
  { id: 5, pax: 4, section: "Indoor" },
  { id: 13, pax: 4, section: "Indoor" },
  { id: 14, pax: 6, section: "Indoor" },
  { id: 20, pax: 2, section: "Outdoor" },
  { id: 21, pax: 4, section: "Outdoor" },
  { id: 22, pax: 8, section: "Outdoor" },
];

export const TableSelectorModal: React.FC<TableSelectorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { selectedTable, setSelectedTable } = useTable();

  const [activeSection, setActiveSection] = useState<
    "All" | "Indoor" | "Outdoor"
  >("All");

  if (!isOpen) {
    return null;
  }

  const filteredTables =
    activeSection === "All"
      ? TABLES
      : TABLES.filter((table) => table.section === activeSection);

  const handleSelectTable = (table: SelectedTable) => {
    setSelectedTable(table);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
      <div className="w-full max-w-lg rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="rounded-xl bg-red-50 p-2.5 text-red-600">
              <Armchair className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-bold text-gray-900">
                Select Dine-in Table
              </h2>

              <p className="text-xs text-gray-500">
                Pick your table number to associate your orders
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close table selector"
            className="rounded-full p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="my-4 flex gap-2">
          {(["All", "Indoor", "Outdoor"] as const).map((section) => {
            const isActive = activeSection === section;

            return (
              <button
                key={section}
                type="button"
                onClick={() => setActiveSection(section)}
                className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? "bg-red-600 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {section}
              </button>
            );
          })}
        </div>

        <div className="grid max-h-72 grid-cols-3 gap-3 overflow-y-auto p-1 sm:grid-cols-4">
          {filteredTables.map((table) => {
            const isSelected = selectedTable.id === table.id;

            return (
              <button
                key={table.id}
                type="button"
                onClick={() => handleSelectTable(table)}
                className={`group relative flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-3 text-center transition-all ${
                  isSelected
                    ? "border-red-600 bg-red-50/50 shadow-sm ring-2 ring-red-500/20"
                    : "border-gray-100 bg-gray-50/70 hover:border-gray-300 hover:bg-white"
                }`}
              >
                {isSelected && (
                  <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-white">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </span>
                )}

                <span
                  className={`text-sm font-bold ${
                    isSelected ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  T-{table.id}
                </span>

                <span className="flex items-center gap-1 text-[11px] text-gray-500">
                  <Users className="h-3 w-3" />
                  {table.pax} PAX
                </span>

                <span className="text-[10px] font-medium text-gray-400">
                  {table.section}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 text-xs text-gray-500">
          <span>
            Active:{" "}
            <strong className="text-gray-800">
              Table {selectedTable.id} ({selectedTable.pax} PAX)
            </strong>
          </span>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-gray-100 px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
