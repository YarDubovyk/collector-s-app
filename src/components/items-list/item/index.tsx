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
  onItemClick: (itemData: GameData) => void;
}

const Item = ({ data, onItemClick }: ItemProps) => {
  const { id, platform, title, releaseDate, developer, genre, addedDate } =
    data;

  const handleItemClick = () => {
    onItemClick(data);
  };
  return (
    <tr onClick={handleItemClick}>
      <td className="border-r-2 text-center border-b-2">{id}</td>
      <td className="border-r-2 text-center border-b-2">{platform}</td>
      <td className="border-r-2 text-center border-b-2">{title}</td>
      <td className="border-r-2 text-center border-b-2">{releaseDate}</td>
      <td className="border-r-2 text-center border-b-2">{developer}</td>
      <td className="border-r-2 text-center border-b-2 ">{genre}</td>
      <td className="  text-center border-b-2 "> {addedDate}</td>
    </tr>
  );
};

export default Item;
