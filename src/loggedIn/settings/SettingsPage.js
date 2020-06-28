import React, { useState} from 'react';
import ButtonComponent from '../../component/ButtonComp';
import MyProfile from './MyProfile';
import ChangePasswordPage from './ChangePasswordPage';
import PreferencesPage from './PreferencesPage';

const SettingPage = () => {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div className="settings-menu">
            <h2>Inställningar</h2>
            <div>
                <ButtonComponent btnName="Min Profil" onClickFunction={() => setCurrentPage(0)} />
                <ButtonComponent btnName="Byt Lösenord" onClickFunction={() => setCurrentPage(1)} />
                <ButtonComponent btnName="Preferenser" onClickFunction={() => setCurrentPage(2)} />
            </div>
            {currentPage === 0 && <MyProfile />}
            {currentPage === 1 && <ChangePasswordPage />}
            {currentPage === 2 && <PreferencesPage />}
        </div>
     );
  }

  export default SettingPage;