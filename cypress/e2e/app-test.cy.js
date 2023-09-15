describe('Loading the app', () => {

    it('Click on shop', () => {
      cy.visit('/');
      /* Console UI login as Super Admin */
      cy.get('a[href="/shop"]').click();
      cy.url().should('contain', '/shop');
      cy.get('h1').should('contain', 'I am the shop page')
      /* Validate user lands on home page */
    })
  })