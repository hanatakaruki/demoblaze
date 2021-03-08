Cypress.Commands.add('Customerorder', (name, country, city, creditcard, month, year) => {
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get('#tbodyid > :nth-child(1) > :nth-child(2)').should('have.text', 'Samsung galaxy s6')
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type(name)
    cy.get('#country').type(country)
    cy.get('#city').type(city)
    cy.get('#card').type(creditcard)
    cy.get('#month').type(month)
    cy.get('#year').type(year)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.lead').should('be.visible')
    cy.get('.confirm').click()

 })