# Plateforme de collecte d'informations anti-épidémiques 2019-nCoV
Cette traduction a été mise à jour le 07/01/2020.

Ce projet vise à collecter des informations sur les hôpitaux, les hôtels, les usines, la logistique, les dons, les contributions, la prévention, le traitement et toutes informations à partir de sources fiables pour lutter contre le nouveau coronavirus 2019-nCoV. Il y a eu plusieurs cas de pneumonie dans la ville de Wuhan, dans la province du Hubei, en Chine. 

Ce dépôt fonctionne comme l'entrepôt de données principal. Toutes les données que vous voyez ici sont importées automatiquement par des scripts. **_Veuillez NE PAS soumettre de données directement à ce dépôt_**. Veuillez référer aux autres sections de ce document pour la soumission des données. Tous les codes seront open-source et les données collectées seront soigneusement examinées / validées et mises à la disposition du public.

## Procédure de collaboration

Les procédures de la plateforme, voir l'image ci-dessous :

![img](https://yokii.cn/i/en.jpg)

Toutes les parties sont traitées automatiquement, à l'exception des révisions manuelles et des validations des données / informations.

##  Principaux sous-projets open-source

### Synchronisation des données

- Base de code : https://github.com/wuhan2020/data-sync

### Developpement Web Front-end  

- Base de code：https://github.com/wuhan2020/wuhan2020.github.io
- Environment de production：https://wuhan2020.github.io/

### API service

- Base de code：https://github.com/wuhan2020/api-server

### Composants de visualisation de carte

- Base de code：https://github.com/wuhan2020/map-viz

### Composant de synchronisation du service d'édition de formulaires en ligne (ShiMo)

- Base de code：https://github.com/wuhan2020/shimo-sheet2json

## Soumission des données

Les informations collectées par la plateforme incluent les types de données suivants, veuillez les classer et les soumettre séparément.

Cette plateforme utilise le service de documents en ligne [Shimo](https://shimo.im/welcome)  (qui est très similaire à Google Docs) pour collecter et stocker des données, et il existe un script cron qui synchronise les données avec le référentiel de données / entrepôt. Veuillez NE PAS modifier les fichiers de données directement dans le dépôt / entrepôt.

En raison du grand nombre de participants, l'autorisation de modification n'est pas accordée pour tout le monde par défaut, cliquez sur [ici](https://shimo.im/forms/YVJkGrGCWwQPTpqY/fill) pour soumettre votre demande de candidature, nous vous enverrons un e-mail pour y accéder dès que possible.

### Service de documents en ligne [Shimo](https://shimo.im/welcome) Lien de modification：

- [HÔPITAL](https://shimo.im/sheets/q6WP3DpKKgVW63Pr/4WbFN/)
- [HÔTEL](https://shimo.im/sheets/Hd9C3QytrJK3RWxG/z1rye/)
- [LOGISTIQUES](https://shimo.im/sheets/RTHXp3ghtKXY3GcC/MODOC/)
- [FABRICATION](https://shimo.im/sheets/pchvJ6ddyRHHdXtv/MODOC/)
- [DON](https://shimo.im/sheets/W3gxW6cwkYTDY6DD/)
- [CLINIQUES LIBRES / BÉNÉVOLES](https://shimo.im/sheets/JgXjYCJJTRQxJ3GP/MODOC/)

## Guide de contribution

Cliquez [ici](contributing.md)

## Data and information collection guide
Cliquez [ici](information-guide.md)

# Slack Communication Groupe

Cliquez ici pour rejoindre au [Slack Communication Groupe](https://join.slack.com/t/wuhan2020/shared_invite/enQtOTQxMTU4MzgyNTYwLWIxMTMyNWI4NWE2YTk3NGRjZGJhMjUzNmJhMjg1MDQ3OTEzNDE5NGY4MWFhMjRlYWU4MmE3ZGQyOGU4N2YwMzY)

## Slack canal navigation

(Vous devez d'abord rejoindre le groupe Slack en suivant le lien ci-dessus)

| Nom de canal             | Lien              |
|----------------------------|----------------------|
| Canal par défaut            | [![Github](https://img.shields.io/badge/Slack%20Channel-%23anti--2019--ncov-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CSS83MZUK)              |
| Info Général           | [![Github](https://img.shields.io/badge/Slack%20Channel-%23general-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CSTGKFRCH)                       |
| L'équipe de Designers             | [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--designer-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT70SHJQ0)                |
| L'équipe d'exigences / gestion des produits    | [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--requirement--management-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT99VDWS2) |
| L'équipe de Frondend Folks            | [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--frontend-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT93L48H5)                |
| L'équipe de Backend Folks             | [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--backend-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT93MCEJK)                 |
| Sous Projet: Sync de donnée       | [![Github](https://img.shields.io/badge/Slack%20Channel-%23proj--data--sync-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT4AV807P)              |
| Sous Projet: Web Front pages    | [![Github](https://img.shields.io/badge/Slack%20Channel-%23proj--front--pages-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CSTPXN533)            |
| Sous Projet: Visualisation de carte | [![Github](https://img.shields.io/badge/Slack%20Channel-%23proj--map--visualization-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT6HW3X8E)      |
| Sous Projet: API Serveur      | [![Github](https://img.shields.io/badge/Slack%20Channel-%23api--server-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT3V5CDKJ)                   |
| Conseils aux officiels       | [![Github](https://img.shields.io/badge/Slack%20Channel-%23help--advisement-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT7AABP53)              |
| L'équipe de Oversea Folks               | [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--overseas-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CTAM5R65U)                |
| L'équipe de Slack Operations canal      | [![Github](https://img.shields.io/badge/Slack%20Channel-%23proj--operation-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CSX1X74M9)               |

# Liste d'Email

wuhan2020 liste d'email: [wuhan2020@googlegroups.com](https://groups.google.com/forum/#!forum/wuhan2020) ([inscription](mailto:wuhan2020+subscribe@googlegroups.com), [desinscription](mailto:wuhan2020+unsubscribe@googlegroups.com), [archivage](https://groups.google.com/forum/#!forum/wuhan2020))

Tout le monde est invité à se réunir pour à exprimer son opinion technique ou non technique. Travaillons tous ensemble pour atteindre un objectif commun : lutter contre le 2019-nCoV !

# FAQ

FAQ arrangé, [cliquez ici](../overview/faq.md).

FAQ de Groupe Technologique, [cliquez ici](https://shimo.im/docs/JqX9CvrqphPV9T3J/).

Suivi [Shimo Document](https://shimo.im/docs/DdWvXvtvpxrqrJ83)

---
Traducteur : [@AnnaCICI](https://github.com/AnnaCICI)
