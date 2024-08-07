import { useAtom } from "jotai";
import React, { useState } from "react";
import { loveAtom } from "../Atom/Jotai";

const BIthi = () => {
  const [count] = useAtom(loveAtom);
  const [active, setActive] = useState(false);
  return (
    <div>
      <h1>Hello Bithi!</h1>
      <p>Welcome to my website.</p>
      <div>Do you see a magic ?</div>
      <button
        onClick={() => {
          setActive(true);
        }}
      >
        Click me
      </button>
      {active && <p>Akash loves you {count} times</p>}
    </div>
  );
};

export default BIthi;
