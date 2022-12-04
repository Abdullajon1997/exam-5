import React from 'react'
import './Repositories.scss'
import { useEffect, useState } from 'react';
import moment, { Moment } from 'moment/moment';
import Star from '../Images/star.png'

export default function Repositories() {

  // const [user, setUser] = useState('Abdullajon1997');
  const [gitUser, setGitUser] = useState([]);


  useEffect(() => {
    async function Git() {
      const data = await fetch(`https://api.github.com/users/Abdullajon1997/repos`)
        .then(res => res.json())
        .then(data => setGitUser(data))
    }
    Git()
  }, [])
  console.log(gitUser);





  return (

    <>
      <div className='Repositories'>
        <div className='Repositories__inner'>
          <input className='Repositories__inner__input' type="text" placeholder='Find a repository...' />
          <select name="type" id="type" className='Repositories__inner__select'>
            <option value="type" className='Repositories__inner__select__option'>Type</option>
          </select>
          <select name="language" id="language" className='Repositories__inner__select'>
            <option value="language" className='Repositories__inner__select__option'>Language</option>
          </select>
          <select name="sort" id="sort" className='Repositories__inner__select'>
            <option value="sort" className='Repositories__inner__select__option'>Sort</option>
          </select>
          <a className='Repositories__inner__link' href="https://github.com/new">
            <span className='Repositories__inner__span'>
              <i className='Repositories__inner__span__i'>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo">
                  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                </svg>
              </i>
              New
            </span>
          </a>
        </div>
        <ul className='Repositories__list'>
          {
            gitUser.length > 0 && gitUser.map(repos => (

              <li className='Repositories__list__item'>
                <div>
                  <div className='Repositories__list__item__inner'>
                    <a className='Repositories__list__item__inner__name' href="#"><h2 className='Repositories__list__item__inner__name'>{repos.name}</h2></a>
                    <p className='Repositories__list__item__inner__visibility'>{repos.visibility}</p>
                  </div>
                  <div className='Repositories__list__item__out'>
                    <p className='Repositories__list__item__inner__language'>{repos.language}</p>
                    <p className='Repositories__list__item__inner__time'>{moment(repos.updated_at).calendar('LLL')}</p>
                  </div>
                </div>
                <select className='Repositories__list__item__select' name="star" id="star">
                  <option className='Repositories__list__item__select__option' value="star">&#x2729; Star</option>
                </select>
              </li>
            ))
          }
          <div className='Repositories__list__btn'>
            <button className="Repositories__list__btn__previous"><span className='Repositories__list__btn__icon'>&#10094;</span> Previous</button>
            <button className="Repositories__list__btn__next">Next <span className='Repositories__list__btn__icon'>&#10095;</span></button>
          </div>
        </ul>
      </div>





    </>
  )
}
