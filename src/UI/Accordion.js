let AccordionHeader = (props) => {
  return (
    <>
      <h2 className="accordion-header" id={props.id}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#target_" + props.id}
          aria-expanded="true"
          aria-controls= {"#target_" + props.id}
        >
          {props.title}
        </button>
      </h2>
    </>
  );
};

let AccordionBody = (props) => {
    return (
        <div
          id= {"target_" + props.id}
          className="accordion-collapse collapse show"
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
