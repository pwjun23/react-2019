import './App.css';
const Food = ({fav,})=> {
  return(
    <div> 
      <h1>{fav}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Food fav="aa"/>
    </div>
  );
}

export default App;
