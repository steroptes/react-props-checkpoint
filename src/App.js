import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header row">
        <Profile
          name="Mohamed"
          bio="je suis ce que je suis!"
          profession="Pharmacist"
        >
          <img
            src="https://www.searchpng.com/wp-content/uploads/2019/02/Men-Profile-Image-1024x941.png"
            alt="profile logo"
            width="40%"
          ></img>
        </Profile>
      </header>
    </div>
  );
}

export default App;
