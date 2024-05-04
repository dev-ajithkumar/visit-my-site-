import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

function LeftSideBar() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div
      className={`${
        !isMobile ? "block" : "hidden"
      } w-80 p-4 flex flex-col justify-evenly items-center`}
      style={{ height: "615px" }}
    >
      <ul className="h-full flex flex-col justify-center">
        <li className="flex justify-center">
          <div className="border-l-2 border-gray-400 h-24 mb-3"></div>
        </li>
        <li>
          <Link to="https://github.com/dev-ajithkumar" target="_blank">
            <FaGithub className="text-4xl mb-4" />
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/ajith_kumar_b_" target="_blank">
            <FiTwitter className="text-4xl mb-4" />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/dev-ajith-kumar/"
            target="_blank"
          >
            <FaLinkedin className="text-4xl mb-4" />
          </Link>
        </li>
        <li>
          <Link to="https://wa.me/9515095925" target="_blank">
            <FaWhatsapp className="text-4xl mb-4" />
          </Link>
        </li>
        <li className="flex justify-center gap-5">
          <div className="border-l-2 border-gray-400 h-24 mt-3 "></div>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideBar;
