import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import useBreakPoints from '../utils/useBreakpoints';
import { down } from 'styled-breakpoints';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'antd';


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
    @media only screen and (max-width: 862px){
        flex-basis: 100%;   
        margin-right: 0px;
    }
`;

const InputElement2 = styled(Input)`
    padding: 5px;
    flex-basis: 60%;
    @media only screen and (max-width: 862px) {
        flex-basis: 100%;
        margin-top: 10px;
    }
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

const InputForm = (props) => {
    const [title, setTitle] = useState();
    const [link, setLink] = useState();

    const handleTitle = (event) => {
        setTitle(event.target.value);
//        console.log(title);
    }

    const handleLink = (event) => {
        setLink(event.target.value);
//        console.log(link);
    }

    const dispatch = useDispatch();

    return (
        <Fragment>
            <WrapTwo>
                <InputElement1 
                    placeholder = "title"
                    onChange = { handleTitle}
                />
                <InputElement2
                    placeholder = "link of the image"
                    onChange = {handleLink}
                />
            </WrapTwo>
            <XY>
                <Butt onClick={(() => {dispatch({type:'ADD_IMAGE', title: title, link: link})})}>Add image</Butt>
            </XY>
        </Fragment>
    );
};

// const mapDispatchToProps = dispatch => {
//     return {
//         onAdded: (t,l) => dispatch({type: 'CLICKED', title: t, link: l })
//     };
// }

export default InputForm;