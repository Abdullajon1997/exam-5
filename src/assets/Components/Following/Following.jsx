import React from 'react'
import './Following.scss'
import { useState, useEffect } from 'react';

export default function Following() {

  const [gitUser, setGitUser] = useState([]);


  useEffect(() => {
    async function Git() {
      const data = await fetch(`https://api.github.com/users/Abdullajon1997/following`)
        .then(res => res.json())
        .then(data => setGitUser(data))
    }
    Git()
  }, [])
  // console.log(gitUser);




  return (
    <>
      <ul className='following__list'>
        {
          gitUser.length > 0 && gitUser.map(following => (

            <li className='following__list__item'>
              <div className='following__list__item__inner'>
                <img className='following__list__item__img' src={following.avatar_url} alt="" />
                <a className='following__list__item__login' href={'https://github.com/' + following.login}>
                  <p className='following__list__item__login'>{following.login}</p>
                </a>
              </div>
              <button className='following__list__item__btn'>Unfollow</button>
            </li>


          ))
        }
      </ul>

    </>
  )
}
