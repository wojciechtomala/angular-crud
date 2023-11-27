// DATABASE CONNECTION:
const mongoose = require('mongoose');
const {database} = require('../config');
// DB Connection:
mongoose.connect(database,{});