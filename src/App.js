import React from 'react';
import './App.css';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import BlogSearch from './components/BlogSearch';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BlogSearch></BlogSearch>
      <BlogForm></BlogForm>
      <BlogList></BlogList>
      <Footer></Footer>
    </div>
  );
}

export default App;
