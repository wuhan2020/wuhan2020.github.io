# 貢献ガイド

<!-- TOC -->

- [貢献ガイド](#貢献ガイド)
  - [データを提供する](#データを提供する)
  - [issueを立ち上げる、またはPRを送る](#issueを立ち上げる、またはPRを送る)
    - [0. 新しいissueを立ち上げる](#0新しいissueを立ち上げる)
    - [1. 担当を名乗り出る](#1担当を名乗り出る)
    - [2. リポジトリをフォークする](#2リポジトリをフォークする)
    - [3. リポジトリをクローンする](#3リポジトリをクローンする)
    - [4. 新規`branch`の作成](#4新規`branch`の作成)
    - [5. 内容に変更を加え、`commit`する](#5内容に変更を加え、`commit`する)
    - [6. 上流リポジトリの変更を同期](#6上流リポジトリの変更を同期)
    - [7. リモートリポジトリに新規ブランチを`push`する](#7リモートリポジトリに新規ブランチを`push`する)
    - [8. `Pull Request`を作成する](#8`PullRequest`を作成する)
    - [9. 競合を解決する](#9競合を解決する)
    - [10. 統合終了後にできること](#10統合終了後にできること)
  - [プロジェクトのボットの説明](#プロジェクトのボットの説明)
  - [Slackで会いましょう](#Slackで会いましょう)

<!-- /TOC -->

## データを提供する

**このリポジトリはデータウェアハウスです。すべてのデータは、スクリプトによって自動でインポートされます。このリポジトリに直接データをコミットしないでください。データの送信については[データ収集ガイド](../../ja-ja/dev/information-guide.md)を参照してください。**。

> このプラットフォームでは、石墨文档(クラウドベースのオフィススイートサービス)を使用してデータを収集しています。データは、スクリプトが自動生成するプルリクエストによってリポジトリへと反映されます。リポジトリ内のデータは直接更新しないでください。
> 多くの参加者が存在するため、全員に完全な編集権限を与えることはありません。編集のためには[申請フォーム](https://shimo.im/forms/YVJkGrGCWwQPTpqY/fill)から申請を行ってください。

## issueを立ち上げる、またはPRを送る

このガイドでは、GitHubで貢献をする流れについて、できる限り詳細に説明します。`issue`を立ち上げて問題提起などを行うか、`Pull Request`を送信して具体的な改善案を提案できます。**wuhan2020はあなたの貢献を歓迎します！**

### 0. 新しいissueを立ち上げる

なにかアイデアを思いついた場合、[ここ](https://github.com/wuhan2020/wuhan2020/issues) から新たな`issue`（議論すべき話題・関心事）を提出してください。wuhan2020のボランティアが対応します。

新しい`issue`を作成する際には、以下のどのタイプに当てはまるか選択し、タイトルに含めてください。自動でタグ付が行われます。

- hospital: 病院関係する情報
- factory: 生産・製品に関係する情報
- logistical: 運輸に関係する情報
- hotel: ホテルに関係する情報
- donation：寄付に関係する情報
- clinic：無料の医師相談に関係する情報
- news：この新型コロナウイルスの流行予防に関する最新情報
- doc: ドキュメントについて
- bug： バグレポート
- feature: 新機能の提案

### 1. 担当を名乗り出る

> **誰もがこのプロジェクトに貢献し、ウイルス克服のために協力できることを心から願っています！**

[Issueリスト](https://github.com/wuhan2020/wuhan2020/issues)から担当したいタスクを見つけたら、`/self-assign`でアサインしてください。 botが自動で、`issue`の`Assignees`（担当者リスト）にあなたを追加します。

```text
/self-assign
```

下の画像のように行ってください。

![self-assign 解説画像](/images/docs/self-assign.png)

### 2. リポジトリをフォークする

[wuhan2020](https://github.com/wuhan2020/wuhan2020)のリポジトリを開き、あなたのアカウントから`Fork`してください。

![リポジトリのFork](/images/docs/fork-repo.png)

> 注意 : 以降はコンソールで実行します。[Git](https://git-scm.com/)が必要です。

### 3. リポジトリをクローンする

GitHubにてあなたのリポジトリ一覧を開き、_wuhan2020_リポジトリが正しくForkできていることを確認してください。
問題がなければ、以下のコマンドでリポジトリを`clone`してください。

```bash
# replace the XXX with your own user name
git clone git@github.com:XXX/wuhan2020.git
cd wuhan2020
```

### 4. 新規`branch`の作成

> 緊急でない限り、masterブランチを直接変更することは推奨されません。

目的に応じた名前をつけて、新しいブランチを作成します。

```bash
git checkout -b my-fix-branch master
```

### 5. 内容に変更を加え、`commit`する

ファイルに変更を加えたら、以下のように、変更を記録してください。

```bash
git add .
git commit -m "hotel: update HOTEL.csv, fix #1"
```

このとき、次の点に注意してください。

(1) 何を行ったか、1行の文で簡潔に説明する。

(2) 対象の`issue`と関連付ける。例: `fix #1`, `close #2`, `#3`

`commit`後、さらに変更を加えたい場合は`--amend`を使用してください。

```bash
git add .
git commit --amend -sm "hotel: update HOTEL.csv, fix #1"
```

### 6. 上流リポジトリの変更を同期

`Fork`元の上流リポジトリ（[wuhan2020/wuhan2020](https://github.com/wuhan2020/wuhan2020)）の変更との競合を避けるために、ローカルリポジトリは上流リポジトリに追従する必要があります。

```bash
$ git remote add upstream git@github.com:wuhan2020/wuhan2020.git
$ git fetch upstream
```

上流リポジトリにて新しい変更があった場合、最初に`rebase`してください。

```bash
$ git rebase upstream/master
```

### 7. リモートリポジトリに新規ブランチを`push`する

```bash
$ git push -f origin my-fix-branch:my-fix-branch
```

### 8. `PullRequest`を作成する

上流リポジトリに対して`pull request`を作成します。

![pull-request](/images/docs/pull-request.png)

![open-pr](/images/docs/open-pr.png)
他の人の`review`後に、それについて変更を加え、追加の`commit`を行うことがあります。その際は以下のように行ってください。

```bash
git add .
git commit --amend
git push -f origin my-fix-branch
```

### 9. 競合を解決する

> 注意 : 競合が起きなかった場合、この操作は必要ありません。

- 上流リポジトリと動機

```bash
git fetch upstream
```

- `rebase`の実行

```bash
git rebase upstream/master
```

- 手動で競合を解決し、送信する

```bash
git add my-fix-file
git rebase --continue
git push -f origin my-fix-branch
```

### 10. 統合終了後にできること

- `master`ブランチに戻る

```bash
git checkout master -f
```

- `master`ブランチを上流リポジトリと同期

```bash
git pull --ff upstream master
```

- ローカルブランチの削除（オプション）

```bash
git branch -D my-fix-branch
```

- リモートブランチの削除（オプション）

```bash
git push origin --delete my-fix-branch
```

## プロジェクトのボットの説明

このプロジェクトでは、`Menbotics`というGitHubボットを利用しています。
`Menbotics`は以下のことができます。

- **自動`issue`タグ付け**：詳細は[0. 新しいissueを立ち上げる](#0新しいissueを立ち上げる)を参照
- **タスクの申請**：詳細は[1. 担当を名乗り出る](#1担当を名乗り出る)を参照
- **自動マージ**：PR(Pull Request)が送られたとき、権限を持っているスタッフが`/approve`コマンドを用いると、自動でマージが行われます。

bot設定の詳細は[hypertrons.json](./.github/hypertrons.json)から確認できます。たとえば、マージ権限の所有者などを確認できます。

## Slackで会いましょう

さらに、私達は[Slack group](https://join.slack.com/t/wuhan2020/shared_invite/enQtOTQxMTU4MzgyNTYwLWIxMTMyNWI4NWE2YTk3NGRjZGJhMjUzNmJhMjg1MDQ3OTEzNDE5NGY4MWFhMjRlYWU4MmE3ZGQyOGU4N2YwMzY)にてフロントエンド・バックエンド・データ同期用などのチャンネルを用意しています。技術的なテーマと非技術的なテーマの両方で、より良いコミュニケーションのためにSlackで会いしましょう。目標達成のために、この厳しい期間を共に協力しましょう！
