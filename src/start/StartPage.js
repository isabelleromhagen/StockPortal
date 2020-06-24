import React, { useState} from 'react';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import LostPasswordPage from './LostPasswordPage';

const StartPage = (props) => {
    const [currentPage, setCurrentPage] = useState(0);

    const goToLogin = () => {
        setCurrentPage(0);
    }
    const goToRegistation = () => {
        setCurrentPage(1);
    }

    const goToLostPassword = () => {
        setCurrentPage(2);
    }

    return (
        <div>
           {currentPage === 0 && <LoginPage goToRegistation = {goToRegistation} goToLostPassword = {goToLostPassword} props ={props}/>}
           {currentPage === 1 && <RegistrationPage goToLogin={goToLogin}/>}
           {currentPage === 2 && <LostPasswordPage goToLogin={goToLogin}/>}
        </div>
     );
  }

  export default StartPage;