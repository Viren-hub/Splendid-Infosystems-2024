
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import HomeComponents from './Components/Dashboard/subComponents/HomeComponent/HomeComponents'
import NewsComponents from './Components/Dashboard/subComponents/NewsComponent/NewsComponents'
import NotificationComponents from './Components/Dashboard/subComponents/NotificationsComponents/NotificationComponents'
import ProfileComponents from './Components/Dashboard/subComponents/ProfileComponents/ProfileComponents'

function App() {
  return (
    <div >
    <Routes>
      <Route path='/'element={<Home/>} />
      <Route path='/login'element={<Login/>} />
      <Route path='/dashboard/'element={<Dashboard/>} >
        <Route path='' element={<HomeComponents />}/>
        <Route path='uNotification' element={<NotificationComponents />}/>
        <Route path='uNews' element={<NewsComponents />}/>
        <Route path='uProfle' element={<ProfileComponents />}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;
