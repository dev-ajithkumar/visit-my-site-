import { Link } from "react-router-dom";
import ImageComponent from "./ImageComponent";
import { HiOutlineExternalLink } from "react-icons/hi";

function Project({ name, detail, src, reference }) {
  return (
    <div className="mt-3">
      <h2 className="text-3xl mb-2 md:text-5xl md:mb-3">
        Task Title: <span className="text-red-500">{name} </span>
      </h2>
      <p className="text-xl mb-2 md:text-2xl md:mb-3">{detail}</p>
      <div className="p-3">
        <ImageComponent
          src={src}
          className="w-72 md:w-96 h-24 md:h-32"
          alt={`the-wild-oasis-project-dashboard`}
        />
      </div>
      <Link
        to={reference.current}
        target="_blank"
        className="text-red-500 text-xl inline-flex items-center gap-2 md:text-2xl mt-2 mb-2"
        style={{ textDecoration: "none" }}
      >
        Check Out! <HiOutlineExternalLink />
      </Link>
      <hr className="mt-4" />
    </div>
  );
}

export default Project;
