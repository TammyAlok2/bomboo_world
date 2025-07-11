// components/Header/Icons.tsx
import { TbShoppingBagHeart } from "react-icons/tb";
import { TiShoppingCart } from "react-icons/ti";

const Icons = () => {
  return (
    <div className="flex gap-4">
      <div className="flex hover:text-red-600 gap-2">
        <TbShoppingBagHeart className="text-[1.5rem]" />
      </div>
      <div className="flex hover:text-red-600 gap-2">
        <TiShoppingCart className="text-[1.5rem]" />
      </div>
    </div>
  );
};

export default Icons;
