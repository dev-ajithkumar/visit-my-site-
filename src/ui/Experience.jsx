import { supabaseUrl } from "../services/supabase";
import ImageComponent from "./ImageComponent";
import Skill from "./Skill";
import { IoMdArrowDropright } from "react-icons/io";

function Experience() {
  const imageSrc = `${supabaseUrl}/storage/v1/object/sign/my-info/skill-lync%20my%20desk.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteS1pbmZvL3NraWxsLWx5bmMgbXkgZGVzay5qcGciLCJpYXQiOjE3MTQ0NjQ4ODgsImV4cCI6MTc0NjAwMDg4OH0.D37yDOh8CAdaPA7m7kC8pBmxLZlO5mPIwnlFoYPQX_4&t=2024-04-30T08%3A14%3A44.123Z`;

  return (
    <div className="m-4">
      <h1 className="text-xl mb-2 md:text-4xl md:mb-3">Where I’ve Worked</h1>
      <div>
        <h1 className="text-3xl mb-2 md:text-5xl md:mb-3">Skill-Lync</h1>
        <p className="text-xl font-medium md:text-2xl">
          So, I did my thing at Skill-Lync for a year, handling tech ops from
          <span className="text-orange-600 text-sm md:text-1xl">
            {" "}
            (Mar 03 2022 - April 07 2023)
          </span>
        </p>
        <div className="flex p-3 w-full flex-col">
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start">
            <ImageComponent src={imageSrc} width={`280px`} height={`350px`} />
            <div className="p-3 md:text-xl">
              <h1 className="text-xl mb-2 md:text-2xl md:mb-3">
                What I handle day-to-day?
              </h1>
              <ul>
                <li className="pb-2">
                  <Skill icon={<IoMdArrowDropright />}>
                    Prioritize tickets based on urgency and impact on operations
                    or users.
                  </Skill>
                </li>
                <li className="pb-2">
                  <Skill icon={<IoMdArrowDropright />}>
                    Troubleshoot any technical issues that arise software bugs
                  </Skill>
                </li>
                <li className="pb-2">
                  <Skill icon={<IoMdArrowDropright />}>
                    Coordinate with other teams for support or assistance when
                    needed.
                  </Skill>
                </li>
                <li className="pb-2">
                  <Skill icon={<IoMdArrowDropright />}>
                    Following up. All clear, or do i need to dive back in?
                  </Skill>
                </li>
                <li className="pb-2">
                  <Skill icon={<IoMdArrowDropright />}>
                    Review support tickets from email, ticketing systems, or
                    chat channels.
                  </Skill>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
