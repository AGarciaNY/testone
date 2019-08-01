import React from 'react';
import './Home.css';
import styled from '@emotion/styled';
import pig from '../img/pig.png';
const Contaner = styled.div`
  font-family: 'Merienda One', cursive;
`;

const ImageContaner = styled.div`
  display: flex;
  justify-content: center;
`;

const MyPic = styled.img`
  height: 200px;
  border-radius: 100%;
`;

const Header = styled.h1`
  text-align: center;
`;

const Home = () => (
    <Contaner >
      <ImageContaner>
        <MyPic src={pig} alt=''/>
      </ImageContaner>
      <Header>
          Hi I am Aldair
      </Header>
    </Contaner> 
);

export default Home;
