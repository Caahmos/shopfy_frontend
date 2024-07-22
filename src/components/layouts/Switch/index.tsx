import React, { useState, useEffect } from "react";
import ReactSwitch from "react-switch";

const Switch: React.FC = () => {
  const [isActived, setIsActived] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem('@shopsy:theme');
      return storedTheme === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem("@shopsy:theme", JSON.stringify(isActived));
    
    const htmlElement = document.documentElement;
    if (isActived) {
      htmlElement.classList.add('dark');
      htmlElement.classList.remove('light');
    } else {
      htmlElement.classList.add('light');
      htmlElement.classList.remove('dark');
    }
  }, [isActived]);

  const changeTheme = () => {
    setIsActived((prev) => !prev);
  };

  return <ReactSwitch checked={isActived} onChange={changeTheme} />;
};

export default Switch;
