import React, {useEffect} from 'react';
import './blog.css';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'


const Blog = () => {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className='gradient__text'data-aos="fade-right"data-aos-duration="600" >
        A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
      </div>
    </div>
  );
};

export default Blog;