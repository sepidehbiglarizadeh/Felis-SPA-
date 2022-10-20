import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import Favorites from './components/Favorites/Favorites';
import AboutUsPage from './components/pages/AboutUsPage/AboutUsPage';
import BlogsPage from './components/pages/BlogsPage/BlogsPage';
import HomePage from './components/pages/HomePage/HomePage';
import JewelryPage from './components/pages/JewelryPage/JewelryPage';
import ProfilePage from './components/pages/ProfilePage/ProfilePage';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/jewelry' element={<JewelryPage/>} />
        <Route path='/about-us' element={<AboutUsPage/>} />
        <Route path='/blogs' element={<BlogsPage/>} />
        <Route path='/blogs/:id' element={<Blog/>} />
        <Route path='/profile/*' element={<ProfilePage/>} >
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='favorites' element={<Favorites/>}/>
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
