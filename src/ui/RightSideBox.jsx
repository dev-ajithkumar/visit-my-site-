import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function RightSideBox() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const email = "dev.ajithkumar.b@gmail.com";
  return (
    <div
      className={`${
        !isMobile ? "block" : "hidden"
      } w-80 flex flex-col justify-evenly items-center md:h-screen`}
    >
      <div className="border-l-2 border-gray-400 h-24"></div>
      <div className="flex flex-col rotated mt-3 mb-3">
        <Link to={`emailto:${email}`}>{email}</Link>
      </div>
      <div className="border-l-2 border-gray-400 h-24"></div>
    </div>
  );
}

export default RightSideBox;
