# MongoDB Commerce

<img src="./images/print-aprovacao.png" />

### Sobre

Nesse projeto, trabalhei com o banco de dados commerce, que contém dados do cardápio do McDonald's, como ingredientes, valores nutricionais e dados fictícios de vendas.

As queries que eu fiz podem ser encontradas divididas por arquivos na pasta `challenges`

### Tecnologias

- MongoDB
- Docker

### Como rodar o projeto

<details>
  <summary>
    <strong>🐳 Como usar o Docker para este projeto</strong>
  </summary><br>

> Antes, clone o repositório com o comando `git clone git@github.com:daviazev/mongodb-commerce.git`

> Entre na pasta com o comando `cd mongodb-commerce`

1. Crie um container com um volume apontando para a pasta do projeto `docker run -d --name=nomeDoContainer -v "$PWD:/app" -p 27017:27017 mongo:5.0`;
2. Com o container em execução, acesse o terminal do container `docker exec -it nomeDoContainer bash`;
3. No terminal do container, acesse o diretório `/app` mapeado no volume conforme o passo 2;
   > Para restaurar o banco de dados é necessário que você esteja dentro do diretório `/app`. Para mais detalhes, veja o tópico: "♻️ Restaurando o banco de dados `commerce`".

</details>

<details>
  <summary>
    <strong>♻️ Restaurando o banco de dados `commerce`</strong>
  </summary><br>

> ⚠️ **Aviso:** Caso esteja utilizando Docker, certifique-se que tenha seguido os passos do tópico: "🐳 Como usar o Docker para este projeto", pois eles são determinantes para que siga as orientações abaixo.

1. Abra o terminal e conecte-se à sua instância local do **MongoDB**.

2. Quando sua instância estiver no ar e você estiver conectado a ela, digite `exit`. Com isso, você voltará ao terminal para iniciar a importação dos dados.

3. Na raiz do diretório do projeto, execute o seguinte comando para restaurar a base de dados `commerce`:

```sh
DBNAME=commerce ./scripts/resetdb.sh assets/produtos
```

- A execução desse script criará um banco de dados chamado `commerce` e importará os dados para a coleção `produtos`.

</details>
