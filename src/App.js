import { Add, Chat, FavoriteRounded, Notifications, Person, QuestionMark } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import MenuContainer from './Components/MenuContainer';
import Pins from './Components/Pins';
import Data from "./Components/Data";

function App() {
  useEffect(() => {
    const allIcon = document.querySelectorAll(".icon_container")
    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    
    allIcon.forEach(n => n.addEventListener('click', setMenuActive))
  }, []);
  return (
    <div className="App">
      <div className="menu_container">
        <img 
          src="data:image/png;base64,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" 
          alt=""
          className="logo"
        />
        
        <div className="sub_menu">
          <div>
            <MenuContainer icon={ <Person /> }/>
            <MenuContainer icon={ <Notifications /> }/>
            <MenuContainer icon={ <Chat /> }/>
          </div>

          <div>
            <MenuContainer icon={ <FavoriteRounded /> }/>
          </div>

          <div>
            <MenuContainer icon={ <QuestionMark /> }/>
            <MenuContainer icon={ <Add /> }/>
          </div>
        </div>
      </div>

      <main>
        <div className="search_box">
          <input type="text" placeholder="Search.." />
          <div className="search">
            <img 
              src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-22.png" 
              alt="" />
          </div>
        </div>
        <div className="main_container">
        {
          Data && Data.map((data) => (
            <Pins 
              key={data.id} 
              pinSize={data.size} 
              imgSrc={data.imgSrc} 
              name ={data.name}
              link ={data.link}
            />
            ))
        }
        </div>
      </main>
    </div>
  );
}

export default App;
