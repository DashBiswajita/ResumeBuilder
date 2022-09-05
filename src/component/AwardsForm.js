import styles from './EducationForm.module.scss';
import { useState, Fragment } from "react";
import Accordion, { AccordionBody, AccordionHeader } from "../UI/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Input from "../UI/Input";
import {awardActions} from '../store/AwardStore';
import { useDispatch, useSelector } from 'react-redux';
let AwardsForm = () => {
  
  const dispatch = useDispatch();
  const awards = useSelector(state => state.awards);
  let addAwardsHandler =() => {
    dispatch(awardActions.addAward());
  }
  let modifyAwardHandler = (index) => {
    return (event) => {
      dispatch(awardActions.modifyAward({index, changeValue : {[event.target.name] : event.target.value}}));
    }
  }
  let deleteAwardHandler = (index) => {
    return (event) => {
      dispatch(awardActions.deleteAward(index));
    }
  }
  return (
    <div className="d-flex flex-column formControls">
      <h3 className='formControls_header'>Awards</h3>
      { awards.length > 0 && <Accordion>
        {awards.map((awr, ind) => (
            <Fragment key={ind}>
              <AccordionHeader
                title={awr?.awardName}
                id={ind}
              ></AccordionHeader>
              <AccordionBody id={ind}>
                 <div onChange={modifyAwardHandler(ind)}>

                 <Input
                  type="text"
                  id={"input_" + ind + "_1"}
                  placeholder="Enter the Award Received"
                  value={awr?.awardName}
                  name = "awardName"
                />
                <Input
                  type="text"
                  id={"input_" + ind + "_1"}
                  placeholder="Valid Till"
                  value={awr?.validTill}
                  name = "validTill"
                ></Input>
                <Input
                  type="textarea"
                  id={"input_" + ind + "_2"}
                  placeholder="Summaery"
                  value={awr?.summary}
                  name = "summary"
                ></Input>
                 </div>
              </AccordionBody>
            </Fragment>
          ))}
      </Accordion>}
      <FontAwesomeIcon
        icon={faCirclePlus}
        color="white"
        onClick={addAwardsHandler}
        className={styles["add"] + " p-4 m-2"}
        style={{height : "1.5rem"}}
      ></FontAwesomeIcon>
    </div>
  );
}

export default AwardsForm;