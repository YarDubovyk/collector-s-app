"use client";
import React, { useState } from "react";
import ItemList from "../items-list";
import ItemDeatails from "../item-details";

const ContentWrapper = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  const getItem = (itemData: any) => {
    setSelectedItem(itemData);
  };
  return (
    <div>
      <div className="m-4 p-4 border-2 border-white">
        <div><ItemList onItemClick={getItem} /></div>
        <div>
          <ItemDeatails selectedItem={selectedItem} />
        </div>
      </div>
    </div>
  );
};

export default ContentWrapper;
