import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive.js';

import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '200px' })};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '20px 0px', flexDirection: 'column' })};
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SerchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '42px', padding: '20px 10px' })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const ManuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SerchContainer>
            <Input placeholder="search" />
            <SearchIcon style={{ color: 'gray', fontsize: '16px' }} />
          </SerchContainer>
        </Left>
        <Center>
          <StyledLink to="/">
            <Logo>PanW.</Logo>
          </StyledLink>
        </Center>
        <Right>
          <ManuItem>REGISTER</ManuItem>
          <ManuItem>SING IN</ManuItem>
          <ManuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </ManuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
