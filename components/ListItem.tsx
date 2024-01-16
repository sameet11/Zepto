import { response } from "@/types";
import Image from "next/image";

interface ListItemProps {
  list: response;
  onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({ list, onClick }) => (
  <div className="flex hover:bg-gray-200 p-1 cursor-pointer" onClick={onClick}>
    <div>
      <Image
        src={list.icon}
        alt="zepto"
        height={30}
        width={30}
        className="rounded-full"
      />
    </div>
    <div className="flex flex-col justify-center ml-2">
      <div className="text-base">{list.name}</div>
      <div className="text-gray-400">{list.email}</div>
    </div>
  </div>
);

export default ListItem;
