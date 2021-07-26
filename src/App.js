import React, { useState } from 'react';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Preview from './components/Preview';
import './components/sass/App.scss';
import './components/sass/mainForm.scss';
import './components/sass/buttons.scss';

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    telephone: '',
    github: '',
    linkedin: '',
  });

  const [education, setEducation] = useState({
    id: uniqid(),
    schoolName: '',
    major: '',
    start: '',
    end: '',
  });

  const [educationData, setEducationData] = useState([]);

  const [experience, setExperience] = useState({
    id: uniqid(),
    companyName: '',
    position: '',
    from: '',
    to: '',
    tasks: '',
  });

  const [experienceData, setExperienceData] = useState([]);

  const onGeneralInfoChange = (currentValue, id) => {
    if (id === 'telephone' && currentValue.match(/^\d{0,14}$/)) {
      setGeneralInfo({
        ...generalInfo,
        telephone: currentValue,
      });
    } else if (id === 'name' && currentValue.match(/^[a-zA-Z ]{0,25}$/)) {
      setGeneralInfo({
        ...generalInfo,
        name: currentValue,
      });
    } else if (id === 'email' && currentValue.match(/^[A-Za-z@0-9.]{0,70}$/)) {
      setGeneralInfo({
        ...generalInfo,
        email: currentValue,
      });
    } else if (
      id === 'github' &&
      currentValue.match(/^[A-Za-z0-9./-]{0,70}$/)
    ) {
      setGeneralInfo({
        ...generalInfo,
        github: currentValue,
      });
    } else if (
      id === 'linkedin' &&
      currentValue.match(/^[A-Za-z0-9./-]{0,70}$/)
    ) {
      setGeneralInfo({
        ...generalInfo,
        linkedin: currentValue,
      });
    }
  };

  const onEducationChange = (currentValue, id) => {
    console.info(education);
    if (id === 'schoolName' && currentValue.match(/^[a-zA-Z- ]{0,70}$/)) {
      setEducation({
        ...education,
        schoolName: currentValue,
      });
    } else if (id === 'major' && currentValue.match(/^[a-zA-Z- ]{0,70}$/)) {
      setEducation({
        ...education,
        major: currentValue,
      });
    } else if (id === 'start' && currentValue.match(/^\d{0,4}$/)) {
      setEducation({
        ...education,
        start: currentValue,
      });
    } else if (id === 'end' && currentValue.match(/^\d{0,4}$/)) {
      setEducation({
        ...education,
        end: currentValue,
      });
    }
  };

  const onEduSubmit = (event) => {
    event.preventDefault();
    setEducationData([...educationData, education]);
    setEducation({
      schoolName: '',
      major: '',
      start: '',
      end: '',
      id: uniqid(),
    });
  };

  const onExperienceChange = (currentValue, id) => {
    console.info(experience);
    if (id === 'companyName' && currentValue.match(/^[a-zA-Z- ]{0,70}$/)) {
      setExperience({
        ...experience,
        companyName: currentValue,
      });
    } else if (id === 'position' && currentValue.match(/^[a-zA-Z- ]{0,70}$/)) {
      setExperience({
        ...experience,
        position: currentValue,
      });
    } else if (id === 'to' && currentValue.match(/^\d{0,4}$/)) {
      setExperience({
        ...experience,
        to: currentValue,
      });
    } else if (id === 'from' && currentValue.match(/^\d{0,4}$/)) {
      setExperience({
        ...experience,
        from: currentValue,
      });
    } else if (id === 'tasks') {
      setExperience({
        ...experience,
        tasks: currentValue,
      });
    }
  };

  const onExpSubmit = (event) => {
    event.preventDefault();
    setExperienceData([...experienceData, experience]);
    setExperience({
      companyName: '',
      position: '',
      from: '',
      to: '',
      tasks: '',
      id: uniqid(),
    });
  };

  const onDeleteEdu = (eduID) => {
    setEducationData(educationData.filter((edu) => edu.id !== eduID));
  };

  const onDeleteExp = (expID) => {
    setExperienceData(experienceData.filter((exp) => exp.id !== expID));
  };

  return (
    <div className="App">
      <div className="main-form">
        <h1>CV Creator</h1>
        <GeneralInfo
          infoChange={onGeneralInfoChange}
          generalInfoState={generalInfo}
        />
        <Education
          eduChange={onEducationChange}
          educationState={education}
          submitEdu={onEduSubmit}
        />
        <Experience
          expChange={onExperienceChange}
          experienceState={experience}
          submitExp={onExpSubmit}
        />
      </div>
      <Preview
        generalInfoState={generalInfo}
        educationDataState={educationData}
        experienceDataState={experienceData}
        deleteEdu={onDeleteEdu}
        deleteExp={onDeleteExp}
      />
    </div>
  );
};

export default App;
