context("findArtistAndVisitTheirPage", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("should have title text", () => {
    cy.get("[data-testid='add-to-cart-button5']").first().click();
    cy.get("button").contains("1").click();
    cy.get("button").contains("login").click();
    cy.contains("Is logged in");
  });
});
