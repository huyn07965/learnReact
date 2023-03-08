import React from 'react';
import styled, { css } from 'styled-components';

const StyleCard = styled.div`
    position: relative;
`;
const CardImage = styled.div`
    width: 100%;
    height: 400px;
    border-radius: 8px;
`;
const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;
const CardContent = styled.div`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    width: calc(90% - 36px);
    border-radius: 20px;
    padding : 20px;
    background-color: #fff;
    z-index: 2;
`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Users = styled.div`
    display: flex;
    align-items: center;
    column-gap: 14px;
`;
const UserAvatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
`;
const UserName = styled.span`
    font-size:16px;
    font-weight: 300;
    color: #333333;
`;
const Heart = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const TitleHeart = styled.span`
    font-size: 16px;
    font-weight: 400;
`;
const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
`;
const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 550;
    color: ${props => props.theme.color.blue};;
;
`;
const CardAmount = styled.span`
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
    ${props => props.secondary && css` background: linear-gradient(86.88deg, green, blue);`};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;
const Card = (props) => {

    return (
        <StyleCard>
            <CardImage>
                <CardImg src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top" alt="" />
            </CardImage>
            <CardContent>
                <CardTop>
                    <Users>
                        <UserAvatar src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1000x750&vertical=top" alt="" />
                        <UserName>avatar</UserName>
                    </Users>
                    <Heart>
                        <img src="/coolicon.svg" alt="heart" />
                        <TitleHeart>258</TitleHeart>
                    </Heart>
                </CardTop>
                <CardFooter>
                    <CardTitle>Cosmic Perspective</CardTitle>
                    <CardAmount secondary={props.secondary}>12,000PSL</CardAmount>
                </CardFooter>
            </CardContent>
        </StyleCard>
    );
};

export default Card;