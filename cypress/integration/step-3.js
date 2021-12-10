/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('step-3', () => {
  beforeEach(() => {
    cy.mockMastheadFooterData();
    cy.mockKaltura();
    cy.visit(`/`);
    cy.viewport(1280, 780);
  });

  it('should load first Content block with Content group and cards', () => {
    cy.get('dds-content-section > dds-content-block > dds-content-group > dds-card-group')
      .first()
      .find('dds-card-group-item')
      // 5 + 1 empty card
      .should('have.length', 5);

    cy.screenshot();
  });

  it('should load second Content block with Card in card and Content group ', () => {
    cy.get('dds-content-section > dds-content-block > dds-video-cta-container > dds-card-in-card')
      .should('be.visible');

    cy.get('dds-content-section > dds-content-block > dds-card-link-cta').should('be.visible');

    cy.get('dds-content-section > dds-content-block > dds-content-group > dds-card-group')
      .eq(1)
      .find('dds-card-group-item')
      .should('have.length', 3);

    cy.screenshot();
  });

  it('should load third Content block with Content group and Content items ', () => {
    cy.get('dds-content-section > dds-content-block > dds-link-list')
      .find('dds-link-list-item-card-cta')
      .should('have.length', 3);

    cy.get('dds-content-section > dds-content-block > dds-content-group')
      .find('dds-content-item')
      .should('have.length', 3);


    cy.get('dds-content-section > dds-content-block > dds-content-group > dds-card-link-cta')
      .should('be.visible');

    cy.screenshot();
  });
});

