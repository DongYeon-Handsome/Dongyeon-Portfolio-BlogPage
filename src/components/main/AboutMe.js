import React from 'react';
import styled from 'styled-components';
import telephone from '../../assets/images/telephone.png';

const AboutMeContainer = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
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
  width: auto;
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
`;

const PrivacyCard = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

/*
const PrivacyIcon = styled.div`
  width: 2rem;
  height: auto;
  margin-left: 5px;
  .Name{ background-image: url(${telephone})}
`; */

const PrivacyText = styled.p`
  display: flex;
  flex-direction: column;
  .title{
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: gray;
  }
  .content{
    font-size: 1.25rem;
    font-weight: 400;
    color: gray;
  }
`;

export default function AboutMe(){
  return(
    <>
      <AboutMeContainer>
        <AboutMeTitle>About Me</AboutMeTitle>
        <CardWrapper>
          <PrivacyCard>
            {/*<PrivacyIcon><div className='Name'/></PrivacyIcon>*/}
            <PrivacyText>
              <p className='title'>이름</p>
              <p className='content'>김동연</p>
            </PrivacyText>
          </PrivacyCard>
          <PrivacyCard>
            <PrivacyText>
              <p className='title'>전화번호</p>
              <p className='content'>010-7361-5070</p>
            </PrivacyText>
          </PrivacyCard>
          <PrivacyCard>
            <PrivacyText>
              <p className='title'>이메일</p>
              <p className='content'>010-7361-5070</p>
            </PrivacyText>
          </PrivacyCard>
          <PrivacyCard>
            <PrivacyText>
              <p className='title'>생년월일</p>
              <p className='content'>02.12.06</p>
            </PrivacyText>
          </PrivacyCard>
          <PrivacyCard>
            <PrivacyText>
              <p className='title'>주소지</p>
              <p className='content'>강원도 강릉시 노암동</p>
            </PrivacyText>
          </PrivacyCard>
          <PrivacyCard>
            <PrivacyText>
              <p className='title'>학력</p>
              <p className='content'>한림대학교 &#40;콘텐츠IT전공&#41;</p>
            </PrivacyText>
          </PrivacyCard>
        </CardWrapper>
      </AboutMeContainer>
    </>
  )
}