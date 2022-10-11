import React, { useState } from "react";
import "../Rarity.css";
import { useNavigate } from "react-router-dom";

import books from "../json/book.json";
import bows from "../json/bow.json";
import coins from "../json/coin.json";
import ogres from "../json/ogres.json";
import shields from "../json/shield.json";
import skeletons from "../json/skeletons.json";
import slimes from "../json/slimes.json";
import swords from "../json/sword.json";

const Rarity = () => {
  const navigate = useNavigate();
  const [mainFilter, setMainFilter] = useState(null);
  const [secFilter, setSecFilter] = useState(null);
  return (
    <div className="RContainer">
      <div
        className="HomeContainer"
        onClick={() => {
          navigate("/");
        }}
      >
        <h1>Home</h1>
      </div>
      <div className="MainFilter">
        <div
          className={mainFilter == books ? "TypeBtn1" : "TypeBtn"}
          onClick={() => setMainFilter(books)}
        >
          <p>Books</p>
        </div>
        <div
          className={mainFilter == coins ? "TypeBtn1" : "TypeBtn"}
          onClick={() => setMainFilter(coins)}
        >
          <p>Coins</p>
        </div>
        <div
          className={mainFilter == bows ? "TypeBtn1" : "TypeBtn"}
          onClick={() => setMainFilter(bows)}
        >
          <p>Bows</p>
        </div>
        <div
          className={mainFilter == swords ? "TypeBtn1" : "TypeBtn"}
          onClick={() => setMainFilter(swords)}
        >
          <p>Swords</p>
        </div>
        <div
          className={mainFilter == shields ? "TypeBtn1" : "TypeBtn"}
          onClick={() => setMainFilter(shields)}
        >
          <p>Shields</p>
          <br />
        </div>
        <div
          className={mainFilter == ogres ? "TypeBtn1" : "TypeBtn"}
          onClick={() => setMainFilter(ogres)}
        >
          <p>Ogres</p>
        </div>
        <div
          className={mainFilter == skeletons ? "TypeBtn1" : "TypeBtn"}
          onClick={() => setMainFilter(skeletons)}
        >
          <p>Skeletons</p>
        </div>
        <div
          className={mainFilter == slimes ? "TypeBtn1" : "TypeBtn"}
          onClick={() => setMainFilter(slimes)}
        >
          <p>Slimes</p>
        </div>
      </div>
      <div className="SecFilter">
        <div className="SFAlign">
          {mainFilter &&
            mainFilter.map((data) => {
              return (
                <div
                  className="Display"
                  key={data.id}
                  onClick={() => setSecFilter(data.title)}
                >
                  <p>- {data.title}</p>
                  <br />
                </div>
              );
            })}
        </div>
      </div>
      <div className="CardContainer">
        {mainFilter &&
          mainFilter.map((data) => {
            return data.title === secFilter ? (
              data.cards &&
                data.cards.map((card) => {
                  return (
                    <div className="Card" key={data.id}>
                      <h1>{card.name}</h1>
                      <img src={card.img} alt="" />
                      {/* {card.img} */}
                      <h2>{card.rarity}</h2>
                      <p>{card.description}</p>
                    </div>
                  );
                })
            ) : (
              <div></div>
            );
          })}
      </div>
    </div>
  );
};

export default Rarity;
