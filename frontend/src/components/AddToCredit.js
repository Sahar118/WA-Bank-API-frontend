
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AddToCredit = () => {
    const [idTo, setIdTo] = useState("");
    const [credit, setCredit] = useState("");
    const [isTransferSuccess, setIsTransferSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                `https://coral-kitten-kit.cyclic.app/api/v1/user/updateCredit/${idTo}/${credit}`
            );
            setIsTransferSuccess(true);
            console.log(response.data); // or update UI based on response
        } catch (error) {
            setIsTransferSuccess("deposit filed");
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h2>Update Credit</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-to">To:</label>
                    <input
                        type="text"
                        id="id-to"
                        value={idTo}
                        onChange={(event) => setIdTo(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cash">Credit:</label>
                    <input
                        type="number"
                        id="credit"
                        value={credit}
                        onChange={(event) => setCredit(event.target.value)}
                    />
                </div>
                <button type="submit">Transfer</button>
            </form>
            {isTransferSuccess && (
                <p style={{ color: "green", fontWeight: "bold" }}>deposit successful!<br></br>
                    <Link to="/">Back to home page</Link>

                </p>
            )}

        </div>
    );
};

export default AddToCredit;