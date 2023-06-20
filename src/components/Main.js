import React from 'react';
import { useSetRecoilState } from 'recoil';
import { menuAtom } from '../recoil/atom';
import MainTop from './main/MainTop';
import Project from './main/Project';
import AboutMe from './main/AboutMe'

export default function Main(){
  const setMenu = useSetRecoilState(menuAtom);
  return(
    <div style={{ marginTop: '6rem' }}>
      {setMenu(1)}
        <MainTop />
        <AboutMe />
        <Project />
    </div>  
  );
}