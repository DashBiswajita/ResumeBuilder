import Input from '../UI/Input';
import {useSelector,useDispatch} from 'react-redux';
import {introActions} from '../store/IntroStore';
let IntroForm = () => {
    const dispatch =useDispatch();
    let intro = useSelector(state => state.intro);
    let changeHandler= (event) => {
      dispatch(introActions.modifyIntro({[event.target.name] : event.target.value}))
    }
    return (
        <div className='formControls' onChange={changeHandler}>
          <h3 className='formControls_header'>Intro</h3>
          <Input value={intro.name} type="text" label="Name" name="name" placeholder="Enter Your Name"  autoComplete="off"/>
          <Input value={intro.role} type="text" label="Role" name="role" placeholder="Enter Your Role"  />
          <Input value={intro.email} type="email" label="Email" name = "email" placeholder="Enter Your Email"  />
          <Input value={intro.phone} type="number" label="Phone" name="phone" placeholder="Enter Your Phone Number"  />
          <Input value={intro.relExp} type="text" label="Relevant Experience" name="relExp" placeholder="Enter Your Relevant Experience"  />
          <Input value={intro.totExp} type="text" label="Total Experience" name="totalExp" placeholder="Enter Your Total Experience"  />
          <Input value = {intro.summary} type="textarea" label="Summary" name="summary" placeholder="Summary"  />
        </div>
    )
}
    
export default IntroForm;