import axios from 'axios'
import './App.css';
import './sass/main.scss'

function App() {
  const cookieHandler = () => {
    console.log("cookie");
    axios.get('http://localhost:8080/cookie', { withCredentials: true })
      .then(data => console.log("data", data))
      .catch(err => console.log("err", err))
  }
  return (
    <div className="main_header">
      {/* <button onClick={() => cookieHandler()}>Cookie</button> */}
      <div className="main_header__header" >
        <h1>Hello</h1>
      </div>
      <p>hi</p>
    </div>
  );
}

export default App;
