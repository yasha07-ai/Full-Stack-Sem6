import './App.css'
import {lazy, Suspense} from 'react'
const Dashboard = lazy(() => import('./components/dashboard'))

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
    </>
  )
}
export default App