import { useState } from 'react';
import Posts from './components/post-lists';
import Header from './components/main-header';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = (e) => {
    setModalIsVisible(true);
  };

  const hideModalHandler = (e) => {
    setModalIsVisible(false);
  };

  return (
    <>
      <Header onCreatePost={showModalHandler} />
      <main>
        <Posts isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
