import React from "react";

import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";

import { images, data } from "../../constants";

const renderWine = data.wines.map((wine, i) => {
  return (
    <MenuItem
      key={wine.title + i}
      title={wine.title}
      price={wine.price}
      tags={wine.tags}
    />
  );
});

const renderCocktail = data.cocktails.map((cocktail, i) => {
  return (
    <MenuItem
      key={cocktail.title + i}
      title={cocktail.title}
      price={cocktail.price}
      tags={cocktail.tags}
    />
  );
});

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className="headtext__cormorant">Toda's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__spacialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">{renderWine}</div>
      </div>
      <div className="app__specialMenu_menu_img">
        <img src={images.menu} alt="menu-img" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__spacialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">{renderCocktail}</div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
