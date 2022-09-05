import styles from './CertificationsForm.module.scss';
import { Fragment } from "react";
import Accordion, { AccordionBody, AccordionHeader } from "../UI/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Input from "../UI/Input";
import { useDispatch, useSelector } from 'react-redux';
import {certificationActions} from '../store/CertificationStore';
let CertificationsForm = () => {
  
  const dispatch = useDispatch();
  const certifications = useSelector(state => state.certifications);
  let addCertificationHandler =() => {
      dispatch(certificationActions.addCertification())
  }
  let modifyCertificationHandler = (index) => {
    return (event) => {
      dispatch(certificationActions.modifyCertification({index, changeValue : {[event.target.name] : event.target.value}}))
    }
    }
    let deleteCertificationHandler = (index) => {
      return (event) => {
        dispatch(certificationActions.deleteCertification(index));
      }
    }
  return (
    <div className="d-flex flex-column formControls">
      <h3 className='formControls_header'>Certification</h3> 
      {certifications.length > 0 && <Accordion>
        {certifications.map((cert, ind) => (
            <Fragment key={ind}>
              <AccordionHeader
                title={cert?.certificationName}
                id={ind}
              ></AccordionHeader>
              <AccordionBody id={ind}>
                <div onChange={modifyCertificationHandler(ind)}>
                <Input
                  type="text"
                  id={"input_" + ind + "_1"}
                  placeholder="Enter the Award Received"
                  value={cert?.certificationName}
                  name = "certificationName"
                />
                <Input
                  type="text"
                  id={"input_" + ind + "_1"}
                  placeholder="Valid Till"
                  value={cert?.validTill}
                  name = "validTill"
                ></Input>
                <Input
                  type="textarea"
                  id={"input_" + ind + "_2"}
                  placeholder="Summaery"
                  value={cert?.summary}
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
        onClick={addCertificationHandler}
        className={styles["add"] + " p-4 m-2"}
        style={{height : "1.5rem"}}
      ></FontAwesomeIcon>
    </div>
  );
}

export default CertificationsForm;