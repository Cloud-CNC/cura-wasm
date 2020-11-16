///<reference types="cypress"/>
/**
 * @fileoverview Cypress Browser Tests
 */

/**
 * Handle gcode output and verify its hash
 * @param {string} referenceHash The reference hash to compare the outputted file against
 * @param {Function} done Mocha done callback
 */
const handleGcode = (referenceHash, done) => async gcode =>
{
  expect(gcode.byteLength).to.be.greaterThan(0);

  expect(await hash(gcode)).to.equal(referenceHash);

  done();
};

/**
 * Hash raw using the specified algorithm
 * @param {ArrayBuffer} raw
 * @param {string} algorithm
 */
const hash = async (raw, algorithm = 'sha-256') =>
{
  const digest = await crypto.subtle.digest(algorithm, raw);
  const bytes = Array.from(new Uint8Array(digest));
  return bytes.map(byte => byte.toString(16).padStart(2, '0')).join('');
};

describe('cura wasm', () =>
{
  beforeEach(() =>
  {
    cy.visit('/');
  });

  describe('stl', () =>
  {
    beforeEach(() =>
    {
      //Mocks
      cy.window().then(window =>
      {
        //File upload
        window.getFile = async () =>
        {
          const res = await fetch('/benchy.stl');

          const bytes = await res.arrayBuffer();

          return {
            arrayBuffer: () => bytes,
            name: 'benchy.stl'
          };
        };
      });
    });

    it('will display all required UI elements', () =>
    {
      cy.get('#upload').should('be.visible');
      cy.get('#slice').should('be.visible');
      cy.get('#progress').should('be.visible');
      cy.get('#percent').should('be.visible');
      cy.get('#time').should('be.visible');
      cy.get('#download').should('be.visible');
    });

    it('will slice the file via transfering the ArrayBuffer', done =>
    {
      //Mocks
      cy.window().then(window =>
      {
        window.handleGcode = handleGcode('e7f1d0a866ffc6ce9294d5c1a659430577a797ed891497a2637f0389a557c7ec', done);

        //Slice
        cy.get('#slice').click();
        cy.progressIncreases('#percent');
        cy.get('#download').click();
      });

      cy.window().then(window =>
      {
        expect(window.afterFile.byteLength).to.equal(0);
      });
    });

    it('will slice the file via cloning the ArrayBuffer', done =>
    {
      //Mocks
      cy.window().then(window =>
      {
        //Clone the file
        window.transferFile = false;

        window.handleGcode = handleGcode('e7f1d0a866ffc6ce9294d5c1a659430577a797ed891497a2637f0389a557c7ec', done);

        //Slice
        cy.get('#slice').click();
        cy.progressIncreases('#percent');
        cy.get('#download').click();
      });

      cy.window().then(window =>
      {
        expect(window.afterFile.byteLength).to.be.greaterThan(0);
      });
    });

    it('will slice the file via transfering the ArrayBuffer with overrides', done =>
    {
      //Mocks
      cy.window().then(window =>
      {
        window.handleGcode = handleGcode('8a3c52fd73736baea9e3c8f29e4c05938c42ad9c72ffea9a9dbe71530268098b', done);

        window.overrides = [
          {
            key: 'mesh_position_x',
            value: '20'
          }
        ];

        //Slice
        cy.get('#slice').click();
        cy.progressIncreases('#percent');
        cy.get('#download').click();
      });

      cy.window().then(window =>
      {
        expect(window.afterFile.byteLength).to.equal(0);
      });
    });
  });

  describe('3mf', () =>
  {
    beforeEach(() =>
    {
      //Mocks
      cy.window().then(window =>
      {
        //File upload
        window.getFile = async () =>
        {
          const res = await fetch('/benchy.3mf');

          const bytes = await res.arrayBuffer();

          return {
            arrayBuffer: () => bytes,
            name: 'benchy.3mf'
          };
        };
      });
    });

    it('will slice the file via transfering the ArrayBuffer', done =>
    {
      //Mocks
      cy.window().then(window =>
      {
        window.handleGcode = handleGcode('e777ca6d8fb935ea823a5bf5324a979e0ad932339265ee08e45be6b17c6ad531', done);

        //Slice
        cy.get('#slice').click();
        cy.progressIncreases('#percent');
        cy.get('#download').click();
      });

      cy.window().then(window =>
      {
        expect(window.afterFile.byteLength).to.equal(0);
      });
    });
  });
});