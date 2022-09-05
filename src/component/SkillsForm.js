import styles from './SkillsForm.module.scss';
import Input from '../UI/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {skillActions} from '../store/SkillStore';
let SkillsForm = () => {
    let skills = useSelector(state => state.skills);
    let dispatch = useDispatch();
    let iconClickHandler = (skill,index) => {
        return (event) =>{
            dispatch(skillActions.deleteSkills({skill,index}))
        }
    }
    
    let addSkillsHandler = (header) => {
        return (event) => {
            event.preventDefault();
            dispatch(skillActions.addSkills(header));
        }
    }
    let modifySkillsHandler = (header,index) => {
        return (event) => {
            event.preventDefault();
            dispatch(skillActions.modifySkills(
                {
                    skill : header,
                    index ,
                    changeValue : {[event.target.name] : event.target.value}
                }
              )
            );
        }
    }

    return (
        <div className='formControls'>
          {skills && Object.keys(skills).map((skill) => 
              <div key={skill} className={styles.skill}>
                 <h3 className='formControls_header'>{skill}</h3>
                 {skills[skill] && skills[skill].map((val,index) =><div key={skill + "_"+index} onChange={modifySkillsHandler(skill,index)}><Input name="skillName" isremovable="true" value={val.skillName} iconClick={iconClickHandler(skill,index)}></Input><Input type="range" min="0" max="10" value={val.value}></Input></div>
                 )}
                 <FontAwesomeIcon icon={faCirclePlus} color="white" onClick={addSkillsHandler(skill)} className={styles["skill-add"]}></FontAwesomeIcon>
              </div>
          )}
          </div>
    )
}

export default SkillsForm;