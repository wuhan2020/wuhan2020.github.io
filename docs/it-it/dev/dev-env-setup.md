# Processo di Github Repo
## Indirizzo di download di Git Repository
- Indirizzo principale per il download: https://github.com/wuhan2020/wuhan2020.git  -- wuhan(Nome inizio filiale)
- indirizzo di download del progetto API: https://github.com/wuhan2020/api-server.git -- api
- Indirizzo di download di REST-api: https://github.com/wuhan2020/rest-api.git  -- rest
- Indirizzo di download della visualizzazione della mappa: https://github.com/wuhan2020/map-viz.git -- map
- indirizzo di download dell'applicazione Web: https://github.com/wuhan2020/WebApp.git  -- web
- Servizio di sincronizzazione dei dati: https://github.com/wuhan2020/data-sync.git  -- data
- Servizio di archiviazione dati Json: https://github.com/wuhan2020/shimo-sheet2json.git --json

# Programmatore di sviluppo / processo di download dei test
* `git clone *** ` 

#### Copia repository diversi in locale, è meglio creare il tuo ramo per ogni problema e creare rami che iniziano con il nome del progetto, ad esempio:
* `Scansione degli ultimi dati relativi alle epidemie con Python`, `Assegnato al centurione-crawler` uso `wuhan-pythonspider-centurion`

* `Suggerimenti per la visualizzazione della pagina`, `Assegnato a zhuangbiaowei` uso `Web-paura della presentazione-Zhuang Biaowei`

#### Dopo aver apportato modifiche nella succursale locale, passare al master della succursale remota o upstream L'amministratore organizzerà e deciderà le modifiche o accetterà le modifiche. 
* `git branch {branch-name} `
* `git branch -a`
* `git checkout {branch-name}`
* `git push --set-upstream origin {branch-name}`
* `git commit -m "message"`
* `git push`

**Assicurarsi che la richiesta pull abbia autorizzazioni sufficienti fornite dall'autore per essere unite nel ramo principale**

