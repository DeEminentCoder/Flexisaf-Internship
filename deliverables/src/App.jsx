import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  let name = "Kenny";
  let age = 50;

  const myDetails = `I am ${name}. I'm ${age} years old.`
  console.log(myDetails);

  const name2 = "Simeon";   /* declaring a global variable using const*/
  console.log(name2);


  /* declaring a local variable using const*/
  // Firstofall create a function using arrow function

  const aboutMe =()=> {
      const name2 = "Taiwo";
      console.log(name2);
  }
  aboutMe()


  return (
    <>
      <center>
        <h1 className="display1 text-decoration-underline" >FRONTEND DEVELOPMENT INTERNSHIP - ES6 features using React</h1><br />
        <h2>"Let"</h2>

        <form action="">
          <input type="text" value={name} />
          <input type="text" value={age} />
        </form><br />

        <h2>"Const"</h2>
        {/* Const can be used to declare varaibles globally and locally */}
        {/* For example */}


      </center>
    </>
  );
}

export default App;
