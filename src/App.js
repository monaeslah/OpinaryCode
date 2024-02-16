import React, { useState } from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { Theme } from './commons/Assets/themes/theme'

import PollWidget from './Components/widget/pollWidget'
import Layout from 'layout/Layout'
import questionData from './questions.json'
import Home from './Components/Home'
import Main from './Components/widgetCard'
import questionData2 from './questionTwo.json'
// import Counting from 'container/counting'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

function App () {
  return (
    <ThemeProvider theme={Theme}>
      <React.Suspense fallback={loading}>
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route
                path='/widget'
                element={
                  <PollWidget
                    initialQuestions={questionData}
                    widgetId='widget1'
                  />
                }
              />
              <Route
                path='/sec-widget'
                element={
                  <PollWidget
                    initialQuestions={questionData2}
                    widgetId='widget2'
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </Layout>
      </React.Suspense>
    </ThemeProvider>
  )
}

export default App
