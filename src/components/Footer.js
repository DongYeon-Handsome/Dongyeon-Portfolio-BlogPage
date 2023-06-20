import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const GradientFooter = styled.div`
  width: 100%;
  height: 22rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to bottom, rgba(0, 123, 115, 0), #A9D0F5);
`;

const SocialContainer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  margin: 0 2rem;
`;

const TextContainer = styled.div`
  font-weight: bold;
  font-size: 2rem;
  margin: 0 2rem;
`;

const MyAnchor = styled.a`
  margin-right: 1.5rem;
`;

const CopyRight = styled.div`
  width: 100%;
  height: 2rem;
  text-align: center;
  background-color: #000;
  color: #ccc;
  font-size: 1.3rem;
`;

export default function Footer(){
  return(
    <>
      <GradientFooter>
        <TextContainer>Dong's Portfolio</TextContainer>
        <SocialContainer>
          <MyAnchor href="https://github.com/DongYeon-Handsome" target="_blank" className="github social">
            <FontAwesomeIcon icon={faGithub} size="3x" color="white" />
          </MyAnchor>
          <MyAnchor
            href="https://www.facebook.com/profile.php?id=100025456611539"
            target="_blank"
            className="facebook social"
          >
            <FontAwesomeIcon icon={faFacebook} size="3x" color="white" />
          </MyAnchor>
          <MyAnchor
            href="https://www.instagram.com/dy_luvfe/"
            target="_blank"
            className="instagram social"
          >
            <FontAwesomeIcon icon={faInstagram} size="3x" color="white" />
          </MyAnchor>
        </SocialContainer>
      </GradientFooter>
    <CopyRight>CopyRight © Dong's Portfolio All Right Reserved.</CopyRight>
  </>
    );
}