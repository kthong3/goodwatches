const mongoose = require('mongoose');
const request = require('supertest-as-promised');
const httpStatus = require('http-status');
const chai = require('chai'); // eslint-disable-line import/newline-after-import
const expect = chai.expect;
const app = require('../../index');

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('## Movie APIs', () => {
  let movie = {
    title: 'KK123',
    releaseDate: '11/11/11',
    genres: [
      { name: 'horror' },
      { name: 'suspense' }
    ]
  };

  describe('# POST /api/movies', () => {
    it('should create a new movie', (done) => {
      request(app)
        .post('/api/movies')
        .send(movie)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.title).to.equal(movie.title);
          expect(res.body.releaseDate).to.equal(movie.releaseDate);
          expect(res.body.genres[0]).to.include(movie.genres[0]);
          expect(res.body.genres[1]).to.include(movie.genres[1]);
          movie = res.body;
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/movies/:movieId', () => {
    it('should get movie details', (done) => {
      request(app)
        .get(`/api/movies/${movie._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.title).to.equal(movie.title);
          expect(res.body.releaseDate).to.equal(movie.releaseDate);
          expect(res.body.genres[0]).to.include(movie.genres[0]);
          expect(res.body.genres[1]).to.include(movie.genres[1]);
          done();
        })
        .catch(done);
    });

    it('should report error with message - Not found, when movie does not exists', (done) => {
      request(app)
        .get('/api/movies/56c787ccc67fc16ccc1a5e92')
        .expect(httpStatus.NOT_FOUND)
        .then((res) => {
          expect(res.body.message).to.equal('Not Found');
          done();
        })
        .catch(done);
    });
  });

  describe('# PUT /api/movies/:movieId', () => {
    it('should update movie details', (done) => {
      movie.title = 'KK';
      request(app)
        .put(`/api/movies/${movie._id}`)
        .send(movie)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.title).to.equal('KK');
          expect(res.body.releaseDate).to.equal(movie.releaseDate);
          expect(res.body.genres[0]).to.include(movie.genres[0]);
          expect(res.body.genres[1]).to.include(movie.genres[1]);
          done();
        })
        .catch(done);
    });
  });

  describe('# GET /api/movies/', () => {
    it('should get all movies', (done) => {
      request(app)
        .get('/api/movies')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });

    it('should get all movies (with limit and skip)', (done) => {
      request(app)
        .get('/api/movies')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body).to.be.an('array');
          done();
        })
        .catch(done);
    });
  });

  describe('# DELETE /api/movies/', () => {
    it('should delete movie', (done) => {
      request(app)
        .delete(`/api/movies/${movie._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.title).to.equal('KK');
          expect(res.body.releaseDate).to.equal(movie.releaseDate);
          expect(res.body.genres[0]).to.include(movie.genres[0]);
          expect(res.body.genres[1]).to.include(movie.genres[1]);
          done();
        })
        .catch(done);
    });
  });
});
