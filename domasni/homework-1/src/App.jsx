import './App.css';
import DestinationCard from './components/DestinationCard';
import ContactForm from './components/ContactForm';
import destination1 from './assets/destination1.jpeg';
import destination2 from './assets/destination2.jpeg';
import destination3 from './assets/destination3.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Traveling Adventures</h1>
        <p>Your dream destinations await!</p>
      </header>
      <section className="destinations">
        <h2>Featured Destinations</h2>
        <div className="destination-cards">
          <DestinationCard image={destination1} title="Paris, France" />
          <DestinationCard image={destination2} title="Tokyo, Japan" />
          <DestinationCard image={destination3} title="New York, USA" />
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
