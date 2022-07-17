import './AllComments.css';

export const AllComments = (comments) => {
  return comments.length ? (
    <ul className='ulAllCommentFileCompleted'>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <p>
            {comment.fileCompleted ? (
              <a
                href={`http://localhost:4000/${comment.fileCompleted}`}
                download
              >
                Download resolved file
              </a>
            ) : null}
          </p>
          <p>Create on {comment.createdAt}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className='pAllComments'>There are no comments yet</p>
  );
};
