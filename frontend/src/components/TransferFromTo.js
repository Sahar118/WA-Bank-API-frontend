import React, { useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const TransferFromTo = () => {
    const [cash, setCash] = useState("");
    const [isTransferSuccess, setIsTransferSuccess] = useState(false);

    const [TransferFrom, setTransferFrom] = useState('');
    const [TransferTo, setTransferTo] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                `https://coral-kitten-kit.cyclic.app/api/v1/user/transfer/${TransferFrom}/${TransferTo}/${cash}`
            );
            setIsTransferSuccess(true);
            console.log(response.data);
        } catch (error) {
            setIsTransferSuccess("Withdraw Cash Failed!");
            console.error(`Error ${error}`);
        }
    };
    return (
        <div>
            <h2>Withdraw  Cash</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-to">Transfer From: </label>
                    <input
                        type="text"
                        id="id-to"
                        value={TransferFrom}
                        onChange={(event) => setTransferFrom(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="id-to">Transfer To:</label>
                    <input
                        type="text"
                        id="id-to"
                        value={TransferTo}
                        onChange={(event) => setTransferTo(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cash"> Withdraw Cash:</label>
                    <input
                        type="number"
                        id="cash"
                        value={cash}
                        onChange={(event) => setCash(event.target.value)}
                    />
                </div>
                <Button type="submit">Transfer</Button>

                {isTransferSuccess && (
                    <p>withdraw successful! <br></br>
                        <Link to="/">Back to home page</Link>
                    </p>
                )}
            </form>


        </div>
    );
};

export default TransferFromTo