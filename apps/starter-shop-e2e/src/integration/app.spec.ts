import { getToolbar } from '../support/app.po';

describe('starter-shop', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getToolbar().contains('Starter Shop');
  });
});
