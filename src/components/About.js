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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          placeat unde. Dolorem fugiat nemo, mollitia laboriosam magnam maiores
          obcaecati eum rerum fuga, fugit quos? Quas voluptatum ea quos est
          voluptatibus.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          sapiente id velit vitae, quisquam voluptate repellat, dolorum labore
          deserunt omnis saepe quidem ipsa? Placeat velit beatae saepe sed,
          veritatis magni perferendis sapiente cumque rem provident quaerat
          cupiditate. Laboriosam deleniti consequuntur consequatur voluptatum
          delectus voluptas, doloremque cumque ullam atque! Blanditiis, numquam.
        </p>
      </div>
    </div>
  );
}

export default About;
