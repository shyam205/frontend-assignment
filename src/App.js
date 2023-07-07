
import './App.css';
import Banner from './components/Banner';
import BannerbottomLayer from './components/Bannerbottom';
import Cobrastatics from './components/Cobrastatics';
import Footer from './components/Footer';
import Freeprocess from './components/Freeprocess';
import Header from './components/Header';
import Onboard from './components/Onboard';
import Paymentfirst from './components/Paymentfirst';
import Paymenthassle from './components/Paymenthassle';
import Paymentoffer from './components/Paymentoffer';
import Paymentsectionhead from './components/Paymentsectionhead';
import Testimonal from './components/Testimonal';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <BannerbottomLayer />
      <Paymentsectionhead />
      <Paymentfirst />
      <Paymentoffer />
      <Paymenthassle />
      <Testimonal />
      <Freeprocess />
      <Onboard />
      <Cobrastatics />
      <Footer />
    </div>
  );
}

export default App;
