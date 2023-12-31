import { useState } from 'react';
import React from 'react';

function Post({ post }) {

  const baseURL = 'https://reddit.com';
  const [updatePost, setPost] = useState(post);

  // Function to handle the click event and update the 'clicked' value
  function handleClick(bol) {
    setPost(prevPost => ({
      ...prevPost,
      clicked: bol
    }));
  }
  return (
    <div className={updatePost.clicked ? 'card_clicked' : 'card'}>
      <h2 className='card__title'>{updatePost.title}</h2>
      <p className='card__score' >score: {updatePost.score}</p>
      <div className='buttons_container'>
        <a className="card__btn" href={baseURL + updatePost.url}
          target='_blank' onClick={(e) => handleClick(true)} >Read</a>
        <button className="btn2" onClick={(e) => handleClick(false)} >UnRead</button>
      </div>
    </div>

  )
}


export default Post;