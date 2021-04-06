function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return React.createElement("img", {
    className: "Avatar",
    src: props.user.avatarUrl,
    alt: props.user.name
  });
}

function UserInfo(props) {
  return React.createElement(
    "div",
    { className: "UserInfo" },
    React.createElement(Avatar, { user: props.user }),
    React.createElement(
      "div",
      { className: "UserInfo-name" },
      props.user.name
    )
  );
}

function Comment(props) {
  return React.createElement(
    "div",
    { className: "Comment" },
    React.createElement(UserInfo, { user: props.author }),
    React.createElement(
      "div",
      { className: "Comment-text" },
      props.text
    ),
    React.createElement(
      "div",
      { className: "Comment-date" },
      formatDate(props.date)
    )
  );
}

var comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
};
ReactDOM.render(React.createElement(Comment, {
  date: comment.date,
  text: comment.text,
  author: comment.author
}), document.getElementById('root'));