# Github Repo processamento
## Git Repositórios endereços para download 
- Ponto principal wuhan2020：https://github.com/wuhan2020/wuhan2020.git  -- wuhan（branch prefix start with）
- api projeto： https://github.com/wuhan2020/api-server.git -- api
- REST-api projeto https://github.com/wuhan2020/rest-api.git  -- rest
- mapa visualização： https://github.com/wuhan2020/map-viz.git -- map
- aplicação web： https://github.com/wuhan2020/WebApp.git  -- web
- simulação de dados：https://github.com/wuhan2020/data-sync.git  -- data
- armazenamento de dados em JSON：https://github.com/wuhan2020/shimo-sheet2json.git --json

# Desenvolvimento/QA git clone processo:
* `git clone *** `

#### copiar vários repositórios para o local，criar branches de acordo com as issues com seu nome e nome do projeto, comece com um prefixo，por exemplo：
* `用Python爬取最新疫情数据`, `allocated to centurion-crawler` with utilizing  `wuhan-pythonspider-centurion`

* `对于页面展示的建议`, `allocated to zhuangbiaowei` with utilizing `web-pagepresentation-zhuangbiaowei` 

#### após modificar a branch local, envia as alterações para a branch remota na master. Um autorizador tem o direito de decidir usar, modificar ou mergear
* `git branch {branch-name} `
* `git branch -a`
* `git checkout {branch-name}`
* `git push --set-upstream origin {branch-name}`
* `git commit -m "message"`
* `git push`

**Certifique-se de que sua solicitação de recebimento tenha o direito ou a autorização para ser mesclada com a master; caso contrário, entre em contato com o autor do projeto, verifique se não está bloqueado**

