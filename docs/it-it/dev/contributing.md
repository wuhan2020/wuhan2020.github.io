# Guida alla contribuzione

<!-- TOC -->

- [Guida alla contribuzione](#Guida-alla-contribuzione)
  - [Inviare dati ed informazioni](#Inviare-dati-ed-informazioni)
  - [Aprire `issue` e `pull request`](#Aprire-`issue`-e-`pull-request`)
    - [0、Aprire una `issue`](#Aprire-una-issue)
    - [1、Richiedere un `task`](#1Richiedere-un-`task`)
    - [2、Effettuare un `fork` di questo repository](#2Effettuare-un-`fork`-di-questo-repository)
    - [3、Clonare il repository](#3Clonare-il-repository)
    - [4、Creare un `branch`](#4Creare-un-`branch`)
    - [5、Apportare ed inviare modifiche ai contenuti](#5Apportare-ed-inviare-modifiche-ai-contenuti)
    - [6、Sincronizzare le modifiche del repository `upstream`](#6Sincronizzare-le-modifiche-del-repository-`upstream`)
    - [7、Inviare un nuovo `branch` al proprio repository remoto](#7Inviare-un-nuovo-`branch`-al-proprio-repository-remoto)
    - [8、Aprire una `pull request`](#8Aprire-una-`pull-request`)
    - [9、Risolvere conflitti di `merge`](#9Risolvere-conflitti-di-`merge`)
    - [10、Dopo aver effettuato un merge, puoi](#10Dopo-aver-effettuato-un-merge,-puoi)
  - [Funzioni del bot del progetto](#Funzioni-del-bot-del-progetto)
  - [Gruppo di discussione su Slack](#Gruppo-di-discussione-su-Slack)

<!-- /TOC -->

## Inviare dati ed informazioni

**Il presente repository è il principale archivio dati ed informazioni del progetto, l'importazione di tutti i dati viene effettuata automaticamente tramite script, si prega pertanto di non inserire mai direttamente dati ed informazioni nel repository, per conoscere i dettagli delle procedure di invio si invita a consultare [README](../../zh-cn/dev/README.md)**。

> Questa piattaforma utilizza Shimo (un pacchetto di strumenti basati su cloud per l'editing e la condivisione di documenti) per la raccolta di dati ed informazioni. I dati vengono inviati automaticamente al repository sotto forma di `pull request` (`pr`) attraverso opportuni script.

> Al fine di coordinare il lavoro dei volontari che hanno espresso interesse verso il progetto e garantire una certa coerenza procedurale, i permessi di editing delle diverse sezioni del progetto non vengono rilasciati automaticamente. Si prega di riempire la scheda di partecipazione [qui](https://shimo.im/forms/YVJkGrGCWwQPTpqY/fill), in questo modo vi invieremo un collegamento di invito per l'inserimento di informazioni in un documento specifico.

## Aprire `issue` e `pull request`
Questa guida ha l'obiettivo di descrivere più dettagliatamente possibile le procedure operative di `GitHub`, invitando tutti i partecipanti ad aprire nuove `issue` o apportare direttamente modifiche aprendo poi una `pull request`, dando così un prezioso contributo al progetto **wuhan2020**!

### 0、Aprire una `issue`

Chi abbia una qualsiasi idea o voglia sollevare un problema, è invitato a visitare [questa pagina](https://github.com/wuhan2020/wuhan2020/issues) per aprire una nuova `issue`, i volontari che partecipano al progetto ne discuteranno prontamente.

Al momento dell'apertura di una nuova `issue`, preghiamo di fare attenzione al tipo di `issue`  che si sta sottoponendo e di indicarlo chiaramente nella sua intestazione, in questo modo la `issue` verrà etichettata automaticamente:

-   hospital: informazioni relative ad ospedali e strutture sanitarie
-   factory: informazioni relative a lavorazioni e produzione
-   logistical: informazioni logistiche
-   hotel: informazioni relative ad alberghi e ristorazione
-   donation：informazioni relative a donazioni e contributi
-   clinic：informazioni relative a supporto medico gratuito
-   news：informazioni relative al flusso di notizie sulla prevenzione epidemica del COVID-19
-   doc: informazioni relative alla documentazione
-   bug: feedback relativi a bug ed errori
-   feature: nuove funzionalità

### 1、Richiedere un `task`

> **Confidiamo di cuore che tutti possano dare il loro piccolo contributo al progetto, per superare tutti assieme uniti questo momento difficile!**

Selezionare un compito dalla [lista delle `issue`](https://github.com/wuhan2020/wuhan2020/issues), quindi richiederne l'assegnazione attraverso l'inserimento di un commento contenente il tag `/self-assign`. Il bot del progetto assegnerà automaticamente l'utente tra gli `Assignees` (assegnatari) di quella specifica `issue`.

```
/self-assign
```

Si faccia riferimento alla seguente immagine di esempio：

![self-assign 示意图](/images/docs/self-assign.png)

### 2、Effettuare un `fork` di questo repository

Nella [home page GitHub di wuhan2020](https://github.com/wuhan2020/wuhan2020), è possibile effettuare il `Fork` della repository verso il proprio account, attraverso il pulsante indicato nella seguente immagine.

![Fork 仓库](/images/docs/fork-repo.png)

> Nota bene: le seguenti operazioni occorre siano eseguite in console da linea di comando, ed è necessario che [Git](https://git-scm.com/) sia installato.

### 3、Clonare il repository

Una volta tornati nella propria home page Git, occorre individuare il repository _wuhan2020_ di cui si è appena effettuato il `Fork`，entrare nella relativa pagina ed effettuare il `clone` in locale:

```bash
# sostituire XXX con il proprio username Git
git clone git@github.com:XXX/wuhan2020.git
cd wuhan2020
```

### 4、Creare un `branch`

> Tranne in casi di emergenza in cui si renda necessario un bug fix urgente, non è consigliato sviluppare modifiche direttamente nel master branch.

In accordo con lo scopo delle modifiche che si vuole apportare, si richiede di scegliere una denominazione appropriata e quindi creare un nuovo branch, analogamente al seguente esempio:

```bash
git checkout -b my-fix-branch master
```

### 5、Apportare ed inviare modifiche ai contenuti

Modificare il file relativo ai contenuti di interesse, una volta ultimate le modifiche inviarle come segue:

```bash
git add .
git commit -m "hotel: update HOTEL.csv, fix #1"
```

Al momento dell'invio delle modifiche, prestare attenzione a:

(1) spiegare chiaramente e concisamente in una frase cosa è stato fatto;

(2) fare riferimento alla eventuale `issue` relativa, per esempio `fix #1`, `close #2`, `#3`

Se successivamente al `commit` vengono apportate altre modifiche che fanno parte dello stesso intervento, è possibile utilizzare l'opzione `--amend`：

```bash
git add .
git commit --amend -sm "hotel: update HOTEL.csv, fix #1"
```

### 6、Sincronizzare le modifiche del repository `upstream`

Occorre mantenere sincronizzato il repository locale con le modifiche del repository `upstream` (ossia [wuhan2020/wuhan2020](https://github.com/wuhan2020/wuhan2020) )，poiché è probabile che precedentemente altre persone abbiano inviato propri contributi, per cui è opportuno prevenire eventuali conflitti:

```bash
$ git remote add upstream git@github.com:wuhan2020/wuhan2020.git
$ git fetch upstream
```

In caso il repository `upstream` sia stato modificato, è necessario effettuare prima un `rebase`:

```bash
$ git rebase upstream/master
```

### 7、Inviare un nuovo `branch` al proprio repository remoto

```bash
$ git push -f origin my-fix-branch:my-fix-branch
```

### 8、Aprire una `pull request`

Attraverso la pagina di riferimento del proprio repository è possibile aprire una `pull request` verso il repository `upstream`, come mostrato in figura:

![pull-request](/images/docs/pull-request.png)

![open-pr](/images/docs/open-pr.png)

Se successivamente alla validazione (`review`) della propria richiesta di `pull request`, si rende necessario effettuare modifiche ai contenuti interessati dalla `pull request` stessa, è possibile eseguire i seguenti comandi, la `pr` verrà così automaticamente sincronizzata con il `commit`: 

```bash
git add .
git commit --amend
git push -f origin my-fix-branch
```

### 9、Risolvere conflitti di `merge`

> Nota bene: se non si presentano conflitti, non occorre eseguire le seguenti operazioni.

-   Per prima cosa occorre sincronizzare le modifiche del repository `upstream`

```bash
git fetch upstream
```

-   Effettuare un `rebase`:

```bash
git rebase upstream/master
```

-   Sistemare manualmente i contenuti in conflitto, quindi effettuare nuovamente l'invio del proprio contributo:

```bash
git add my-fix-file
git rebase --continue
git push -f origin my-fix-branch
```

### 10、Dopo aver effettuato un merge, puoi：

-   Tornare al branch `master`：

```bash
git checkout master -f
```

-   Mantenere il branch `master` sincronizzato con il branch `upstream`：

```bash
git pull --ff upstream master
```

-   Eliminare il `branch` locale (opzionale):

```bash
git branch -D my-fix-branch
```

-   Eliminare il `branch` remoto (opzionale)：

```bash
git push origin --delete my-fix-branch
```

## Funzioni del bot del progetto

Questo progetto è stato fornito di accesso al bot GitHub:`Menbotics`，attraverso il quale è possibile：

-   **Etichettare automaticamente le `Issue`**：nello specifico si può far riferimento a [0、Aprire una `issue`](#0Aprire una `issue`) per maggiori dettagli;
-   **Richiedere un `task`**：per dettagli vedere [1、Richiedere un `task`](#1Richiedere un `task`)
-   **Effettuare un `merge` automaticamente**：dopo che è stata aperta una `pr` (`pull request`), gli addetti dotati di permessi di merge del codice possono utilizzare la parola chiave `/approve`  per far sì che il bot effettui il `merge` automaticamente.

Per verificare la configurazione del bot, si veda [hypertrons.json](./.github/hypertrons.json)，per esempio in questo file è possibile verificare chi sono gli addetti con i permessi di `merge` del codice.

## Gruppo di discussione su Slack

Inoltre, abbiamo già creato un [gruppo di discussione su Slack](https://join.slack.com/t/wuhan2020/shared_invite/enQtOTQxMTU4MzgyNTYwLWIxMTMyNWI4NWE2YTk3NGRjZGJhMjUzNmJhMjg1MDQ3OTEzNDE5NGY4MWFhMjRlYWU4MmE3ZGQyOGU4N2YwMzY) e già aperto alcuni `channel` relativi alle attività di sviluppo back-end, front-end, sincronizzazione dati, ecc. Invitiamo tutti a partecipare alla discussione collettiva su argomenti tecnici e non, in modo da lavorare tutti assieme, uniti e compatti in questo momento di difficoltà!

---
Translator: Stefano Ciulli (@sciulli)
