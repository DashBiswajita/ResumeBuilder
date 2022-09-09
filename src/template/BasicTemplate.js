import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux';
import Styles from  './BasicTemplate.module.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';
import ProgressBar from '../UI/ProgressBar'
const BasicTemplate = () => {
   const intro = useSelector(state => state.intro);
   const social = useSelector(state => state.social);
   const skills = useSelector(state => state.skills);
   const experiences = useSelector(state => state.experiences);
   console.log("experiences : ", experiences)
   const educations = useSelector(state => state.educations);
   const awards = useSelector(state => state.awards);
   const certifications = useSelector(state => state.certifications);
   return (
    <div className={Styles["template-basic"]} size="A4">
    <div className={Styles["template-basic_sideBar"]}>
    <header className={Styles["template-basic_sideBar_header"]}>
                 <h4 className='h4'>{intro?.name}</h4>
                 <h5 className='h5'>{intro?.role}</h5>
             </header>
             <div className={Styles["template-basic_sideBar_personalInfo"]}>
                 <header className={Styles["sideBarHeader"]}>Personal Info</header>
                 <div className='d-flex flex-column m-1'><div className={Styles["sideBarHeader-sub"]}>Email</div><div>{intro?.email}</div></div>
                 <div className='d-flex flex-column m-1'><div className={Styles["sideBarHeader-sub"]}>Phone</div><div>{intro?.phone}</div></div>
                 <div className='d-flex flex-row justify-content-evenly'>
                     <a href={social.linkedIn}  target="_blank" style={{fontFamily :'FontAwesome'}}><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                     <a href={social.gitHub} target="_blank"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                     <a href={social.hackerRank} target="_blank"><FontAwesomeIcon icon={faHackerrank}></FontAwesomeIcon></a>
                 </div>
             </div>
             <div className={Styles["template-basic_sideBar_personalInfo"]}>
                {Object.keys(skills).map((keyValue,index) => 
                    <div key={keyValue} className="d-flex flex-column g-1 m-1 mb-2">
                    <header className={Styles["sideBarHeader"]}>{keyValue}</header>
                    {skills[keyValue].length > 0 && skills[keyValue].map((skill,index) => 
                        <div key={skill + "_" + index} className="d-flex flex-column flex-wrap">
                            <div className={Styles["sideBarHeader-sub"]}>{skill.skillName}</div>
                            <ProgressBar value={skill.value} style={{height : ".5rem"}}></ProgressBar>
                        </div>
                    )}
                  </div>
                )}
             </div>
             <div className={Styles.awards}>
            <header className={Styles["sideBarHeader"]}>Awards</header>
            {awards.length > 0 && awards.map((awrd,ind) => <div key={"awrd"+ind} className="d-flex flex-row align-items-baseline mb-2">
                <div className='me-3'><span>{awrd.validTill }</span></div>
                <div>
                    <div className='bolder'>{awrd.awardName}</div>
                    {/* <div className={Styles.summary}>{awrd.summary}</div> */}
                </div>
            </div>)}
        </div>
        <div className={Styles.certifications}>
            <header className={Styles["sideBarHeader"]}>Certifications</header>
            {certifications.length > 0 && certifications.map((cert,ind) => <div key={"edu"+ind} className="d-flex flex-row align-items-baseline mb-2">
                <div className='me-3'>{cert.validTill}</div>
                <div>
                    <div className='bolder'>{cert.certificationName}</div>
                    {/* <div className={Styles.summary}>{cert.summary}</div> */}
                </div>
            </div>)}
        </div>
    </div>
    <div className={Styles["template-basic_main"]}>
        <div className={Styles.summary}>
             <section><p>{intro.summary}</p></section>
        </div>
        <div className={Styles.experience}>
            <header className={Styles["main-header"]}>Experiences</header>
            {experiences.length > 0 && experiences.map((exp,ind) => <div key={"exp_"+ind} className="d-flex flex-row align-items-baseline mb-2">
                <div className='me-3'>{exp.startMonth + " - " + exp.endMonth}</div>
                <div>
                    <div className='bolder'>{exp.companyName}</div>
                    <div className='bold'>{exp.jobTitle}</div>
                    <div className={Styles.summary}>{exp.summary}</div>
                </div>
            </div>)}
        </div>
        <div className={Styles.education}>
            <header className={Styles["main-header"]}>Education</header>
            {educations.length > 0 && educations.map((edu,ind) => <div key={"edu"+ind} className="d-flex flex-row align-items-baseline mb-2">
                <div className='me-3'>{edu.startTime + " - " + edu.endTime}</div>
                <div>
                    <div className='bolder'>{edu.collegeName}</div>
                    <div className='bold'>{edu.degree + ", " + edu.stream}</div>
                    {/* <div className={Styles.summary}></div></div> */}
                    <div className={Styles.summary}>{edu.marksObtained}</div>
                </div>
            </div>)}
        </div>
    </div>
</div>
   )
}

export default BasicTemplate;