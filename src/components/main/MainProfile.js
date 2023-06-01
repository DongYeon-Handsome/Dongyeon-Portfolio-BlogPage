import React from 'react';
import styled from 'styled-components';
import ProfilePhoto from '../../assets/images/ProfilePhoto.jpg'

const MainProfileLayout = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin-left: 35rem;
    margin-top: 15rem;
    margin-bottom: 15rem;
`;

const ProfileImg = styled.p`
    width: 500px;
    height: 500px;
    margin-top: 4rem;
    background-image: url(${ProfilePhoto});
    background-repeat: no-repeat;
    background-size: cover;
`;

const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    .Name{
        font-family: 'SegoeUI', sans-serif;
        font-weight: bold;
        font-size: 100px;
        margin-top: 100px;
        margin-left: 10rem;
        margin-bottom: 35px;
    }
    .subText{
        font-family: 'SegoeUI', sans-serif;
        font-weight: 500;
        font-size: 30px;
        margin-top: 65px;
        margin-left: 10rem;
    }
    .subTitle{
        font-family: 'SegoeUI', sans-serif;
        font-weight: 800;
        font-size: 50px;
        margin-top: 65px;
        margin-left: 10rem;
    }
`;

export default function MainProfile(){
    return(
        <>
            <MainProfileLayout>
                <ProfileImg />
                <ProfileText>
                    <div className='Name'>김동연</div>
                    <div className='subText'>
                        한림대학교 콘텐츠IT학과 2학년 재학 중 &#40;2021.03 ~ &#41;<br/><br/>
                        Friday 개발 동아리 창단 및 운영 중 &#40;2020.01 ~ &#41;
                    </div>
                    <div className='subTitle'>연락처</div>
                    <div className='subText'>
                        &#91; Mobile &#93; 010-7361-5070<br/><br/>
                        &#91; Email &#93; dongyeon4367@gmail.com
                    </div>
                </ProfileText>
            </MainProfileLayout>
        </>
    )
}