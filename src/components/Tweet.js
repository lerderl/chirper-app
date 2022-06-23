import { connect } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";

import formatTweet from "../utils/helpers";
import formatDate from "../utils/formatDate";
import { handleToggleTweet } from "../actions/tweets";

const withRouter = Component => {
  const ComponentWithRouterProp = props => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Tweet = (props) => {
  const navigate = useNavigate();

  const toParent = (e, id) => {
    e.preventDefault();

    // TODO: Redirect to Parent tweet
    navigate(`/tweet/${id}`);
  };

  const handleLike = (e) => {
    e.preventDefault();

    // TODO: Handle like tweet
    const { dispatch, tweet, authedUser } = props;

    dispatch(handleToggleTweet({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }));
  };

  if (props.tweet === null) {
    return <p>This tweet doesn't exist</p>;
  };

  const { name, avatar, timestamp, text, hasLiked, likes, replies, parent, id } = props.tweet;

  return (
    <Link to={`/tweet/${id}`} className="tweet">
      <img src={avatar} alt={name} className="avatar" />
      <div className="tweet-info">
        <div>
          <span>{name}</span>
          <div>{formatDate(timestamp)}</div>
          {parent && (
            <button className="replying-to" onClick={e => toParent(e, parent.id)}>
              Replying to @{parent.author}
            </button>
          )}
          <p>{text}</p>
        </div>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{replies !== 0 && replies}</span>
          <button className="heart-button" onClick={handleLike}>
            {hasLiked === true ? (
              <TiHeartFullOutline color="e0345e" className="tweet-icon" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
          </button>
          <span>{likes !== 0 && likes}</span>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = ({ authedUser, users, tweets }, {id}) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
  };
};

export default withRouter(connect(mapStateToProps)(Tweet));
