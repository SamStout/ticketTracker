import './App.css';
import team from './data/team';
import TicketTrackers from './Components/TicketTrackers';




function App() {

const teamArr = team.map((person) => {
  return <TicketTrackers id = {person}/>})

  return (
    <div className="App">
      <header className="App-header">
      <h1>Ticket Trackers</h1>
        <section className='ticketTrackers'>
          {teamArr}
        </section>
  
      </header>
    </div>
  );
}

export default App;

