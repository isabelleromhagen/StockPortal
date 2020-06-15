import React, { useState, useEffect} from "react";
import InputCheckbox from "../../component/InputCheckbox";
import FormComp from "../../component/FormComp";

const PreferencesPage = () => {
    const [constructionCheck, setConstructionCheck] = useState(false);
    const [itCheck, setItCheck] = useState(false);
    const [drugsCheck, setDrugsCheck] = useState(false);
    const [industriCheck, setIndustriCheck] = useState(false);
    const [financeCheck, setFinanceCheck] = useState(false);
    const [realesateCheck, setRealesateCheck] = useState(false);

    useEffect(() => {
        // Get from database
    }, []);

    const onPreferencesSave = () => {
        alert(constructionCheck);
    }

    return (
        <div>

        <FormComp
        headline = "Ställ in vad du gillar att investera i"
        onSubmitAction={onPreferencesSave}
        value="Spara"
        inputFields={
            <div>
            <div className="inLine">
              <InputCheckbox
                headline = "Bygg"
                onChangeAction={(value) => setConstructionCheck(value)}
                checked = {constructionCheck}
              />

              <InputCheckbox
                headline = "IT"
                onChangeAction={(value) => setItCheck(value)}
                checked = {itCheck}
              />
            </div>

            <div className="inLine">
              <InputCheckbox
                headline = "Läkemedel"
                onChangeAction={(value) => setDrugsCheck(value)}
                checked = {drugsCheck}
              />

              <InputCheckbox
                headline = "Industri"
                onChangeAction={(value) => setIndustriCheck(value)}
                checked = {industriCheck}
              />
            </div>

            <div className="inLine">
              <InputCheckbox
                headline = "Finans"
                onChangeAction={(value) => setFinanceCheck(value)}
                checked = {financeCheck}
              />

              <InputCheckbox
                headline = "Fastigheter"
                onChangeAction={(value) => setRealesateCheck(value)}
                checked = {realesateCheck}
              />
            </div>

            <div id="tips">
                <p className="greyText">tips, ifall du väljer att integrera din bank kan vi anpassa dina investeringar utefter din ekonomi och preferenser</p>
                <div className="inLine">
                    <a href="#!"> Integrera min bank </a>
                    <p className="greyText">(Detta skickar dig vidare till din bank.....)</p>
                </div>
            </div>

            </div>
        }
        
        />

        </div>
    );
}
  

export default PreferencesPage;