### Run with docker

Depedencies: docker, docker-compose.

Step 1 - build project:

```bash
$ docker-compose build
```

Step 2 - get up containers:

```bash
$ docker-compose up
```

To build release, run:

```bash
$ docker-compose run web npm dist
```

### Run without docker

Depedencies: node > 4.0, npm.

```bash
$ npm install && npm start
```

#### Server will run on port 8000.
