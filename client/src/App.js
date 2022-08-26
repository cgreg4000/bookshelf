import './App.css';
import AllBooks from './components/AllBooks';
import BookForm from './components/BookForm';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import BookDetails from './components/BookDetails';
import EditBook from './components/EditBook';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='main-bg mb-5'>
          <div className='d-flex justify-content-between align-items-center main-bg  mx-auto p-4'>
            <Link className="text-white lead text-decoration-none nav-elements" to="/">Home</Link>
            <h1 className='main-bg text-white display-4 nav-elements'>Bookshelf</h1>
            <Link className="text-white lead text-decoration-none nav-elements" to="/books/new">Add Book</Link>
          </div>
        </div>

        <div className='container'>
          <Switch>
            <Route exact path="/">
              <AllBooks></AllBooks>
            </Route>
            <Route exact path="/books/new">
              <BookForm></BookForm>
            </Route>
            <Route exact path="/books/:_id">
              <BookDetails></BookDetails>
            </Route>
            <Route exact path="/books/:_id/edit">
              <EditBook></EditBook>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
