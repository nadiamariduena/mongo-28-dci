/** CONNECT TO LOWDB */
const db = require("../lib/db-setup");

exports.getAllRecords = (req, res) => {
  let records = db.get("records").value();
  res.send(records);
};

exports.getRecord = (req, res) => {
  const { id } = req.params; // We want to return the informatio of the record with id 007

  // find record with the given ID in the JSON file
  const record = db.get("records").find({ id: id }).value();

  if (!record) {
    let error = new Error(`No record with id ${id}`);
    error.code = 404;
    // when we pass a param to next() function
    // THAT indicates to express, something went wrong!
    // express will call the generic error handler passing on the error
    return next(error);
    // res.send({ err: `No record with id ${id}` }); // res.send we do not do anymore for errors...
  } else {
    res.send(record);
  }
};

exports.addRecord = (req, res) => {
  const record = req.body;

  // generate a unique ID for the new record
  record.id = Date.now().toString();

  // add record to the JSON file
  db.get("records").push(record).write();

  res.send(record);
};

exports.updateRecord = (req, res) => {
  const { id } = req.params;
  const recordData = req.body;

  console.log("ID: ", id);
  console.log("Record data posted", recordData);

  // update record in JSON file
  const record = db.get("records").find({ id }).assign(recordData).write();

  res.send({
    record,
    message: `Record with id ${id} has been updated!`,
  });
};

exports.deleteRecord = (req, res) => {
  const { id } = req.params;

  // delete record with given ID from JSON file
  let recordDeleted = db.get("records").remove({ id }).write();

  res.send({
    record: recordDeleted,
    message: `Record with id ${id} has been deleted!`,
  });
};
