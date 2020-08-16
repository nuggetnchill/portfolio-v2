import React, { useState, useEffect } from "react";

export default function Clock() {
  const [clock, setClock] = useState(null);

  const displayTime = () => {
    setInterval(() => {
      const today = new Date();
      const h = today.getHours();
      const m = today.getMinutes();
      const s = today.getSeconds();
      // document.querySelector(".clock").textContent = ` ${h}:${m}:${s} `;
      const time = ` ${h}:${m}:${s} `;
      setClock(time);
    }, 1000);
    // console.log("hi" | "how is it going");
    clearInterval();
  };

  useEffect(() => {
    displayTime();
    clearInterval();
  }, []);

  return (
    <div>
      <h1 className='clock'>{clock}</h1>
    </div>
  );
}
