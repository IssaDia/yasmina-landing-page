Cypress.Commands.add("openCalendlyModal", () => {
 cy.get('[dataTest="showCalendlyModal"').click();
 cy.get('[dataTest="calendlyModal"').should("exist");
});

Cypress.Commands.add("openNavBurger", () => {
 cy.get('[dataTest="navbarBurger"').click();
});

Cypress.Commands.add("closeCalendlyModal", () => {
 cy.get('[dataTest="closeModal"').click();
 cy.get('[dataTest="calendlyModal"').should("not.exist");
});
