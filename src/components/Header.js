import React from 'react';
import styled, { css } from 'styled-components';
import { menuAtom } from '../recoil/atom';
import { useRecoilState } from 'recoil';
import { throttle } from 'lodash';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const MINIMUM_SCROLL = 10;

const FixedHeader = styled(motion.div)`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 1rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 3;
  justify-content: space-between;
  background-color: rgba(11, 23, 59, 0.2);
  -webkit-backdrop-filter: blur(1rem);
  backdrop-filter: blur(1rem);
`;

const MyLink = styled.div`
  color: #e3e3e3;
  font-size: 1.5rem;
  text-decoration: none;
  vertical-align: middle;
  transition: 0.2s;
  cursor: pointer;
  :hover{ color: #2E9AFE }
`;

const VerticalLine = styled.li`
  display: inline-block;
  margin-left: 3rem;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  @media only screen and (max-width: 800px){
    display: inline-block;
  }
`;

const Menubar = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 5px 0;
  transition: 0.4s;
  ${props =>
    props.short &&
    css`
      width: 30px;
  `}
  ${props =>
    props.leftRotate &&
    css`
      -webkit-transform: rotate()(45deg) translate(0, 12px);
  `}
  ${props =>
    props.rightRotate &&
    css`
      -webkit-transform: rotate(-45deg) translate(0, -12px);
  `}
  ${props =>
    props.fadeOut &&
    css`
      opacity: 0;
  `}
`;

export default function Header(){
  const [menu, setMenu] = useRecoilState(menuAtom);
  const [isScrollTop, setIsScrollTop] = React.useState(true);

  React.useEffect(() => {
    const onScroll = throttle(() => setIsScrollTop(window.pageYOffset < MINIMUM_SCROLL), 50);
    window.addEventListener('scroll', onScroll);
  }, []);

  const animationName = isScrollTop && menu ? 'hide' : 'show';
  const headerAnimationVarients = {
    open: { height: '4rem', opacity: 1 },
    hide: { height: '0', opacity: 0 },
  };
  return(
    <>
      <FixedHeader animate={animationName} variants={headerAnimationVarients}>
        <MyLink>
          <Link to='home' spy={true} smooth={true}>Dong's Portfolio</Link>
        </MyLink>
        <ul style={{ margin: 0, display: 'inline', position: 'absolute', right: '4rem' }}>
          <VerticalLine>
            <MyLink>
              <Link to='home' spy={true} smooth={true}>HOME</Link>
            </MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink>
              <Link to='aboutMe' spy={true} smooth={true}>ABOUTME</Link>
            </MyLink>
          </VerticalLine>
          <VerticalLine>
            <MyLink>
              <Link to='projects' spy={true} smooth={true}>PROJECTS</Link>
            </MyLink>
          </VerticalLine>
          <MenuIcon
            onClick={() => {
              menu ? setMenu(0) : setMenu(1);
            }}
          >
            {menu ? (
              <>
                <Menubar />
                <Menubar short />
                <Menubar />
              </>
            ) : (
              <>
                <Menubar leftRotate />
                <Menubar fadeOut />
                <Menubar rightRotate/>
              </>
            )}
          </MenuIcon>
        </ul>
      </FixedHeader>
    </>
  );
}