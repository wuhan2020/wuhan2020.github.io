<!-- TOC -->

- [Guia para contribuição](#Guia para contribuição)
  - [Para submeter](#Para submeter)
  - [Para submeter um problema ou iniciar um pull request](#Para submeter um problema ou iniciar um pull request)
    - [0、Para submeter uma nova questão](#0Para submeter uma nova questão)
    - [1、Reinvidicar tarefas](#1Reinvidicar tarefas)
    - [2、Para 'forkar' este repositório](#2Para 'forkar' este repositório)
    - [3、Clonar o repositório](#3Clonar o repositório)
    - [4、Para criar `branch`](#4Para criar `branch`)
    - [5、Para modificar um conteúdo e submeter](#5Para modificar um conteúdo e submeter)
    - [6、Sincronização de alterações na branch principal](#6Sincronização de alterações na branch principal)
    - [7、Para enviar a nova branch para o repositório remoto](#7Para enviar a nova branch para o repositório remoto)
    - [8、Para criar `Pull Request`](#8Para criar `Pull Request`)
    - [9、Para resolver conflitos de merge](#9Para resolver conflitos de merge)
    - [10、Após o merge , você pode](#10Após o merge , você pode)
  - [Robot especificações](#Robot especificações)
  - [Nos encontre no slack](#Nos encontre no slack)

<!-- /TOC -->

# Guia para contribuição
## Para submeter
**Este é o repositório principal, todos os dados inseridos são realizados de forma automatizada por scripts. Então, por favor não submeta neste repositório diretamente. Para submeter , por favor verifique [README](../../pt-br/dev/README.md)**。

> Esta plataforma utiliza Shimo (a cloud-based productivity suite) para coletar informações. Os dados serão automaticamente submetidos para o repositório em forma de pull requests por scripts.

> Como existem muitos colaboradores, não daremos a todos a autoridade
para editar, por favor preencha o formulário da aplicação [aqui](https://shimo.im/forms/YVJkGrGCWwQPTpqY/fill). Nós iremos lhe convidar para inserir certas informações em planilhas ou formulários.


## Para submeter uma nova questão ou iniciar um pull request
Nenste guia, iremos descrever como submeter uma nova questão ou inicializar um pull request, detalhado como possível. Bem vindo a conribuir para **wuhan2020** !

### 0、Para submeter uma nova questão

Se você tiver alguma ideia boa , clique [aqui](https://github.com/wuhan2020/wuhan2020/issues) para submeter uma questão `issue` nossos voluntários irão discutir com você sobre isso.

Quando submeter uma nova `issue`， por favor se atente ao tipo de `issue` e explique no título. A issue será tagueada automaticamente：

-   hospital: informação relacionada a hospitais
-   factory: informação relacionada a fabricação e produção
-   logistical: informação de logistica
-   hotel: informação relacionada a hotéis
-   donation：informação relacionada a doações
-   clinic：informação relacionada a clinica voluntária
-   news：novidades na COVID-19 prevenção de epidemia
-   doc: sobre a documentacão
-   bug： report de bug
-   feature: novas funcionalidades

### 1、Para reinvicar uma tarefa

> **Vamos trabalhar juntos neste período difícil para lutar contra o coronavírus !!**

Selecione uma tarefa da [Issue List](https://github.com/wuhan2020/wuhan2020/issues). e reinvidique usando `/self-assign`. O robô do projeto irá automaticamente assinar `Assignees` na `issue` para você mesmo automaticamente.

```
/self-assign
```

Mostrado como o seguinte:

![self-assign](/images/docs/self-assign.png)

### 2、Para forkar este repositório

Visite [wuhan2020](https://github.com/wuhan2020/wuhan2020). E depois fork em sua própria conta.

![Fork](/images/docs/fork-repo.png)

> Nota Bene :  the following commands are supposed to be done in console, [Git](https://git-scm.com/) is needed.

### 3、Clone the repository

Back to your won GitHub page，find the _wuhan2020_ that you just forked，enter it, `clone` it to local, like :

```bash
# replace the XXX with your own user name
git clone git@github.com:XXX/wuhan2020.git
cd wuhan2020
```

### 4、Para criar uma `branch`

> Não é recomendado resenvolver na branch master, a menos que seja um caso urgente.

De acordo com o objetivo, crie uma branch e apropriadamente nomeei-a , desta forma :

```bash
git checkout -b my-fix-branch master
```

### 5、Para modificar um conteúdo e submeter

Modifique o arquivo correspondente e envie :

```bash
git add .
git commit -m "hotel: update HOTEL.csv, fix #1"
```

Preste atenção para :

(1) esclarecer em uma frase o que foi feito

(2) relacione a `issue`，por exemplo `fix #1` 、`close #2`、`#3`

Se tiver uma modificação após o `commit` , use o parametro `--amend`：

```bash
git add .
git commit --amend -sm "hotel: update HOTEL.csv, fix #1"
```

### 6、Sincronização de alterações na branch principal

Para evitar a Sincronização de alterações na branch principal ([wuhan2020/wuhan2020](https://github.com/wuhan2020/wuhan2020) )， ;e necessário sincronizar seu repositório local com o principal：

```bash
$ git remote add upstream git@github.com:wuhan2020/wuhan2020.git
$ git fetch upstream
```

Se já tiver alterações no repositório principal, por favor execute `rebase` primeiro :

```bash
$ git rebase upstream/master
```

### 7、Para enviar a nova branch para o repositório remoto

```bash
$ git push -f origin my-fix-branch:my-fix-branch
```

### 8、Para criar um `Pull Request`

Criar um `pull request` ao repositório principal. Como mostra:

![pull-request](/images/docs/pull-request.png)

![open-pr](/images/docs/open-pr.png)
Se outras pessoas precisarem fazer alterações após a revisão, modificar o conteúdo relevante e executar as seguintes operações, o PR sincronizará automaticamente o `commit`。

```bash
git add .
git commit --amend
git push -f origin my-fix-branch
```

### 9、Para resolver conflitos de merge

> Nota bene : se nenhum conflito ocorrer, não é necessário fazer isto

-   Sincronize no repositório principal

```bash
git fetch upstream
```

-   Execute `rebase`:

```bash
git rebase upstream/master
```

-   Manualmente resolve os conflitos, depois envie

```bash
git add my-fix-file
git rebase --continue
git push -f origin my-fix-branch
```

### 10、Após o merge , você pode：

-   Voltar para a `master`：

```bash
git checkout master -f
```

-   Master a `master` atualizada e sincronizada com a branch principal:

```bash
git pull --ff upstream master
```

-   Deletar a branch local (opcional):

```bash
git branch -D my-fix-branch
```

-   Deletar a branch remota (opcional)：

```bash
git push origin --delete my-fix-branch
```

## Especificações do robô

Este projeto tem o acesso autorizado ao robô do Github :`Menbotics`，ele pode:

-   **Tag `Issue` automaticamente**：Por favor verifique [0、Para submeter uma nova questão](#0Para submeter uma nova questão) para mais detalhes
-   **Para reinvidicar tarefa**：Por favor verifique [1、Reinvidicar tarefas](#1Reinvidicar tarefas)
-   **Merge automaticamente**：Quando a PR(Pull Request) é submetido，aqueles que possuem autorização irão utilizar `/approve` para mergear automaticamente.

Para mais detalhes da configuração do robô, por favor verifique [hypertrons.json](./.github/hypertrons.json)，por exemplo, para ver quem tem autorização de merge.

## Encontre-nos no Slack

Além disso , nós temos nosso [Grupo Slack](https://join.slack.com/t/wuhan2020/shared_invite/enQtOTI2NTU1NzU3MTM2LWQ1YjIzMDllYjYzYTE1OTNhMWU4OTZkOGYzOGJhOWM2MzdlMjgwMmZiOWEzYTQwNmJkZDI4OWRmM2Q2ZDM1MTc)，onde esses canais para front-end back-end e sincronização de dados já estiverem preparados, encontre-nos no Slack para uma melhor comunicação sobre temas técnicos e não técnicos.
Vamos trabalhar juntos nesse período difícil para lutar contra o coronavírus!

---
Tradutor: [@kevenleone](https://github.com/kevenleone)
