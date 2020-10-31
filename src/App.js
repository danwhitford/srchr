import logo from './logo.svg';
import './App.css';
import Srchr from './srchr-component/srchr';

function App() {
  return (
    <div className="App">
      <h1>Dan's amazing search bar</h1>
      <Srchr
        searchItems={['foo', 'bar', 'baz', 'football']}
      />
    </div>
  );
}

export default App;
