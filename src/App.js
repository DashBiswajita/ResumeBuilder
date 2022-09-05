import Styles from "./App.module.scss";
import FormContainer from "./component/FormContainer";
import IntroForm from "./component/IntroForm";
import SocialMediaForm from "./component/SocialMediaForm";
import SkillsForm from "./component/SkillsForm";
import ExperienceForm from "./component/ExperienceForm";
import EducationForm from "./component/EducationForm";
import SideNavBar from "./UI/SideNavBar";
import { useState } from "react";
import AwardsForm from "./component/AwardsForm";
import CertificationsForm from "./component/CertificationsForm";
function App() {
  let [activeMenu, setActiveMenu] = useState("Intro");
  let menuClickHandler = (menu) => {
    setActiveMenu(menu.iconLabel);
  };

  return (
    <div
      className={Styles.wrapper}
      style={{ height: "100vh", overflowY: "scroll" }}
    >
      <SideNavBar onMenuClick={menuClickHandler}></SideNavBar>
      <FormContainer className="h-100 form-container">
        {activeMenu === "Intro" && <IntroForm></IntroForm>}
        {activeMenu === "Social" && <SocialMediaForm></SocialMediaForm>}
        {activeMenu === "Skills" && <SkillsForm></SkillsForm>}
        {activeMenu === "Experience" && <ExperienceForm></ExperienceForm>}
        {activeMenu === "Education" && <EducationForm></EducationForm>}
        {activeMenu === "Awards" && <AwardsForm></AwardsForm>}
        {activeMenu === "Certification" && (
          <CertificationsForm></CertificationsForm>
        )}
      </FormContainer>
    </div>
  );
}

export default App;
