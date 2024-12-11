//main page- it will display first in screen
// import Card from '../commoncomponents/Card';
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Index = () => {
  console.log("asasas")
  return (
    <div>
      <Header />
      {/* <Card /> */}
      <Outlet />
    </div>
  )
}

export default Index;