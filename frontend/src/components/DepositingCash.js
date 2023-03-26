
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";


const DepositingCash = () => {

    const [cash, setCash] = useState("");
    const [isTransferSuccess, setIsTransferSuccess] = useState(false);
    const [addCashTo, setAddCashTo] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(
                `https://coral-kitten-kit.cyclic.app/api/v1/user/deposite/${addCashTo}/${cash}`
            );
            setIsTransferSuccess(true);
            console.log(response.data);
        } catch (error) {
            setIsTransferSuccess("Deposit Failed!");
            console.error(`Error ${error}`);
        }
    };
    return (
        <div>
            <h2>Deposit Cash</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-to">Please Enter The ID:</label>
                    <input
                        type="text"
                        id="id-to"
                        value={addCashTo}
                        onChange={(event) => setAddCashTo(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="cash">Cash:</label>
                    <input
                        type="number"
                        id="cash"
                        value={cash}
                        onChange={(event) => setCash(event.target.value)}
                    />
                </div>
                <Button type="submit">Transfer</Button>

                {isTransferSuccess && (
                    <p>Deposit successful! <br></br>
                        <Link to="/">Back to home page</Link>
                    </p>
                )}
            </form>


        </div>
    );
};

export default DepositingCash;