Component 1 – Frontend (React)
frontend/
├── src/
│   ├── components/
│   │   ├── Users.jsx
│   │   ├── Products.jsx
│   │   └── Navbar.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── public/
├── package.json
├── Dockerfile
└── nginx.conf

Part 1: package.json, Dockerfile, nginx.conf, public/index.html
Part 2: src/index.js, src/App.js, src/services/api.js
Part 3: src/components/Navbar.jsx
Part 4: src/components/Users.jsx
Part 5: src/components/Products.jsx
Part 6: CSS files and README    


cd frontend
$ docker build -t paymentology-frontend:1.0 .