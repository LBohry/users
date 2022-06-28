import "../App.css";

const Comment = ({ comment }) => {
  return (
    <div className="comment" key={comment._id}>
      <div className="comment-name">{comment.commentUser}</div>

      <div className="comment-body">{comment.commentBody}</div>
    </div>
  );
};

export default Comment;
