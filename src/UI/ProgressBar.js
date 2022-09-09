import Styles from './ProgressBar.module.scss';

import React from 'react';

let ProgressBar = (props) => {
   return (
    <div className="progress" style={props.style}>
    <div className="progress-bar" role="progressbar" aria-valuenow={props.value}
    aria-valuemin={props.min} aria-valuemax={props.max} style={{width : props.value + '%'}}>
    </div>
  </div>
   )
}

export default ProgressBar;