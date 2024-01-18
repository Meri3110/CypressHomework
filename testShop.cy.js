describe('Product selecting', () => {
    it('order product', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('div > div:nth-child(1) > div.stepper-input > a.increment').click()
        cy.get('div > div:nth-child(1) > div.product-action > button').click()
        cy.get('img[src="https://rahulshettyacademy.com/seleniumPractise/images/bag.png"]').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.get('.promoCode')
        cy.get('.promoBtn').click()
        cy.get('button').contains('Place Order').click()
        cy.get('.chkAgree').click()
        cy.get('select').select('Armenia')
        cy.contains('Proceed').click()

    });
})