import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import AuthContext from './hooks/AuthContext';

// import Routes from './routes';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Eduardo' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);

export default App;
