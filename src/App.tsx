import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AppContainer, Layout } from './components';
import { ExpensesPage, HomePage, CalendarPage, SettingsPage } from './pages';

const routes = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/expenses',
    title: 'Expenses',
  },
  {
    path: '/calendar',
    title: 'Calendar',
  },
  {
    path: '/settings',
    title: 'Settings',
  },
];

function App() {
  const location = useLocation();

  const [headerTitle, setHeaderTitle] = React.useState('Home');

  React.useEffect(() => {
    setHeaderTitle(
      routes.find((route) => route.path === location.pathname)?.title || 'Home',
    );
  }, [location]);

  return (
    <AppContainer>
      <Routes>
        <Route path='/' element={<Layout headerTitle={headerTitle} />}>
          <Route index element={<HomePage />} />
          <Route path='expenses' element={<ExpensesPage />} />
          <Route path='calendar' element={<CalendarPage />} />
          <Route path='settings' element={<SettingsPage />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
