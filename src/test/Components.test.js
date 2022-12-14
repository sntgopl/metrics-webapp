import { render } from '@testing-library/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../pages/home';
import Stock from '../components/stocks';
import Details from '../components/details';
import '@testing-library/jest-dom';

describe('Testing Home page', () => {
  it('Should match the snapshot', () => {
    const home = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Home />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(home).toMatchSnapshot();
  });
});

describe('Testing Contacts page', () => {
  it('Should match the companies snap', () => {
    const contact = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Stock />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(contact).toMatchSnapshot();
  });
});

describe('Testing Details page', () => {
  it('Should match the details snap', () => {
    const details = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Details />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(details).toMatchSnapshot();
  });
});
