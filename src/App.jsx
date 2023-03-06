import './index.css'
import Result from "./components/result"
import Summary from "./components/summary"

function App() {
  return (
    <div className="App font-hankenGrotesk grid items-center justify-items-center h-screen min-h-[800px]">
      <div className="contentWrapper lg:w-[800px] md:w-[90%] w-full md:h-[500px] h-full bg-white md:shadow-2xl rounded-3xl grid md:grid-cols-2 grid-rows-5">
        <Result />
        <Summary />
      </div>
    </div>
  )
}

export default App
