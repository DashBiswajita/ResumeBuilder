import styles from './EducationForm.module.scss';
import { Fragment } from "react";
import Accordion, { AccordionBody, AccordionHeader } from "../UI/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Input from "../UI/Input";
import {educationActions} from '../store/EducationStore';
import { useDispatch, useSelector } from 'react-redux';
let EducationForm = () => {

  let dispatch = useDispatch();
  let educationList = useSelector(state => state.educations);
  let addExperienceHandler =() => {
    dispatch(educationActions.addEducation());
  }
  let modifyEducationHandler = (index) => {
    return (event) => {
       event.preventDefault();
       dispatch(educationActions.modifyEducation({index , changeValue : {[event.target.name] : event.target.value}}))
    }
  }
  let deleteEducationHandler = (index) => {
    return (event) => {
      event.preventDefault();
      dispatch(educationActions.deleteEducation(index))
    }
  }
  return (
    <div className="d-flex flex-column formControls">
      <h3 className='formControls_header'>Education</h3>
      {educationList.length > 0 && <Accordion>
        {educationList.map((edu, ind) => (
            <Fragment key={ind}>
              <AccordionHeader
                title={edu?.collegeName}
                id={ind}
              ></AccordionHeader>
              <AccordionBody id={ind}>
                 <div onChange={modifyEducationHandler(ind)}>
                 <Input
                  type="text"
                  id={"input_" + ind + "_1"}
                  placeholder="Enter the College Name"
                  value={edu?.collegeName}
                  name="collegeName"
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_2"}
                  placeholder="Enter your University Name"
                  value={edu?.uniVersityName}
                  name = "uniVersityName"
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_3"}
                  placeholder="Enter the Starting month and year as (APR 2021)"
                  value={edu?.startTime}
                  name = "startTime"
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_4"}
                  placeholder="Enter the Ending month and year as (APR 2021) or Present if current company"
                  value={edu?.endTime}
                  name = 'endTime'
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_5"}
                  placeholder="Total Duration"
                  value={edu?.totalDuration}
                  name = "totalDuration"
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_6"}
                  placeholder="Enter the degree"
                  value={edu?.degree}
                  name = 'degree'
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_7"}
                  placeholder="Enter the stream"
                  value={edu?.stream}
                  name = "stream"
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_8"}
                  placeholder="Marks or Percentage"
                  value={edu?.marksObtained}
                  name = "marksObtained"
                ></Input>
                
                 </div>
              </AccordionBody>
            </Fragment>
          ))}
      </Accordion>}
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="white"
        onClick={addExperienceHandler}
        className={styles["add"] + " p-4 m-2"}
        style={{height : "1.5rem"}}
      ></FontAwesomeIcon>
    </div>
  );
}

export default EducationForm;