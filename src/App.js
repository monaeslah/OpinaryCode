import React, { useState } from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { Theme } from './commons/Assets/themes/theme'

import PollWidget from './Components/widget/pollWidget'
import Layout from 'layout/Layout'
import questionData from './questions.json'
import Home from './Components/Home'
import Main from './Components/widgetCard'
// import questionData2 from './questionTwo.json'
// import Counting from 'container/counting'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

function App () {
  const [widget1Open, setWidget1Open] = useState(false)
  const [widget2Open, setWidget2Open] = useState(false)

  const toggleWidget1 = () => {
    setWidget1Open(!widget1Open)
    if (widget2Open) {
      setWidget2Open(false)
    }
  }

  const toggleWidget2 = () => {
    setWidget2Open(!widget2Open)
    console.log(widget2Open)
    if (widget1Open) {
      setWidget1Open(false)
    }
  }

  return (
    <ThemeProvider theme={Theme}>
      <React.Suspense fallback={loading}>
        <Layout>
          <div onClick={toggleWidget1}>
            <h3>Widget 1</h3>
          </div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route
                path='/widget'
                element={
                  <PollWidget questions={questionData} widgetId='widget1' />
                }
              />
              <Route
                path='/sec-widget'
                element={
                  <PollWidget questions={questionData} widgetId='widget2' />
                }
              />
            </Routes>
          </BrowserRouter>

          {/* <Counting />
          
          
          */}
        </Layout>
      </React.Suspense>
    </ThemeProvider>
  )
}

export default App
