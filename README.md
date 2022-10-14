react@18 + react-router-dom@6

index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

App.js

`<Route />` should inside `<Routes />` [migrate to react-router-dom@6](https://reactrouter.com/en/v6.3.0/upgrading/v5#relative-routes-and-links)


```js
import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetups";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
```

Use `useNavigate` for react-router-dom@6 [migrate to react-router-dom@6](https://reactrouter.com/en/v6.3.0/upgrading/v5#use-usenavigate-instead-of-usehistory)

```js
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  let history = useNavigate();
  function addMeetupHandler(meetupdata) {
    const url = `${process.env.REACT_APP_FIREBASE_URL}/meetups.json`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(meetupdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

```

.env file usage without library

add `REACT_APP_` as prefix to every variable

```env
REACT_APP_FIREBASE_URL=https://firebase.code.url
```

```js
`${process.env.REACT_APP_FIREBASE_URL}`
```