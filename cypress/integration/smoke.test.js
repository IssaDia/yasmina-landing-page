describe("smoke test", () => {
 it("says Yasmina Corman", () => {
  cy.visit("http://localhost:3000/");
  cy.contains("Yasmina Corman");
 });
});
