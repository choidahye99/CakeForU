import React from "react";
import { useDispatch } from "react-redux";
import ColContainer from "./layout/ColContainer";
import Tmp from "../assets/img/login_image.png";
import GapH from "./layout/GapH";
import Small from "./text/Small";
import MediumSmall from "./text/MediumSmall";
import EmptyHeart from "../assets/img/empty_heart.png";
import { setPortfolio, openPortfolio } from "../store/modalSlice";

function Card({
  title,
  sellerId,
  situation,
  size,
  shape,
  color,
  sheetTaste,
  creamTaste,
  detail,
}) {
  const desc = [color, shape, sheetTaste, creamTaste, situation].join(" #");
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openPortfolio());
    dispatch(
      setPortfolio({ size, shape, color, sheetTaste, creamTaste, detail })
    );
  };

  return (
    <ColContainer
      width="222px"
      height="393px"
      border="1px solid"
      borderColor="#D9D9D9"
      onClick={handleClick}
      cursor="pointer"
      align="start"
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <img
          src={Tmp}
          alt="img"
          style={{
            width: "222px",
            height: "217px",
            objectFit: "cover",
          }}
        />
        <img
          src={EmptyHeart}
          alt="img"
          style={{
            position: "absolute",
            width: "20px",
            top: "10px",
            right: "10px",
            zIndex: "1",
          }}
        />
      </div>
      <ColContainer
        height="110px"
        align="start"
        paddingLeft="10px"
        paddingRight="10px"
        justify="start"
      >
        <GapH height="14px" />
        <Small color="#A5A6A6" cursor="pointer">
          {sellerId}
        </Small>
        <GapH height="1px" />
        <MediumSmall cursor="pointer">{title}</MediumSmall>
      </ColContainer>
      <ColContainer
        height="62px"
        borderTop="1px solid"
        borderColor="#D9D9D9"
        borderTopColor="#D9D9D9"
        paddingLeft="10px"
        paddingRight="10px"
        justify="start"
      >
        <GapH height="10px" />
        <Small color="#A5A6A6" cursor="pointer">
          {desc}
        </Small>
      </ColContainer>
    </ColContainer>
  );
}

export default Card;
