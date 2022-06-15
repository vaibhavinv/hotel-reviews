import React from "react";
import Review from "./Review";

//import { FaGithubSquare } from "react-icons/fa";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Hotel Augustiner Tor, Konstanz</h2>
          <h4> Reviews</h4>
          <div className="underline"></div>
        </div>
      </section>
      <Review />
    </main>
  );
}

export default App;
