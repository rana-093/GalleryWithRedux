import React, { Fragment } from 'react';
import styled from 'styled-components';
import useBreakPoints from '../utils/useBreakpoints';
import { down } from 'styled-breakpoints';
import { useSelector } from 'react-redux';

const Outer = styled.div`
    height: 50px;
    border: 5px solid blue;
    display: flex;
    position: sticky;
    align-items: center;
    top: 0;
    z-index: 1;
    border-radius: 10px;
    background: greenyellow;
    @media only screen and (max-width: 862px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Home = styled.div`
    margin: 5px;
`;

const Cart = styled.div`
    margin: 5px;
    margin-left: auto;
    @media only screen and (max-width: 862px) {
        margin: 5px;
    }
`;

const Navbar = (props) => {
    const total = useSelector(state => state.total);
    return (
        <Outer>
            <Home>
                Home
            </Home>
            <Cart>
                Total items in cart: { total}
            </Cart>
        </Outer>
    );
}

// const mapStateToProps = state => {
//     return{
//         count: state.clicked
//     };
// };

export default Navbar;


