# Internship Management System
## Developtment by BillowDev (Akkarapon Phikulsri)

<h3 align="center">internship-management-system-nextjs-node-ts</h3>
<h4 align="center">RESTFul API</h4>
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
   
  </ol>
</details>


## About The Project
<br />
<!-- [![Product Name Screen Shot][product-screenshot]]() -->
App starter rest-api with node.js fastify sequelize postgresql redis-cache - typescript
</p>
<p align="right">(<a href="#top">back to top</a>)</p>

### Structure
#### Routes-Handlers-Servicess-Structure
```
📦server
 ┣ 📂database
 ┃ ┣ 📂thai_address_csv
 ┃ ┃ ┣ 📜districts.csv
 ┃ ┃ ┣ 📜provinces.csv
 ┃ ┃ ┗ 📜sub_districts.csv
 ┃ ┣ 📜internship_management_system_db.sql
 ┃ ┣ 📜internship_management_system_db.tar
 ┃ ┣ 📜tb_districts.sql
 ┃ ┣ 📜tb_provinces.sql
 ┃ ┗ 📜tb_sub_districts.sql
 ┣ 📂mockup
 ┃ ┗ 📜internship-management-system.postman_collection.json
 ┣ 📂src
 ┃ ┣ 📂config
 ┃ ┃ ┣ 📂swagger
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┗ 📜swagger.option.ts
 ┃ ┃ ┣ 📜config.ts
 ┃ ┃ ┣ 📜database.config.js
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂errors
 ┃ ┃ ┣ 📜article.errors.ts
 ┃ ┃ ┣ 📜auth.errors.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂handlers
 ┃ ┃ ┣ 📜auth.handler.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜user.handler.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜auth.hook.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜protectedRoutes.hook.ts
 ┃ ┣ 📂interfaces
 ┃ ┃ ┗ 📂types
 ┃ ┃ ┃ ┣ 📂handlers
 ┃ ┃ ┃ ┃ ┗ 📜auth.handler.types.ts
 ┃ ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┃ ┗ 📜auth.hook.types.ts
 ┃ ┃ ┃ ┣ 📂models
 ┃ ┃ ┃ ┃ ┣ 📜address.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜coInternship.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜company.model.type.ts
 ┃ ┃ ┃ ┃ ┣ 📜contactPerson.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜director.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜district.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜education.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜hometownAddress.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜internship.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜presentAddress.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜province.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜student.model.types.ts
 ┃ ┃ ┃ ┃ ┣ 📜subDistrict.model.types.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.model.types.ts
 ┃ ┃ ┃ ┗ 📂services
 ┃ ┃ ┃ ┃ ┗ 📜user.service.types.ts
 ┃ ┣ 📂migrations
 ┃ ┃ ┗ 📜migration.js
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜Address.model.ts
 ┃ ┃ ┣ 📜CoInternship.model.ts
 ┃ ┃ ┣ 📜Company.model.ts
 ┃ ┃ ┣ 📜ContactPerson.model.ts
 ┃ ┃ ┣ 📜Director.model.ts
 ┃ ┃ ┣ 📜District.model.ts
 ┃ ┃ ┣ 📜Education.model.ts
 ┃ ┃ ┣ 📜HometownAddress.model.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜Internship.model.ts
 ┃ ┃ ┣ 📜PresentAddress.model.ts
 ┃ ┃ ┣ 📜Province.model.ts
 ┃ ┃ ┣ 📜Student.model.ts
 ┃ ┃ ┣ 📜SubDistrict.model.ts
 ┃ ┃ ┗ 📜User.model.ts
 ┃ ┣ 📂redis
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜redisClient.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📂swagger-schema
 ┃ ┃ ┃ ┣ 📜article.route.schema.ts
 ┃ ┃ ┃ ┣ 📜auth.route.schema.ts
 ┃ ┃ ┃ ┗ 📜users.route.schema.ts
 ┃ ┃ ┣ 📜auth.route.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜users.route.ts
 ┃ ┣ 📂seeders
 ┃ ┃ ┗ 📜seeders.js
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜user.service.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜custom-error.ts
 ┃ ┃ ┗ 📜logger.ts
 ┃ ┣ 📜app.spec.ts
 ┃ ┗ 📜app.ts
 ┣ 📜.eslintrc.ts
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.ts
 ┣ 📜.sequelizerc
 ┣ 📜index.ts
 ┣ 📜jest.config.ts
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┣ 📜yarn.lock
 ┗ 📜[.]env
```

### Built With

* [NodeJs](https://nodejs.org/)
* [Sequelize](https://sequelize.org/)
* [Postgres](https://www.postgresql.org/)
* [Fastify](https://www.fastify.io/)
* [Jest](https://jestjs.io/)
* [Swagger](https://swagger.io/)
* [Redis](https://redis.io/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/billowdev/internship-management-system-nextjs-node-ts.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

