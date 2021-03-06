import { Test } from 'consts/floating';

describe('Floating actions', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-test="${Test.TOGGLE}"]`).as('toggle');
    cy.get(`[data-test="${Test.ACTIONS}"]`).as('actions');
  });

  it('Open and close with toggle button', () => {
    cy.get('@actions').should('have.css', 'visibility', 'hidden');
    cy.get('@toggle').click();
    cy.get('@actions').should('have.css', 'visibility', 'visible');
    cy.get('@toggle').click();
    cy.get('@actions').should('have.css', 'visibility', 'hidden');
  });

  it('Close on click outside', () => {
    cy.get('@toggle').click();
    cy.get('@actions').should('have.css', 'visibility', 'visible');
    cy.get('body').click({ force: true });
    cy.get('@actions').should('have.css', 'visibility', 'hidden');
  });

  it('Close on escape key', () => {
    cy.get('@toggle').click();
    cy.get('@actions').should('have.css', 'visibility', 'visible');
    cy.get('body').type('{esc}');
    cy.get('@actions').should('have.css', 'visibility', 'hidden');
  });

  it('Navigate to the home page', () => {
    cy.visit('/blog/how-to-create-a-breakpoint-mixin-with-styled-components/');
    cy.get('@toggle').click();
    cy.get(`[data-test="${Test.ACTION_HOME}"]`).click();
    cy.url().should('eq', Cypress.config().baseUrl);
  });
});
