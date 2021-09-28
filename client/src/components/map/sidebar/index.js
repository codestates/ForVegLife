import react, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuInfo from "./menuInfo";
import PlaceInfo from "./placeinfo";
import Review from "./review";
import { useSelector, useDispatch } from "react-redux";
import { selectPlace } from "../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import gsap from "gsap";
import { useRef } from "react";

export default function SideBar({ select, inReview, exitReview }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer);
  const selPlace = useSelector((state) => state.selectPlace);
  const [tempdata, setTempData] = useState([]);
  const sideRef = useRef();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/restaurant/${selPlace.id}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setTempData(...res.data);
      });
  }, [selPlace.id]);

  useEffect(() => {
    if (selPlace.id !== 0) {
      gsap.to(sideRef.current, {
        left: 0,
        height: "calc(100vh - 3.35rem - 5vh)",
        width: "30vw",
        minWidth: "20rem",
      });
    }
  });
  let data = tempdata;
  console.log(data);
  // axios 요청으로 받아오기
  // 일단은 더미데이터
  // const data = {
  //   like: {
  //     Lacto: "30%",
  //     Pollo: "20%",
  //     Pesco: "20%",
  //     Ovo: "20%",
  //     Vegan: "10%",
  //   },
  //   placeId: 4,
  //   title: "어느 비건의 케이크집",
  //   menu: ["toast", "cake"],
  //   price: [3500, 5000],
  //   review_star: [
  //     {
  //       nickName: "lorem",
  //       content: "Elit dolore dolor veniam deserunt.",
  //       createdAt: "2021-09-03 02:08:30",
  //       star: 3.5,
  //       reviewId: 5,
  //     },
  //     {
  //       nickName: "ipsum",
  //       content:
  //         "Mollit exercitation enim do sit eu. Deserunt culpa pariatur excepteur aliquip do deserunt deserunt sint. Laborum veniam id nisi amet non anim cupidatat fugiat.",
  //       createdAt: "2021-09-03 02:08:30",
  //       star: 2,
  //       reviewId: 3,
  //     },
  //   ],
  // };
  return (
    <>
      {!(Array.isArray(data) && data.length === 0) ? (
        <Side ref={sideRef}>
          <Exit onClick={() => dispatch(selectPlace({ x: 0, y: 0, id: 0 }))}>
            <FontAwesomeIcon icon={faTimes} />
          </Exit>
          <MenuInfo
            place={data.title}
            menu={data.menu}
            price={data.price}
            like={data.favirote}
            src={data.image}
          />
          <PlaceInfo user={data.like} />
          <Review
            review={data.review}
            inReview={inReview}
            exitReview={exitReview}
          />
        </Side>
      ) : (
        ""
      )}
    </>
  );
}

const Exit = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  font-size: 2rem;
`;
const Side = styled.div`
  display: flex;
  border: 2px solid rgba(124, 183, 0, 0.5);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: absolute;
  margin: 0;
  top: 5vh;
  width: 0%;
  height: 0;
  overflow: auto;
  z-index: 2;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
