import styles from './SocialMediaForm.module.scss';
import Input from '../UI/Input'
import React, {useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {socialActions} from '../store/SocialStore';
let SocialMediaForm = () => {
    let social = useSelector(state => state.social);
    const dispatch = useDispatch();
    let changeHandler = (event) => {
        dispatch(socialActions.modifysocial({[event.target.name] : event.target.value}));
    }
    return (
        <div className='formControls' onChange={changeHandler}>
        <h3 className='formControls_header'>Social</h3>
        <Input value={social.linkedIn} type="text" label="Linkedin" name="linkedIn" />
        <Input value={social.gitHub} type="text" label="Github" name="gitHub"  />
        <Input value={social.hackerRank} type="text" label="Hackerrank" name = "hackerRank" />
        <Input value={social.hackerEarth} type="text" label="HackerEarth" name="hackerEarth"/>
        </div>
    )
}

export default SocialMediaForm;