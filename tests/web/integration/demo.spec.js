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

describe('demo', () =>
{
  beforeEach(() =>
  {
    cy.visit('/');

    //Mocks
    cy.window().then(window =>
    {
      //File upload
      window.getSTL = async () =>
      {
        const res = await fetch('/benchy.stl');
        return await res.arrayBuffer();
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
      window.handleGcode = handleGcode('a0b0247aa8657e5d0d4d7daf9c63b149568f22e2a2fe35af7ff268120f3afa88', done);

      //Slice
      cy.get('#slice').click();
      cy.progressIncreases('#percent');
      cy.get('#download').click();
    });

    cy.window().then(window =>
    {
      expect(window.afterSTL.byteLength).to.equal(0);
    });
  });

  it('will slice the file via cloning the ArrayBuffer', done =>
  {
    //Mocks
    cy.window().then(window =>
    {
      //Clone the STL
      window.transferSTL = false;

      window.handleGcode = handleGcode('a0b0247aa8657e5d0d4d7daf9c63b149568f22e2a2fe35af7ff268120f3afa88', done);

      //Slice
      cy.get('#slice').click();
      cy.progressIncreases('#percent');
      cy.get('#download').click();
    });

    cy.window().then(window =>
    {
      expect(window.afterSTL.byteLength).to.be.greaterThan(0);
    });
  });

  it('will slice the file via transfering the ArrayBuffer with overrides', done =>
  {
    //Mocks
    cy.window().then(window =>
    {
      window.handleGcode = handleGcode('4d15c9f7a04b9a465b5b99cca9f39f283fc248eba0edc6c529738d38963254a1', done);

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
      expect(window.afterSTL.byteLength).to.equal(0);
    });
  });
});