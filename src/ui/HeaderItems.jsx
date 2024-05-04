import { Link } from "react-router-dom";

function HeaderItems({ isOpen, isMobile }) {
  const resume = `https://drive.google.com/file/d/1lKh3eItMmSyWmWWbsJRa2LUk16Jsgcjz/view?usp=sharing`;
  return (
    <ul
      className={`${isMobile && isOpen ? "block" : "hidden"} ${
        isMobile
          ? "flex flex-col justify-center items-center p-3 rounded"
          : "md:flex md:flex-row justify-end items-center gap-1 mr-2"
      } `}
    >
      <li className="hover:bg-gray-100 hover:text-gray-800 p-2 rounded-md ">
        <Link to={resume} target="_blank">
          Resume
        </Link>
      </li>
      <li className="hover:bg-gray-100 hover:text-gray-800 p-2 rounded-md">
        <Link to="/about">About</Link>
      </li>
      <li className="hover:bg-gray-100 hover:text-gray-800 p-2 rounded-md">
        <Link to="/experience">Experience</Link>
      </li>
      <li className="hover:bg-gray-100 hover:text-gray-800 p-2 rounded-md">
        <Link to="/work">Work</Link>
      </li>
      <li className="hover:bg-gray-100 hover:text-gray-800 p-2 rounded-md">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default HeaderItems;
