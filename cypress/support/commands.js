Cypress.Commands.add("openCalendlyModal", () => {
 cy.get('[data-test="showCalendlyModal"').click();
 cy.get('[data-test="calendlyModal"').should("exist");
});

Cypress.Commands.add("openNavBurger", () => {
 cy.get('[data-test="navbarBurger"').click();
});

Cypress.Commands.add("closeCalendlyModal", () => {
 cy.get('[data-test="closeModal"').click();
 cy.get('[data-test="calendlyModal"').should("not.exist");
});
