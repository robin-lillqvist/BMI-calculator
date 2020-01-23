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
        cy.get('#results').should('contain', 'Underweight')    
    })
})

describe('Class 1 Obese person check their BMI', () => {
    it('user can ener eight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('110')
        cy.get('#height').type('184')
        cy.get('#Calculate').click()
    })

    it('It displays correct BMI for values w:110 h:184', () => {
        cy.get('#results').should('contain', '32.49')    
    })

    it('It displays correct classification for values w:110 h:184', () => {
        cy.get('#results').should('contain', 'Obesity class 1')    
    })
})

describe('Class2 Obese person check their BMI', () => {
    it('user can ener eight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('120')
        cy.get('#height').type('184')
        cy.get('#Calculate').click()
    })

    it('It displays correct BMI for values w:120 h:184', () => {
        cy.get('#results').should('contain', '35.44')    
    })

    it('It displays correct classification for values w:120 h:184', () => {
        cy.get('#results').should('contain', 'Obesity class 2')    
    })
})

describe('Class3 Obese person check their BMI', () => {
    it('user can ener eight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weight').type('136')
        cy.get('#height').type('184')
        cy.get('#Calculate').click()
    })

    it('It displays correct BMI for values w:136 h:184', () => {
        cy.get('#results').should('contain', '35.44')    
    })

    it('It displays correct classification for values w:136 h:184', () => {
        cy.get('#results').should('contain', 'Extreme Obesity')    
    })
})