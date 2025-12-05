import './App.css'

import PrimaryLayout from "./layouts/PrimaryLayout.tsx";
import {Routes,Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Trade from "./pages/Trade.tsx";
import Market from "./pages/Market.tsx";
import Wallet from "./pages/Wallet.tsx";
import Account from "./pages/Account.tsx";
import {Login} from "./auth/Login.tsx";
import SignUp from "./auth/SignUp.tsx";


function App() {
    return (
      <>
          <Routes>
              <Route path="/" element={<PrimaryLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="trade" element={<Trade />} />
                  <Route path="market" element={<Market />} />
                  <Route path="wallet" element={<Wallet />} />
                  <Route path="account" element={<Account />} />
              </Route>

              <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<SignUp/>}></Route>


          </Routes>

          {/*<Login />*/}
          {/*<SignUp/>*/}
      </>

    );


}

export default App
