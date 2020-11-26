import React, { Fragment, useState } from "react";
import styled from "styled-components";
import useBreakPoints from "../utils/useBreakpoints";
import { down } from "styled-breakpoints";
import { connect, useDispatch, useSelector } from "react-redux";
import { Input, Button, Drawer } from "antd";
//import "~antd/dist/antd.css";

const WrapTwo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  flex-wrap: wrap;
`;

const InputElement1 = styled(Input)`
  padding: 5px;
  margin-right: 10px;
  flex-basis: 30%;
  @media only screen and (max-width: 862px) {
    flex-basis: 100%;
    margin-right: 0px;
  }
`;

const InputElement2 = styled(Input)`
  padding: 5px;
  flex-basis: 40%;
  @media only screen and (max-width: 862px) {
    flex-basis: 100%;
    margin-top: 10px;
  }
`;

const CartButton = styled(Button)`
  flex-basis: 20%;
  @media only screen and (max-width: 862px) {
    flex-basis: 100%;
    margin-top: 10px;
  }
`;

const CartWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  margin: 10px;
`;

const Butt = styled(Button)`
  margin: 0 auto;
`;

const XY = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Oka = styled.div`
  margin-top: 50px;
  border: 5px green;
  height: 420px;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 862px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const MyImage = styled.img`
  height: 370px;
  max-width: 100%;
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

const InputForm = (props) => {
  const [title, setTitle] = useState();
  const [link, setLink] = useState();
  const [visible, setVisible] = useState(false);
  //  const { mobile } = useBreakPoints();
  const photos = useSelector((state) => state.photos);
  console.log(photos);
  const handleTitle = (event) => {
    setTitle(event.target.value);
    //        console.log(title);
  };

  const handleLink = (event) => {
    setLink(event.target.value);
    //        console.log(link);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const dispatch = useDispatch();

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <WrapTwo>
        <InputElement1 placeholder="title" onChange={handleTitle} />
        <InputElement2 placeholder="link of the image" onChange={handleLink} />
        <CartButton onClick={showDrawer}>Show Cart Items</CartButton>
      </WrapTwo>

      <Drawer
        width={300}
        title="Your cart items!"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <CartWrapper>
          {photos
            .filter((photo) => photo.clicked >= 1)
            .map((photo) => {
              return (
                <Oka>
                  <MyImage alt="example" src={photo.link} />
                  <Upper>Total: {photo.clicked} times</Upper>
                </Oka>
              );
            })}
        </CartWrapper>
      </Drawer>
      <XY>
        <Butt
          onClick={() => {
            dispatch({ type: "ADD_IMAGE", title: title, link: link });
          }}
        >
          Add image
        </Butt>
      </XY>
    </>
  );
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onAdded: (t,l) => dispatch({type: 'CLICKED', title: t, link: l })
//     };
// }

export default InputForm;
