# Boilerplate HTML 5 pour le cours de JavaScript 2019-2020

Ceci est version très simplifiée inspirée du célèbre [boilerplate html 5](https://html5boilerplate.com/) adapté au cours de JavaScript.

La compilation des fichiers SCSS et JS se fait à l'aide de [laravel-mix](https://laravel-mix.com/). Les fichiers sources se retrouvent dans le dossier `src`.


## Installation 
1. Installer la dernière version stable de [node](https://nodejs.org/en/download/) sur votre PC.
1. Installer la dernière version stable de [npm](https://www.npmjs.com/get-npm) sur votre PC.

Vous pouvez vérifier la version de `node` et `npm` avec les commandes suivantes. 

Node : 
```
node -v
```
NPM :
```
npm -v
```


### Installation des dépendances
```
npm install --only=dev
```

## Utilisation
Afin d'avoir une bonne compréhension de l'environnement proposé, je vous invite à lire l'article de [JeffreyWay](https://github.com/JeffreyWay/laravel-mix/blob/master/docs/installation.md) qui présente `Laravel Mix` et son utilisation. 

Vous pouvez compiler vos fichiers sources à l'aide de la commande 
```
npm run prod
```
Vous pouvez aussi demander une compilation automatique provoquée par le changement des fichiers sources. 
Pour cela vous devez lancer la commande suivante.

```
npm run watch
```


