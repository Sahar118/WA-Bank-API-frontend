import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const CreateNewUser = () => {
    let navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cash, setCash] = useState('');
    const [credit, setCredit] = useState('');


    const sendDataToAPI = () => {
        axios.post('https://coral-kitten-kit.cyclic.app/api/v1/user', {
            name,
            email,
            phone,
            cash,
            credit
        }).then(() => {
            navigate('/')
        })
    }
    return (
        <div className='add-new-product'>
            <Form>
                <Form.Field>
                    <label><span>  Full Name:</span></label>
                    <input
                        placeholder='fullName'
                        name='name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> Email:</span></label>
                    <input
                        placeholder='Email'
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> Phone Number:</span></label>
                    <input
                        placeholder=' Phone Number'
                        name='phone'
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> Cash:</span></label>
                    <input
                        placeholder='cash'
                        name='cash'
                        type='number'
                        onChange={(e) => setCash(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span> credit:</span></label>
                    <input
                        placeholder='credit'
                        name='credit'
                        type='number'
                        onChange={(e) => setCredit(e.target.value)}
                    />
                </Form.Field>
                <Button color='brown' type='submit' onClick={sendDataToAPI}>Add User</Button>
            </Form>
        </div>
    )
}


export default CreateNewUser


