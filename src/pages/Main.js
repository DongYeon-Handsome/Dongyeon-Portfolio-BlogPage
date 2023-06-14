import React from 'react';
import { useSetRecoilState } from 'recoil';
import { menuAtom } from '../recoil/atom';
import MainTop from '../components/main/MainTop';
import TectStat from '../components/main/TectStat';
import ProjectSlide from '../components/main/ProjectSlide';

export default function Main(){
    const setMenu = useSetRecoilState(menuAtom);
    return(
      <div style={{ marginTop: '6rem' }}>
        {setMenu(1)}
            <MainTop />
            <TectStat />
            <ProjectSlide />
      </div>  
    );
}