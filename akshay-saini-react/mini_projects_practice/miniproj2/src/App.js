import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import About from './components/About';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/about',
    element: <About />
  }
])

function App() {



  return (
    <div className="App">
       <Header />
       <Body />
       <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)



export default App;


