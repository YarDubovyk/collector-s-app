import React from "react";
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

const testData: GameData[] = [
  {
    id: 1,
    platform: "PS4",
    title: "The Last of Us Part II",
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

const Items = () => {
  return (
    <>
      <table>
        <th></th>
        <th></th>
        <th></th>
        <th>Platform</th>
        <th>Title</th>
        <th>Release Date</th>
        <th>Developer</th>
        <th>Genre</th>
        <th>Added Date</th>
        <tbody>
          {testData.map((item, index) => (
            <Item key={index} data={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Items;
