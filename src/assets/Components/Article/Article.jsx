import React from 'react'
import { useState, useEffect } from 'react'
import './Article.scss'
import Followers from './../Images/followers.png'
import { NavLink } from 'react-router-dom'

export default function Article() {

    const [user, setUser] = useState('Abdullajon1997');
    const [gitUser, setGitUser] = useState([]);


    useEffect(() => {
        async function Git() {
            const data = await fetch(`https://api.github.com/users/${user}`)
                .then(res => res.json())
                .then(data => setGitUser(data))
        }
        Git()
    }, [])
    // console.log(gitUser);
    return (
        <>
            <article className='article'>
                <div className="container">
                    <div className="article__inner">
                        <a className='article__inner__img' href="https://github.com/settings/profile">
                        <img className='article__inner__img' src={gitUser.avatar_url} alt="img" />
                        </a>
                        <h2 className='article__inner__name'>{gitUser.name}</h2>
                        <h3 className='article__inner__login'>{gitUser.login}</h3>
                        <p className='article__inner__bio'>{gitUser.bio}</p>
                        <button className='article__inner__edit'>Edit profile</button>
                        <div className="article__inner__out">
                            <NavLink className='article__inner__out__link' to='/follower'>
                                <img className='article__inner__out__followers__img' src={Followers} alt="Followers" />
                                <span className='article__inner__out__followers'>{gitUser.followers} followers</span>
                            </NavLink>
                            <NavLink className='article__inner__out__link' to='/following'>
                                <span className='article__inner__out__following'>{gitUser.following} following</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </article>

        </>
    )
}
