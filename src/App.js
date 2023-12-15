import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { Theme } from './commons/Assets/themes/theme'

import PollWidget from './widget/pollWidget'
import Layout from 'layout/Layout'
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
          <PollWidget />
        </Layout>
      </React.Suspense>
    </ThemeProvider>
  )
}

export default App
