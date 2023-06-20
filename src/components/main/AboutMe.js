import React from 'react';
import styled from 'styled-components';
import telephone from '../../assets/images/telephone.png';
import user from '../../assets/images/user.png';
import email from '../../assets/images/email.png';
import birth from '../../assets/images/birth.png';
import address from '../../assets/images/location-pointer.png';
import school from '../../assets/images/school.png';

const AboutMeContainer = styled.div`
  //position: relative;
  left: 50%;
  transform: translate(0, -31%);
  top: 50%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const AboutMeTitle = styled.p`
  text-align: center;
  margin-top: 3rem;
  font-family: 'SegoeUI', sans-serif;
  font-weight: bold;
  font-size: 60px;
  line-height: 100px;
  color: black;
`;

const CardWrapper = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
`;

const PrivacyCard = styled.div`
  width: 12.5rem;
  height: 10rem;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;


const PrivacyIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 20px;
`;

const PrivacyText = styled.div`
  display: flex;
  flex-direction: column;
  .title{
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 5px;
    color: black;
  }
  .content{
    font-size: 1.1rem;
    font-weight: 400;
    color: black;
  }
`;

export default function AboutMe(){
  return(
    <>
      <AboutMeContainer id="aboutMe">
        <AboutMeTitle>About Me</AboutMeTitle>
        <CardWrapper>
          <PrivacyCard>
            <PrivacyIcon src={user} />
            <PrivacyText>
              <div className='title'>이름</div>
              <div className='content'>김동연</div>
            </PrivacyText>
          </PrivacyCard>
          <PrivacyCard>
            <PrivacyIcon src={telephone} />
            <PrivacyText>
              <div className='title'>전화번호</div>
              <div className='content'>010-7361-5070</div>
            </PrivacyText>
          </PrivacyCard>
          <PrivacyCard>
            <PrivacyIcon src={email} />
            <PrivacyText>
              <div className='title'>이메일</div>
              <div className='content'>dongyeon4367@gmail.com</div>
            </PrivacyText>
          </PrivacyCard>
        </CardWrapper>
        <CardWrapper>
          <PrivacyCard>
            <PrivacyIcon src={birth} />
            <PrivacyText>
              <div className='title'>생년월일</div>
              <div className='content'>02.12.06</div>
            </PrivacyText>
          </PrivacyCard>
          <PrivacyCard>
            <PrivacyIcon src={address} />
            <PrivacyText>
              <div className='title'>주소지</div>
              <div className='content'>강원도 강릉시</div>
            </PrivacyText>
          </PrivacyCard>
          <PrivacyCard>
            <PrivacyIcon src={school} />
            <PrivacyText>
              <div className='title'>학력</div>
              <div className='content'>한림대학교 <br/>&#40;콘텐츠IT전공&#41;</div>
            </PrivacyText>
          </PrivacyCard>
        </CardWrapper>
      </AboutMeContainer>
    </>
  )
}