
![Logo](https://i.imgur.com/bNHewZ2.png)


# Ferramentaria Osten Moove Back-end

O projeto visa desenvolver um sistema de reserva de ferramentas para mecânicos. O sistema deve permitir que os mecânicos listem todas as ferramentas disponíveis, obtenham detalhes de uma ferramenta pelo ID, criem novas ferramentas, atualizem o status de uma ferramenta, reservem uma ferramenta para um mecânico e deletem uma ferramenta pelo ID.

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






## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Funcionalidades

- Listar todas as ferramentas: Esta funcionalidade permite que os usuários listem todas as ferramentas disponíveis, incluindo o nome, a descrição e o status.
- Obter detalhes de uma ferramenta pelo ID: Esta funcionalidade permite que os usuários obtenham detalhes de uma ferramenta específica, incluindo o nome, a descrição, o status, a data e hora da coleta, a data e hora da devolução e o mecânico que reservou a ferramenta.
- Criar uma nova ferramenta: Esta funcionalidade permite que os usuários criem novas ferramentas, incluindo o nome, a descrição e o status.
- Atualizar o status de uma ferramenta: Esta funcionalidade permite que os usuários atualizem o status de uma ferramenta, incluindo "Disponível", "Reservado" ou "Em Uso".
- Reservar uma ferramenta para um mecânico: Esta funcionalidade permite que os usuários reservem uma ferramenta para outro mecânico, incluindo a data e hora da coleta e a data e hora da devolução.
- Deletar uma ferramenta pelo ID: Esta funcionalidade permite que os usuários deletem uma ferramenta específica pelo ID.
## Features

- Notificações: O sistema pode enviar notificações aos mecânicos quando uma ferramenta que eles reservaram estiver disponível para retirada.
- Previsão de disponibilidade: O sistema pode usar dados históricos para prever quando uma ferramenta estará disponível para reserva.
- Histórico de uso: O sistema pode manter um histórico de todas as vezes que uma ferramenta foi usada.
- Relatórios: O sistema pode gerar relatórios sobre o uso de ferramentas.
- Integração com outros sistemas: O sistema pode ser integrado a outros sistemas, como sistemas de gerenciamento de estoque ou sistemas de contabilidade.
## Stack utilizada


**Back-end:** Node, Express, Prisma

**Banco de dados:** MongoDB

**Deploy:** Render.com
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

## Autores

- [Dario Reis](https://www.github.com/darioreisjr)


## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [MIT](https://choosealicense.com/licenses/mit/) para mais detalhes.


## Feedback

Se você tiver algum feedback, por favor nos deixe saber por meio de dev.darioreis@gmail.com

