describe("User want to make an apointment on Calendly ", () => {
 beforeEach(() => {
  cy.visit("/");
 });
 context("computer screen", () => {
  beforeEach(() => {
   cy.viewport(1280, 720);
  });
  it("shows the calendly interface on computer screen then closes it", () => {
   cy.get('[data-test="showCalendlyModal"').click();
   cy.get('[data-test="calendlyModal"').should("exist");
   cy.get('[data-test="closeModal"').click();
   cy.get('[data-test="calendlyModal"').should("not.exist");
  });
 });

 context("tablet screen", () => {
  beforeEach(() => {
   cy.viewport(768, 1024);
  });
  it("shows the calendly interface on computer screen then closes it", () => {
   cy.get('[data-test="navbarBurger"').click();
   cy.get('[data-test="showCalendlyModal"').click();
   cy.get('[data-test="calendlyModal"').should("exist");
   cy.get('[data-test="closeModal"').click();
   cy.get('[data-test="calendlyModal"').should("not.exist");
  });
 });

 context("mobile screen", () => {
  beforeEach(() => {
   cy.viewport(375, 812);
  });
  it("shows the calendly interface on mobile screen then closes it", () => {
   cy.get('[data-test="navbarBurger"').click();
   cy.get('[data-test="showCalendlyModal"').click();
   cy.get('[data-test="calendlyModal"').should("exist");
   cy.get('[data-test="closeModal"').click();
   cy.get('[data-test="calendlyModal"').should("not.exist");
  });
 });
});
