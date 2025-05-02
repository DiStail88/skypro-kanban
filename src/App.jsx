import './App.css'
import Header from './components/Header.jsx';
import PopBrowse from './components/PopBrowse.jsx';
import PopNewCard from './components/PopNewCard.jsx';
import Main from './components/Main.jsx';
import PopExit from './components/PopExit.jsx';

function App() {

  return (
    <>
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
