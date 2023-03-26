
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';


export default function Update() {
    let navigate = useNavigate();
    const [id, setID] = useState('')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cash, setCash] = useState('');
    const [credit, setCredit] = useState('');


    const sendDataToAPI = () => {
        axios.post('https://coral-kitten-kit.cyclic.app/api/v1/user', {
            id,
            name,
            email,
            phone,
            cash,
            credit
        }).then(() => {
            navigate('/')
        })
    }
    useEffect(() => {
        setID(localStorage.getItem('_id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone'));
        setCash(localStorage.getItem('cash'))
        setCredit(localStorage.getItem('credit'))

    }, [])

    return (
        <div>
            <Form>
                <h1> Update Items :</h1>
                <Form.Field>
                    <label><span>Full Name:</span></label>
                    <p> {name}</p>
                    <input
                        name="name"
                        value={name}
                        placeholder='name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span>Email:</span></label>
                    <input
                        name="email"
                        value={email}
                        placeholder='email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span>Phone:</span></label>
                    <input
                        name="phone"
                        value={phone}
                        placeholder='Phone'
                        onChange={(e) => setPhone(e.target.value)}
                    />

                </Form.Field>

                <Form.Field>
                    <label><span>Cash:</span></label>
                    <input
                        name="cash"
                        value={cash}
                        placeholder='cash'
                        onChange={(e) => setCash(e.target.value)}
                    />

                </Form.Field>
                <Form.Field>
                    <label><span> Credit:</span></label>
                    <input
                        name="credit"
                        value={credit}
                        placeholder=' Credit'
                        onChange={(e) => setCredit(e.target.value)}
                    />
                </Form.Field>
                <Link to='/read'>
                    <Button type='submit' onClick={sendDataToAPI}>Update</Button>
                </Link>
            </Form>
        </div>
    )
}