import React from 'react';
import styled from 'styled-components';

const StyleCartList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 90px 30px;
    padding: 20px;
`;

const CardList = (props) => {
    return (
        <StyleCartList>
            {props.children}
        </StyleCartList>
    );
};

export default CardList;