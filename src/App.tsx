import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./UI/Main";
import Header from "./components/header/Header";
import Picture from "./components/Picture";
import Content from "./components/content/Content";
import Footer from "./components/Footer";
import TestimonialList from "./components/content/clientTestimonials/TestimonialList";
import PicturesBox from "./components/content/PicturesBox";

function App() {
  return (
   <Main>
     <Header />
       <Content />
       <TestimonialList />
       <PicturesBox />
       <Footer />
   </Main>
  );
}

export default App;
