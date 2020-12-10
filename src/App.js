
import './App.css';
import Consumer1 from './Consumer1';
import Consumer2 from './Consumer2';
import TextInput from './TextInput';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextInput></TextInput>
        <Consumer1></Consumer1>
        <Consumer2></Consumer2>
      </header>
    </div>
  );
}

export default App;
