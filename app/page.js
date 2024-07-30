'use client'

import { useState } from 'react'
import Home from './components/Home'
import { UserContext } from './providers/userContext'

export default function Page() {

  const [user, setUser] = useState({
    
      firstName: 'Devin',
      lastName: 'Chance'
  });


  return (
    <UserContext.Provider value={{user, setUser}}>
        <Home />
    </UserContext.Provider>
  );
}
