const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches with /api/users
router.route("/")
    .get(userController.findAll)
    .post(userController.create)

router.route("/:id")
    .get(userController.findOne)



module.exports = router;