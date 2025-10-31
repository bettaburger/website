import './page.css'
import './styles/card.css'
import {Header} from './components/header'


export default function Home() {
  return (
    <div className="page">
      <Header />
      <container className="container">
        <card-container className="card-container">
          <card className="card">
             <p>hello</p>
          </card>
        </card-container>
      </container>
      <a href="https://www.flaticon.com/free-icons/pet" title="pet icons">Cat cursor by Sergei Kokota - Flaticon</a>
    </div>
  )
}
