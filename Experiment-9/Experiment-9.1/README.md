# JWT Authentication Demo – Spring Boot

A simple and secure **Spring Boot** project demonstrating **JWT-based authentication** with user registration, login, and protected endpoints.

---

## Features

- User Registration (`/register`) – Public endpoint
- User Login (`/login`) – Returns JWT token
- Secured Endpoint (`/hello`) – Requires valid JWT
- JWT Token generation & validation
- Password encryption using **BCrypt**

---

## Project Overview

This experiment demonstrates a complete JWT authentication system using Spring Boot. It includes secure user registration, login functionality with JWT token generation, and protected endpoints that require valid authentication tokens.

---

## Technology Stack

- **Framework**: Spring Boot
- **Language**: Java
- **Security**: JWT (JSON Web Tokens)
- **Password Encryption**: BCrypt
- **Build Tool**: Maven

---

## API Endpoints

### 1. Register User

- **Method:** `POST`
- **Endpoint:** `/register`
- **Description:** Create a new user account

#### Request Body

```json
{
  "username": "testuser",
  "password": "password123"
}
```

#### Example

![Register User - Request](Screenshot%202026-04-24%20140316.png)

---

### 2. Login

- **Method:** `POST`
- **Endpoint:** `/login`
- **Description:** Authenticate user and receive JWT token

#### Request Body

```json
{
  "username": "testuser",
  "password": "password123"
}
```

#### Example

![Login - Request](Screenshot%202026-04-24%20140415.png)

#### Response

Returns a **JWT Token** which must be used for authenticated requests.

---

### 3. Access Secured Endpoint

- **Method:** `GET`
- **Endpoint:** `/hello`
- **Description:** Access protected resource (requires JWT token)

#### Headers

```
Authorization: Bearer <JWT_TOKEN>
```

#### Example

![Secured Endpoint - Request](Screenshot%202026-04-24%20140606.png)

---

## How It Works

1. **User Registration**: New users register with username and password
2. **Password Encryption**: Passwords are encrypted using BCrypt before storage
3. **User Login**: User provides credentials and receives a JWT token upon successful authentication
4. **Token Usage**: JWT token is included in the Authorization header for accessing protected endpoints
5. **Token Validation**: Server validates the JWT token for each request to secured endpoints

---

## Getting Started

### Prerequisites

- Java 8 or higher
- Maven
- Postman or similar API testing tool

### Setup

1. Clone the repository
2. Navigate to the project directory
3. Build the project:
   ```bash
   mvn clean install
   ```
4. Run the application:
   ```bash
   mvn spring-boot:run
   ```
   The application will start on `http://localhost:8080`

---

## Testing the API

### Step 1: Register a User

Send a POST request to `/register` with username and password.

### Step 2: Login

Send a POST request to `/login` with the same credentials to receive a JWT token.

### Step 3: Access Protected Endpoint

Send a GET request to `/hello` with the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## Security Features

- **JWT Tokens**: Stateless authentication using JSON Web Tokens
- **BCrypt Hashing**: Secure password encryption
- **Token Validation**: Server-side validation of tokens for protected endpoints
- **Expiration**: Tokens have configurable expiration times

---

## Project Structure

```
Experiment-9.1/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── [Java source files]
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/
├── pom.xml
└── README.md
```

---

## Notes

- Keep JWT tokens secure and never expose them in logs or version control
- Tokens should be transmitted over HTTPS in production
- Consider implementing token refresh mechanisms for better security
- Adjust token expiration time based on your security requirements

---

## License

This project is part of the Full Stack Development curriculum (Semester 6).
