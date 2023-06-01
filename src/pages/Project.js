import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { menuAtom } from '../recoil/atom';
import { prjState, visibleState } from '../recoil/atom';
import styled from 'styled-components';
import Icons from '../components/Icons';
import card from '../components/projects/Card';
import Modal from '../components/projects/Modal';
import Projects from '../components/projects/Projects';

const StyledH1 = styled.h1`
    width: 100%;
    height: 100px;
    text-align: center;
    position: absolute;
    font-size: 167px;
`;

const BackgroundText = styled.h1`
    position: relative;
    opacity: 0.37;
    top: 5rem;
    filter: blur(12px);
    font-family: SegoeUISymbol;
    font-size: 168px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: center;
    color: #f1efef;
`;

const Wrapper = styled.div`
    @media only screen and (min-width: 1000px) and (max-width: 1200px) {
        width: 100%;
        height: 50%;
        justify-content: space-between;
        display: flex;
        margin: 0;
    }
    justify-content: space-between;
    display: flex;
    margin: auto;
    margin-bottom: 5rem;
    width: 80%;
    height: 50%;
`;

export default function Project(){
    const [visible, setVisible] = useRecoilState(visibleState);
    const [prj, setPrj] = useRecoilState(prjState);
    const openModal = prj => {
        setPrj(prj);
        setVisible(true);
    };
    const setMenu = useSetRecoilState(menuAtom);

    return(
        <>
            {setMenu(1)}
            <StyledH1 className="title">Projects</StyledH1>
            <BackgroundText>CREATIVE</BackgroundText>
            <Wrapper>
            <card.Card
                onClick={() => {
                    openModal('엄마타이머');
                }}
                >
                <card.ImageField src={Icons[0].src}></card.ImageField>
                <card.TextField>엄마 타이머</card.TextField>
                <card.TagField>
                    <card.Tag>#개발완료</card.Tag>
                    <card.Tag>#APP</card.Tag>
                </card.TagField>
                </card.Card>
                <card.Card
                onClick={() => {
                    openModal('텍스티');
                }}
                >
                <card.ImageField src={Icons[1].src}></card.ImageField>
                <card.TextField>Texti</card.TextField>
                <card.TagField>
                    <card.Tag>#토이프로젝트</card.Tag>
                    <card.Tag>#WEB</card.Tag>
                </card.TagField>
                </card.Card>
                <card.Card
                onClick={() => {
                    openModal('플랜다이얼');
                }}
                >
                <card.ImageField src={Icons[2].src}></card.ImageField>
                <card.TextField>플랜 다이얼</card.TextField>
                <card.TagField>
                    <card.Tag>#개발완료</card.Tag>
                    <card.Tag>#APP</card.Tag>
                </card.TagField>
                </card.Card>
            </Wrapper>
            <Wrapper>
                <card.Card
                onClick={() => {
                    openModal('웹사이트');
                }}
                >
                <card.ImageField src={Icons[3].src}></card.ImageField>
                <card.TextField>Friday 공식 웹사이트</card.TextField>
                <card.TagField>
                    <card.Tag>#개발완료</card.Tag>
                    <card.Tag>#WEB</card.Tag>
                </card.TagField>
                </card.Card>
                <card.Card
                onClick={() => {
                    openModal('comento');
                }}
                >
                <card.ImageField src={Icons[4].src}></card.ImageField>
                <card.TextField>Comento</card.TextField>
                <card.TagField>
                    <card.Tag>#개발중</card.Tag>
                    <card.Tag>#WEB</card.Tag>
                </card.TagField>
                </card.Card>
                <Modal content={Projects[prj]} visible={visible}></Modal>
            </Wrapper>
        </>
    )
}