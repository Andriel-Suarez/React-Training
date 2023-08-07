import './App.css';
import ToDo from './components/todo';

function App() {
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          To-do list
        </div>
        <div className='card-body'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Task No.</th>
                <th scope='col'>Task Desc.</th>
                <th scope='col'>Assigned to</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>React.js</td>
                <td>Andriel</td>
              </tr>
              <ToDo/>
            </tbody>
            <button className='btn btn-primary mt-5'>Add To-Do</button>

          </table>
        </div>

      </div>
    </div>
  );
}

export default App;
