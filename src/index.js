import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { createGlobalStyle } from 'styled-components'
import store from './store'

import registerServiceWorker from './registerServiceWorker'

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700");
  
  body {
    margin: 0;
    padding: 0;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 400;

    #root {
      height: 100vh;
    }
  }
`
function fancyLog() {
  console.log('%c Rendered with 👉 👉 👇 ', 'background: purple; color: #FFF')
  console.log(store.getState())
}

const render = () => {
  fancyLog()
  return ReactDOM.render(
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>,
    document.getElementById('root')
  )
}

render()

store.subscribe(render)

registerServiceWorker()
