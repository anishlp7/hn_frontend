import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MainContent from "./components/mainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <div></div>
        <div className="">
          <MainContent />
        </div>
        <div></div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
