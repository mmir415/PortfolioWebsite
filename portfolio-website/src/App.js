import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Hassaan Mirza',
      headerLinks: [
        {title:'Home', path:'/'},
        {title:'Contact', path:'/contact'},
        {title:'About', path:'/about'}
      ],
      home: { 
        title:'Be Relentless',
        subTitle:'Projects that make a difference',
        text:'Checkout my projects below'
      },
      contact: { 
        title:'Lets Talk',
        // subTitle:'Projects that make a difference',
        // text:'Checkout my projects below'
      },
      about: { 
        title:'About Me ',
        // subTitle:'Projects that make a difference',
        // text:'Checkout my projects below'
      }

    }
  }

  render(){

    return (
      <div>Hello from React</div>
      );

  }

}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
