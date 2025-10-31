import './page.css'
import {Header} from './components/header'
import {Card} from './components/card'



export default function Home() {
  return (
    <div className="page">
      <Header />
      <Card/>
      <a href="https://www.flaticon.com/free-icons/pet" title="pet icons">Cat cursor by Sergei Kokota - Flaticon</a>
    </div>
  )
}
