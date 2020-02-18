<!-- TOC -->

- [Guide de contribution](#guide-de-contribution)
  - [Soumettre des données](#soumettre-des-données)
  - [Soumettre une issue ou initialiser une pull request](#soumettre-une-issue-ou-initialiser-une-pull-request)
    - [0. Soumettre une issue](#0-soumettre-une-issue)
    - [1. S'assigne une tâche](#1-sassigne-une-tâche)
    - [2. Fork le dépôt](#2-fork-le-dépôt)
    - [3. Cloner le dépôt](#3-cloner-le-dépôt)
    - [4. Créer une nouvelle  `branch`](#4-créer-une-nouvelle--branch)
    - [5. Modifier le contenu](#5-modifier-le-contenu)
    - [6. Synchroniser des modifications de upstream dépôt](#6-synchroniser-des-modifications-de-upstream-dépôt)
    - [7. Envoyer des nouvelles modifications](#7-envoyer-des-nouvelles-modifications)
    - [8. Créer une nouvelle `Pull Request`](#8-créer-une-nouvelle-pull-request)
    - [9. Gérer un conflit de merge](#9-gérer-un-conflit-de-merge)
    - [10. Après le merge, vous pouvez：](#10-après-le-merge-vous-pouvez)
  - [Robot spécifications](#robot-spécifications)
  - [Rejoignez-nous sur Slack](#rejoignez-nous-sur-slack)
  
<!-- /TOC -->

# Guide de contribution
## Soumettre des données
**C'est le dépôt principal, toutes les importations de données sont effectuées automatiquement par des scripts. Veuillez ne pas envoyer de données directement à ce dépôt. Pour soumettre des données, merci de lire [README](../../zh-cn/dev/README.md)**。

> Cette plateforme utilise Shimo (une suite de productivité basée sur le cloud) pour collecter des données. Les données seront automatiquement soumises au ce dépôt sous forme de Rps par scripts.

> Parce qu'il y a beaucoup de contributeurs, nous ne donnerons pas l'autorisation de modification à tout le monde, veuillez remplir un formulaire [ici](https://shimo.im/forms/YVJkGrGCWwQPTpqY/fill). Nous vous donnerons l'autorisation appropriée.


## Soumettre une issue ou initialiser une pull request
Dans ce guide, nous vous expliquerons comment soumettre une nouvelle issue ou initialiser une pull request. Bienvenue à contribuer au **wuhan2020** ! 

### 0. Soumettre une issue

Si vous avez des bonnes idées, cliquez [ici](https://github.com/wuhan2020/wuhan2020/issues) pour créer une nouvelle  `issue`, nous vous contactons dès que possible.

Lorsque vous soumettez une nouvelle  `issue`, veuillez vérifier le type de  `issue` et l'expliquer dans le titre. L'issue sera classée automatiquement:

-   hôpital: information sur hôpitaux
-   usine: informations sur la fabrication et le produit
-   logistique: informations logistiques
-   hôtel: information de hôtel
-   donation：information de donation
-   clinique：informations de la clinique volontaire
-   news：news sur l'anti-épidémiques COVID-19
-   doc: documentation
-   bug： bug rapport
-   fonction: nouvelle fonction

### 1. S'assigne une tâche

> **Travaillons ensemble à passer cette période difficile pour lutter contre le coronavirus !!**

Sélectionner une tâche dans la liste [Liste d'issue](https://github.com/wuhan2020/wuhan2020/issues), puis s'assigne cette tâche  `/self-assign`. Le robot du projet vous assigne `Assignees` automatiquement cette tâche dans `issue`. 

```
/self-assign
```

Voir l'image ci-dessous：

![self-assign 示意图](/images/docs/self-assign.png)

### 2. Fork le dépôt

Accéder au  [wuhan2020](https://github.com/wuhan2020/wuhan2020). Fork le dépôt au votre compte.

![Fork 仓库](/images/docs/fork-repo.png)

> Nota Bene :  les commandes suivantes sont être effectuées dans la console, [Git](https://git-scm.com/) est nécessaire.

### 3. Cloner le dépôt

Retournez sur votre GitHub page，trouvez le dépôt _wuhan2020_ ，faites une commande pour `clone` au local, ex:

```bash
# replace the XXX with your own user name
git clone git@github.com:XXX/wuhan2020.git
cd wuhan2020
```

### 4. Créer une nouvelle  `branch`

> Il est déconseillé de se développer sur la branche master sauf en cas de restauration urgente.

Selon l'objectif, créez une nouvelle branche et nommez-la de manière appropriée, exécutez comme ceci :

```bash
git checkout -b my-fix-branch master
```

### 5. Modifier le contenu

Modifier le file correspondant, puis le soumettre:

```bash
git add .
git commit -m "hotel: update HOTEL.csv, fix #1"
```

Attention :

(1) clarifier en une phrase ce qui a été fait

(2) Liée à `issue`，par exemple `fix #1` 、`close #2`、`#3`

S'il y a des modifications après le `commit` , utiliser le paramètre `--amend`：

```bash
git add .
git commit --amend -sm "hotel: update HOTEL.csv, fix #1"
```

### 6. Synchroniser des modifications de upstream dépôt

Pour éviter la synchronisation des modifications de upstream dépôt ([wuhan2020/wuhan2020](https://github.com/wuhan2020/wuhan2020) )，il est nécessaire de synchroniser votre dépôt local avec upstream：

```bash
$ git remote add upstream git@github.com:wuhan2020/wuhan2020.git
$ git fetch upstream
```

Si des modifications ont déjà été apportées au upstream, exécuter d'abord `rebase` :

```bash
$ git rebase upstream/master
```

### 7. Envoyer des nouvelles modifications 

```bash
$ git push -f origin my-fix-branch:my-fix-branch
```

### 8. Créer une nouvelle `Pull Request`

Créer une  `pull request` au upstream en cliquant le bouton "New pull request". Voir l'image ci-dessous:

![pull-request](/images/docs/pull-request.png)

![open-pr](/images/docs/open-pr.png)
Si quelqu'un d'autre  `review` la pull request et doit apporter des changements, il peut faire les modifications dans cette pull request, puis exécuter les commandes suivantes, la PR synchronisera automatiquement `commit`.

```bash
git add .
git commit --amend
git push -f origin my-fix-branch
```

### 9. Gérer un conflit de merge

> Nota bene : si pas de conflit, ne pas faire cette étape.

-   Sync avec upstream dépôt

```bash
git fetch upstream
```

-   Exécuter `rebase`:

```bash
git rebase upstream/master
```

-   Résolvez manuellement le conflit, puis le soumettez

```bash
git add my-fix-file
git rebase --continue
git push -f origin my-fix-branch
```

### 10. Après le merge, vous pouvez：

-   Revenez à  `master`：

```bash
git checkout master -f
```

-   Synchoniser  `master` avec upstream branche：

```bash
git pull --ff upstream master
```

-   Supprimer la branche local (facultatif):

```bash
git branch -D my-fix-branch
```

-   Supprimer la branch à distante (facultatif)：

```bash
git push origin --delete my-fix-branch
```

## Robot spécifications

Ce projet a obtenu l'accès au robot GitHub :`Menbotics`，il fait：

-   **Taguer `Issue` automatiquement**：Veuillez consulter [0. Soumettre une issue](#0-soumettre-une-issue) pour plus détails
-   **Assigner la tâche**：Veuillez consulter [1. S'assigne une tâche](#1-s-assigne-une-t-che)
-   **Merge automatiquement**：Quand une Pull Request a été soumise, la personne qui a le droit peut `/approve`  pour merger la branche automatiquement.

Pour plus détails de configuration, veuillez consulter [hypertrons.json](./.github/hypertrons.json), par exemple, pour savoir qui a le droit de merge.

## Rejoignez-nous sur Slack

Nous avons [Slack groupe](https://join.slack.com/t/wuhan2020/shared_invite/enQtOTQxMTU4MzgyNTYwLWIxMTMyNWI4NWE2YTk3NGRjZGJhMjUzNmJhMjg1MDQ3OTEzNDE5NGY4MWFhMjRlYWU4MmE3ZGQyOGU4N2YwMzY), où ces canaux de frontend backend et la synchronisation des données sont déjà préparés, rejoignez-nous sur Slack pour une meilleure communication sur des thèmes techniques et non techniques.
Travaillons ensemble à passer cette période difficile pour lutter contre le coronavirus !
