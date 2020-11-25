import React, { Fragment } from 'react';
import styled from 'styled-components';
import useBreakPoints from '../utils/useBreakpoints';
import { down } from 'styled-breakpoints';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const MyImage = styled.img`
    width: 310px;
    height: 350px;
    margin-top: 15px;
    :hover{
        transform: scale(0.9);
    }
    @media only screen and (max-width: 862px){
        width: 100%;
    }
`;

const MyDiv = styled.div`
    display: flex;
    flex-basis: 30%;
    justify-content:space-evenly;
    flex-wrap: wrap;
    @media only screen and (max-width: 862px){
        flex-direction: column;
        flex-basis: 100%;
    }
`;

const Oka = styled.div`
    margin-top: 50px;
`;

const MyDisp = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Upper = styled.div`
    position: relative;
    background-color: #f6f6f6;
    color: red;
    height: auto;
    font-size: 30px;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: wrap;
`;

const MyIcon = styled(PlusCircleOutlined)`
    margin-left: auto;
    font-size: 30px;
    :hover{
        background-color: grey;
        transform: scale(0.9);
    }
`;


const AllImages = () => {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();

    return(
        <Fragment>
            <MyDiv>
            {
                photos.map((photo, index) => {
                    return (
                            <Oka>
                                <MyDisp>                               
                                    <Upper>{ photo.title }</Upper>
                                    <MyIcon onClick = {(() => dispatch({ type: 'CLICKED', id : photo.id}))} />
                                </MyDisp>
                                <MyImage src = {photo.link} alt = "example" key = {index} />
                            </Oka>
                    )
                })
            }
            </MyDiv>
        </Fragment>
    );

};


export default AllImages;