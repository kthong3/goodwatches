const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

/**
 * Genre Schema
 */
const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

/**
 * Movie Schema
 */
const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  releaseDate: {
    month: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    }
  },
  genres: [GenreSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
MovieSchema.method({
});

/**
 * Statics
 */
MovieSchema.statics = {
  /**
   * Get movie
   * @param {ObjectId} id - The objectId of movie.
   * @returns {Promise<Movie, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((movie) => {
        if (movie) {
          return movie;
        }
        const err = new APIError('No such movie exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List movies in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of movies to be skipped.
   * @param {number} limit - Limit number of movies to be returned.
   * @returns {Promise<Movie[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Movie
 */
module.exports = mongoose.model('Movie', MovieSchema);
