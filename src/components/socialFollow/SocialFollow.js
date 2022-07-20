import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialFollow.css';
import {
    faLinkedinIn,
    faLinkedin,
    faGithub,
    faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

export default function SocialFollow() {
    return (
        <div class="social-container">
            <h3>Follow Dorina Petraru</h3>
            <a
                href="https://www.linkedin.com/in/dorina-petraru-2021/"
                className="linkedinDorina social"
            >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>

            <a
                href="https://github.com/DorinaPetraru"
                className="gitHubDorina social"
            >
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <h3>Follow Andrea Valentina Gallegos Duque</h3>
            <a
                href="https://www.linkedin.com/in/avalentinagd/"
                className="linkedinAndrea social"
            >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            <a
                href="https://github.com/avalentinagds"
                className="gitHubAndrea social"
            >
                <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
        </div>
    );
}
