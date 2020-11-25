import React from 'react';
import styled from 'styled-components';


const LayoutContainer = styled.div`
    margin: 100px;
    padding: 60px;
    @media only screen and (max-width: 862px) {
        padding: 10px;
        margin: 10px;
    }
`;

const contentLayout = (props) => {
    return (
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
    );
}

export default contentLayout;


