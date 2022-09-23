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
    cy.get('#nav-flyout-accountLi,t').should('be.visible')
    cy.contains("Your Account").should('be.visible')
  })

  it.only('Mouse over Event 2',{pageLoadTimeout:90000}, () => { 
    cy.visit('http://www.automationpractice.com') // this fucking website takes a lot of time to load so added extra page timeout
     //The sub category isnt appearing despite being hovered on 
    cy.get('.sf-menu > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').trigger('mouseover')
    //class "submenu-container clearfix first-in-line-xs" exist twice on the platform so we can use the first, last or eq() to specify
    // the exact class that we want. I had to modify the class name by removing all the spaces present in between some of the words
    //with . before performing the get request
    cy.get('.submenu-container.clearfix.first-in-line-xs').first().invoke('show')//we wanted to ensure that the subcategory elements
    //gets displayed after being hovered on, so we had to get(locator of the component inside the hovered section), 
// in this case, there is an ul with a class name "submenu-container clearfix first-in-line-xs" inside the Women menu that houses both
// Tops and Dresses, so we access that class, after we have hovered on Women, then since the same class exist twice, we used first()
// to get the exact one we need, and we used the invoke('show') to forcely display the elements after being hovered on

cy.contains('Tops').should('be.visible') // we want to assert that Tops is visible after the hidden elements under Women is hovered on
  })
})