import "./styles.css";
import BodyComp from "./pageParts/BodyComp";
import HeaderComp from "./pageParts/HeaderComp";

const App = () => {
  return (
    <div className="App">
      <HeaderComp />
      <BodyComp />
    </div>
  );
};

export default App;
