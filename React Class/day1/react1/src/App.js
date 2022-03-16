import './App.css';
import Footer from './footer';
import Header from './header';

function App() {
  // Function is divided into two things - 1. LOGIC , 2. HTML

  console.log("hello");
  return (
    <div className="App">
      <Header name="Prabhjyot" />
      <Footer />
    </div>
  );
}

export default App;
