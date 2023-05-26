import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppContainer } from './components';
import { Layout } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout headerTitle='Home'>
        <Link to='expenses'>Expenses</Link>
      </Layout>
    ),
  },
  {
    path: 'expenses',
    element: (
      <Layout headerTitle='Expenses'>
        <div>Expenses</div>
      </Layout>
    ),
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
