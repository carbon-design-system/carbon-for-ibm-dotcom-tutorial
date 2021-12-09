/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('step-2', () => {
  beforeEach(() => {
    cy.mockMastheadFooterData();
    cy.mockKaltura();
    cy.visit(`/`);
    cy.viewport(1280, 780);
  });

  it('should load leadspace-with-search', () => {
    cy.get('dds-leadspace-with-search').should('be.visible');

    cy.screenshot();
  });

  it('should load leadspace-with-search with adjacent-theme property', () => {
    cy.get('dds-leadspace-with-search').then(($leadspace) => {
      expect($leadspace).to.have.attr('adjacent-theme', 'g90-and-g100');
    });

    cy.screenshot();
  });

  it('should load dds-table-of-contents horizontal variation', () => {
    cy.get('dds-table-of-contents').should('be.visible');

    cy.get('dds-table-of-contents').then(($toc) => {
      expect($toc).to.have.attr('toc-layout', 'horizontal');
    });

    cy.screenshot();
  });

  it('should load dds-card-section-offset', () => {
    cy.get('dds-card-section-offset').should('be.visible');

    cy.screenshot();
  });

  it('should load dds-cta-section', () => {
    cy.get('dds-cta-section').should('be.visible');

    cy.screenshot();
  });

  it('should load dds-cta-section within dark-theme div', () => {
    cy.get('.dark-theme').children('dds-cta-section').should('be.visible');

    cy.screenshot();
  });
});
