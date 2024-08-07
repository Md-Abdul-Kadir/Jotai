import { useAtom } from "jotai";
import React from "react";
import { loveAtom } from "../Atom/Jotai";

const Akash = () => {
  const [loveCount, setLoveCount] = useAtom(loveAtom);
  return (
    <div>
      <h1>Hello Akash!</h1>
      <p>Welcome to my website.</p>
      {loveCount > 0 && <div>Akash loves you {loveCount} times</div>}
      <button
        onClick={() => {
          setLoveCount(loveCount + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Akash;
