import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
let AccordionHeader = (props) => {
  let deleteAccordianItem = (event) => {
      props.onDeleteIconClick(event);
  }
  useEffect((
    )=>{
      let showEles = document.getElementsByClassName('accordion-collapse collapse');
      let removeShowEle = document.getElementsByClassName('accordion-collapse collapse show')[0];
      removeShowEle && removeShowEle.classList.remove('show');
      removeShowEle && removeShowEle.id.split("target_")[1] && document.getElementById(removeShowEle.id.split("target_")[1]).firstChild.classList.add('collapsed')
      let showEle = showEles[showEles.length - 1];
      showEle && showEle.id.split("target_")[1] && document.getElementById(showEle.id.split("target_")[1]).firstChild.classList.remove('collapsed')
      showEle.classList.add('show');
    },[])
  
  return (
    <>
      <h2 className="accordion-header collapsed" id={props.id}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#target_" + props.id}
          aria-expanded="true"
          aria-controls= {"#target_" + props.id}
        >
          {props.title}
          <FontAwesomeIcon icon={faTrash} onClick={deleteAccordianItem} className="mx-2"></FontAwesomeIcon>
        </button>
      </h2>
    </>
  );
};

let AccordionBody = (props) => {
    return (
        <div
          id= {"target_" + props.id}
          className="accordion-collapse collapse"
          aria-labelledby={"heading_" + props.id}
          data-bs-parent="#accordion"
        >
          <div className="accordion-body">{props.children}</div>
        </div>
    )
};

let Accordion = (props) => {
    
  return (
    <div className="accordion" id="accordion">   
      <div className="accordion-item"> 
         {props.children}     
      </div>
    </div>
  );
};
export {
    AccordionBody ,
    AccordionHeader 
} 
export default Accordion;
