import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUsPage from './components/pages/AboutUsPage/AboutUsPage';
import HomePage from './components/pages/HomePage/HomePage';
import JewelryPage from './components/pages/JewelryPage/JewelryPage';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/jewelry' element={<JewelryPage/>} />
        <Route path='/about-us' element={<AboutUsPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
