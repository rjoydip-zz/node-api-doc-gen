var express = require('express');
var router = express.Router();

/**
 * @api {get} / Request all users
 * @apiName GetUsers
 * @apiGroup User
 */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 * 
 * @apiErrorExample {json} Success-Response:
 *     HTTP/1.1 200 Success
 *     {
 *       "username": "string"
 *       "email": "string"
 *     }
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get('/user/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
