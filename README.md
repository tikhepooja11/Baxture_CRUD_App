Hello There, I have tried to complete all mandatory requirements from 1 to 5 along with Bonus points 6 & 7. I have implemented the project with mentioned technical requirements.

Technical requirements
1. Task can be implemented on Javascript or Typescript
2. Using 18 LTS version of Node.js
3. Asynchronous API's
4. Upload your code to GitHub


Implementation details ->
1. Implemented all endpoint api/users:
      1.1 CreateUser -  POST api/users
            server status code 201 -  newly created record
            server status code 400 -  if request body does not contain required fields
   
      1.2 ListAllUsers - GET api/users is used to get all persons
            server status code 200 -  On successfull response for entire user list (sending empty array on empty user list)
            server status code 500 -  if any internal server error for async request.
     
      1.3 ListUserById - GET api/users/{userId}
            server status code 200 -  On successfull user fetch from database.
            server status code 400 -  if userId is invalid (not uuid)
            server status code 404 -  if record with id === userId does not exist
   
      1.4 UpdateUserById - PUT api/users/{userId} is used to update existing user
            server status code 200 -  On successfull user updation.
            server status code 400 -  if userId is invalid (not uuid)
            server status code 404 -  if record with id === userId does not exist
   
      1.5 deleteUser - DELETE api/users/{userId} is used to delete existing user from database
            server status code 204 -  On successfull user deletion with no content.
            server status code 400 -  if userId is invalid (not uuid)
            server status code 404 -  if record with id === userId does not exist

2.  Users are stored as objects that have described properties - completed 
3.  Requests to non-existing endpoints - completed 
4.  server side error handling with human friendly message - completed
5.  Maintained .env file for PORT number - completed

Bonus Points ->
6.  Two modes of running application (development and production): - completed
        Added cross-env as a dependency: npm i cross-env - To set environment variables in a cross-platform manner.
        Modified the script in package.json from 
        
       "scripts": {
       "start": "nodemon server.js",
       "test": "echo \"Error: no test specified\" && exit 1"
       },
  
        to
           
        "scripts": {
        "start:dev": "nodemon server.js",
        "start:prod": "cross-env NODE_ENV=production node server.js",
        "test": "echo \"Error: no test specified\" && exit 1"
        },
        
      Used cross-env NODE_ENV=production to set the NODE_ENV variable to "production" before running the node server.js command.
      
      application in development mode using: - npm run start:dev   (changed normal command of npm start to specifying the environment name)
      application in production mode using: - npm run start:prod

7.   There could be some tests for API (not less than 3 scenarios). Example of test scenario: completed
   
      7.1  Sending empty array if no user in list on listing all users.
      7.2  Sending newly created user record on user creation
      7.3  Sending created record on ListUserById
      7.4  Deleting a created object with confirmation of successful deletion by sending status code - 204 No content 
      7.5  Handled ListUser with the deleted user ID does not exist


     Few Snapshots ->

     ![Screenshot (76)](https://github.com/tikhepooja11/Baxture_CRUD_App/assets/47672660/cc595d38-23f1-48b4-9ded-6aae1e133bb7)

     ![Screenshot (75)](https://github.com/tikhepooja11/Baxture_CRUD_App/assets/47672660/8c4ea0f7-ce71-41c2-b414-923204ef0c86)

     ![Screenshot (77)](https://github.com/tikhepooja11/Baxture_CRUD_App/assets/47672660/483313f7-b6e2-40c5-b848-63df23b9cdca)

     ![Screenshot (78)](https://github.com/tikhepooja11/Baxture_CRUD_App/assets/47672660/d9034723-3086-4f24-91dc-0a7145e54a80)


     
