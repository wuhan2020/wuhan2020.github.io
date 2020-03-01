# Risorse e work-flow del repository GitHub
## Indirizzi di download dei repository Git
- Indirizzo principale per il download: https://github.com/wuhan2020/wuhan2020.git  -- wuhan(Nome inizio filiale)
- Indirizzo di download del progetto API: https://github.com/wuhan2020/api-server.git -- api
- Indirizzo di download di REST-api: https://github.com/wuhan2020/rest-api.git  -- rest
- Indirizzo di download della visualizzazione della mappa: https://github.com/wuhan2020/map-viz.git -- map
- Indirizzo di download dell'applicazione Web: https://github.com/wuhan2020/WebApp.git  -- web
- Servizio di sincronizzazione dei dati: https://github.com/wuhan2020/data-sync.git  -- data
- Servizio di archiviazione dati JSON: https://github.com/wuhan2020/shimo-sheet2json.git --json

# Accesso alle risorse per lo sviluppo ed il test

* `git clone *** ` 

#### Occorre copiare i diversi repository in locale, ed è opportuno creare un `branch` dedicato per ogni `issue`, scegliendo una denominazione congruente con il titolo del progetto/funzione/modifica in oggetto ed il nome dell'assegnatario, ad esempio:
* per il tema `most recent epidemic data crawling in Python`, assegnato a `centurion-crawler`, può essere impiegato il titolo: `wuhan-pythonspider-centurion`;

* per il tema `suggestions about web-pages visualization`, assegnato a `zhuangbiaowei`, può essere impiegato il titolo: `web-pagepresentation-zhuangbiaowei`.

#### Dopo aver apportato le modifiche nel `branch` locale, effettuare il `push` verso il `branch` `master` o `upstream` remoto. Un amministratore deciderà se accettare o modificare il `merge`.
 
* `git branch {branch-name} `
* `git branch -a`
* `git checkout {branch-name}`
* `git push --set-upstream origin {branch-name}`
* `git commit -m "message"`
* `git push`

**Assicurarsi che la propria `pull request` sia provvista dei permessi di authorship sufficienti per poter effettuare il `merge` all'interno del `master` `branch`**

---
Translator: @jeremy0519  Proofreader: Stefano Ciulli (@sciulli)