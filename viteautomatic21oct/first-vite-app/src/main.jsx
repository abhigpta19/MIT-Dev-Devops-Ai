// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx"

// function App({text, color, borderColor})
// {
//   return (
//     <h1 style={{color: color, border: `2px solid ${borderColor}`}}>{text}</h1>
//   );
// }

createRoot(document.getElementById('root')).render(
    <App/>
)
