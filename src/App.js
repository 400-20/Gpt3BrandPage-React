import React from 'react';
import { Article,Brand,CTA,Feature,Navbar } from './components';
import { Blog,Features,Footer,Header,Possibility,Whatgpt3 } from './containers';
import './App.css' ;




const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
        <Navbar />
        <Header />
        </div>
        <Brand/>
        <Whatgpt3 />
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  

  )
}

export default App