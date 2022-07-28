import './AllComments.css';

export const AllComments = ({ comments }) => {
    return comments ? (
        <section className="sectionAllComments">
            <p>Comments:</p>
            <ul className="ulAllCommentFileCompleted">
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
        </section>
    ) : (
        <p className="pAllComments">There are no comments yet</p>
    );
};
