import React from 'react';
import { useSetRecoilState } from 'recoil';
import { visibleState } from '../../recoil/atom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ModalStyle = styled(motion.div)`
  @media only screen and (max-width: 1000px) {
    width: 80vw;
    left: 10vw;
    padding: 25px;
  }
  background-color: white;
  -webkit-backdrop-filter: blur(3rem);
  backdrop-filter: blur(3rem);
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 60vw;
  height: auto;
  position: fixed;
  border-radius: 3rem;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  top: 50vh;
  left: 20vw;
  padding: 40px;
  color: black;
  z-index: 100;
  transform: translateY(-50%);
`;

const Img = styled.img`
  @media only screen and (max-width: 1000px) {
    width: 130px;
    height: 130px;
  }
  border: 1px solid gray;
  border-radius: 10px;
  width: 250px;
  height: 250px;
  margin-right: 50px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 25px;
  }
  font-size: 40px;
  font-weight: 800;
  line-height: 3rem;
`;

const Text = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 15px;
    margin-top: 5px;
  }
  margin-top: 20px;
  font-size: 25px;
  font-weight: 800px;
  a:visited {
    color: blue;
  }
`;

const Link = styled.a`
  @media only screen and (max-width: 1000px) {
    margin-top: 10px;
  }
  font-size: 35px;
  font-weight: 800px;
  text-decoration: none;
  margin-top: 20px;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: #2E9AFE;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Desc = styled.div`
  @media only screen and (max-width: 1000px) {
    font-size: 20px;
    margin-top: 15px;
    line-height: 30px;
  }
  font-size: 25px;
  margin-top: 20px;
  line-height: 40px;
`;

export default function Modal({ ...rest }){
  const setVisible = useSetRecoilState(visibleState);
  const closeModal = () => {
    setVisible(false);
  };
  const animationParams = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: 'easeOut' },
  };

  return (
  <AnimatePresence>
    <ModalStyle {...animationParams} {...rest}>
      <FontAwesomeIcon onClick={closeModal} icon={faXmark} className="icon" />
      <Wrapper>
        <Img src={rest.content.img} />
        <div style={{ display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
          <Title>{rest.content.title}</Title>
          <Row>
            {rest.content.git ? (
              <Link href={rest.content.git} target="_blank">
                <FontAwesomeIcon icon={faGithub} color='black' />
              </Link>
            ) : (
              ''
            )}
            {rest.content.site ? (
              <Link style={{ marginTop: 20, marginLeft: 20 }} href={rest.content.site} target="_blank">
                <FontAwesomeIcon icon={faLink} color='black' />
              </Link>
            ) : (
              ''
            )}
          </Row>
          <Text>FrontEnd: {rest.content.fe}</Text>
          {rest.content.be ? ( <Text>BackEnd: {rest.content.be}</Text> ) : ('')}
          {rest.content.deploy ? ( <Text>DeployMent: {rest.content.deploy}</Text> ) : ('')}
          <Row>
            {rest.content.aos ? (
              <Link href={rest.content.aos} target="_blank">
                <img style={{ width: 200, marginTop: 10 }} src={require('../../assets/images/aos.png')}></img>
              </Link>
            ) : (
              ''
            )}
            {rest.content.ios ? (
              <Link href={rest.content.ios} target="_blank">
                <img style={{ width: 200, marginTop: 10, marginLeft: 20 }} src={require('../../assets/images/ios.png')}></img>
              </Link>
            ) : (
              ''
            )}
          </Row>
        </div>
      </Wrapper>
      <Desc>{rest.content.desc}</Desc>
      <Desc>{rest.content.felt}</Desc>
      {rest.content.felt2 ? ( <Desc>{rest.content.felt2}</Desc> ) : ('')}
    </ModalStyle>
  </AnimatePresence>
  );
}