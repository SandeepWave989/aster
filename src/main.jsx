import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import AboutDmHealthCare from './Components/About/AboutDmHealthCare.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import AboutAsterClinic from './Components/About/AboutAsterClinic.jsx';
import VisionValuesMission from './Components/About/VisionValuesMission.jsx';
import Appointments from './Components/OnlineAppointments/Appointments.jsx';
import Specialities from './Components/Specialities/Specialities.jsx';
import Cardiology from './Components/Specialities/Cardiology.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutDmHealthCare />,
      },
      {
        path: "/about-aster-clinic",
        element: <AboutAsterClinic />,
      },
      {
        path: "/about-vision",
        element: <VisionValuesMission />,
      },
      {
        path: "/teleconsultation",
        element: <Appointments />,
      },
      {
        path: "/our-specialities",
        element: <Specialities/>,
      },
      {
        path: "/specialities/cardiology",
        element: <Cardiology />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <AboutDmHealthCare/>,
  // },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
