it('Drag and Drop', () => {
    cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
    cy.get('#menu-ice-cream')//got the id of the item to be dragged, ice cream
        .drag('#plate-items')//got the id of the drop location
                

  })