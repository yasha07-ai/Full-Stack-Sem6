import { createContext, useContext, useMemo, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light')

  const resume = {
    name: 'Yasha Tasaneem',
    objective:
      'Ambitious Computer Science student with proven problem-solving skills and practical software development experience. Looking to secure an Associate Software Engineer role where I can apply data structures, algorithms, and engineering principles to build scalable, high-performance consumer solutions.',
    role: 'Frontend Developer'
  }

  const value = useMemo(
    () => ({
      resume,
      theme,
      toggleTheme: () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }),
    [resume, theme]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAppContext must be used within AppProvider')
  }

  return context
}
