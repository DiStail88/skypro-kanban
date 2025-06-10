import "../../App.css";
import GlobalStyle from "../../GlobalStyle";
import Header from "../Header/Header";
import PopNewCard from "../PopNewCard/PopNewCard";
import Main from "../Main/Main";


function Home() {
  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <PopNewCard />
        <Header />
        <Main />
      </div>
    </>
  );
}

export default Home;
