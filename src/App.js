import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage/HomePage';
import { RegisterPage } from './pages/registerPage/RegisterPage';
import { LoginPage } from './pages/loginPage/LoginPage';
import { ServicePage } from './pages/servicePage/ServicePage';
import { NotFoundPage } from './pages/notFoundPage/NotFoundPage';
import { CreateServicePage } from './pages/createServicePage/CreateServicePage';
import { UserPage } from './pages/userPage/UserPage';

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/services/:idService' element={<ServicePage />} />

        <Route path='/users/:idUser' element={<UserPage />} />
        <Route path='/users/profile' element={<p>manageProfil</p>} />

        <Route path='/services' element={<CreateServicePage />} />
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
