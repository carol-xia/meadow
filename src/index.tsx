import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import './index.css'
import App from './App.tsx'

import { Provider as ReduxProvider} from 'react-redux';
import { store } from './reducers/expense/store.ts';

Amplify.configure(outputs);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </StrictMode>,
)
