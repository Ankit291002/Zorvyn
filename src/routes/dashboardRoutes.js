const router = require("express").Router();
const auth = require("../middleware/auth");
const {getSummary} = require("../controllers/dashboardController");

router.get("/summary",auth,getSummary);

module.exports = router;
