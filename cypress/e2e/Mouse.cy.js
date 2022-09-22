describe('Mouse Actions',() => {
  it('Clicks', () => {
    cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/mouseevents.html")
    cy.get('#click').click()
    cy.get('#dblclick').dblclick()
    cy.get('#rightclick').rightclick()
    cy.get('#msover')
  })
  
  it('Clicks 2', () => {
    cy.visit('http://demo.guru99.com/test/simple_context_menu.html')
    cy.get('.context-menu-one').rightclick()
    cy.contains('Double-Click Me To See Alert').dblclick({force: true})
    cy.on(
      'window:alert', (res)=>{
        expect(res).to.be.equal('You double clicked me.. Thank You..')
      }
    )
  })

  it('Mouse over Event', () => {
    cy.visit('https://www.amazon.com')
    cy.get('#nav-flyout-accountList').should('not.be.visible')
    cy.contains("Your Account").should('not.be.visible')
    cy.get('#nav-link-accountList').trigger('mouseover')
    cy.get('#nav-flyout-accountList').should('be.visible')
    cy.contains("Your Account").should('be.visible')
  })

  it.only('Mouse over Event 2',{pageLoadTimeout:90000}, () => { 
    cy.visit('http://www.automationpractice.com') // this fucking website takes a lot of time to load so added extra page timeout
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').trigger('mouseover') //The sub category isnt appearing
    cy.contains('Tops').invoke('show')
  })
})