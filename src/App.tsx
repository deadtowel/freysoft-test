import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppContainer } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ border: '2px solid #00' }}>
        <Link to='expenses'>Expenses</Link>
      </div>
    ),
  },
  {
    path: 'expenses',
    element: <div>Expenses</div>,
  },
]);

function App() {
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  );
}

export default App;
