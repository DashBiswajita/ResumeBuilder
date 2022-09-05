import { useRef,useImperativeHandle, forwardRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Input.module.scss'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

let Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [value,setValue] = useState(props.value || '');

  let iconClickHandler = (event) => {
    if(props.iconClick){
      props.iconClick(event);
      return;
    }
    event.target.parentElement.parentElement.parentElement.remove();
  }
  let focus = (event) => {
    inputRef.current.focus();
  };
  let changeHandler = (event) => {
    setValue(event.target.value);
  }
  let removeElement = (ele) => {
    ele.remove();
  }
  useImperativeHandle(
    ref,
    () => ({
      focus,
      removeElement
    }),
    []
  );
  return (
   <div className={styles.inputContainer}>
      <label htmlFor={props.name} className={styles.inputContainer_label}>{props.label}</label>
      <div className={styles["inputContainer-child"]}>
          {props.type !== 'textarea' && <input {...props} value={value} ref={inputRef} className={styles["inputContainer-child_input"]} onChange={changeHandler}></input>}
          {props.type === 'textarea' && <textarea {...props} ref={inputRef} className={styles["inputContainer-child_input"]}></textarea>}
          {props.isremovable && <FontAwesomeIcon icon={faTrashCan} color='white' className={styles["inputContainer-child_icon"]} onClick={iconClickHandler}/>}
      </div>
      </div> 
  );
});

export default Input;
