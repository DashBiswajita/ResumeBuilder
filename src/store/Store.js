import {configureStore} from '@reduxjs/toolkit';
import IntroReducer from './IntroStore';
import SkillReducer from './SkillStore';
import SocialReducer from './SocialStore';
import EducationReducer from './EducationStore';
import ExperienceReducer from './ExperienceStore';
import AwardsReducer from './AwardStore';
import CertificationReducer from './CertificationStore';
const Store = configureStore({
    reducer : {
        intro : IntroReducer,
        skills : SkillReducer,
        social : SocialReducer,
        educations : EducationReducer,
        experiences : ExperienceReducer,
        awards : AwardsReducer,
        certifications : CertificationReducer
    }
})

export default Store;