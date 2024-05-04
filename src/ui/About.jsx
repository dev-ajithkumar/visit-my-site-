import { supabaseUrl } from "../services/supabase";
import AboutDetails from "./AboutDetails";
import ImageComponent from "./ImageComponent";
import Skill from "./Skill";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function About() {
  const image = `${supabaseUrl}/storage/v1/object/sign/my-info/myWebImage.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteS1pbmZvL215V2ViSW1hZ2UuanBnIiwiaWF0IjoxNzE0MDM1NTMyLCJleHAiOjE3NDU1NzE1MzJ9.qF6ZCYgMBy2JuLaFX71CM861HTsrSJYppLzK2775r3Y&t=2024-04-25T08%3A58%3A50.336Z`;
  return (
    <>
      <div className="flex flex-col w-auto justify-center items-center md:flex-row md:justify-start md:items-start h-full mt-3">
        <ImageComponent
          src={image}
          alt="my-image"
          height="550px"
          width="330px"
        />
        <div>
          <AboutDetails />
          <div className="mb-1 mt-1 mr-4 ml-4 bg-slate-50 flex flex-col justify-center p-5 rounded-md ">
            <h2 className="text-bold mb-2 md:text-2xl md:mb-2">
              Web builder? Yep, this is my secret weapon!
            </h2>
            <Skill icon={<MdOutlineKeyboardArrowRight />}>Html</Skill>
            <Skill icon={<MdOutlineKeyboardArrowRight />}>Css</Skill>
            <Skill icon={<MdOutlineKeyboardArrowRight />}>
              JavaScript (ES6+)
            </Skill>
            <Skill icon={<MdOutlineKeyboardArrowRight />}>ReactJs</Skill>
            <Skill icon={<MdOutlineKeyboardArrowRight />}>NodeJs</Skill>
            <Skill icon={<MdOutlineKeyboardArrowRight />}>Tailwind</Skill>
            <Skill icon={<MdOutlineKeyboardArrowRight />}>Bootstrap</Skill>
            <Skill icon={<MdOutlineKeyboardArrowRight />}>
              Responsive Web-Design
            </Skill>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
