import React, { Fragment } from "react";
import styled from "styled-components";
import useBreakPoints from "../utils/useBreakpoints";
import { down } from "styled-breakpoints";
import { connect, useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
//import classes from ''
import "../App.css";

const MyIcon = styled(PlusCircleOutlined)`
  position: absolute;
  top: 40%;
  left: 45%;
  font-size: 45px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  &:hover ~ .my-image {
    opacity: 0.4;
  }
`;

const MyImage = styled.img`
  height: 400px;
  width: 100%;
  margin-top: 15px;
  margin-bottom: 0px;
  &:hover {
    transform: scale(0.9);
    transition: 0.5s ease;
    opacity: 0.4;
  }
  &:hover ~ .my-icon {
    opacity: 1;
  }
  @media only screen and (max-width: 862px) {
    width: 100%;
  }
`;

const MyDiv = styled.div`
  display: flex;
  flex-basis: 30%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  @media only screen and (max-width: 862px) {
    flex-direction: column;
    flex-basis: 100%;
    align-content: center;
    justify-content: center;
  }
`;

const Oka = styled.div`
  margin-top: 70px;
  border: 5px green;
  height: 500px;
  width: 32%;
  position: relative;
  @media only screen and (max-width: 862px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const MyDisp = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 5px green;
`;

const Upper = styled.div`
  background-color: #f6f6f6;
  color: red;
  max-width: 100%;
  font-size: 20px;
  max-height: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: wrap;
  border: 5px solid greenyellow;
  margin-top: 0px;
  -webkit-line-clamp: 1;
`;

const AllImages = () => {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <MyDiv>
        {photos.map((photo, index) => {
          return (
            <Oka>
              <MyImage
                className="my-image"
                src={photo.link}
                alt="example"
                key={index}
              />
              <Upper>{photo.title}</Upper>
              <MyIcon
                className="my-icon"
                onClick={() => {
                  dispatch({ type: "CLICKED", id: photo.id });
                }}
              />
            </Oka>
          );
        })}
      </MyDiv>
    </Fragment>
  );
};

export default AllImages;
