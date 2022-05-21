const express = require("express");
const router = express.Router();
const {
    getAllJobs,
    createListing,
    deleteListing
} = require("../controllers/listing")

router.route("/").get(getAllJobs);
router.route("/").post(createListing);
router.route("/:id").delete(deleteListing);

module.exports = router