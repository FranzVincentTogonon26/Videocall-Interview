import React from 'react';
import {
   SignedIn,
   SignedOut,
   SignInButton,
   SignOutButton,
   SignUpButton,
   UserButton,
} from '@clerk/clerk-react';

const App = () => {
   return (
      <header>
         <SignedOut>
            <SignInButton mode="modal" />
            <SignUpButton />
         </SignedOut>

         <UserButton />
      </header>
   );
};

export default App;
