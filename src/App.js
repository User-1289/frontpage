
import './App.css';
import Container from './Container';

function App() {
  return (
    <div className="App">
      <h2>Welcome to <br/>Deverse.space</h2>
      <h3>These are our services</h3>
      <div className='sign'>
      <span className='sign-txt'>Sign up</span>
        <span className='log-txt'>Log in</span>
      </div>
      <Container/>
    </div>
  );
}

export default App;
