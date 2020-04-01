const orm = require("../config/orm");

const log = {
  selectAll: (cb) => {
    // console.log("made it to burger");
    orm.selectAll("logs", res => {
      // console.log("made it to burger2")
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: (cols, vals, cb) => {
    orm.insertOne("logs", cols, vals, res => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("logs", objColVals, condition, res => {
      cb(res);
    });
  }
};

module.exports = log;