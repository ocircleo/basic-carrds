import { useEffect, useState } from "react"
import Card from "./component/Card";

function App() {
  const [card, setCard] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(res => res.json())
      .then(data => { setCard(data.results[0]); setLoading(false) })
      .catch(error => { console.log(error); alert(error.message); })
  }, [])
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-800">
      {
        loading ? <p className="text-xl text-gray-300 font-semibold">Loading...</p> : <Card data={card}></Card>
      }
    </div>
  )
}

export default App
