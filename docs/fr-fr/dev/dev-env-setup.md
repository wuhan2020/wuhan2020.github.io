# Github dépôt procédures
## Git dépôt adresses de téléchargement
- Point majeur wuhan2020：https://github.com/wuhan2020/wuhan2020.git  -- wuhan（préfixe de branche commencer par）
- api projet： https://github.com/wuhan2020/api-server.git -- api
- REST-api projet： https://github.com/wuhan2020/rest-api.git  -- rest
- Visualisation de carte： https://github.com/wuhan2020/map-viz.git -- map
- Application web： https://github.com/wuhan2020/WebApp.git  -- web
- Simulation de données：https://github.com/wuhan2020/data-sync.git  -- data
- Json données：https://github.com/wuhan2020/shimo-sheet2json.git --json

# Développeur/ QA git clone procédure:
* `git clone *** `

#### copier code au local, créer des branches en fonction des problèmes avec votre propre nom et nom de projet, commencer par un préfixe fixe, par exemple:
* `Obtenir les dernières données d'épidémie via Python`, `allocated to centurion-crawler` avec  `wuhan-pythonspider-centurion`

* `Conseil sur l'interface des pages`, `allocated to zhuangbiaowei` avec `web-pagepresentation-zhuangbiaowei` 

#### Une fois vous avez fini vos modifications sur la branche locale, les poussez vers la branche distante pour la branche master ou upstream. L'administrateur a le droit de décider de l'utiliser ou le modifier.
* `git branch {branch-name} `
* `git branch -a`
* `git checkout {branch-name}`
* `git push --set-upstream origin {branch-name}`
* `git commit -m "message"`
* `git push`

**Assurez-vous que vous avez le droit de merger une pull request au master. Veuillez contacter l'administrateur, si vous avez des prolèmes.**

