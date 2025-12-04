import './App.css'
// import {Login} from "./auth/Login.tsx";
// import SignUp from "./auth/SignUp.tsx";
import PrimaryLayout from "./layouts/PrimaryLayout.tsx";
import {Routes,Route} from "react-router-dom";


function App() {
    return (
      <>
          <Routes>
            <Route path="/home" element={<PrimaryLayout/>} />
            <Route path="/portfolio" element={<PrimaryLayout/>} />
            <Route path="/trade" element={<PrimaryLayout/>} />
            <Route path="/market" element={<PrimaryLayout/>} />
            <Route path="/wallet" element={<PrimaryLayout/>} />
            <Route path="/account" element={<PrimaryLayout/>} />


          </Routes>

          {/*<Login />*/}
          {/*<SignUp/>*/}
      </>

    );


}

export default App
