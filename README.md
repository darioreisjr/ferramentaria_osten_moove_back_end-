<p align="center">
  <img alt="portifolio logo" src="https://i.imgur.com/bNHewZ2.png" width="400px" />
</p>

<h1 align="center" >FERRAMENTARIA OSTEN MOOVE BACK-END</h1> 

<hr/>

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>

<p align="center">
  <img alt="Layout da aplicação" width="100%" src="https://github.com/darioreisjr/ferramentaria_osten_moove_back_end-/assets/85812823/a236d378-3cdd-426d-811b-f168f703ea2e" />
</p>

<hr/>


# Descrição do projeto

O projeto visa desenvolver um sistema de reserva de ferramentas para mecânicos. O sistema deve permitir que os mecânicos listem todas as ferramentas disponíveis, obtenham detalhes de uma ferramenta pelo ID, criem novas ferramentas, atualizem o status de uma ferramenta, reservem uma ferramenta para um mecânico e deletem uma ferramenta pelo ID.

<hr/>

# Funcionalidades

- [x] **Listar todas as ferramentas**: Esta funcionalidade permite que os usuários listem todas as ferramentas disponíveis, incluindo o nome, a descrição e o status.

- [x] **Obter detalhes de uma ferramenta pelo ID*: Esta funcionalidade permite que os usuários obtenham detalhes de uma ferramenta específica, incluindo o nome, a descrição, o status, a data e hora da coleta, a data e hora da devolução e o mecânico que reservou a ferramenta.

- [x] **Criar uma nova ferramenta**: Esta funcionalidade permite que os usuários criem novas ferramentas, incluindo o nome, a descrição e o status.

- [x] **Atualizar o status de uma ferramenta**: sta funcionalidade permite que os usuários atualizem o status de uma ferramenta, incluindo "Disponível", "Reservado" ou "Em Uso".

- [x] **Reservar uma ferramenta para um mecânico**: Esta funcionalidade permite que os usuários reservem uma ferramenta para outro mecânico, incluindo a data e hora da coleta e a data e hora da devolução.
      
- [x] **Deletar uma ferramenta pelo ID**: Esta funcionalidade permite que os usuários deletem uma ferramenta específica pelo ID.

<hr/>

# Deploy da Aplicação :dash:

>  <a href="https://ferramentariaostenmoovebackend.onrender.com/tool" target='_blank'>Link do deploy da aplicação<a/>

<hr/>

## Pré-requisitos

* Node.js >= 16.0.0
* Yarn ou npm
* Um editor de texto ou IDE


## Instalação

Clonar o repositório

```bash
git clone https://github.com/darioreisjr/ferramentaria_osten_moove_back_end-
```
    
Instalar as dependências

```bash
yarn install 
```
ou
```bash
npm install
```

## Configuração

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DATABASE` = [link da sua conexão com o banco de dados]

## Execução

```bash
npm start 
```
ou
```bash
yarn start
```

<hr/>

# Features

:memo: Notificações: O sistema pode enviar notificações aos mecânicos quando uma ferramenta que eles reservaram estiver disponível para retirada.

:memo: Previsão de disponibilidade: O sistema pode usar dados históricos para prever quando uma ferramenta estará disponível para reserva.

:memo: Histórico de uso: O sistema pode manter um histórico de todas as vezes que uma ferramenta foi usada.

:memo: Relatórios: O sistema pode gerar relatórios sobre o uso de ferramentas.

:memo: Integração com outros sistemas: O sistema pode ser integrado a outros sistemas, como sistemas de gerenciamento de estoque ou sistemas de contabilidade.

<hr/>

# :rocket: Tecnologias

-  [Node](https://nodejs.org/en)
-  [Express](https://expressjs.com/)
-  [Prisma](https://www.prisma.io/)
-  [Mongodb](https://www.mongodb.com)
-  [Render](https://render.com/)

<hr/>

## Exemplo

GET /tools
```bash
### Listar todas as ferramentas
```
GET /tools/:id
```bash
### Obter detalhes de uma ferramenta pelo ID
```

POST /tools
```bash
### Criar uma nova ferramenta
```
PUT /tools/:id
```bash
### Atualizar o status de uma ferramenta
```

DELETE /tools/:id
```bash
### Deletar uma ferramenta pelo ID
```

<hr/>

# :muscle: Contribuir

Faça o `fork` e clone o projeto a partir do seu usuário.

```bash
# Clonando projeto
$ git clone https://github.com/darioreisjr/ferramentaria_osten_moove_back_end-

# Criando um branch
$ git branch minha-alteracao

# Acessando o novo branch
$ git checkout -b minha-alteracao

# Adicionando os arquivos alterados
$ git add .

# Criando commit e a mensagem
$ git commit -m "Corrigindo...."

# Enviando alterações para o brach
$ git push origin minha-alteracao
```
Você deve navegar até o seu repositório onde fez o fork e clicar no botão *New pull request* no lado esquerdo da página.

<hr/>

# Desenvolvedor :octocat:

[<img src="https://avatars.githubusercontent.com/u/85812823?v=4" width=115><br><sub>Dario Reis</sub>](https://github.com/darioreisjr)


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de dev.darioreis@gmail.com

<hr/>

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [MIT](https://choosealicense.com/licenses/mit/) para mais detalhes.


<hr/>
<p align="center"> Copyright :copyright: 2023 - FERRAMENTARIA OSTEN MOOVE BACK-END Dario Reis<p/>


