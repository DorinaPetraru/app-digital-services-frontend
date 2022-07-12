export const AllComments = ({ comments }) => {
    console.log({ comments });

    return comments.length ? (
        <section>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <p>{comment.text}</p>
                        <li>
                            {comment.fileCompleted ? (
                                <a
                                    href={`http://localhost:4000/${comment.fileCompleted}`}
                                    download
                                >
                                    Descargar archivo completado
                                </a>
                            ) : null}
                        </li>
                        <p>Create on {comment.createdAt}</p>
                    </li>
                ))}
            </ul>
        </section>
    ) : (
        <p className="pAllComments"> No hay comentarios todavía</p>
    );
};
