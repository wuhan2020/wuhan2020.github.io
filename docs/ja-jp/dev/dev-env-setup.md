# Github Repoプロセス
## Git Repositoryアドレスをダウンロードする
- 主なダウンロード先：https://github.com/wuhan2020/wuhan2020.git  -- wuhan（分支开始名称）
- api項目はアドレスをダウンロードする： https://github.com/wuhan2020/api-server.git -- api
- REST-apiアドレスをダウンロードする： https://github.com/wuhan2020/rest-api.git  -- rest
- 地図を可視化します： https://github.com/wuhan2020/map-viz.git -- map
- webアプリケーションのアドレス： https://github.com/wuhan2020/WebApp.git  -- web
- データ同期サービス：https://github.com/wuhan2020/data-sync.git  -- data
- Jsonデータ保存サービス：https://github.com/wuhan2020/shimo-sheet2json.git --json

# プログラマー/テストダウンロードの流れ
* `git clone *** ` 

#### 異なるrepoをローカルにコピーし、各issueごとに異なるbranchを作成し、項目名の先頭にブランチを作成する：
* `Pythonを用いて最新の疫学データを取得した`, `centurion-crawlerに割り当てた` 使用 `wuhan-pythonspider-centurion`

* `ページの表示についてのアドバイス`, `zhuangbiaoweiに割り当てられている` 使用 `web-pagepresentation-zhuangbiaowei`

#### ローカルbranchで変更を行った後,pushからリモートブランチmasterまたはupstream.を管理者が一括整理して変更または修正を受ける 
* `git branch {branch-name} `
* `git branch -a`
* `git checkout {branch-name}`
* `git push --set-upstream origin {branch-name}`
* `git commit -m "message"`
* `git push`

**あなたのpull requestは、master分岐に合流できる十分な権限を作者が提供することを保証します**

