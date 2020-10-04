import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';
import ToastsContainer from './components/ToastsContainer';

// import Routes from './routes';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastsContainer />
    <GlobalStyle />
  </>
);

export default App;
