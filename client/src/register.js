import { useRef, useState, useEffect } from 'react'; 

const Register = () => {
    const userRef = useRef(); 
    const errRef = useRef(); 

    const [user, setUser] = useState(''); 
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false); 

    const [pwd, setPwd] = useState(false); 
    const [validpwd, setValidsetPwd] = useState(false); 
    const [pwdFocus, setPwdFocus] = useState(false); 

    const [matchPwd, setMatchPwd] = useState(false); 
    const [validMatch, setValidMatch] = useState(false); 
    const [matchFocus, setMatchFocus] = useState(false); 

    const [errMsg, setErrMsg] = useState(''); 
    const [success, setSuccess] = useState(false); 

    return (
        <div> 

        </div>
    )
}

export default Register 