import React from 'react';
import { useSetRecoilState } from 'recoil';
import { menuAtom } from '../recoil/atom';
import MainProfile from '../components/main/MainProfile';
import TectStat from '../components/main/TectStat';
import ProjectSlide from '../components/main/ProjectSlide';

export default function Main(){
    const setMenu = useSetRecoilState(menuAtom);
    return(
      <div style={{ marginTop: '6rem' }}>
        {setMenu(1)}
            <MainProfile />
            <TectStat />
            <ProjectSlide />
      </div>  
    );
}