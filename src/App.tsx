import './App.css';
import AboutUs from './pages/about-us/about-us';

function App() {
  return (
    <div className="container">
      {/* I skipped making routes and other pages, because only the about us page is relevant for this POC */}
      <AboutUs />
    </div>
  );
}

export default App;
