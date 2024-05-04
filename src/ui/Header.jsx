import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import HeaderItems from "./HeaderItems";
import { useMediaQuery } from "react-responsive";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="md:flex justify-between">
      <div
        className={`${
          isMobile
            ? "flex justify-between items-center p-3"
            : "flex justify-between h-20"
        }`}
      >
        <Link to="/">
          <BiLogoReact className="text-4xl m-4" />
        </Link>
        <div className={`${isMobile ? "block" : "hidden"}`}>
          {!isOpen ? (
            <RxHamburgerMenu onClick={handleToggleMenu} />
          ) : (
            <MdClose onClick={handleToggleMenu} />
          )}
        </div>
      </div>
      <HeaderItems isOpen={isOpen} isMobile={isMobile} />
    </div>
  );
}

export default Header;
