import './sass/education.scss';
import './sass/inputs.scss';

const Education = (props) => {
  const handleChange = (event) => {
    const currentValue = event.target.value;
    const id = event.target.id;

    props.eduChange(currentValue, id);
  };

  const { educationState, submitEdu } = props;

  return (
    <section className="education">
      <h2>Education</h2>
      <form onSubmit={(event) => submitEdu(event)}>
        <div>
          <h3>School Name:</h3>
          <input
            id="schoolName"
            type="text"
            value={educationState.schoolName}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Major:</h3>
          <input
            id="major"
            type="text"
            value={educationState.major}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Starting Year:</h3>
          <input
            id="start"
            type="text"
            value={educationState.start}
            onChange={handleChange}
          />
        </div>
        <div>
          <h3>Graduation Year:</h3>
          <input
            id="end"
            type="text"
            value={educationState.end}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Information</button>
      </form>
    </section>
  );
};

export default Education;
