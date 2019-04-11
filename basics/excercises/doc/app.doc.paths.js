const spec = {
  '/api/users': {
    get: {
      summary: 'Lists all user entries',
      description: 'Lists all user entries',
      parameters: [],
      responses: {
        200: {
          description: 'Returns a list of all users',
          schema: {
            type: 'array',
            items: {
              $ref: '#/definitions/user'
            }
          }
        }
      }
    }
  },
  '/api/users/{userId}': {
    get: {
      summary: 'Lists a single user entry',
      description: 'Lists a single user entry',
      parameters: [{
        in: 'path',
        name: 'userId',
        description: `A user's ID`,
        required: true,
        schema: { type: 'string' }
      }],
      responses: {
        200: {
          description: 'Returns a single user entry',
          schema: {
            $ref: '#/definitions/user'
          }
        },
        404: {
          description: 'Requests an invalid user ID',
          schema: {
            $ref: '#/definitions/errors/clientError'
          }
        }
      }
    }
  }
}

module.exports = spec
