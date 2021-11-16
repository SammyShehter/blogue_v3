# Blogue_v3 #
Deno REST API
***
#### To run: ####
- First be sure that docker and docker-compose are installed on your machine
- Run commands below:
```sh
docker-compose up -d
deno run --allow-net --allow-env --import-map=import_map.json app.ts
```

***
#### Verify the deployment by navigating to your server address in your preferred browser. ####

```sh
127.0.0.1:8000
```

***
#### Some important moments. ####
- import_map.json is temp solution for DenoDB dependencies errors
you can find issue here - https://github.com/eveningkid/denodb/issues/303