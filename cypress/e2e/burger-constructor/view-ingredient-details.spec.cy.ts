describe('user can view ingredient details in a modal', function () {
  before(function () {
    cy.visit('http://localhost:3000/react-burger')
  })

  it('should open & close the modal with ingredient details', function () {
    // modal opens
    cy.get('[data-test-id="ingredient"]').first().click()
    cy.get('[data-test-id="ingredient-modal-title"]')

    // modal closes
    cy.get('[data-test-id="modal-close-button"]').click()
    cy.get('[data-test-id="ingredient-modal-title"]').should('not.exist')
  })
})
