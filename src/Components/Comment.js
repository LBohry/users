import "../App.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment" key={comment.id}>
      <div className="comment-name">{comment.name}</div>

      <div className="comment-body">{comment.body}</div>
    </div>
  );
};

export default Comment;
