import React from 'react'
import './Navbar.scss'
import Book from './../Images/read-book-icon.webp'
import Repositor from './../Images/repozitories.png'
import File from './../Images/file.png'
import Pack from './../Images/pack.png'
import Star from './../Images/stars.webp'
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <nav className='nav'>
                <div className="container">
                    <div className="nav__inner">
                        <ul className='nav__inner__list'>
                            <li className='nav__inner__list__item'>
                                <NavLink className='nav__inner__list__item__navlink' to="/">
                                    <div className='nav__inner__list__item__navlink__div'>
                                        <img className='nav__inner__list__item__img' src={Book} alt="Book" />
                                        <p className='nav__inner__list__item__navlink__p'>Overview</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='nav__inner__list__item'>
                                <NavLink className='nav__inner__list__item__navlink' to="/repositories">
                                    <div className='nav__inner__list__item__navlink__div'>
                                        <img className='nav__inner__list__item__img' src={Repositor} alt="Repositor" />
                                        <p className='nav__inner__list__item__navlink__p'>Repositories</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='nav__inner__list__item'>
                                <NavLink className='nav__inner__list__item__navlink'>
                                    <div className='nav__inner__list__item__navlink__div'>
                                        <img className='nav__inner__list__item__img' src={File} alt="File" />
                                        <p className='nav__inner__list__item__navlink__p'>Projects</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='nav__inner__list__item'>
                                <NavLink className='nav__inner__list__item__navlink'>
                                    <div className='nav__inner__list__item__navlink__div'>
                                        <img className='nav__inner__list__item__img' src={Pack} alt="Pask" />
                                        <p className='nav__inner__list__item__navlink__p'>Packages</p>
                                    </div>
                                </NavLink>
                            </li>
                            <li className='nav__inner__list__item'>
                                <NavLink className='nav__inner__list__item__navlink'>
                                    <div className='nav__inner__list__item__navlink__div'>
                                        <img className='nav__inner__list__item__img' src={Star} alt="Star" />
                                        <p className='nav__inner__list__item__navlink__p'>Stars</p>
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
