module.exports = {
    // process.env.PORT || STATIC:
    port: process.env.PORT || 3000,
    database: process.env.DATABASE || 'mongodb://127.0.0.1:27017/task-app'
};