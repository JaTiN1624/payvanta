import { Route, Routes } from 'react-router-dom'
import HealthPage from '@/features/health/HealthPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HealthPage />} />
    </Routes>
  )
}