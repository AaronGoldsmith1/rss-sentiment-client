import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'

import FeedList from './FeedList';

test('renders Feed List component', () => {
  render(<Router><FeedList /></Router>);
  expect(screen.getByText('My RSS Feeds')).toBeInTheDocument();
  expect(screen.getByText('Click to Select RSS Feeds')).toBeInTheDocument();
});

test('suggested feeds modal opens', async () => {
  render(<Router><FeedList /></Router>);

  await userEvent.click(screen.getByText('Click to Select RSS Feeds'))
  expect(screen.getByText('Please Select Some RSS Feeds')).toBeInTheDocument();
})