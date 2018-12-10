const Joi = require('joi');

module.exports = {
  // POST /api/users
  createUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
    },
    params: {
      userId: Joi.string().hex().required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  },

  // POST /api/movies
  createMovie: {
    body: {
      title: Joi.string().required(),
      releaseDate: {
        month: Joi.string().required(),
        date: Joi.string().required(),
        year: Joi.string().required()
      }
    }
  },

  // UPDATE /api/movies/:movieId
  updateMovie: {
    body: {
      title: Joi.string().required(),
      releaseDate: {
        month: Joi.string().required(),
        date: Joi.string().required(),
        year: Joi.string().required()
      }
    },
    params: {
      movieId: Joi.string().hex().required()
    }
  }
};
