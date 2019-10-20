# Boilerplate JavaScript
> A JS boilerplate use at HEPL for DCC.

* * *

**Boilerplate_JS** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *
Ceci est une version très simplifiée inspirée du célèbre [boilerplate html 5](https://html5boilerplate.com/) adapté au cours de JavaScript.

La compilation des fichiers SCSS et JS se fait à l’aide de [laravel-mix](https://laravel-mix.com/). Les fichiers sources se retrouvent dans le dossier `src`.


## Installation 
1. Installer la dernière version stable de [node](https://nodejs.org/en/download/) sur votre PC.
1. Installer la dernière version stable de [npm](https://www.npmjs.com/get-npm) sur votre PC.

Vous pouvez vérifier la version de `node` et `npm` avec les commandes suivantes. 

Node: 
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
Afin d’avoir une bonne compréhension de l’environnement proposé, je vous invite à lire l’article de [JeffreyWay](https://github.com/JeffreyWay/laravel-mix/blob/master/docs/installation.md) qui présente `Laravel Mix` et son utilisation. 

Vous pouvez compiler vos fichiers sources à l’aide de la commande 
```
npm run prod
```
Vous pouvez aussi demander une compilation automatique provoquée par le changement des fichiers sources. 
Pour cela vous devez lancer la commande suivante.

```
npm run hot
```

## ESLint pour une syntaxe plus méthodique
Je vous invite à suivre les instructions proposées par [Wes Bos][https://github.com/wesbos] [ici][https://github.com/wesbos/eslint-config-wesbos]


Rem : Si vous utiliser [PhpStorm](https://www.jetbrains.com/phpstorm/) vous pouvez demander à ce qu’il respecte les règles définit dans le fichier `.eslintrc`, comme cela est décrit [ici](https://www.jetbrains.com/help/idea/eslint.html). Attention, il s’agit d’une configuration spécifique au _projet_ si vous souhaitez en faire une configuration par défaut vous devez vous rendre dans le menu `File`>`Other Settings` > `Preferences for New Projects...`. 

 



