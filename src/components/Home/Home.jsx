import "../../App.css";
import GlobalStyle from "../../GlobalStyle";
import Header from "../Header/Header";
import Main from "../Main/Main";


function Home() {
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default Home;
