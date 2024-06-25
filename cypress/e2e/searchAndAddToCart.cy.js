/* eslint-disable no-undef */
// desafio.spec.js

/*
describe("Desafio Luma Store", () => {
  // Caso de uso 1: Verificar se a página inicial carrega corretamente
  it("Deve carregar a página inicial corretamente", () => {
    cy.visit("https://magento.softwaretestingboard.com");
    cy.get("title").should("contain", "Home Page");
  });

  // Caso de uso 2: Buscar por "shirt" e verificar a página de resultados
  it('Deve buscar por "shirt" e carregar a página de resultados', () => {
    cy.get('input[name="q"]', { timeout: 20000 })
      .should("be.visible")
      .type("shirt{enter}");
    cy.url().should("include", "catalogsearch/result");
    cy.get(".products-grid").should("be.visible");
  });

  // Caso de uso 3: Adicionar um produto ao carrinho
  it("Deve adicionar um produto ao carrinho", () => {
    cy.get(".product-image-photo", { timeout: 20000 })
      .first()
      .should("be.visible")
      .click();
    cy.get("button span").contains("Add to Cart").click();
    cy.get(".message-success").should("contain", "You added");
  });

  // Caso de uso 4: Realizar o checkout
  it("Deve realizar o checkout", () => {
    cy.get(".action.showcart", { timeout: 20000 }).should("be.visible").click();
    cy.get('a[title="Proceed to Checkout"]').click();
    cy.url().should("include", "checkout");
    // Complete o formulário de checkout conforme necessário usando cy.get().type() etc.
  });
});
*/

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
