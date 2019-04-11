/**
 * @typedef User
 * @property {string} id
 * @property {boolean} isActive
 * @property {string} balance
 * @property {number} age
 * @property {string} eyeColor
 * @property {object} name
 * @property {string} name.first
 * @property {string} name.last
 * @property {string} company
 * @property {string} email
 * @property {string} registered
 * @property  {Array.<{id: string}>} knows
 */

const spec = {
  user: {
    type: 'object',
    properties: {
      id: 'string',
      isActive: 'boolean',
      balance: 'string',
      age: 'number',
      eyeColor: 'string',
      name: {
        type: 'object',
        properties: {
          first: 'string',
          last: 'string'
        }

      },
      company: 'string',
      email: 'string',
      registered: 'string',
      knows: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: 'string'
          }
        }

      }
    }
  },
  id: {
    type: 'object',
    properties: {
      id: 'string'
    }
  },
  errors: {
    clientError: {
      type: 'object',
      properties: {
        statusCode: 'number',
        message: 'string'
      }
    }
  }
}

module.exports = spec
