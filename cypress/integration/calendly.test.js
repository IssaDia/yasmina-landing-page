describe("User want to make an apointment on Calendly ", () => {
 beforeEach(() => {
  cy.visit("/");
 });
 context("computer screen", () => {
  beforeEach(() => {
   cy.viewport(1280, 720);
  });
  it("shows the calendly interface on computer screen then closes it", () => {
   cy.openCalendlyModal();
   cy.closeCalendlyModal();
  });
 });

 context("tablet screen", () => {
  beforeEach(() => {
   cy.viewport(768, 1024);
  });
  it("shows the calendly interface on computer screen then closes it", () => {
   cy.openNavBurger();
   cy.openCalendlyModal();
   cy.closeCalendlyModal();
  });
 });

 context("mobile screen", () => {
  beforeEach(() => {
   cy.viewport(375, 812);
  });
  it("shows the calendly interface on mobile screen then closes it", () => {
   cy.openNavBurger();
   cy.openCalendlyModal();
   cy.closeCalendlyModal();
  });
 });
});
