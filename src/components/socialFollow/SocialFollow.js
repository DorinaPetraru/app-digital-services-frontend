import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialFollow.css';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SocialFollow() {
    return (
        <article class="socialContainer">
            <div>
                <h3>Follow Dorina Petraru</h3>
                <a
                    href="https://www.linkedin.com/in/dorina-petraru-2021/"
                    className="linkedin social"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>

                <a
                    href="https://github.com/DorinaPetraru"
                    className="gitHub social"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
            <div>
                <h3>Follow Andrea Gallegos</h3>
                <a
                    href="https://www.linkedin.com/in/avalentinagd/"
                    className="linkedin social"
                >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>

                <a
                    href="https://github.com/avalentinagd"
                    className="gitHub social"
                >
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
        </article>
    );
}
