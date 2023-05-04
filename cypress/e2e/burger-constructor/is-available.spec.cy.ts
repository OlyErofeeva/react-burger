describe('application is available', function () {
  it('should be available on localhost', function () {
    cy.visit('http://localhost:3000/react-burger')
  })
})
