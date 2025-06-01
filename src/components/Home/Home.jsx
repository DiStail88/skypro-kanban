import "../../App.css";
import GlobalStyle from "../../GlobalStyle";
import Header from "../Header/Header";
import PopBrowse from "../PopBrowse/PopBrowse";
import PopNewCard from "../PopNewCard/PopNewCard";
import Main from "../Main/Main";
import PopExit from "../PopExit/PopExit";

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
