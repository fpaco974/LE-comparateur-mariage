describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('displays the resources text', () => {
    cy.get('h1', {timeout: 6000})
    .contains('Welcome to my app!');
  })
  it('renders the Netlify logo image', () => {
    cy.get('img', {timeout: 6000})
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})
