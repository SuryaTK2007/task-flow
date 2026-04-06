import './App.css'
import Button from './components/Button.jsx'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-6xl font-bold text-blue-500">Task</h1>
        <Button />
      </div>
    </div>
  )
}

export default App
