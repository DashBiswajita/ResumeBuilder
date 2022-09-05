import React from "react";
import styles from './FormContainer.module.scss';

const FormContainer = (props) => {
  let submitHandler = (event) => {
     event.preventDefault();
     console.log("after form Submit : ", event)
     console.log("after form Submit : ", event.taget.value)
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