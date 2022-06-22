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

  return (
    <div>
      <h3 className="center">Compose New Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleChange}
          className="textarea" maxLength={280}
          placeholder="What do you have to say?"
        />
      </form>
    </div>
  );
};

export default NewTweet;
