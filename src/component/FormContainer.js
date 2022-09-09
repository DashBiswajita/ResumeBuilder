import React from "react";
import styles from './FormContainer.module.scss';

const FormContainer = (props) => {
  let submitHandler = (event) => {
     event.preventDefault();
     const printEle = document.getElementById('template');
      var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 3 , useCORS : true},
        jsPDF:        { unit: 'pt', format: 'a3', orientation: 'landscape' },
        enableLinks : true
      };
      window.html2pdf().set(opt).from(printEle).save();

  }
  return (
    <form onSubmit={submitHandler} className={styles.formContainer}>
        <div style={{overflowY : "scroll"}}>
            {props.children}
        </div>
            <button type="submit" className="btn btn-primary align-self-end m-4">Build Resume</button>
    </form>
  )
}

export default FormContainer;