import './App.css'

import NavBar from './components/ui/navbar';
import HeroSection from './components/ui/herosection';
import StepRedBackgroundSection from './components/ui/stepssection';
import BestServicesSection from './components/ui/service';
import CarList from './components/ui/carList'
import ContactForm from './components/ui/contactform';
import { Toaster } from './components/ui/toaster';


const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <StepRedBackgroundSection />
      <BestServicesSection />
      <CarList />
      <ContactForm />
      <Toaster/>
    </div>
  );
};

export default App
