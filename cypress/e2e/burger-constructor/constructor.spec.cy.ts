describe('user can make a custom burger', function () {
  before(function () {
    cy.visit('http://localhost:3000/react-burger')
  })

  it('should drag all types of ingredients to the burger constructor', function () {
    const dataTransfer = new DataTransfer()

    // starting with a bun
    cy.get('[data-test-id="bun-section"]')
      .find('[data-test-id="ingredient"]')
      .first()
      .trigger('dragstart', { dataTransfer })
    cy.get('[data-test-id="constructor-container"]').trigger('drop', { dataTransfer })

    // adding another types of ingredients to the burger
    cy.get('[data-test-id="main-section"]')
      .find('[data-test-id="ingredient"]')
      .first()
      .trigger('dragstart', { dataTransfer })
    cy.get('[data-test-id="constructor-container"]').trigger('drop', { dataTransfer })

    cy.get('[data-test-id="sauce-section"]')
      .find('[data-test-id="ingredient"]')
      .last()
      .trigger('dragstart', { dataTransfer })
    cy.get('[data-test-id="constructor-container"]').trigger('drop', { dataTransfer })
  })
})
