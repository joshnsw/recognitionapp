# Preface

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In order to run it your computer, you will need to install node.js first.

First run the command npm install for installing dependencies, then run the command npm start to start the application.

## Structure of code

In this project the code is structured into different components, the main components are :
- Main page
- Modal
- Details Page
- Success Page


### Main Page

The main page is where the user will land first when logging in, if the user clicks on the give recognition button, it will redirect to the modal component.


### Modal

The modal component is where the user can select which team mate and recognition type to give. There are two pages in this component and when you click the next button on the second page it goes to the details page.

### Details Page

The details page confirms employee and recognition type selected, and allows user to add any additional details before submitting the recognition form. After submitting, the user will be directed to success page component.


### Success Page

The user successfully submits the form, and a confirmation message is display on this page. To the return to the homepage the user has to click the "return to main page" button.


### Testing

Two tests were create to ensure:
- Login works as expected
- Modal Component shows up when clicked
