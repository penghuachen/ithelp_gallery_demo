import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const InfoContainerDiv = styled.div`
  height: calc(100vh - 119px);
`;
const InfoBgImage = styled.div`
  width: 50%;
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  background-image: url(${ props => props.url });
  background-position: center;
  background-size: cover;
`;

const InfoDetails = styled.div`
  width: 50%;
  height: 100%;
  background: #FCFAF2;
  padding: 40px;
  display: inline-block;
  vertical-align: middle;
`;

const BaseInfo = styled.div`
  margin-bottom: 20px;
  >p {
    margin: 5px 10px;
  }
`;

const PhotoInfo = styled(BaseInfo)``;
const LocationInfo = styled(BaseInfo)``;
const CameraInfo = styled(BaseInfo)``;
const TagsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Tag = styled.span`
  background-color: #eeeeee;
  border-radius: 20px;
  padding: 6px 15px;
  margin: 0 10px 10px 0;
  font-size: 13px;
`;

const Info = () => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.info);
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'SAGA_FETCH_UNSPLASH_INFO_API', id  });
  }, [dispatch, id]);

  return (
    <InfoContainerDiv>
      <InfoBgImage url={ info.urls.regular }/>
      <InfoDetails>
        <PhotoInfo>
          <h2>相片資訊</h2>
          <p>上傳時間: { info.updated_at || '暫無資訊'}</p>
          <p>下載次數: { info.downloads || '暫無資訊'}</p>
          <p>喜歡數: { info.likes || '暫無資訊'}</p>
          <p>照片描述: { info.description  || '暫無資訊'}</p>
        </PhotoInfo>
        <CameraInfo>
          <h2>相機資訊</h2>
          <p>相機廠牌: { info.exif.make || '暫無資訊'}</p>
          <p>相機機型: { info.exif.model || '暫無資訊'}</p>
          <p>曝光時間: { info.exif.exposure_time || '暫無資訊'}</p>
          <p>光圈: { info.exif.aperture || '暫無資訊'}</p>
          <p>焦距: { info.exif.focal_length || '暫無資訊'}</p>
          <p>iso: { info.exif.iso || '暫無資訊'}</p>
        </CameraInfo>
        <LocationInfo>
          <h2>位置資訊</h2>
          <p>城市: { info.location.city || '暫無資訊' }</p>
          <p>國家: { info.location.country || '暫無資訊'}</p>
          <p>緯度: { info.location.latitude || '暫無資訊'}</p>
          <p>經度: { info.location.longitude || '暫無資訊'}</p>
        </LocationInfo>
        <TagsDiv>
          {
            info.tags.map((tag, index) => (
              <Tag key={ index }>#{ tag.title }</Tag>
            ))
          }
        </TagsDiv>
      </InfoDetails>
    </InfoContainerDiv>
  )
};

export default Info;