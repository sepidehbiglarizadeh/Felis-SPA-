import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import Layout from './Layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
