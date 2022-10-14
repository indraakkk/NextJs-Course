import { Routes, Route } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritePage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetups";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;
