import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const Title: React.FC = () => {
  return (
    <div className="container text-center">
      <h1 className="text-primary display-4">AI Review: Literature Review using LLMs</h1>
      <div className="position-absolute top-0 end-0 mt-3 me-3">
        <a href="https://github.com/yourgithubrepo" target="_blank" rel="noopener noreferrer" className="me-3">
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-dark" />
        </a>
        <a href="/settings" className="text-dark">
          <FontAwesomeIcon icon={faCog} size="2x" className="text-dark" />
        </a>
      </div>
    </div>
  );
};

export default Title;