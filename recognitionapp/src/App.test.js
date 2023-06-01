import '@testing-library/jest-dom';

import { render, screen, userEvent, fireEvent} from '@testing-library/react';
import App from './App';

import { MainPage } from './App.js';
import Login from './App';




test('should login the user with correct details', () => {
  render(<Login />);

  // Enter correct email and password
  fireEvent.change(screen.getByLabelText(/Email address/i), {
    target: { value: 'josh@ng.com' },
  });
  fireEvent.change(screen.getByLabelText(/Password/i), {
    target: { value: '123' },
  });

  // Submit the form
  fireEvent.click(screen.getByText(/Login/i));

  // Expect the user to be navigated to the main page
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();

});


describe("should be able to see the recognition modal ", () => {
  it("Renders the About component", () => {
    const component = render(
        <MainPage/>
    );

    const button = component.getByText(/Recognition/i);
    expect(button).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Give Recognition/i));


  });
});



// test('should show modal', () => {
//   render(<Login />);

//   // Enter correct email and password
//   fireEvent.change(screen.getByLabelText(/Email address/i), {
//     target: { value: 'josh@ng.com' },
//   });
//   fireEvent.change(screen.getByLabelText(/Password/i), {
//     target: { value: '123' },
//   });

//   // Submit the form
//   fireEvent.click(screen.getByText(/Login/i));

//   // Expect the user to be navigated to the main page
//   expect(screen.getByText(/Welcome/i)).toBeInTheDocument();

//   fireEvent.click(screen.getByText(/Give Recognition/i));

//   const modal = screen.getByText(/Select employee/i);
//   expect(modal).toBeInTheDocument();


// });
