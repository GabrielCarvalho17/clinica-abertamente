# Clinica Abertamente

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli), versão 19.0.6.

## Requisitos de Ambiente

Este projeto exige o uso de versões específicas do Node.js e do npm. A instalação das dependências será **bloqueada automaticamente** se as versões não forem compatíveis.

- **Node.js**: `22.12.0`
- **npm**: `11.1.0`

A verificação é feita por meio de um script chamado `check-env.js`, executado antes da instalação de dependências. Esse script está configurado no `package.json` com o comando `preinstall`.

Caso você esteja usando versões diferentes, utilize uma ferramenta como [`nvm`](https://github.com/coreybutler/nvm-windows) ou [`volta`](https://volta.sh/) para gerenciar as versões corretamente.

---

## Servidor de desenvolvimento


Para iniciar o servidor de desenvolvimento local, execute:

```bash
ng serve
```

Depois que o servidor estiver ativo, abra seu navegador e acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente sempre que você modificar os arquivos-fonte.

## Geração de código (scaffolding)

O Angular CLI possui ferramentas poderosas para gerar código automaticamente. Para criar um novo componente, execute:

```bash
ng generate component nome-do-componente
```

Para ver a lista completa de geradores disponíveis (como componentes, diretivas ou pipes), execute:

```bash
ng generate --help
```

## Build do projeto

Para compilar o projeto, execute:

```bash
ng build
```

Esse comando irá compilar o projeto e salvar os arquivos finais na pasta `dist/`. Por padrão, a build de produção já aplica otimizações de desempenho.

## Executar testes unitários

Para rodar os testes unitários com o [Karma](https://karma-runner.github.io), utilize:

```bash
ng test
```

## Executar testes de ponta a ponta (e2e)

Para testes de ponta a ponta, use:

```bash
ng e2e
```

O Angular CLI não traz uma ferramenta de e2e por padrão, então você pode escolher a que melhor se adapta ao seu projeto.

## Deploy no GitHub Pages

Para publicar este projeto no GitHub Pages, siga os passos abaixo:

### 1. Instale a biblioteca de deploy

Você precisa instalar a biblioteca `angular-cli-ghpages` para facilitar o processo de publicação:

```bash
ng add angular-cli-ghpages
```

### 2. Gere a build para produção com caminho base ajustado

Execute o seguinte comando para compilar a aplicação para produção e definir o caminho base correto para o GitHub Pages:

```bash
ng build --configuration production --base-href=/clinica-abertamente/
```

> Como alternativa, você pode simplificar esse comando configurando o base path no `angular.json`. Para isso, adicione o seguinte dentro da seção `"production"` das configurações de build:

```json
"baseHref": "/clinica-abertamente/"
```

Depois disso, o comando de build pode ser simplificado para:

```bash
ng build
```

### 3. Publique os arquivos gerados

Após a build, execute o comando abaixo para publicar os arquivos da pasta `browser` na branch `gh-pages`:

```bash
npx angular-cli-ghpages --dir=dist/clinica-abertamente/browser
```

Ao finalizar, sua aplicação estará disponível em:

```
https://<seu-nome-de-usuario>.github.io/clinica-abertamente/
```

Não esqueça de substituir `<seu-nome-de-usuario>` pelo seu usuário do GitHub.
