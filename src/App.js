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
import { OwnUserPage } from './pages/ownUserPage/OwnUserPage';
import { Spam } from './components/spam/Spam';

function App() {
    return (
        <div className="app">
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/services/:idService"
                        element={<ServicePage />}
                    />
                    <Route path="/services" element={<CreateServicePage />} />
                    <Route path="/users/:idUser" element={<UserPage />} />
                    {/* anadida la linea 28, id de la tabla de usuario users */}
                    <Route path="/users" element={<OwnUserPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Spam />
            <Footer />
        </div>
    );
}

export default App;
