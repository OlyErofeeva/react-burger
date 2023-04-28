import { ORDER_URL } from '../../../src/configs/api-settings'

describe('user can place an order', function () {
  before(function () {
    cy.visit('http://localhost:3000/login')
  })

  it('should create a burger and place an order', function () {
    const dataTransfer = new DataTransfer()

    // log in & wait for the profile page to load
    cy.get('[data-test-id="profile-tab"]').click()
    cy.get('[data-test-id="email-input"]').type('lelik.test@gmail.com')
    cy.get('[data-test-id="password-input"]').type('test1234Test')
    cy.get('[data-test-id="login-button"]').click()
    cy.url().should('contain', 'profile')

    // making a simple burger
    cy.get('[data-test-id="constructor-tab"]').click()
    cy.get('[data-test-id="bun-section"]')
      .find('[data-test-id="ingredient"]')
      .first()
      .trigger('dragstart', { dataTransfer })
    cy.get('[data-test-id="constructor-container"]').trigger('drop', { dataTransfer })

    // placing an order and waiting for its number
    cy.intercept('POST', ORDER_URL).as('addOrder')
    cy.get('[data-test-id="order-button"]').click()
    cy.wait('@addOrder') // eslint-disable-line testing-library/await-async-utils
    cy.get('[data-test-id="order-number"]')

    // closing the order modal
    cy.get('[data-test-id="modal-close-button"]').click()
    cy.get('[data-test-id="order-number"]').should('not.exist')
  })
})
