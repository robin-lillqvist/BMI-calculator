// userCanCheckTheirBMI.feature.js

describe('User can check their BMI', () => {
    it('user can ener eight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('95')
        cy.get('#height').type('184')
        cy.get(#Calculate).click()
    })
})