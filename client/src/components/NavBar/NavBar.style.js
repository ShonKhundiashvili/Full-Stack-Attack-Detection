import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FaBars } from 'react-icons/fa';
// import { NavLink as Link } from 'react-router-dom';
import Lottie from 'lottie-react';

export const BarWrapper = styled.nav`
    background: #1d4797;
    height: 85px;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    overflow: auto;
`;

export const NavLink = styled(Link)`
    float: left;
    text-align: center;
    padding: 30px 55px;
    color: white;
    text-decoration: none;
    font-size: 20px;
    &:hover{
        cursor: pointer;
    
    background-color: #133b87;
}
`;


export const NavMenu = styled.div`
display: flex;
align-items: center;
width: 80vw;
white-space: nowrap;
justify-content: center;
overflow: auto;
`;

export const Title = styled.div`
font-family:'Impact', fantasy	;
font-size: 3rem;
font-weight: 400;
`;

export const LottieLogo = styled(Lottie)`
  animation-duration: 0.001;
  /* height: 70%;
    width: 70%; */
    height: 4rem;
    width: 4rem;
    padding: 5px;
    padding-top: 10px;
    padding-right: 8px;

`;

export const LogoWrapper = styled.div`
  display: flex;
  padding-left: 10px;
  padding-top: 4px;
`;