/* eslint-disable no-undef */

describe("Desafio Luma Store", () => {
  // Verificar se a página inicial carrega corretamente, buscar por "shirt", adicionar um item ao carrinho e fazer checkout

  it("Deve carregar a Home Page corretamente, buscar por shirt, adicionar um item ao carrinho e fazer checkout", () => {
    cy.visit("/");
    cy.get("title").should("contain", "Home Page");

    cy.get("#search", { timeout: 10000 })
      .should("be.visible")
      .type("shirt{enter}");
    cy.url().should("include", "catalogsearch/result");
    cy.get(".products-grid", { timeout: 10000 }).should("be.visible");

    cy.get(".product-item-link", { timeout: 30000 })
      .eq(0)
      .invoke("removeAttr", "target")

      .click();

    // Selecionar tamanho e cor
    cy.get("#option-label-size-143-item-166").click(); // Selecionar tamanho
    cy.get("#option-label-color-93-item-50").click(); // Selecionar cor

    cy.get("#product-addtocart-button").click();
    cy.get('[data-ui-id="message-success"]').should("contain", "You added");
    cy.get(".showcart").click();
    cy.get("button[id=top-cart-btn-checkout]").should("be.visible");

    cy.get("button[id=top-cart-btn-checkout]").click({ force: true });
    cy.contains("button", "Proceed to Checkout")
      .wait(1000)
      .click({ force: true });

    cy.get(".step-title").should("be.visible");
  });
});
