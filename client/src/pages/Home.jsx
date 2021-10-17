import React from 'react';
import Navbar from '../components/Navbar';
import Container from '../components/Announcement.jsx';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import ProductList from './ProductList';

const MainContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

const Home = () => {
  return (
    <MainContainer>
      <Container />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
      <ProductList />
    </MainContainer>
  );
};

export default Home;
