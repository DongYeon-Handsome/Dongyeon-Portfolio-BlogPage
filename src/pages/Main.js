import React from 'react';
import { useSetRecoilState } from 'recoil';
import { menuAtom } from '../recoil/atom';
import MainTop from '../components/main/MainTop';
import Project from './Project';
import AboutMe from './AboutMe';

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