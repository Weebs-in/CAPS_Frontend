import React, {useEffect, useState} from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

// for our API                       
import axios from 'axios';

const DefaultLayout = () => {
    // to key in function to retrive user state                                                            
    const [userState, setUserState] = useState(null);

    const fetchUserState = async () => {
        try {
            const response = await axios.get('/api/user'); // Replace '/api/user' with the actual API endpoint 
            // Extract user data from API response                                                             
            const userData = response.data;
            // Process the response and extract the userState                                                  
            const userState = userData.userState;
            setUserState(userState);
            // Dispatch an action or update the component state with the obtained userState                    
        } catch (error) {
            // Handle any errors that occurred during the API request                                          
        }
    };

    useEffect(() => {
        fetchUserState();
    }, []);
    // Define the userType based on the userState
    let userType = null;
    if (userState === 'admin') {
        userType = 'admin';
    } else if (userState === 'lecturer') {
        userType = 'lecturer';
    } else if (userState === 'student') {
        userType = 'student';
    }

    return (
    <div>
      <AppSidebar userType={userType}/>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader userType={userType}/>
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
