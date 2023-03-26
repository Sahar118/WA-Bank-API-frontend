
import './App.css';
import CustomizedTables from './components/GetAllUsers';
import {
  createBrowserRouter,
  RouterProvider
}
  from 'react-router-dom';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import CreateNewUser from './components/CreateNewUser';
import DepositingCash from './components/DepositingCash';
import AddToCredit from './components/AddToCredit';
import WithDrawCash from './components/WithDrawCash';
import TransferFromTo from './components/TransferFromTo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <CustomizedTables /> },
      { path: '/addNewUser', element: <CreateNewUser /> },
      { path: '/depositing', element: <DepositingCash /> },
      { path: '/withDrawCash', element: <WithDrawCash /> },
      { path: '/updateCredit', element: <AddToCredit /> },
      { path: '/transferring', element: <TransferFromTo /> }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}



export default App;
