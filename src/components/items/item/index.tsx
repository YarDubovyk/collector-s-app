import React from "react";

interface GameData {
  id: number;
  platform: string;
  title: string;
  releaseDate: string;
  developer: string;
  genre: string;
  addedDate: string;
}

interface ItemProps {
  data: GameData;
}

const Item = ({ data }: ItemProps) => {
  return (
    <tr>
      <td>
        <input type="checkbox" />
      </td>
      <td>icon</td>
      <td>icon</td>
      <td>{data.platform}</td>
      <td>{data.title}</td>
      <td>{data.releaseDate}</td>
      <td>{data.developer}</td>
      <td>{data.genre}</td>
      <td>{data.addedDate}</td>
    </tr>
  );
};

export default Item;
