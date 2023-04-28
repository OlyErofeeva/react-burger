describe('constructor route is available', function () {
  before(function () {
    cy.visit('http://localhost:3000/react-burger')
  })

  it('should open constructor page by default', function () {
    cy.contains('Соберите бургер')
  })
})
