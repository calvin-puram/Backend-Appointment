[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![license](https://img.shields.io/github/license/t-ho/mern-stack)](https://gitlab.com/calvin-puram/product-store/-/blob/master/LICENSE)

# Appointment App built by:

- Name: Calvin Job Puram
- Email: puram.calvin@gmail.com

### Express - NodeJS - Postgres - Sequelize

### PROJECT ARCHITECTURE

The development of this API took into account several specific needs. It is carefully crafted as one that can easily require updates and new features, taking into account the need for scalability, easy maintainance, performance and security. I have chosen to use the MODEL-VIEW CONTROLLER (MVC) architecture.

### Project Breakdown

**NOTE: The full API documentation can be found [here](https://documenter.getpostman.com/view/5936515/TVmJgy8R)**

A structure has been established for the implementation of rate-limiting, to circumvent DOS security vulnerabilities with the system.

- express-mongo-sanitize: which sanitizes user-supplied data to prevent MongoDB Operator Injection.
- helmet: secure the application by setting various HTTP headers.
- hpp: this protect the app against HTTP Parameter Pollution Attack

## Getting started

### 1. Clone the repository

```bash
git clone https://gitlab.com/calvin-puram/product-store.git
cd product-store
cp server/.env.example server/.env
# Edit all three .env files to meet your requirements
```

### 2. Install package dependencies

In the `root` directory, run:

```bash
npm install
npm run dev
```
