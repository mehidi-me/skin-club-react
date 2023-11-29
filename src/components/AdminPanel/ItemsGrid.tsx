import React from "react";

function ItemsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-6 mt-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {children}
    </div>
  );
}

export default ItemsGrid;
