import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';

import { useAppProvider, AppContext } from './hooks/useApp';
import Layout from './components/Layout';
import Preview from "./components/Preview";
import Editor from "./components/Editor";

function App() {
  return (
    <AppWrapper>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">React Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Layout>
        <AppContext.Consumer>
          {({ values }) => (
            <Preview focusable {...values} />
          )}
        </AppContext.Consumer>
        <Editor focusable />
      </Layout>
    </AppWrapper>
  );
}

export const AppWrapper = ({ children }) => {
  const context = useAppProvider();
  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

export default App;
