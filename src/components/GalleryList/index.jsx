import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import img from '../../assets/img/bg.jpg';

const GalleryContainerDiv = styled.div``;
const GalleryItem = styled.div`
  display: inline-block;
  width: 25%;
  height: 300px;
  cursor: pointer;
`;

const GalleryImg  = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;


const GalleryList = () => {
  const list = useSelector(state => state.list);
  return(
    <GalleryContainerDiv>
      {
        list.map(() => (
          <GalleryItem>
            <GalleryImg src={ img } alt="img"/>
          </GalleryItem>
        ))
      }
    </GalleryContainerDiv>
  )
};

export default GalleryList;