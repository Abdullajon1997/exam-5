import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Owerview from '../Owerview/Owerview';
import Repositories from '../Repositories/Repositories'
import Following from '../Following/Following'
import Follower from '../Followers/Follower'

export default function RoutesWrapper() {
  return (
    <>
    <Routes>
        <Route path='/' element= {<Owerview />}/>
        <Route path='/repositories' element= {<Repositories />}/>
        <Route path='/following' element= {<Following />}/>
        <Route path='/follower' element= {<Follower />}/>
    </Routes>

    </>
  )
}
