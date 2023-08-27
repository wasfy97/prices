/// <reference types="Cypress" />

describe('sum new prices and old prices', () => {
    it('find elements', () => {
        cy.visit("https://www.automationteststore.com/")
        
        let totalNewPrice = 0; 
        let totalOldPrice = 0; 
        
        cy.get('#special > .container-fluid').find('.pricenew').each(($element) => {
            
            const newPrice = parseFloat($element.text().replace("$", ""));
            cy.log(newPrice);
            
           
            totalNewPrice += newPrice;
        }).then(() => {
            cy.get('#special > .container-fluid').find('.priceold').each(($element) => {
                
                const oldPrice = parseFloat($element.text().replace("$", ""));
                cy.log(oldPrice);
                
                
                totalOldPrice += oldPrice;
            }).then(() => {
                const formattedTotalNewPrice = totalNewPrice.toFixed(2);
                const formattedTotalOldPrice = totalOldPrice.toFixed(2);
                
                window.alert("Total new price: $" + formattedTotalNewPrice);
                window.alert("Total old price: $" + formattedTotalOldPrice);
            });
        });
    });
});

