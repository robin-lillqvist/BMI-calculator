// userCanCheckTheirBMI.feature.js

describe('Normal weight person check their BMI', () => {
    it('user can ener eight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('78')
        cy.get('#height').type('184')
        cy.get('#Calculate').click()
    })

    it('It displays correct BMI for values w:78 h:184', () => {
        cy.get('#results').should('contain', '23.04')    
    })

    it('It displays correct classification for values w:78 h:184', () => {
        cy.get('#results').should('contain', 'Normal weight')    
    })
})

describe('Overweight person check their BMI', () => {
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

    it('It displays correct classification for values w:95 h:184', () => {
        cy.get('#results').should('contain', 'Overweight')    
    })
})

describe('Underweight person check their BMI', () => {
    it('user can ener eight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('60')
        cy.get('#height').type('184')
        cy.get('#Calculate').click()
    })

    it('It displays correct BMI for values w:60 h:184', () => {
        cy.get('#results').should('contain', '17.72')    
    })

    it('It displays correct classification for values w:60 h:184', () => {
        cy.get('#results').should('contain', 'Normal weight')    
    })
})