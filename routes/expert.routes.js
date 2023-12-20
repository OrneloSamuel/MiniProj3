const express = require('express');
let router = express.Router();
const ExpertController = require('../controllers/expert.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .get(AuthController.checkAuth, ExpertController.get)
    .post(AuthController.checkAuth, [body('name').isString(),
        body('description').isString(),
        body('photo_one').isURL(),
        body('photo_two').isURL(),
        body('photo_three').isURL(),
        body('facebook').isURL(),
        body('instagram').isURL(),
        body('twitter').isURL(),
        body('linkedin').isURL(),
        body('animals.*.animal').isString(),
        body('animals.*.description').isString(),
        sanitizeBody('name').whitelist(CONFIG.sanitize.alphabet),
        sanitizeBody('description').whitelist(CONFIG.sanitize.alphabet + CONFIG.sanitize.numerical),
        sanitizeBody('animals.*.description').whitelist(CONFIG.sanitize.alphabet + CONFIG.sanitize.numerical)
    ], ExpertController.create);

router.route("/deactivate/:id")
    .put(AuthController.checkAuth, [param("id").isMongoId()], ExpertController.deactivate);

router.route("/activate/:id")
    .put(AuthController.checkAuth, [param("id").isMongoId()], ExpertController.activate);

router.route('/:id')
    .get(AuthController.checkAuth, [param("id").isMongoId()], ExpertController.getOne)
    .put(AuthController.checkAuth, [param("id").isMongoId()], ExpertController.update)
    .delete(AuthController.checkAuth, [param("id").isMongoId()], ExpertController.delete);

module.exports = router;