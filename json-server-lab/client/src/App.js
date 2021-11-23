//importing react, useEffect, useState, and App.css
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

//creating App functional component
function App() {
  //setting up useState variables
  //this set of state variables are for the fetch from JSON
  const [name, setName] = useState("");
  const [quest, setQuest] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");

  //this set of state variables are for the user inputted information
  const [userName, setUserName] = useState("");
  const [userQuest, setUserQuest] = useState("");
  const [userFavoriteColor, setUserFavoriteColor] = useState("");

  //this set of state variables are for updating the styling and displayed message based on user input
  const [displayText, setDisplayText] = useState("");
  const [matchColor, setMatchColor] = useState("");

  //useEffect to fetch data from answers.json
  useEffect(() => {
    //fetch can be just /.... instead of the full localhost url
    fetch(`/check`)
      .then((res) => res.json())
      .then((questArray) => {
        //setting the name, quest, and favorite color from the json
        setName(questArray[0].name);
        setQuest(questArray[0].quest);
        setFavoriteColor(questArray[0].favoriteColor);
      });
  }, [userName]);

  //submission evt handler for the submission of the form by enter or submit button
  const submitHandler = (evt) => {
    evt.preventDefault();
    nameCheck();
  };

  //sleep function was removed here and in the nameCheck function since it was not working correctly
  // function sleep(ms) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  //function to check the user inputs vs the json fetched data
  function nameCheck() {
    //if to check if the values are matched, the user input is trimmed to remove white space
    if (
      name.toLowerCase() === userName.trim().toLowerCase() &&
      quest.toLowerCase() === userQuest.trim().toLowerCase() &&
      favoriteColor.toLowerCase() === userFavoriteColor.trim().toLowerCase()
    ) {
      //setting the display variables and clearing the user input fields
      setMatchColor("green");
      setDisplayText("Alrighty then, off you go. Good luck on your quest!");
      setUserName("");
      setUserQuest("");
      setUserFavoriteColor("");
      //else to handle non-matching values
    } else {
      //setting the display variables and clearing the user input fields
      setMatchColor("red");
      setDisplayText("Wrong answer! Into the chasm with you!");
      // await sleep(5000)
      // setDisplayText('')
      setUserName("");
      setUserQuest("");
      setUserFavoriteColor("");
    }
  }

  //setting up the return using a form with three inputs that update the user input variables and a submit button that calls the submit evt handler. A h3 displays the correct text and color.
  return (
    <div className="main-wrapper">
      <h1 className="title">JSON CHANGE Quest</h1>
      <form onSubmit={submitHandler}>
        <input
          className="user-input"
          type="text"
          placeholder="Name"
          value={userName}
          onChange={(evt) => {
            setUserName(evt.target.value);
          }}
        />
        <input
          className="user-input"
          type="text"
          placeholder="Quest"
          value={userQuest}
          onChange={(evt) => {
            setUserQuest(evt.target.value);
          }}
        />
        <input
          className="user-input"
          type="text"
          placeholder="Favorite Color"
          value={userFavoriteColor}
          onChange={(evt) => {
            setUserFavoriteColor(evt.target.value);
          }}
        />
        <input id="submit" type="submit" value="Submit Answers" />
      </form>
      <div>
        <h3 className="display-text" style={{ color: matchColor }}>
          {displayText}
        </h3>
      </div>
    </div>
  );
}

export default App;

//terminal cd client, run npm run build
