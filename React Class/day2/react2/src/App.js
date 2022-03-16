import logo from './logo.svg';
import './App.css';
import Class1 from './class1';
import Parent1 from './parent1';
import Parent2 from './parent2';

function App() {
  return (
    <div className="App">
      {/* <Class1 /> */}
      <Parent1 childData="This is a child a child component" />
      <Parent2 />
    </div>
  );
}

export default App;
