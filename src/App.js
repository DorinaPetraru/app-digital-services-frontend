import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { ServicePage } from './pages/ServicePage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/services/:idService' element={<ServicePage />} />

        <Route path='/users/:idUser' element={<p>getUser</p>} />
        <Route path='/users/:idUser' element={<p>manageProfil</p>} />
        <Route path='/services' element={<p>listServices</p>} />
        <Route path='/services' element={<p>createService</p>} />
        <Route
          path='//services/:idService/filecompleted'
          element={<p>uploadFileCompleted</p>}
        />
        <Route
          path='/services/:idService/resolved'
          element={<p>resolvedService</p>}
        />

        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
