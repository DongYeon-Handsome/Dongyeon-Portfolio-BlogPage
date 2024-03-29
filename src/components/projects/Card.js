import styled from 'styled-components';

const Card = styled.div`
  @media only screen and (max-width: 1000px) {
    width: 15rem;
    height: 25rem;
    margin-bottom: 5rem;
  }
  cursor: pointer;
  width: 20rem;
  height: 27rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #ccc;
  margin: 1rem;
`;

const ImageField = styled.img`
  height: 20rem;
  background-color: '#ccc';
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TextField = styled.div`
  @media only screen and (max-width: 1000px) {
    height: 5rem;
    font-size: 23px;
    padding-bottom: 20px;
  }
  height: 7rem;
  background: white;
  color: black;
  text-align: center;
  padding-top: 1rem;
  font-family: SegoeUISymbol;
  font-weight: 800;
  font-size: 25px;
`;

const TagField = styled.div`
  @media only screen and (max-width: 1000px) {
    display: block;
  }
  align-items: center;
  display: flex;
  background: white;
  height: 5rem;
  color: black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 20px;
`;

const Tag = styled.span`
  font-family: SegoeUISymbol;
  font-size: 15px;
  border-radius: 5px;
  padding-right: 7px;
  font-weight: 600;
  text-shadow: #2E9AFE 0 0 10px;
`;

export default { Card, TextField, ImageField, TagField, Tag };