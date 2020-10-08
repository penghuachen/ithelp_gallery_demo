import React from 'react';
import styled from 'styled-components';
import img from '../../assets/img/icon-image.svg';


const HeaderDiv = styled.div`
  background: #2ECC40;
  padding: 10px 15px;
`;

const HeaderImg = styled.img`
  width: 52px;
  height: 50px;
  vertical-align: middle;
  margin-right: 10px;
`;

const HeaderSpan = styled.span`
  vertical-align: middle;
`;

const HeaderH1 = styled.h1``;


const Header = () => {
  return (
    <HeaderDiv>
      <HeaderH1>
        <HeaderImg src={ img } alt="icon" />
        <HeaderSpan>
          FLUID GALLERY
        </HeaderSpan>
      </HeaderH1>
    </HeaderDiv>
  )
};

export default Header;