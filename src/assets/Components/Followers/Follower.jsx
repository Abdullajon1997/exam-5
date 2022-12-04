import React from 'react'
import './Follower.scss'
import { useEffect, useState } from 'react';

export default function Follower() {

  const [gitUser, setGitUser] = useState([]);


  useEffect(() => {
    async function Git() {
      const data = await fetch(`https://api.github.com/users/Abdullajon1997/followers`)
        .then(res => res.json())
        .then(data => setGitUser(data))
    }
    Git()
  }, [])
  console.log(gitUser);


  return (

    <>
      <ul className='following__list'>
        {
          gitUser.length > 0 && gitUser.map(follower => (

            <li className='follower__list__item'>
              <div className='follower__list__item__inner'>
              <img className='follower__list__item__img' src={follower.avatar_url} alt="img" />
              <a className='follower__list__item__login' href={'https://github.com/' + follower.login}>
              <p className='follower__list__item__login'>{follower.login}</p>
              </a>
              </div>
              <button className='follower__list__item__btn'>Unfollow</button>
            </li>


          ))
        }
      </ul>
    </>
  )
}
