import './App.css'

function App() {
  return (
    <>
      <h1>Mi primera variable de entorno: {import.meta.env.VITE_SOME_KEY}</h1>
      <h1>Mi segunda variable de entorno: {import.meta.env.VITE_DB_PASSWORD}</h1>
      <h1>Mi tercera variable de entorno: {import.meta.env.VITE_NEW_KEY2}</h1>
    </>
  )
}

export default App
