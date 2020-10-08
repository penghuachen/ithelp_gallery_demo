import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  text-align: center;
  background: #2ECC40;
  padding: 10px 15px;
  font-size: 20px;
`;

const Footer = () => {
  return (
    <FooterDiv>
      Copyright © 2020 Penghua
    </FooterDiv>
  );
};

export default Footer;