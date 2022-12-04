import { useState } from 'react'

import Layout from './assets/Components/Layout/Layout'
import Navbar from './assets/Components/Navbar/Navbar'
import RoutesWrapper from './assets/Components/RoutesWrapper/RoutesWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Layout>
      {/* <Navbar/> */}
     <RoutesWrapper/>
     </Layout>
    </div>
  )
}

export default App
