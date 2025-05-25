import './App.css'
import Header from './components/Header/Header.jsx';
import PopBrowse from './components/PopBrowse/PopBrowse.jsx';
import PopNewCard from './components/PopNewCard/PopNewCard.jsx';
import Main from './components/Main/Main.jsx';
import PopExit from './components/PopExit/PopExit.jsx';
import GlobalStyle from './GlobalStyle.js';

function App() {

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
		
			<PopExit/>


			<PopNewCard />

		<PopBrowse />
		

		<Header />

		<Main />
		
    </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App
