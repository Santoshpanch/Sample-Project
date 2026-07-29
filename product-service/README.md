product-service/
│
├── pom.xml
├── Dockerfile
├── src/
│   └── main/
│       ├── java/com/example/productservice/
│       │   ├── ProductServiceApplication.java
│       │   ├── controller/
│       │   │   └── ProductController.java
│       │   ├── entity/
│       │   │   └── Product.java
│       │   ├── repository/
│       │   │   └── ProductRepository.java
│       │   └── service/
│       │       └── ProductService.java
│       │
│       └── resources/
│           └── application.properties

cd ../product-service
docker build -t paymentology-product-service:1.0 .