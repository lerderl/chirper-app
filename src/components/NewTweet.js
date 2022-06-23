import { useState } from "react";

const NewTweet = () => {
  const [text, setText] = useState("");

  const handleChange = e => {
    const text = e.target.value;

    setText(text);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // TODO: Add Tweet to store

    console.log("New Tweet: ", text);

    setText("");
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
          onChange={handleChange}
          className="textarea"
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

export default NewTweet;
