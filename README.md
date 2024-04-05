How to run the app
- `npm install`
- `npm start`
 will start the server on port `4000`

- I have added mongodb as database.
- I have not write the test cases because of some time limit but i can write good test cases.
- also can add auth and paging options

Task Apis
- POST `/task` - Create a new task.
- GET `/task/:id` - Retrieve a task by its ID.
- PUT `/task/:id` - Update a specific task.
- DELETE `/task/:id` - Delete a specific task.
- GET `/tasks` - Retrieve all tasks.
- GET `/tasks?assignedTo=[username]` - Retrieve all tasks assigned to a specific user.
- GET `/tasks?category=[categoryName]` - Retrieve all tasks under a specific category.
