"use client";

import Item from "./item";

interface GameData {
  id: number;
  platform: string;
  title: string;
  releaseDate: string;
  developer: string;
  genre: string;
  addedDate: string;
}

interface TableTitle {
  title: string;
}

const tableTitles: TableTitle[] = [
  { title: "id" },
  { title: "platform" },
  { title: "Title" },
  { title: "Release Date" },
  { title: "Developer" },
  { title: "Genre" },
  { title: "Genre" },
];

const testData: GameData[] = [
  {
    id: 1,
    platform: "PS4",
    title: "Last of Us Part II",
    releaseDate: "2020-06-19",
    developer: "Naughty Dog",
    genre: "Action-Adventure",
    addedDate: "2021-03-15",
  },
  {
    id: 2,
    platform: "PC",
    title: "Cyberpunk 2077",
    releaseDate: "2020-12-10",
    developer: "CD Projekt",
    genre: "RPG",
    addedDate: "2021-02-28",
  },
];

const ItemList = ({ onItemClick }) => {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
          {tableTitles.map((item, index) => (
            <th className=" border-b-2 text-center" key={`table-title-${index}`}>{item.title}</th>
          ))}
          </tr>
        </thead>

        <tbody>
          {testData.map((item) => (
            <Item data={item} onItemClick={onItemClick} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ItemList;
