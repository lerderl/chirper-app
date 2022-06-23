import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { handleAddTweet } from "../actions/tweets";

const NewTweet = ({ dispatch, id }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleChange = e => {
    const text = e.target.value;

    setText(text);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(handleAddTweet(text, id));

    setText("");

    if (!id) {
      navigate("/");
    };
  };

  const tweetCharLeft = 280 - text.length;

  return (
    <div>
      <h3 className="center">Compose New Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        {/* TODO: Redirect to '/' if submitted */}
        <textarea
          value={text}
          maxLength={280}
          className="textarea"
          onChange={handleChange}
          placeholder="What do you have to say?"
        />
        {tweetCharLeft <= 100 &&
          <div className="tweet-length">{tweetCharLeft}</div>
        }
        <button className="btn" type="submit" disabled={text === ""}>Submit</button>
      </form>
    </div>
  );
};

export default connect()(NewTweet);
