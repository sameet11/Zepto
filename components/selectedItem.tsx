import { response } from "@/types";

import Image from "next/image";
import { IoIosClose } from "react-icons/io";

interface SelectedItemProps {
  select: response;
  onRemove: () => void;
}
const SelectedItem: React.FC<SelectedItemProps> = ({ select, onRemove }) => (
  <div className="flex rounded-full bg-gray-300 gap-x-2 justify-between w-fit h-10 items-center mr-1 mb-2">
    <div>
      <Image
        src={select.icon}
        alt="Zepto"
        height={10}
        width={10}
        className="h-10 rounded-full w-full"
      />
    </div>
    <div>{select.name}</div>
    <button onClick={onRemove}>
      <IoIosClose size={40} />
    </button>
  </div>
);
export default SelectedItem;
