 const taskBuilder = require('../controller/task_controller');
const test_data = require('../controller/test_data');

module.exports = (app) => {
    app
        .route('/task')
        .get(taskBuilder.list_all_task)
        .post(taskBuilder.create_a_task)
    app
        .route('/task/:taskId')
        .get(taskBuilder.read_a_task)
        .put(taskBuilder.update_a_task)
        .delete(taskBuilder.delete_a_task)  
    app
      .route('/test_data')
      .get(test_data.fine_all)
      console.log('get test data')
} 

