# Q.A Challenge Luma Store

## Descrição

Este projeto utiliza Cypress para testar a funcionalidade do site Luma Store, garantindo que os os casos de uso solicitados funcionem corretamente.

## Tecnologias Utilizadas

- **Linguagem:** JavaScript
- **Framework de Teste:** Cypress

## Instalação e Uso

### Passo a Passo de Instalação

# 1. Clonar o repositório

git clone https://github.com/philippeffs/coodesh.git

# 2. Navegar até o diretório do projeto

cd coodesh

# 3. Instalar dependências

npm install

Antes, certifique-se de que você tem o Node.js instalado em sua máquina. Você pode baixá-lo através deste link: https://nodejs.org/pt

# Executar os testes

Para abrir o Cypress Test Runner:

npx cypress open

Para executar os testes em modo headless (sem interface gráfica): npx cypress run

Por que o Cypress?

    •	É o framework que tenho mais facilidade e experiência.
    •	Executa testes diretamente no navegador.
    •	Possui uma rica documentação e comunidade ativa.

# Caso de Uso Testado

O teste automatizado implementa o acesso à Home Page e em seguida um fluxo de compra na aplicação Luma Store, que inclui várias etapas distintas:

# Etapas

1. Verificar se a página inicial carrega corretamente
   - Acessa a página inicial da Luma Store e verifica se o título da página contém "Home Page".
2. Buscar por "shirt" e verificar a página de resultados
   - Realiza uma busca por "shirt" e verifica se a página de resultados carrega corretamente.
3. Adicionar um produto ao carrinho
   - Seleciona o primeiro produto da lista de resultados da busca, escolhe o tamanho e a cor, e adiciona o produto ao carrinho.
   - Verifica se a mensagem de sucesso aparece.
4. Realizar o checkout
   - Acessa o carrinho de compras e prossegue para a página de checkout.
   - Verifica se os elementos da página de checkout estão visíveis.

>  This is a challenge by [Coodesh](https://coodesh.com/)
