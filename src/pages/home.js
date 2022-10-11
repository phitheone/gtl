import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Animator,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  Zoom,
} from "react-scroll-motion";

import "../App.css";

import tc from "../images/top.png";
import bc from "../images/bot.png";
import smoke from "../images/smoke.png";
import shop from "../images/shop.png";

const Home = () => {
  const navigate = useNavigate();
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(200, 0))}>
          <img src={smoke} />
        </Animator>
        <Animator animation={batch(Sticky(), Fade())}>
          <h1>Scroll for Treasure</h1>
        </Animator>
        <Animator animation={batch(Sticky(50, 18), Fade(), MoveOut(0, -400))}>
          <img src={tc} />
        </Animator>

        <Animator animation={batch(Sticky(50, 83), Fade(), MoveOut(0, 400))}>
          <img className="CaveImage" src={bc} />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}></ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Sticky(), Fade())}>
          <img src={shop} />
        </Animator>
        <Animator animation={batch(Sticky(), Fade())}>
          <div className="LinksContainer">
            <div className="LinksLeft">
              <a href="https://twitter.com" target="_blank">
                <div className="Link3"></div>
              </a>
            </div>
            <div className="LinksCenter">
              <a href="https://www.launchmynft.io/" target="_blank">
                <div className="Link1"></div>
              </a>
              <div
                className="Link2"
                onClick={() => {
                  navigate("/rarity");
                }}
              ></div>
            </div>
            <div className="LinksRight">
              <a href="https://discord.com/" target="_blank">
                <div className="Link4"></div>
              </a>
            </div>
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Home;
