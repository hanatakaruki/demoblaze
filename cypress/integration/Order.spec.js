import '../support/Order/order'

context('Order test', () => {

    const faker = require('faker')
    var name = faker.name.findName()
    var country = faker.address.country()
    var city = faker.address.city()
    var creditcard = faker.finance.creditCardNumber()
    var month = '12'
    var year = '2028'


    before(() => {
        cy.visit(Cypress.config('baseURL'))
    })
      

    it('User add item to cart', () =>{
        cy.CustomerLogin('test12356', 'test12356')
        cy.Customerorder(name, country, city, creditcard, month, year)
    })


})