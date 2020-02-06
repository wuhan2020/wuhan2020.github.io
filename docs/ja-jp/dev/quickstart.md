[简体中文](./README.md) | [English](./README_EN.md) | 日本語 | [Italiano](./README_IT.md)

# 新型コロナウイルス関連肺炎（2019-nCoV）情報共有サイト
11:00（CST）1/31/2020時点で更新,最新のアップデートについては、中国語版と英語版を確認してください。

2020年初、武漢市に発生した新型コロナウイルス関連肺炎に対し、各病院、ホテル、工場、物流、寄贈、寄付金、予防、治療、活動などを統一収集又は公表、お互いに情報共有、又は有効に社会資源を上手く利用する出来るようにすることを目的としています。中国湖北省武漢より発生した新型コロナウイルス（2019-nCoV）と効率的に戦っていきます。すべてのコードはオープンソースであり、収集されたデータは慎重にレビュー・検証されたうえで、一般に公開されます。

本プロジェクトはデータウェアハウスをメインとして、すべてのデータはスクリプトを使用し自動導入されています。**_直接データウェアハウスに提出することはご遠慮ください_**，具体的な提出ルートは以下を参照してください。

## 協力フローチャート

本プログラムでは皆さんが円滑に進めるために、以下のフローチャートを組み立てました。

![img](https://yokii.cn/i/en.jpg)

提供された情報は、データの検証やレビューを除いてすべて自動的に処理されるため、手動での作業は必要ありません。

## メインオープンソース

### データ同期

- コードリポジトリ： https://github.com/wuhan2020/data-sync

### webフロントエンド開発

- コードリポジトリ：https://github.com/wuhan2020/WebApp
- 応用サイト：https://wuhan2020.kaiyuanshe.cn/

### API サービス

- コードリポジトリ：https://github.com/wuhan2020/api-server

### ストーリーマップコンポーネント

- コードリポジトリ：https://github.com/wuhan2020/map-viz

### (shimo)ファイル同期コンポーネント

- コードリポジトリ：https://github.com/wuhan2020/shimo-sheet2json

## 情報提供

本プロジェクトで収集する情報は以下のように分類されています。それぞれに記入してください。

本プロジェクトは(shimo)ファイルを利用して、情報収集を行います。そして、すべてのデータはスクリプトを使用し自動導入されてます。直接ファイルを書き換えることはご遠慮ください。

参加人数が多いため、全ての人に編集権限を与えることができません。[ここ](https://shimo.im/forms/YVJkGrGCWwQPTpqY/fill)をクリックして申し込むと、招待メールが送られます。

### (shimo)ファイル編集リンク：

- [病院](https://shimo.im/sheets/q6WP3DpKKgVW63Pr/4WbFN/ )
- [ホテル](https://shimo.im/sheets/Hd9C3QytrJK3RWxG/z1rye/)
- [物流](https://shimo.im/sheets/RTHXp3ghtKXY3GcC/MODOC/)
- [生産](https://shimo.im/sheets/pchvJ6ddyRHHdXtv/MODOC/)
- [寄贈](https://shimo.im/sheets/W3gxW6cwkYTDY6DD/)
- [無料診療](https://shimo.im/sheets/JgXjYCJJTRQxJ3GP/MODOC/)
- [在外武漢観光客の宿泊先](https://shimo.im/sheets/pdHRcXyKqJdqPyGJ/MODOC/)

もし新しいファイルを作りたい場合、[新規ファイル申し込み]（https://shimo.im/forms/rcThp3vPqqrtvChV/fill ）を記入してください。


## 貢献ガイド

ここを[クリック](./CONTRIBUTING.md)してください。

## 情報収集ガイド
ここを[クリック](./INFORMATION_GUIDE.md)してください。


# Slack 交流グループ
[ここ](https://join.slack.com/t/wuhan2020/shared_invite/enQtOTI2NTU1NzU3MTM2LWQ1YjIzMDllYjYzYTE1OTNhMWU4OTZkOGYzOGJhOWM2MzdlMjgwMmZiOWEzYTQwNmJkZDI4OWRmM2Q2ZDM1MTc)をクリックすると参加できます

## Slackチャンネルナビゲーション
(最初にグループに参加する必要があります)

| お名前     | リンク     |
|-----------|----------|
| デフォルトチャンネル        | [![Github](https://img.shields.io/badge/Slack%20Channel-%23anti--2019--ncov-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CSS83MZUK)              |
| 一般情報リリース       | [![Github](https://img.shields.io/badge/Slack%20Channel-%23general-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CSTGKFRCH)                       |
| デザインスキルグループ | [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--designer-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT70SHJQ0)                |
| 製品要件管理チーム     | [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--requirement--management-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT99VDWS2) |
| フロントエンド開発チーム| [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--frontend-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT93L48H5)                |
| バックエンド開発チーム  | [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--backend-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT93MCEJK)                 |
| サブプロジェクト：データ同期| [![Github](https://img.shields.io/badge/Slack%20Channel-%23proj--data--sync-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT4AV807P)              |
| サブプロジェクト：Webフロントエンド | [![Github](https://img.shields.io/badge/Slack%20Channel-%23proj--front--pages-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CSTPXN533)            |
| サブプロジェクト：データマップの視覚化 | [![Github](https://img.shields.io/badge/Slack%20Channel-%23proj--map--visualization-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT6HW3X8E)      |
| サブプロジェクト：APIサーバー| [![Github](https://img.shields.io/badge/Slack%20Channel-%23api--server-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT3V5CDKJ)                   |
| 提案       | [![Github](https://img.shields.io/badge/Slack%20Channel-%23help--advisement-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CT7AABP53)              |
| 中国本土外              | [![Github](https://img.shields.io/badge/Slack%20Channel-%23team--overseas-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CTAM5R65U)                |
| Slackチャネル運用チーム      | [![Github](https://img.shields.io/badge/Slack%20Channel-%23proj--operation-green.svg?style=flat-square&colorB=blue)](https://app.slack.com/client/TT5U1VCPQ/CSX1X74M9)               |

初心者の方も経験者の方も貢献出来るように心からお待ちしております！こころをあわせて、一緒に危機を乗り越えましょう！

# FAQ （更新中，ボランティア募集中）

よくある質問，[クリック](../overview/faq.md)

情報グループFAQ，[クリック](https://shimo.im/docs/JqX9CvrqphPV9T3J/)

クリックしてください[shimoファイル](https://shimo.im/docs/DdWvXvtvpxrqrJ83)

翻訳者 Sakula Air, Yoki, 校正者 Yoki W, [RRF](https://github.com/RRFHOUDEN)
