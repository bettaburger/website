import './page.css'
import './styles/card.css'

export default function Home() {
  return (
    <div className="page">
      <header className="header">
        <h1>Stephanie Ha</h1>
        <h2>Student at University of Massachusetts Boston</h2>
      </header>

      <container className="container">
        <card-container className="card-container">
          <card className="card">
             <p>hello</p>
          </card>
        </card-container>
      </container>
    </div>
  );
}
