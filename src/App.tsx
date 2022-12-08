import Footer from "./components/Footer"
import Main from "./components/Main"
import Title from "./components/Title"

export default function App() {
  return (
    <div className="flex flex-col justify-center bg-pink-400 px-5">
      <Title />
      <Main />
      <Footer />
    </div>
  )
}
