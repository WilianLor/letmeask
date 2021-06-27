import Routes from './routes'

import AuthContextProvider from './contexts/AuthContext'

const App= () => {

  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;
