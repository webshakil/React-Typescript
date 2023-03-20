import { useState } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>This is react Typescript project</h1>
      <User lang={['Bangla', 'English', 'Hindi']} />
    </div>
  );
}

export default App;
