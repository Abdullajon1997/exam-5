import React from 'react'
import Layout from '../Layout/Layout'
import { useEffect, useState } from 'react'
import './Owerview.scss'


export default function Owerview() {

  const [name, setName] = useState('Abdullajon1997')
  const [newdata, setData] = useState([]);

  useEffect(() => {
    async function ower() {
      const data = await fetch(`https://api.github.com/users/${name}/repos`)
        .then(res => res.json())
        .then(data => setData(data))
    }
    ower();
  }, [])

// console.log(newdata);
  return (

    <>
    
      {
        
        <div className='owerview'>
          <div className='owerview__inner'>
          <h2 className='owerview__inner__title'>Popular repositories</h2>
          <p className='owerview__inner__p'>Customize your pins</p>
          </div>
          <ul className='owerview__list'>
          {
            newdata.length > 0 && newdata.map((e) => (
              
              <li className='owerview__list__item'>
                <div className='owerview__list__item__div'>
                <h3 className='owerview__list__item__div__name'>{e.name}</h3>
                <span className='owerview__list__item__div__public'>{e.visibility}</span>
                </div>
                <p className='owerview__list__item__language'>{e.language}</p>
              </li>
            ))
          }
        </ul>
        </div>
      }
    </>
  )
}
