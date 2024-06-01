import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'; // Import Provider
import { Store } from './appStore/Store.js'; // Import your store
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}> {/* Wrap App with Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
)
