import { useState } from "react";
import { GlobalStyles } from "./globalStyles/globalStyles"
import { Home } from "./pages/home"
import { UserInfo } from "./pages/userInfo";

function App() {

  const [userInfo, setUserInfo] = useState({});
  const [error, setError] = useState("");

  return (
    <div>
      <GlobalStyles />
      <Home userInfo = {userInfo} setUserInfo={setUserInfo} setError={setError}  />
      <UserInfo  userInfo = {userInfo} error={error} />
    </div>
  )
}

export default App
