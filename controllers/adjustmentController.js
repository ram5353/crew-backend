const db = require("../models");
const Adjustment = db.adjustments;

const addAdjustment = async (req, res) => {
  // Save Adjustment to Database
  Adjustment.create({
    adjustment_type: req.body.adjustment_type,
    adjustment_amount: req.body.adjustment_amount,
    adjustment_date: Date.now(),
    adjustment_description: req.body.adjustment_description,
    adjustment_status: req.body.adjustment_status,
    adjustment_created_at: Date.now(),
    adjustment_updated_at: Date.now(),
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Adjustment.",
      });
    });
};

const getAllAdjustment = async (req, res) => {
  Adjustment.findAll({
    attributes: [
      "id",
      "adjustment_type",
      "adjustment_amount",
      "adjustment_date",
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving adjustments.",
      });
    });
};

const getAdjustmentById = async (req, res) => {
  const id = req.params.id;

  Adjustment.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Adjustment with id=" + id,
      });
    });
};

module.exports = {
    addAdjustment,
    getAllAdjustment,
    getAdjustmentById
}