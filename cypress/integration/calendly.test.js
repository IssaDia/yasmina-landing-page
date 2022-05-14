describe("User want to make an apointment on Calendly ", () => {
 beforeEach(() => {
  cy.visit("http://localhost:3000");
 });
 context("computer screen", () => {
  beforeEach(() => {
   cy.viewport(1280, 720);
  });
  it("shows the calendly interface on computer screen", () => {
   cy.get('[data-test="showCalendlyModal"').click();
   cy.get('[data-test="calendlyModal"').should("be.visible");
  });
 });

 context("mobile screen", () => {
  beforeEach(() => {
   cy.viewport(375, 812);
  });
  it("shows the calendly interface on mobile screen", () => {
   cy.get('[data-test="navbarBurger"').click();
   cy.get('[data-test="showCalendlyModal"').click();
   cy.get('[data-test="calendlyModal"').should("be.visible");
  });
 });
});
