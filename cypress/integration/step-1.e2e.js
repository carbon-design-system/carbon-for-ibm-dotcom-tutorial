/**
 * Copyright IBM Corp. 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('step-1', () => {
  beforeEach(() => {
    cy.mockMastheadFooterData();
    cy.mockKaltura();
    cy.visit(`/`);
    cy.viewport(1280, 780);
  });

  it('should load the dotcom-shell', () => {
    cy.get('dds-dotcom-shell').should('be.visible');

    cy.screenshot();
  });

  it('should have the digitalData object', () => {
    cy.window().then((win) => {
      expect(win.digitalData).not.to.be.undefined;
    });
  });

  it('should include ibm-common.js', () => {
    cy.get('head script[src*="1.www.s81c.com/common/stats/ibm-common.js"]');
  });

  it('should have all configured languages', () => {
    cy.get('head link[hreflang*="en-us"]');
    cy.get('head link[hreflang*="fr-ca"]');
    cy.get('head link[hreflang*="ko-kr"]');
    cy.get('head link[hreflang*="ja-jp"]');
  });

  it('should have all required meta tags', () => {
    cy.get('head meta[charSet*="UTF-8"]');
    cy.get('head link[rel*="icon"]');
    cy.get('head meta[name*="dcterms.date"]');
    cy.get('head meta[name*="dcterms.rights"]');
    cy.get('head meta[name*="geo.country"]');
    cy.get('head meta[name*="robots"]');
  });
});
