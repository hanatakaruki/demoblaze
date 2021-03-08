Cypress.Commands.add('CustomerLogin', (username, password) => {
    cy.get('#login2').click()
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(3000)
    cy.get('#nameofuser').should('be.visible')
  })
  
  Cypress.Commands.add('CustomerLogout', () =>{
      cy.get('#logout2').click()
      cy.wait(2000)
      cy.url().should('include', '/index.html')
  })
  
  
    Cypress.Commands.add('forceVisit', url => {
      cy.get('body').then(body$ => {
        const appWindow = body$[0].ownerDocument.defaultView;
        const appIframe = appWindow.parent.document.querySelector('iframe');
    
        // We return a promise here because we don't want to
        // continue from this command until the new page is
        // loaded.
        return new Promise(resolve => {
          appIframe.onload = () => resolve();
          appWindow.location = url;
        });
      });
    });
    
    const COMMAND_DELAY = 500;
    
    
    for (const command of ['visit', 'click', 'trigger', 'type', 'clear', 'reload', 'contains']) {
        Cypress.Commands.overwrite(command, (originalFn, ...args) => {
            const origVal = originalFn(...args);
    
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(origVal);
                }, COMMAND_DELAY);
            });
        });
    }
    
    // UTILS
    function hexStringToByte(str) {
      if (!str) {
          return new Uint8Array();
      }
    
      var a = [];
      for (var i = 0, len = str.length; i < len; i += 2) {
          a.push(parseInt(str.substr(i, 2), 16));
      }
    
      return new Uint8Array(a);
    }
  
    import './commands'
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })