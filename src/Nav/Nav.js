import React from 'react';
import styled from '@emotion/styled';

const Navcontainer = styled.div`
  height:100px;
  background:linear-gradient(black,#4c4c4c, transparent);
  color:white;
  padding-top:30px;
  display: flex;
`;

const NameHolder=styled.div`
width:300px;
`;
const MyName = styled.h1`
  margin:0;
  font-size: 30px
  width:200px;
`;

const LinkHolder = styled.div`
  position:absolute;
  right:0;
  display: block;
  padding-top: 10px;
  padding-right: 70px;
`;
const Links = styled.button`
  float:Right;
  background: transparent;
  border: 0;
  text-decoration: none;
  color:white;
  padding-left: 30px;
  font-size:16px;
  &:hover{
    font-size:18px;
}
`;

const DropDown = styled.div`
  padding-left: 30px;
  &:hover div{
    display: block;
  }
`;

const DropButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color:white;
  min-width: 140px;
  font-size:16px;
  &:hover{
    font-size:18px;
}
`;

const DropdownHolder=styled.div`
  display: none;
  background:transparent;
  min-width: 140px;
  border-radius: 20px;
  &:hover button{
  }
`;

const TextFont = styled.button`
  display: block;
  background:transparent;
  min-width: 140px;
  z-index: 1;
  border-radius: 20px
  text-decoration: none;
  color:white;
`;

const Right=styled.li`
  list-style-type:none;
  float:right;
`;

const Nav= () => (
    <Navcontainer>
      <NameHolder>
        <MyName>Aldair's Portfolio</MyName>
      </NameHolder>
      <LinkHolder>
        <Right>
          <DropDown>
            <DropButton>Dropdown</DropButton>
            <DropdownHolder>
              <TextFont>Link 1</TextFont>
              <TextFont>Link 2</TextFont>
              <TextFont>Link 3</TextFont>
            </DropdownHolder>
          </DropDown>
        </Right>
        <Right>
          <Links>Home</Links>
          <Links>Art Work</Links>
          <Links>Projects</Links>
        </Right>
      </LinkHolder>
    </Navcontainer>
  );

export default Nav;
