import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import UpDownContainer from "./components/layout/UpDownContainer";
import RowContainer from "./components/layout/RowContainer";
import GapH from "./components/layout/GapH";
import SmallMedium from "./components/text/SmallMedium";
import BoldSmallMedium from "./components/text/BoldSmallMedium";
import Card from "./components/Card";
import PinkSearch from "./assets/img/pink_search.png";
import { closePortfolio } from "./store/modalSlice";
import PortfolioModal from "./components/PortfolioModal";
import axios from "./util/axiosInstance";

function Popular() {
  const modal = useSelector((state) => state.modal);
  const [popularCake, setPopularCake] = useState([]);
  const [popularSeller, setPopularSeller] = useState([]);
  const [orderOptions, setOrderOptions] = useState([]);
  const dispatch = useDispatch();
  const handleClickOutModal = () => {
    if (modal.portfolioOpen) {
      dispatch(closePortfolio());
    }
  };

  useEffect(() => {
    axios.get("/portfolio/popular").then((res) => {
      setPopularCake(res.data);
    });
    axios.get("/seller/search/all").then(async (res) => {
      console.log(res.data);
      const topSellers = res.data.slice(0, 5);
      setPopularSeller(topSellers);

      const orderOptionPromises = topSellers.map((seller) => {
        return axios.get(`/seller/form/${seller.id}`);
      });

      try {
        const orderOptionResponses = await Promise.all(orderOptionPromises);
        const orderOptions2 = orderOptionResponses.map((res2) => res2.data);
        setOrderOptions(orderOptions2);
        console.log("a", orderOptions2);
      } catch (error) {
        console.error("Failed to fetch order options:", error);
      }
      console.log("b", orderOptions);
    });
  }, []);

  useEffect(() => {
    console.log("c", orderOptions[0].sheetTaste);
  }, [orderOptions]);

  return (
    <div>
      <Header handleClickOutModal={handleClickOutModal} />
      {modal.portfolioOpen ? <PortfolioModal /> : null}
      <UpDownContainer align="center" onClick={handleClickOutModal}>
        <GapH height="34px" />
        <RowContainer
          height="61px"
          width="451px"
          border="1px solid"
          borderRadius="30px"
          borderColor="#E3E3E3"
          position="relative"
        >
          <SmallMedium>내 지역 선택</SmallMedium>
          <img
            src={PinkSearch}
            alt="img"
            style={{
              width: "50px",
              position: "absolute",
              right: "26px",
            }}
          />
        </RowContainer>
        <GapH height="24px" />
        <RowContainer width="1194px" justify="start">
          <BoldSmallMedium>인기 케이크</BoldSmallMedium>
        </RowContainer>
        <GapH height="24px" />
        <RowContainer width="1194px" gap="21px">
          {popularCake.map((item) => {
            return (
              <Card
                title={item.detail}
                shape={item.shape}
                sheetTaste={item.sheetTaste}
                creamTaste={item.creamTaste}
                situation={item.situation}
                sellerId={item.businessName}
                size={item.size}
                detail={item.detail}
              />
            );
          })}
        </RowContainer>
        <GapH height="40px" />
        <RowContainer width="1194px" justify="start">
          <BoldSmallMedium>인기 가게</BoldSmallMedium>
        </RowContainer>
        <GapH height="24px" />
        <RowContainer width="1194px" gap="21px">
          {popularSeller.map((item) => {
            return (
              <Card
                title={item.businessDescription}
                // shape={orderOptions[index].sheetShape}
                // sheetTaste={orderOptions[index].sheetTaste}
                // creamTaste={orderOptions[index].creamTaste}
                situation={item.situation}
                sellerId={item.businessName}
              />
            );
          })}
        </RowContainer>
        <GapH height="83px" />
      </UpDownContainer>
    </div>
  );
}

export default Popular;
