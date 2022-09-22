Firstly, install the drag and drop plugin via  `npm install --save-dev @4tw/cypress-drag-drop`

Then paste the command `require('@4tw/cypress-drag-drop')` inside the commands.js file in the support folder

Use it as follows:

cy.get('idofdragelement').drop('idofdroplocation')