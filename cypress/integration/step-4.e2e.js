/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('step-4', () => {
  beforeEach(() => {
    cy.mockMastheadFooterData();
    cy.mockKaltura();
    cy.visit(`/`);
    cy.viewport(1280, 780);
  });

  it('should load two tags in the first card of card group', () => {
    cy.get(
      'dds-content-section > dds-content-block > dds-content-group > dds-card-group > dds-card-group-item:first-of-type'
    )
      .first()
      .find('dds-tag-group > bx-tag')
      .should('have.length', 2);
    cy.screenshot();
  });

  it('should load Content block with Tabs and its content', () => {
    cy.get('dds-content-section > dds-content-block > bx-tabs').should(
      'be.visible'
    );

    cy.get('dds-content-section > dds-content-block > bx-tabs > bx-tab').should(
      'have.length',
      4
    );

    cy.get('dds-content-section > dds-content-block > .bx--tab-panels').should(
      'be.visible'
    );

    cy.get('dds-content-section > dds-content-block > .bx--tab-panels')
      .children()
      .should('have.length', 4);

    cy.screenshot();
  });

  it('should have a data table', () => {
    cy.get('bx-table').should('be.visible');
    cy.get('bx-table > bx-table-head').should('be.visible');
    cy.get('bx-table > bx-table-body').should('be.visible');
    cy.get('bx-table > bx-table-body > bx-table-row').should('have.length', 3);
  });

  it('should have a structured list', () => {
    cy.get(`bx-tab[value='list']`).click();
    cy.get('bx-structured-list').should('be.visible');
    cy.get('bx-structured-list > bx-structured-list-head').should('be.visible');
    cy.get('bx-structured-list > bx-structured-list-body').should('be.visible');
    cy.get(
      'bx-structured-list > bx-structured-list-body > bx-structured-list-row'
    ).should('have.length', 3);
  });

  it('should have a working dropdown component', () => {
    cy.get(`bx-tab[value='dropdown']`).click();
    cy.get('bx-dropdown').shadow().find('.bx--dropdown').should('be.visible');
    cy.get('bx-dropdown').shadow().find('.bx--dropdown').click();
    cy.get('bx-dropdown').find('bx-dropdown-item[value="g90-theme"]').click();
    cy.get('body').should('have.class', 'g90-theme');

    cy.screenshot();
  });

  it('should have a working radio button component', () => {
    cy.get(`bx-tab[value='radio-buttons']`).click();
    cy.get('bx-radio-button-group').should('be.visible');
    cy.get(`bx-radio-button[value='dark-theme']`).click();
    cy.get('body').should('have.class', 'dark-theme');

    cy.screenshot();
  });
});
