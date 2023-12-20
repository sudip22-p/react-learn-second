// import logo from './logo.svg';
import './App.css';
import FillForm from './components/FillForm';
import Navbar from './components/Navbar';
import About from './components/About';

// let xyz="i have a";
function App() {
  return (
    // <>
    // //this is js fragment
    // </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with sud 20:30:14
    //     </a>
    //   </header>
    // </div>//return vitra vayeko html jsx 
    <>
      {/* <nav>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Help</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="container">
        <h1>{xyz} CAR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit unde cumque delectus nulla deleniti adipisci fugit distinctio exercitationem, cum doloribus labore magnam laborum non commodi dignissimos sapiente eum repellendus maxime repellat blanditiis.</p>
      </div> */}
    <Navbar title="TextDecors-2024"/>
    <div className="container">
        <FillForm heading="Enter the text below:"/>
        <About/>
    </div>
    </>
  );
}

export default App;
