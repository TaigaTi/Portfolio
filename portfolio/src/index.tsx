import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Box } from '@mui/material';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Projects from './pages/Projects';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/projects",
    element: <Projects></Projects>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Box className="bg-primary-black" sx={{ height: '100vh' }}>
      <RouterProvider router={router} />
      {/* <App /> */}
    </Box>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
