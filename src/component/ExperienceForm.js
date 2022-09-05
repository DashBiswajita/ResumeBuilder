import styles from "./ExperienceForm.module.scss";
import { Fragment } from "react";
import Accordion, { AccordionBody, AccordionHeader } from "../UI/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Input from "../UI/Input";
import {experienceActions} from '../store/ExperienceStore';
import { useDispatch, useSelector } from "react-redux";
let ExperienceForm = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences)
  let addExperienceHandler =() => {
      dispatch(experienceActions.addExperience());
  }
  let modifyExperienceHandler = (index) => {
    return (event) => {
       dispatch(experienceActions.modifyExperience({index,changeValue : {[event.target.name] : event.target.value}}));
    }
  }
  let deleteExperienceHandler = (index) => {
    return (event) => {
      dispatch(experienceActions.deleteExperience(index));
    }
  }
  return (
    <div className="formControls d-flex flex-column">
      <h3 className='formControls_header'>Experience</h3>
      {experiences.length > 0 &&  <Accordion>
        {experiences.map((exp, ind) => (
            <Fragment key={ind}>
              <AccordionHeader
                title={exp?.comapnyName}
                id={ind}
              ></AccordionHeader>
              <AccordionBody id={ind}>
                <div onChange={modifyExperienceHandler(ind)}>
                <Input
                  type="text"
                  id={"input_" + ind + "_1"}
                  placeholder="Enter the Comapny Name"
                  value={exp?.comapnyName}
                  name = "comapnyName"
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_2"}
                  placeholder="Enter your Job title"
                  value={exp?.jobTitle}
                  name = "jobTitle"
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_3"}
                  placeholder="Enter the Starting month and year as (APR 2021)"
                  value={exp?.startMonth}
                  name = 'startMonth'
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_4"}
                  placeholder="Enter the Ending month and year as (APR 2021) or Present if current company"
                  value={exp?.endMonth}
                  name= 'endMonth'
                ></Input>
                <Input
                  type="text"
                  id={"input_" + ind + "_5"}
                  placeholder="Total Duration"
                  value={exp?.totalDuration}
                  name = "totalDuration"
                ></Input>
                <Input
                  type="textarea"
                  id={"input_" + ind + "_6"}
                  placeholder="Enter Summary"
                  value={exp?.summary}
                  name= "summary"
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
};

export default ExperienceForm;
