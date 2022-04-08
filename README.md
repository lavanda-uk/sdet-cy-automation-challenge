# SDET Cypress Automation Exercise

### Setup and Requirments

Install Node.js and Chrome

Pull the repository and in the terminal run `npm install`

Next, to check Cypress is installed, run `npx cypress verify`

Once verified, open the Cypress runner with `npx cypress open`


### Planning Exercise 1 - Test Cases

Given the following acceptance criteria and exploring http://automationpractice.com/index.php, create test cases (BDD preferred)

As a user, I want to craete an account
As a user, I want to login with a created account
As a user, I want to use the search bar to find available items
As a user, I would like to purchase an item from my cart

### Coding Exercise 1 - Auth

Based on the test cases you have written, create a test with the spec files provided to run through user login. Account details to an existing login can be found in `fixtures/account.json`

### Coding Exercise 2 - Search

Based on the test cases you have written, create a test needed to cover searching for a Faded short sleeve t-shirt

### Coding Exercise 3 - Purchase

Based on the test cases you have written, create a test needed to cover purchasing a single item from the store