import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react'
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function CustomizedTables() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const allAccounts = await axios.get(`https://coral-kitten-kit.cyclic.app/api/v1/user`);
                console.log(allAccounts.data);
                setApiData(allAccounts.data)
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        }
        fetchUsers()
    }, [])
    const deleteUser = async (id) => {
        try {
            const response = await axios.delete(
                `https://coral-kitten-kit.cyclic.app/api/v1/user/${id}`
            );
            setApiData((prevAccounts) =>
                prevAccounts.filter((user) => user._id !== id)
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="left">Full Name</StyledTableCell>
                        <StyledTableCell align="left">Phone Number</StyledTableCell>
                        <StyledTableCell align="left">Email</StyledTableCell>
                        <StyledTableCell align="left">Total Cash</StyledTableCell>
                        <StyledTableCell align="left">Total Credit</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ minWidth: 700 }}>
                    {apiData.map((row) => (
                        <StyledTableRow key={row._id}>
                            {/* <StyledTableCell component="th" scope="row">
                                {row.id}
                            </StyledTableCell> */}
                            <StyledTableCell align="left">{row._id}</StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="left">{row.phone}</StyledTableCell>
                            <StyledTableCell align="left">{row.email}</StyledTableCell>
                            <StyledTableCell align="left">{row.cash}</StyledTableCell>
                            <StyledTableCell align="left">{row.credit}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Stack spacing={1}>
                                    <Button onClick={() => deleteUser(row._id)}>Delete</Button>
                                    <Button>Deposit</Button>
                                    <Button>Add Credit</Button>

                                </Stack>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


