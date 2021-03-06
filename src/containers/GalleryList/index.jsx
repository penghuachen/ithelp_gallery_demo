import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
const GalleryContainerDiv = styled.div``;
const GalleryItem = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 25%;
  height: 300px;
  cursor: pointer;
`;

const GalleryBgImg  = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${ props => (props.url) });
  background-position: center;
  background-size:  cover;
`;


const GalleryList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const list = useSelector(state => state.list);

  useEffect(() => {
    dispatch({ type: 'SAGA_FETCH_UNSPLASH_API' });
  }, [dispatch]);

  return(
    <GalleryContainerDiv>
      {
        list.map(item => (
          <GalleryItem 
            key={ item.id } 
            onClick={ () => { 
              history.push(`/info/${item.id}`);
              dispatch({ type: 'SAGA_FETCH_UNSPLASH_INFO_API', id: item.id });
            }}
          >
            <GalleryBgImg url={ item.urls.regular } />
          </GalleryItem>
        ))
      }
    </GalleryContainerDiv>
  )
};

export default GalleryList;