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
        window.handleGcode = handleGcode('b601f088a80203b20f1e84b7afcd27d9c2122f46539f48a120fa0bf36ffc36a1', done);

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

        window.handleGcode = handleGcode('b601f088a80203b20f1e84b7afcd27d9c2122f46539f48a120fa0bf36ffc36a1', done);

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
        window.handleGcode = handleGcode('d8d34537a814083854b556c5a3850b78c632602d170a0d0434a980d111765c7b', done);

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
        window.handleGcode = handleGcode('7db7cf2d46dfc782b0dd18beb77d03f392cd2e6c31a707493bc657ed32648473', done);

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