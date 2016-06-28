/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/stat              ->  index
 * POST    /api/stat              ->  create
 * GET     /api/stat/:id          ->  show
 * PUT     /api/stat/:id          ->  update
 * DELETE  /api/stat/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import {Stat} from '../../sqldb';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    return entity.updateAttributes(updates)
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Cards
export function index(req, res) {
  return Stat.findAll()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Cards from the DB
export function show(req, res) {
  return Stat.find({
    where: {
      id: req.params.id
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Cards from the DB
export function showByName(req, res) {
  return Stat.find({
    where: {
      name: req.params.name
    }
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
