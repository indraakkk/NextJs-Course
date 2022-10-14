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
