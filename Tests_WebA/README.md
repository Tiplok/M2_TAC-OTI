# M2_TAC-OTI
Module 'TAC - Outils de Tests d'Interfaces' du Master 2 e-services
Nicolas Vasseur - E-services FI

Tests JS sur le contrôle TP du module TAC - Web Avancé.
J'ai choisi la correction du contrôle TP du module TAC - Web Avancé pour avoir un projet correct en JavaScript à tester.

Le fichier rendu/Controle.pdf correspond aux consignes du contrôle TP pour mieux comprendre le contenu et les fonctionnalités du projet.

Dans le dossier ProjetJS, on a 3 dossiers :
  Avant : Projet JS initial, il n'y a pas encore de tests.
  Après : Projet JS après y avoir fait des tests QUnit.
  Après avec corrections Sonar : Projet JS avec les tests QUnit et avec les changements de code en se basant sur l'analyse de qualité du code de Sonar.

a) On retrouve aussi les sources du projet JS (après corrections) dans le dossier rendu/src

b) On retrouve les tests QUnit dans le dossier rendu/test
b²) On retrouve les tests SeleniumIDE dans le fichier dans rendu/SeleniumIDE_tests.html

c) Le fichier de configuration Sonar (pour le ProjetJS avec les corrections Sonar) est le fichier dans rendu/sonar-project.properties (On le retrouve aussi dans ProjetJS\Après avec corrections Sonar)

d) Dans chacun des dossiers de ProjetJS, on retrouve des captures d'écrans au format jpg avec les résultats d'analyse de Sonar.

e) Le fichier sonar.h2.db est directement dans le dossier rendu.

f) Rapport :

Tests :
  En QUnit sont écrits les tests orientés métier. Je teste les méthodes principales (ex: construction du tableau).
  Une partie des tests (projetjs_test.js) se concentre sur la méthode qui permet de définir le type de la case (aléatoire entre 1 et 3) et la construction du tableau qui nécessite des paramètres.
  Il est important que ces paramètres soient du bon type pour que la construction du tableau se fasse correctement.
  L'autre partie des tests (cellule_test.js) vérifie le bon comportement des différents types de cellules (mis à part CelluleAvecPrompt), on veut voir si la CelluleAvecEntier s'incrémente bien et si la CelluleColoree se noircit bien au fur et à mesure qu'on clique dessus.
  Avec SeleniumIDE, je teste directement l'interface dans le but de vérifier aussi le comportement de chaque cellule. Ca permet de voir si la gestion de l'évenement "click" est bien effectuée et que la case se modifie comme il faut.

Difficultés :
  Les principales difficultés rencontrés, ça était pour installer et lancer Sonar, j'ai rencontré beaucoup de problèmes et j'ai passé beaucoup de temps à comprendre ce qu'il était nécessaire de télécharger, ajouter à son path, comprendre comment tout cela fonctionnait...
  Globalement en QUnit, pas de difficulté majeure vu qu'on a bien pratiqué sur les TPs.
  Avec SeleniumIDE, j'ai dû chercher quelques informations pour certaines vérifications mais ça était plutôt rapide.

Améliorations apportées au code :
  J'ai amélioré le code en ajoutant dans le constructeur du tableau des conditions pour vérifier le type des paramètres, si celui-ci n'est pas correct, on renvoie une exception. Cela m'a permis d'ajouter des tests sur la levée d'exceptions.
  Ensuite, j'ai fait des changements suite à l'analyse de qualité du code de Sonar.

Ce que je pense des apports de tests et de leur mise en place :
  Les tests permettent de tester si le comportement de notre application est celle qu'on attend et aussi de voir si cela le reste au fur et à mesure du développement de celle-ci, dans le cas où on imagine une évolution de l'application.
  Le contrôle de qualité du code est intéressant pour avoir un aperçu global de notre code et permet de l'améliorer facilement. La couverture des tests permet de voir si nos tests sont assez complets.
  Faire des tests, c'est utile mais cela prend du temps et donc cela a un coût non négligable dans le développement d'une application.
