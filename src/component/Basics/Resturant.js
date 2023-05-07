import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import NavBar from "./NavBar";

const uniqueList = [...new Set(Menu.map((curElem) => {
  return curElem.category;
}))]
console.log(uniqueList);
const Resturant = () => {
  // const [menuData, setMenuData] = useState(initialdata);
  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList);
  // console.log(menuData);

  const filterItem = (category) => {
    if(category === "All") {
      setMenuData(Menu);
    }
    else
    {const updatedList = Menu.filter((curelem) => {
      return curelem.category === category;
    });

    setMenuData(updatedList);}

  };
  return (
    <>      
    <NavBar filterItem={filterItem} menuList={menuList} />
    <MenuCard menuData={menuData}/>
    </>
  );
};

export default Resturant
