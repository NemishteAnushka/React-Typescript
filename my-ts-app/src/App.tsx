import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personInfo = {
    first: "Anushka",
    last: "Nemishte",
  };
  const names = [
    {
      firstName: "Anushka",
      lastName: "Nemishte",
    },
    {
      firstName: "Anuja",
      lastName: "Nemishte",
    },
    {
      firstName: "Avinash",
      lastName: "Nemishte",
    },
  ];
  return (
    <>
      <Greet name="Gourav" count={20} isLoggedIn={false} />
      <Person name={personInfo} />
      <PersonList names={names} />
      <Status status = "loading"/>
    </>
  );
}

export default App;
