import React from 'react';
import styled from 'styled-components';

const TechStacksBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-top: 4rem;
  padding-left: 20rem;
  padding-bottom: 4rem;
  margin: 4rem auto;
  border: 1px solid #01baae;
  border-radius: 20px;
`;

const TechStacksTitle = styled.h1`
  font-size: 60px;
`;

const TextRowLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextColmunLayout = styled.div`
  display: flex;
  flex-direction: column;
  .subTitle{
    font-size: 40px;
    font-weight: 500;
    font-family: 'Segoe UI', sans-serif;
    margin-top: 2rem;
  }
  .Explan{
    font-size: 30px;
    font-weight: 300;
    font-family: 'Segoe UI', sans-serif;
    margin-top: 2rem;
    margin-left: 1.5rem;
  }
`;

export default function TectStat(){
  return(
    <TechStacksBox>
      <TechStacksTitle>Tech Stacks</TechStacksTitle>
        <TextRowLayout>
          <TextColmunLayout>
            <span className='subTitle'>1. Role</span>
            <p className='Explan'>
              Product Manager <br/><br/>
              Front-End
            </p>
            <span className='subTitle'>2. Programming Language / Framework</span>
            <p className='Explan'>
              HTML/CSS/JavaScript<br/><br/>
              TypeScript<br/><br/>
              React<br/><br/>
              Java<br/><br/>
              Python<br/><br/>
            </p>
          </TextColmunLayout>
          <TextColmunLayout style={{ marginLeft: '100px' }}>
            <span className='subTitle'>3. Collaboration Tools</span>
            <p className='Explan'>
              Github<br/><br/>
              Notion<br/><br/>
              Figma<br/><br/>
              Discord<br/><br/>
              Slack<br/><br/>
            </p>
          </TextColmunLayout>
        </TextRowLayout>
    </TechStacksBox>
  );
}