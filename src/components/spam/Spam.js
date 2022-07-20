import useTimeout from '../../hooks/useTimeout';
import SocialFollow from '../socialFollow/SocialFollow';
import './Spam.css';

export const Spam = () => {
    const [show, reset] = useTimeout();

    return (
        show && (
            <article className="spam">
                <button onClick={reset}>X</button>
                <p>
                    <span>¡ Follow us !</span> on our social networks
                </p>
                <div>
                    <SocialFollow />
                </div>
            </article>
        )
    );
};
