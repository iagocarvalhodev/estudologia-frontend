## Estudologia

Primeiro, para rodar o projeto deve-se:

```bash
npm install
#
npm run dev
# or
yarn dev
# or
pnpm dev
```

Foi Desenvolvido com Next.js 13

O projeto foi configurado as regras de lint e test juntamente com CI do github actions

Contem alguns testes de componentes

Utilizei uma mock de api Fake temporario deste link (https://demo9764895.mockable.io/estudologia) para pegar os dados das perguntas

Foi utilizado no desenvolvimento styled componentes para estilização e hooks para tratamento e busca de dados alem de configurado o axios para conexão com api.

Também foi utilizado o localstorage para gerenciar as perguntas levando em questão que a api tem somente a chamada GET
