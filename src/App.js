
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import WelcomeScreen from "./component/WelcomeScreen"
import AccountSettings from './component/AccountSettings';
import CreateAccount from './component/CreateAccount'
import LoginScreen from './component/LoginScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/profile" element={<AccountSettings />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
