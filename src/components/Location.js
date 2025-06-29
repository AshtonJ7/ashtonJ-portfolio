import React from "react";
import Typewriter from "typewriter-effect";


function Type() {
  return (
    <span className="typewriter-text">
      <Typewriter
        options={{
          strings: ["Location:"],
          autoStart: true,
          loop: true,
          deleteSpeed: 60,
        }}
      />
    </span>
  );
}

export default Type;