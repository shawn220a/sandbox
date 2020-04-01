const express = require("express");
const log = require("../models/logger");
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  log.selectAll(data => {
    let hbsObject = {
      logs: data
    };
    // console.log(hbsObject);
    res.render("viewer", hbsObject);
  });
});

router.post("/api/logs", (req, res) => {
  log.insertOne(["location"], [req.body.location], result => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/logs/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  // console.log("(in controller) condition", condition);

  // log.updateOne(
  //   {
  //     devoured: req.body.devoured
  //   },
  //   condition,
  //   result => {
  //     if (result.changedRows === 0) {
  //       // If no rows were changed, then the ID must not exist, so 404
  //       return res.status(404).end();
  //     }
  //     res.status(200).end();

  //   }
  // );
});

// Export routes for server.js to use.
module.exports = router;
