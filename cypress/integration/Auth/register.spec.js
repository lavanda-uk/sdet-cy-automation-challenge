
describe("Register", () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
    })
    
    it("Register a new account", () => {
        const rand = Math.random().toString(16).substr(2, 10)
        const email = rand + "@example.com"
        const password = "Password" + rand

        cy.get("a[title='Log in to your customer account']").click()
        cy.get('input#email_create').type(email)
        cy.get('button#SubmitCreate > span').click()
        cy.get('input#customer_firstname').type("Test")
        cy.get('input#customer_lastname').type("McTester")
        cy.get('input#passwd').type(password)
        cy.get('input#firstname').type("Test")
        cy.get('input#lastname').type("McTester")
        cy.get("input[name='address1']").type("123 Test Road")
        cy.get('input#city').type("London")
        cy.get('select#id_state').select("Alabama")
        cy.get('input#postcode').type("35242")
        cy.get('input#phone_mobile').type("07977777777")
        cy.get('button#submitAccount').click()
        cy.get('.info-account').should('be.visible')
            .should('have.text', 'Welcome to your account. Here you can manage all of your personal information and orders.')
    })
})