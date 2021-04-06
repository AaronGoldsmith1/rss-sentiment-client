import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'

import App from './App';
import NavBar from './components/NavBar';


test('renders App component', () => {
  render(<Router><App /></Router>);
  expect(screen.getByText('RSS-Sentiment')).toBeInTheDocument();
});

test('renders NavBar component', () => {
  render(<Router><NavBar /></Router>);
  expect(screen.getByText('Home')).toBeInTheDocument();
});


