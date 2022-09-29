import React from 'react'
import ReactDOM from 'react-dom/client'

import App from "src/components/App/App";

import './components/UI/UI.Kit.Styles/global/global.vars.scss'
import './components/UI/UI.Kit.Styles/global/global.default.scss'
import './assets/fonts/fonts.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)