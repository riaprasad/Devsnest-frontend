import react, {Component} from 'react';
import './App.css';
import MemeCard from './components/memecard.js';

class App extends Component {
  render(){
  return (
    <div>
      <MemeCard />
      <MemeCard />
    </div>
    );
  }
  
}

export default App;
