import React ,{useState} from 'react' //importing useState 

const Registration = () => {

    const [firstName, setFirstName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')


    return (
        <div>
            <h1>Welcome! Please Sign up for our platform</h1>
            <form>
                <div>
                    <label for='fname'></label>
                    <input placeholder='Enter your first name...' id='fname' type={string}></input>
                </div>
            </form>
        </div>
    )
}

export default Registration