import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-4">
          A dedicated frontend developer with a willingness to learn and passion
          for frontend technologies. I strive to write clean and readable code.
          Curious, proactive, and ready to learn new challenges and technologies
          to grow and develop myself. I love working on web applications and
          have experience with a variety of technologies, including React.js,
          CSS, and TypeScript. I'm always looking to expand my knowledge and
          skills to create exceptional user experiences and solve complex
          problems.
        </p>
        <br />
      </div>
    </div>
  );
}

export default About;
