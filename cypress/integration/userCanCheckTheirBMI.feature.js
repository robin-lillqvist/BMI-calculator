// userCanCheckTheirBMI.feature.js

describe('User can check their BMI', () => {
    it('user can ener eight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('95')
        cy.get('#height').type('184')
        cy.get('#Calculate').click()
    })

    it('It displays correct BMI for values w:95 h:184', () => {
        cy.get('#results').should('contain', '28.06')    
    })
})