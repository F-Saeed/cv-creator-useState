import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneSquare,
  faAt,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './sass/preview.scss';

const Preview = (props) => {
  const {
    generalInfoState,
    educationDataState,
    experienceDataState,
    deleteEdu,
    deleteExp,
  } = props;

  const education = educationDataState.map((data) => {
    return (
      <div className="details" id={data.id}>
        <div className="information">
          <h2>{data.schoolName}</h2>
          <p>{data.major}</p>
        </div>
        <div className="years">
          {data.start} - {data.end}
          <div
            onClick={() => {
              deleteEdu(data.id);
            }}
          >
            <FontAwesomeIcon className="trash-icon" icon={faTrash} size="2x" />
          </div>
        </div>
      </div>
    );
  });

  const experience = experienceDataState.map((data) => {
    return (
      <div className="details" id={data.id}>
        <div className="information">
          <h2>{data.companyName}</h2>
          <p>{data.position}</p>
        </div>
        <div className="years">
          {data.from} - {data.to}
          <div
            onClick={() => {
              deleteExp(data.id);
            }}
          >
            <FontAwesomeIcon className="trash-icon" icon={faTrash} size="2x" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="preview">
      <header>
        <h1>{generalInfoState.name}</h1>
        <div className="contacts">
          <a
            href={generalInfoState.email}
            target="_blank"
            rel="noreferrer noopener"
          >
            {generalInfoState.email}
            <FontAwesomeIcon icon={faAt} className="fa-icon" />
          </a>
          <div>
            {generalInfoState.telephone}
            <FontAwesomeIcon icon={faPhoneSquare} className="fa-icon" />
          </div>
          <a
            href={generalInfoState.linkedin}
            target="_blank"
            rel="noreferrer noopener"
          >
            {generalInfoState.linkedin}
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          </a>
          <a
            href={generalInfoState.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            {generalInfoState.github}
            <FontAwesomeIcon icon={faGithubSquare} className="fa-icon" />
          </a>
        </div>
      </header>
      {educationDataState.length ? (
        <section className="section">
          <h2>Education</h2>
          {education}
        </section>
      ) : null}
      {experienceDataState.length ? (
        <section className="section">
          <h2>Experience</h2>
          {experience}
        </section>
      ) : null}
    </div>
  );
};

export default Preview;
