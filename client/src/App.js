import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Success from './components/Success';
import Failure from './components/Failure';
import PaymentPage from './components/PaymentPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route exact path='/' element={<PaymentPage />} />
            <Route exact path='/success' element={<Success />} />
            <Route exact path='/failure' element={<Failure />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;