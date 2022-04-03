import Rating from "./Rating";
import ThankYou from "./ThankYou";
import {useState} from "react";

function App() {

    const [rating, setRating] = useState(0)
    const [submit, setSubmit] = useState(false)

  return (
    <div className="rating__card">
        {!submit ? <Rating setRating={setRating} setSubmit={setSubmit} /> : <ThankYou rating={rating} />}
    </div>
  );
}

export default App;
