import React, { useState } from "react";
import { Users, X, Check, Armchair } from "lucide-react";

export interface SelectedTable {
  id: number;
  pax: number;
  section: "Indoor" | "Outdoor";
}

interface TableSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTable: SelectedTable;
  onSelectTable: (table: SelectedTable) => void;
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
  currentTable,
  onSelectTable,
}) => {
  const [activeSection, setActiveSection] = useState<
    "All" | "Indoor" | "Outdoor"
  >("All");

  if (!isOpen) return null;

  const filteredTables =
    activeSection === "All"
      ? TABLES
      : TABLES.filter((t) => t.section === activeSection);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-red-50 text-red-600 rounded-xl">
              <Armchair className="w-5 h-5" />
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
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-2 my-4">
          {(["All", "Indoor", "Outdoor"] as const).map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                activeSection === sec
                  ? "bg-red-600 text-white shadow-xs"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Tables Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-72 overflow-y-auto p-1">
          {filteredTables.map((t) => {
            const isSelected = currentTable.id === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  onSelectTable(t);
                  onClose();
                }}
                className={`relative p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all text-center group ${
                  isSelected
                    ? "border-red-600 bg-red-50/50 ring-2 ring-red-500/20 shadow-xs"
                    : "border-gray-100 bg-gray-50/70 hover:border-gray-300 hover:bg-white"
                }`}
              >
                {isSelected && (
                  <span className="absolute top-2 right-2 w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px]">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
                <span
                  className={`text-sm font-bold ${isSelected ? "text-red-600" : "text-gray-800"}`}
                >
                  T-{t.id}
                </span>
                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Users className="w-3 h-3" /> {t.pax} PAX
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  {t.section}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>
            Active:{" "}
            <strong className="text-gray-800">
              Table {currentTable.id} ({currentTable.pax} PAX)
            </strong>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
