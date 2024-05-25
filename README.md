# Live Chat Vouch

## Date of Submission
May 24, 2024

## Instructions to Run Assignment Locally

### Prerequisites
- Docker
- Docker Compose

### Steps

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. Build and start the containers:
    ```sh
    docker-compose up --build
    ```

3. Access the application:
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend: [http://localhost:5000](http://localhost:5000)

### Note
Ensure that ports 80 and 3000 are free on your machine.

## Time Spent
I spent approximately 28 hours on the assignment.

## Assumptions Made
- The application will be run using Docker and Docker Compose.
- The backend API runs on port 3000, and the frontend application is served on port 80.
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
- The application is designed to be modular and can be extended with additional features as needed.
- Future enhancements could include user authentication and role-based access control.

## Feedback
This technical challenge was well-structured and covered a broad range of skills. To make it even better, consider providing specific requirements for testing and performance benchmarks.

