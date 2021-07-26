import GeneralInfoInputs from './GeneralInfoInputs';
import './sass/GeneralInfo.scss';

const GeneralInfo = (props) => {
  const { infoChange, generalInfoState } = props;

  return (
    <section className="general-info">
      <GeneralInfoInputs
        name="Name"
        id="name"
        infoChange={infoChange}
        generalInfoState={generalInfoState}
      />
      <GeneralInfoInputs
        name="Email"
        id="email"
        infoChange={infoChange}
        generalInfoState={generalInfoState}
      />
      <GeneralInfoInputs
        name="Phone Number"
        id="telephone"
        infoChange={infoChange}
        generalInfoState={generalInfoState}
      />
      <GeneralInfoInputs
        name="LinkedIn"
        id="linkedin"
        infoChange={infoChange}
        generalInfoState={generalInfoState}
      />
      <GeneralInfoInputs
        name="Github"
        id="github"
        infoChange={infoChange}
        generalInfoState={generalInfoState}
      />
    </section>
  );
};

export default GeneralInfo;
