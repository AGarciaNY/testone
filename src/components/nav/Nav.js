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
  font-size: 25px;
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
  font-size:18px;
  &:hover{
    font-size:20px;
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
  min-width: 120px;
  font-size:18px;
  &:hover{
    font-size:20px;
}
`;

const DropdownHolder=styled.div`
  display: none;
  background-color:none;
  min-width: 140px;
  height:100px;
  padding:10px 0 0;
  border-radius: 20px;
  position:absolute;
  &:hover button{
    display: flex;
    flex-direction:column;
  }
`;

const TextFont = styled.button`
  display: block;
  background:transparent;
  z-index: 1;
  border-radius: 20px;
  background-color:silver;
  color:white;
  font-size:14px;
  margin:3px 0 1px;
  height:25;
  width:140px;
  &:hover{
    font-size:16px;
    height:32px;
    width:160px;
    position:absolute;
    left:-10px;
    top:-5px;
    margin:4px 0 3px;
    padding:3px;
  }
`;

const Right=styled.li`
  list-style-type:none;
  float:right;
`;
const Test=styled.div`
  height:25px;
  width:120px;
  line-height:10px;
  position:relative;
  &:hover{
    height:30px;
    width:125px;
    margin:4px 0 4px;
  }
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
              <Test>
                <TextFont>Play or stop music</TextFont>
              </Test>
              <Test>
                <TextFont>Comment Here</TextFont>
              </Test>
              <Test>
                <TextFont>Link 3</TextFont>
              </Test>
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
