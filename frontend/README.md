# CARBONARA

Lancer le projet : 

 ```sh
 docker compose build --pull --no-cache 
 ```
 ```sh
docker compose up 
 ```
 ```sh
 docker compose exec frontend npm i (optionnel) 
 ```
 ```sh
docker compose exec backend npm run seed 
 ```

## .env Frontend 

```sh
VITE_API_ULR='https://localhost:9000'
```


## .env Backend 
```sh
ENV=development
JWT_SECRET=secret

POSTGRES_PASSWORD=password 
POSTGRES_USER=root
POSTGRES_DB=db
```

Compte Consutlant : 
- consultant@hotmail.fr
- password

Compte Admin : 
 - admin@hotmail.fr
 - password

## Les fonctionnalités inclus
- Dashboard pour retrouver toutes les infos utiles
- Liste des utilisateurs 
- Les skills et les quests qui apportent des XP et qui sont pour le moment des QCM qui sont créés par les tech lead
- Les reviews des clients
- Les articles rédigés par les RH et les commerciaux qui peuvent être commenté par les consultants
- Les rappels d’anniversaire des consultants

## Les fonctionnalités à venir
- Un chat instantané implémentant l’API SLACK
- Un module météo qui permet de recenser le bien-être des consultants chez les clients
- Filtre sur les compétences des consultant

## Groupe 

- Océane Renoux : https://github.com/Eliwena
- Coraline Esedji : https://github.com/coco-as-co
- Maxime Marchand : https://github.com/ThePiotrow
- Jeremy Jumpertz : https://github.com/jumpertz