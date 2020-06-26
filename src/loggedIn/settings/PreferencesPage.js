import React, { useState, useEffect } from "react";
import InputCheckbox from "../../component/InputCheckbox";
import FormComp from "../../component/FormComp";

const PreferencesPage = () => {
  const [constructionCheck, setConstructionCheck] = useState(false);
  const [itCheck, setItCheck] = useState(false);
  const [drugsCheck, setDrugsCheck] = useState(false);
  const [industriCheck, setIndustriCheck] = useState(false);
  const [financeCheck, setFinanceCheck] = useState(false);
  const [realesateCheck, setRealesateCheck] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const id_token = localStorage.getItem("id_token");

  useEffect(() => {
    if (!id_token) {
      setInfoMessage("There's no valid token. Please log in.");
      return;
    }
    fetch("http://localhost:3001/getPreferencesInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data[0]) {
          data.map((category) => {
            switch (category.catname) {
              case "Industri":
                setIndustriCheck(true);
                break;
              case "IT":
                setItCheck(true);
                break;
              case "Läkemedel":
                setDrugsCheck(true);
                break;
              case "Bygg":
                setConstructionCheck(true);
                break;
              case "Finans":
                setFinanceCheck(true);
                break;
              case "Fastigheter":
                setRealesateCheck(true);
                break;
              default:
                break;
            }
          });
        } else if (data.message) {
          setInfoMessage("Vi kunde inte ladda dina instsällningar");
        }
      });
  }, []);

  const onPreferencesSave = () => {
    console.log(financeCheck);
  };

  const callChange = (value, catid) => {
    console.log(catid + "is " + value );
     if(value) {
      fetch("http://localhost:3001/addPreference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_token,
        catid,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.sucess) {
          setInfoMessage("Kunde inte lägga till preferencer, refresha sidan");
        }
      });
     }
     else {
      fetch("http://localhost:3001/deletePreference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_token,
          catid,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.sucess) {
            setInfoMessage("Kunde inte ta bort preferencer, refresha sidan");
          }
        });
     }
    //  else {
    //   console.log();
    // }
    // fetch("http://localhost:3001/getPreferencesInfo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id_token,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data[0]) {
    //       data.map((category) => {
    //         switch (category.catname) {
    //           case "Industri":
    //             setIndustriCheck(true);
    //             break;
    //           case "IT":
    //             setItCheck(true);
    //             break;
    //           case "Läkemedel":
    //             setDrugsCheck(true);
    //             break;
    //           case "Bygg":
    //             setConstructionCheck(true);
    //             break;
    //           case "Finans":
    //             setFinanceCheck(true);
    //             break;
    //           case "Fastigheter":
    //             setRealesateCheck(true);
    //             break;
    //           default:
    //             break;
    //         }
    //       });
    //     } else if (data.message) {
    //       setInfoMessage("Vi kunde inte ladda dina instsällningar");
    //     }
    //   });
  };

  return (
    <div className="container">

        <h2>Ställ in vad du gillar att investera i</h2>
          <div>
            <div className="inLine">
              <InputCheckbox
                headline="Bygg"
                onChangeAction={(value) => {callChange(value, "6a7e015c-acc1-11ea-9fbb-482ae35998bf"); setConstructionCheck(value);}}
                checked={constructionCheck}
              />

              <InputCheckbox
                headline="IT"
                onChangeAction={(value) => {callChange(value, "dc6d25ba-b0de-11ea-93cc-482ae35998bf"); setItCheck(value); }}
                checked={itCheck}
              />
            </div>

            <div className="inLine">
              <InputCheckbox
                headline="Läkemedel"
                onChangeAction={(value) => {callChange(value, "ef1e295f-acc2-11ea-9fc1-482ae35998bf"); setDrugsCheck(value); }}
                checked={drugsCheck}
              />

              <InputCheckbox
                headline="Industri"
                onChangeAction={(value) => {callChange(value, "ef346550-b0de-11ea-93ce-482ae35998bf"); setIndustriCheck(value); }}
                checked={industriCheck}
              />
            </div>

            <div className="inLine">
              <InputCheckbox
                headline="Finans"
                onChangeAction={(value) => {callChange(value, "f6d5a8be-b0de-11ea-93cf-482ae35998bf"); setFinanceCheck(value); }}
                checked={financeCheck}
              />

              <InputCheckbox
                headline="Fastigheter"
                onChangeAction={(value) => {callChange(value, "fd2e32b2-b0de-11ea-93d0-482ae35998bf"); setRealesateCheck(value);}}
                checked={realesateCheck}
              />
            </div>
            {infoMessage && <p>{infoMessage}</p>}
            <div id="tips">
              <p className="greyText">
                (Tips, ifall du väljer att intgrera din bank kan vi anpassa dina
                investeringar utefter din ekonomi och preferences)
              </p>
              <div className="inLine">
                <a href="#!"> Integrera min bank </a>
                <p className="greyText">
                  (Detta skickar dig vidare till din bank.....)
                </p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default PreferencesPage;
