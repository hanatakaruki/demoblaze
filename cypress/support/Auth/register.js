Cypress.Commands.add('CustomerRegister', (username, password) => {
    cy.get('#signin2').click()
    cy.wait(2000)
    cy.get('#sign-username').type(username)
    cy.get('#sign-password').type(password)
    cy.wait(2000)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
 })