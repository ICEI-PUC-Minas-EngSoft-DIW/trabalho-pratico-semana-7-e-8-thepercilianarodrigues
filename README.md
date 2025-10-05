# Trabalho Prático 05 - Semanas 7 e 8

**Páginas de detalhes dinâmicas**

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Leia o enunciado completo no Canvas. 

**IMPORTANTE:** Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

**IMPORTANTE:** Você deve trabalhar e alterar apenas arquivos dentro da pasta **`public`,** mantendo os arquivos **`index.html`**, **`styles.css`** e **`app.js`** com estes nomes, conforme enunciado. Deixe todos os demais arquivos e pastas desse repositório inalterados. **PRESTE MUITA ATENÇÃO NISSO.**

## Informações Gerais

- Nome: Perciliana Rodrigues
- Matricula: 904963
- Proposta de projeto escolhida: Pessoas e Produções
- Breve descrição sobre seu projeto: Esse projeto "Cantinho do Leitor" foi criado com objetivo de ter uma comunidade que conecta pessoas apaixonadas por leitura, e também, trazendo a história de cada autor e suas obras, e notícias de lançamentos em primeira mão.

## Print da Home-Page

![alt text](<Print Home Page.png>)

## Print da página de detalhes do item

![alt text](<Página de detalhes de itens 1.png>)
![alt text](<Página de detalhes de itens 2.png>)
![alt text](<Página de detalhes de itens 3.png>)

## Cole aqui abaixo a estrutura JSON utilizada no app.js

```javascript
const livrosParaDestaque = [
    {
        id: 1,
        titulo: "O Reino das Cinzas",
        autor: "Holly Black",
        resenha: "Uma história de fantasia imperdível, cheia de intrigas e magia.",
        descricaoCompleta: "Detalhes profundos sobre a narrativa, personagens e o mundo de fantasia criado pela autora.",
        imagemURL: "https://picsum.photos/seed/reino/200/300"
    },
    {
        id: 2,
        titulo: "A Hipótese do Amor",
        autor: "Ali Hazelwood",
        resenha: "Comédia romântica no mundo acadêmico que virou febre!",
        descricaoCompleta: "Análise completa dos clichês e da dinâmica de 'enemies-to-lovers' deste best-seller.",
        imagemURL: "https://picsum.photos/seed/hipotese/200/300"
    },
    {
        id: 3,
        titulo: "É Assim que Acaba",
        autor: "Colleen Hoover",
        resenha: "Um drama emocionante que aborda temas difíceis com sensibilidade.",
        descricaoCompleta: "Discussão sobre os temas sensíveis abordados, o impacto e a relevância do livro na literatura contemporânea.",
        imagemURL: "https://picsum.photos/seed/acaba/200/300"
    }
];
```