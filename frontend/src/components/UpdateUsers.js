
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';


export default function Update() {
    let navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCatrgory] = useState("");
    const [image, setImage] = useState("");
    const [ID, setID] = useState(null);

    const sendDataToAPI = () => {
        axios.post('https://63f8a6e26978b1f9105e1064.mockapi.io/api/products', {
            ID,
            title,
            price,
            category,
            image
        }).then(() => {
            navigate.push('/read')
        })
        alert('Successfully updated')

    }
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitle(localStorage.getItem('title'))
        setPrice(localStorage.getItem('price'));
        setCatrgory(localStorage.getItem('category'));
        setImage(localStorage.getItem('image'))
    }, [])

    return (
        <div>
            <Form>
                <h1> Update Items :</h1>
                <Form.Field>
                    <label><span>Title:</span></label>
                    <input
                        name="title"
                        value={title}
                        placeholder='Title'
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span>Price:</span></label>
                    <input
                        name="price"
                        value={price}
                        placeholder='Price'
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label><span>Category:</span></label>
                    <input
                        name="category"
                        value={category}
                        placeholder='Category'
                        onChange={(e) => setCatrgory(e.target.value)}
                    />

                </Form.Field>

                <Form.Field>
                    <label><span>Image:</span></label>
                    <input
                        name="image"
                        value={image}
                        placeholder='image'
                        onChange={(e) => setImage(e.target.value)}

                    />


                </Form.Field>
                <Link to='/read'>
                    <Button type='submit' onClick={sendDataToAPI}>Update</Button>
                </Link>
            </Form>
        </div>
    )
}