import "./App.css";
import MainPage from "./component/page/Main/MainPage";
import FooterView from "./component/ui/FooterView";
import HeaderView from "./component/ui/HeaderView";

function App() {
  return (
    <div className="App">
      <HeaderView />
      <MainPage />
      <FooterView />
    </div>
  );
}

export default App;
