import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
    <div className="flex flex-col justify-evenly bg-slate-50">
      {isMobile && (
        <ul className="flex justify-center items-center gap-3 pt-4">
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
        </ul>
      )}
      <div className="flex flex-col w-screen justify-center items-center pb-3 md:p-4">
        <p>Designed and Developed by Ajith Kumar</p>
        <span>2024</span>
      </div>
    </div>
  );
}

export default Footer;
