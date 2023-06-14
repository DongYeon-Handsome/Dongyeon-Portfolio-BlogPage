import React from 'react';
import styled from 'styled-components';
import MainImage from '../../assets/images/MainImage.png'

const MainTopContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  top: 50%;
  bottom: 50%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-image: url(${MainImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #BDBDBD;
  background-blend-mode: multiply;
`;

const ProfileText = styled.p`
  text-align: center;
  margin-top: 10rem;
  margin-bottom: 7rem;
  .Name{
    font-family: 'SegoeUI', sans-serif;
    font-weight: bold;
    font-size: 70px;
    line-height: 100px;
  }
  .subText{
    font-family: 'SegoeUI', sans-serif;
    font-weight: 500;
    font-size: 25px;
    margin-top: 70px;
    line-height: 35px;
  }
`;

export default function MainTop(){
  return(
    <>
      <MainTopContainer>
        <ProfileText>
          <div className='Name'>
            - 김동연 -
            <br/>
            포트폴리오
          </div>
          <div className='subText'>
            안녕하세요.<br/>
            프론트엔드 개발자를 희망하고 있습니다.<br/>
            개발하면서 소통 하는 것을 가장 중요시하고 좋아합니다.<br/>
            배운 것을 공유하고 소통하는 것이 저의 장점입니다. <br/>
          </div>
        </ProfileText>
      </MainTopContainer>
    </>
  )
}