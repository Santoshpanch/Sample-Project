user-service/
│
├── pom.xml
├── Dockerfile
├── src/
│   └── main/
│       ├── java/com/example/userservice/
│       │   ├── UserServiceApplication.java
│       │   ├── controller/
│       │   │   └── UserController.java
│       │   ├── entity/
│       │   │   └── User.java
│       │   ├── repository/
│       │   │   └── UserRepository.java
│       │   └── service/
│       │       └── UserService.java
│       │
│       └── resources/
│           └── application.properties

cd ../user-service
docker build -t paymentology-user-service:1.0 .

sudo apt update
sudo apt install maven -y