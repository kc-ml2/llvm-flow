import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import './index.scss'
import { initGA } from './utils/ga'

initGA()

const persistor = persistStore(store)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.Fragment>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.Fragment>,
)

reportWebVitals()
