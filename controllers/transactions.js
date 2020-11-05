// @desc Get All Transactions
//@route GET /api/v1/transactions
//@access Public
exports.getTransactions = (req, res, next) => {
  res.send("GET Reqest!!");
};

// @desc Add Transactions
//@route POST /api/v1/transactions
//@access Public
exports.addTransactions = (req, res, next) => {
  res.send("POST Reqest!!");
};

// @desc Delete Transactions
//@route DELETE /api/v1/transactions/:id
//@access Public
exports.deleteTransactions = (req, res, next) => {
  res.send("DELETE Reqest!!");
};
