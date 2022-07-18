import useTimeout from '../../hooks/useTimeout';
import './Spam.css';
const Spam = () => {
    const [show, reset] = useTimeout();

    return (
        show && (
            <div className="spam">
                <button onClick={reset}>X</button>
                <h2>¡Subscríbete a la newsletter!</h2>
            </div>
        )
    );
};

export default Spam;
