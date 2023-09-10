import React from "react";

interface ItemDetailsProps {
  selectedItem: GameData | null;
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ selectedItem }) => {
  return (
    <div>
      {selectedItem && (
        <>
          <h2>{selectedItem.title}</h2>
          <p>{selectedItem.description}</p>
          {/* Render other details */}
        </>
      )}
    </div>
  );
};

export default ItemDetails;
