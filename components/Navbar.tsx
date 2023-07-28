import type { FC } from "react";
import { Switch } from "../@/components/ui/switch";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center justify-between w-full py-8 text-center text-black">
      <h1 className="text-xl font-bold">Tech Press</h1>
      <Switch />
    </div>
  );
};
export default Navbar;
