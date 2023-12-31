import { useState } from 'react';
import Button from '../button/button.component'
import  FormInput  from '../form-input/form-input.component'

import './sign-in-form.styles.scss'
import { signInWithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utills';

const defaultFormFields = {
    email:'',
    password:'',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password} = formFields
    const resetFormFeilds = () => {
        setFormFields(defaultFormFields)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            await signInAuthUserWithEmailAndPassword(email,password)
            resetFormFeilds()
        }catch(error){
            switch(error.code){
                case 'auth/invalid-credential':
                    alert('Incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email')
                    break;
                default:
                    console.log(error)

            }
        }
    }
    
    const handleChange = (event) =>{
        const {name ,value} = event.target;
        setFormFields({...formFields, [name]:value})
    }

    const signInWithGoogle = async () =>{
       await signInWithGooglePopup();
        
    };

    return(
        <div className = 'sign-up-container'>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>          
                
                <FormInput label="Email" type = 'email' required onChange={handleChange} name='email' value= {email}/>
                <FormInput label="Password" type = 'password' required onChange={handleChange} name='password' value= {password}/>
                <div className='buttons-container'>
                    <Button type="submit">Sign In</Button>
                    <Button type = "button" buttonType='google' onClick = {signInWithGoogle}>Google SignIn</Button>
                </div>
                
            </form>
        </div>)
}

export default SignInForm;