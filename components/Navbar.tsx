import type { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center justify-between w-full text-center text-black">
      <h1 className="text-lg">Tech Press</h1>
      <p>Toggle</p>
    </div>
  );
};
export default Navbar;
