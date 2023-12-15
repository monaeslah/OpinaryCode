import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { Theme } from './commons/Assets/themes/theme'

import PollWidget from './widget/pollWidget'

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)
function App () {
  return (
    <ThemeProvider theme={Theme}>
      <React.Suspense fallback={loading}>
        <PollWidget />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default App
