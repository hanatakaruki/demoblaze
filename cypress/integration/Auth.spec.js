import '../support/Auth/register'

context('Authentication test', () => {

    const faker = require('faker')
    const username = faker.internet.userName()
    const password = faker.internet.password()

    before(() => {
        cy.visit(Cypress.config('baseURL'))
    })
      
    it('User register', () => {
        cy.CustomerRegister(username, password)
    })

    it('User login', () =>{
        cy.CustomerLogin(username, password)
    })

    it('User logout', () =>{
        cy.CustomerLogout()
    })


})