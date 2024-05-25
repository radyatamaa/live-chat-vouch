# Live Chat Vouch

## Date of Submission
May 24, 2024

## Instructions to Run App Locally
### System Requirement
- Nodejs 12.14.0
- MongoDB
- Docker (optional)

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/radyatamaa/live-chat-vouch.git
    cd live-chat-vouch
    ```

2. install packages:
    ```sh
    cd backend
    npm install

    cd frontend
    npm install
    ```
    
3. copy enviroment config:
    ```sh
    cd backend
    cp .env.example
    
    cd frontend
    cp .env.example
    ```
4. set these enviroment config .env backend and frontend:
    ```sh
    // backend
    DATABASE_DIALECT=mongo
    DATABASE_URI=mongodb://localhost:27017 -> example local connection mongodb 
    DATABASE_NAME=live_chat -> name of database
    
    // frontend
    REACT_APP_BACKEND_URL=http://localhost:5000/
    ```
        
4. run the app :
    ```sh
    cd backend
    npm start

    cd frontend
    npm start
    ```

5. Access the application:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend: [http://localhost:5000](http://localhost:5000)
      
### Steps with docker

1. Clone the repository:
    ```sh
    git clone https://github.com/radyatamaa/live-chat-vouch.git
    cd live-chat-vouch
    ```

2. Build and start the containers:
    ```sh
    docker-compose up --build
    ```

3. Access the application:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend: [http://localhost:5000](http://localhost:5000)

### Note
Ensure that ports 3000 and 5000 are free on your machine.

### App
#### Join page
![join-page](/doc/join-page.png)
#### Chat desktop mode
![join-page](/doc/chat-desktop-mode.png)
#### Chat mobile web mode
![join-page](/doc/chat-mobile-mode.png)
#### API Doc Swagger
![join-page](/doc/swagger.png)

### Clean Archetecture Doc 
[https://github.com/radyatamaa/live-chat-vouch/backend/README.md](https://github.com/radyatamaa/live-chat-vouch/tree/dev/backend#readme)

## Time Spent
I spent approximately 48 hours on the assignment.

## Assumptions Made
- The application will be run using Docker and Docker Compose or run as locally.
- The backend API runs on port 5000, and the frontend application is served on port 3000.
- Basic environment setup for development is sufficient (NODE_ENV=development).

## Shortcuts/Compromises Made
- Error handling and logging mechanisms were minimal for simplicity.
- Comprehensive testing was not included due to time constraints.
- Simplified environment configurations for demonstration purposes.

## Production Readiness
### Testing
- Implement unit and integration tests for both frontend and backend.
- Use a CI/CD pipeline to automate testing, building, and deployment processes.

### Scalability
- Utilize a load balancer to distribute traffic across multiple instances.
- Implement auto-scaling policies based on traffic patterns.
- Optimize Docker images and minimize the size for faster deployment.

### Security
- Use environment variables for sensitive configurations and secrets.
- Implement HTTPS for secure communication.
- Regularly update dependencies to mitigate known vulnerabilities.
- Conduct security audits and penetration testing.

## Exclusions
- Detailed logging and monitoring setups were not included.
- Advanced CI/CD pipeline configuration was omitted due to time limitations.

## Additional Information
- The application is designed to be modular and clean architecture and can be extended with additional features as needed.
- Future enhancements could include user authentication and role-based access control.

## Feedback
This technical challenge was well-structured and covered a broad range of skills. To make it even better, consider providing specific requirements for testing and performance benchmarks.

