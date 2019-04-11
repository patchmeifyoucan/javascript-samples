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
          description: 'Returns a single user entry.',
          schema: {
            $ref: '#/definitions/user'
          }
        },
        404: {
          description: 'Requests an invalid user ID.',
          schema: {
            $ref: '#/definitions/errors/clientError'
          }
        }
      }
    }
  },
  '/api/users/{userId}/meet': {
    post: {
      summary: 'Adds a new id to a persons list of known people.',
      description: `Adds a new id to a person's list of known people.`,
      parameters: [
        {
          in: 'path',
          name: 'userId',
          description: `A user's ID`,
          required: true,
          schema: { type: 'string' }
        }
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/id'
              }
            },
            example: [
              { id: 'gu-id-o-ne' },
              { id: 'gu-id-t-wo' }
            ]
          }
        }
      },
      responses: {
        200: {
          description: 'Returns the people the user knows now.',
          schema: {
            $ref: '#/definitions/user'
          }
        },
        400: {
          description: 'Wrong request format.',
          schema: {
            $ref: '#/definitions/errors/clientError'
          }
        },
        404: {
          description: 'Meeting person or one ore more persons to meet do not exist.',
          schema: {
            $ref: '#/definitions/errors/clientError'
          }
        },
        409: {
          description: 'User already knows one or more persons.',
          schema: {
            $ref: '#/definitions/errors/clientError'
          }
        }
      }
    }
  }
}

module.exports = spec
