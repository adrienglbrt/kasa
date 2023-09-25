import { BrowserRouter } from 'react-router-dom'
import Router from './pages/Router'
import './App.scss'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
