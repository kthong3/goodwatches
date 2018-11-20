const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../../config/param-validation');
const movieCtrl = require('./movie.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  /** GET /api/movies - Get list of movies */
  .get(movieCtrl.list)

  /** POST /api/movies - Create new movie */
  .post(validate(paramValidation.createMovie), movieCtrl.create);

router.route('/:movieId')
  /** GET /api/movies/:movieId - Get movie */
  .get(movieCtrl.get)

  /** PUT /api/movies/:movieId - Update movie */
  .put(validate(paramValidation.updateMovie), movieCtrl.update)

  /** DELETE /api/movies/:movieId - Delete movie */
  .delete(movieCtrl.remove);

/** Load movie when API with movieId route parameter is hit */
router.param('movieId', movieCtrl.load);

module.exports = router;
