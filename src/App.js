import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Content from './components/Content';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { createContext, useState } from 'react';
const Context = createContext();
function App() {
  const [log,setLog] = useState([]);
  const inc = () => {
    // setLog(log+1);
    setLog([
      ...log,time
    ]);
    console.log(log);
  };
  const [time,setTime] = useState();
    const updateTime = () =>{
        const options = { hour12: false };
        let ctime = new Date().toLocaleTimeString('en-US', options);
        setTime(ctime);
    }
    setInterval(updateTime,1000);
  return (
    <div className="App">
     <Context.Provider value={time}>
      <Header/> 
      </Context.Provider> 

     
     <Context.Provider value={[log,inc,time]}>
     <div className="content-container">
     <Sidebar/>
     <Content/>
     </div>
     <Footer/>
     </Context.Provider>
    </div>
  );
}

export default App;
export {Context};