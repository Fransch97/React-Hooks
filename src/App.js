import Header from "./components/header.js"
import Main from "./components/main"
import Footer from "./components/footer"
import "./css/app.css"
function App() {
  return (
    <div className="App">
      <Header header={"Sono header React"} />
      <Main main={"Sono main React"}/>
      <Footer footer={"Sono footer React"} />
    </div>
  );
}

export default App;
