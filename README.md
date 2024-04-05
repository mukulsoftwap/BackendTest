How to run the app
- `npm install`
- `npm start`
 will start the server on port `4000`

Task Apis
- POST `/task` - Create a new task.
- GET `/task/:id` - Retrieve a task by its ID.
- PUT `/task/:id` - Update a specific task.
- DELETE `/task/:id` - Delete a specific task.
- GET `/tasks` - Retrieve all tasks.
- GET `/tasks?assignedTo=[username]` - Retrieve all tasks assigned to a specific user.
- GET `/tasks?category=[categoryName]` - Retrieve all tasks under a specific category.
