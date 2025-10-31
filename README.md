# Laboratório de Test Smells - Gerenciador de Usuários

Este repositório serve como base para o trabalho prático sobre **Test Smells** na disciplina de Teste de Software. Ele contém uma suíte de testes que, apesar de passar, está repleta de "maus cheiros" (smells) que comprometem sua qualidade, manutenibilidade e eficácia.

## Contexto do Projeto

Imagine que você foi contratado(a) como Engenheiro(a) de Qualidade de Software em uma equipe que está desenvolvendo um serviço de gerenciamento de usuários (`UserService`).

A suíte de testes em `__tests__/userService.smelly.test.js` foi escrita por um desenvolvedor que se concentrou apenas em fazer os testes passarem, sem se preocupar com boas práticas. O resultado é um código de teste frágil, obscuro e difícil de manter.

Sua missão é analisar, diagnosticar e refatorar essa suíte de testes, transformando-a em um exemplo de código de teste limpo e robusto.

## Sua Missão

Seu trabalho será dividido em três etapas principais:

1.  **Analisar:** Identificar manualmente e com a ajuda de ferramentas de análise estática (ESLint) os diferentes Test Smells presentes no código.
2.  **Refatorar:** Reescrever os testes em um novo arquivo (`userService.clean.test.js`), corrigindo os problemas encontrados e aplicando as melhores práticas, como o padrão **Arrange, Act, Assert (AAA)**.
3.  **Validar:** Provar que a refatoração foi bem-sucedida, garantindo que os novos testes passem, estejam livres de avisos do linter e sejam mais claros e eficazes.

## Como Começar (Setup)

Siga os passos abaixo para preparar seu ambiente de trabalho.

**1. Clone o repositório:**

```bash
git clone https://github.com/analuizaalvesm/test-smelly.git
cd test-smelly
```

**2. Instale as dependências do projeto:**

```bash
npm install
```

**_3. Execute a suíte de testes:_**

```bash
npm test
```

## Como rodar (comandos úteis)

Rodar a suíte de testes (Jest):

```bash
npm test
```

Rodar o ESLint apenas nos arquivos específicos para ver avisos separadamente (ex.: verificar o código fonte e os testes limpos/`smelly`):

```bash
# Verificar o arquivo de serviço
npx eslint src/userService.js

# Verificar o arquivo de testes limpos
npx eslint test/userService.clean.test.js

# Verificar o arquivo de testes "smelly"
npx eslint test/userService.smelly.test.js
```

Se preferir executar o linter em toda a base de código:

```bash
npx eslint .
```

> Observação: use `npx` para garantir a versão instalada localmente nas dependências dev do projeto.

## Melhorias do `userService.clean.test.js` em relação ao `userService.smelly.test.js`

O arquivo `userService.clean.test.js` foi criado como uma versão refatorada e mais robusta da suíte original; entre as melhorias introduzidas estão:

- Aplicação clara do padrão Arrange / Act / Assert (AAA), o que deixa cada teste legível e com etapas bem definidas.
- Setup/teardown isolado com `beforeEach()` para garantir que cada teste rode com o estado inicial esperado (banco de dados em memória limpo).
- Evita laços e condicionais dentro de testes (for/if), que tornam a intenção do teste ambígua e podem ocultar falhas.
- Usa asserções explícitas e correspondentes ao comportamento esperado (ex.: `toThrow` para validar exceções), evitando testes que passam silenciosamente.
- Cada teste foca em um único comportamento ou cenário, facilitando a identificação do que quebrou quando houver falhas.
- Comentários e nomes de testes mais descritivos, facilitando a leitura e manutenção por outros desenvolvedores.
- Reduz fragilidade por dependência de formatação exata do relatório: os testes verificam conteúdo essencial, não detalhes frágilmente formatados.

Estas mudanças tornam a suíte mais confiável, melhoram o custo de manutenção e facilitam futuras refatorações do código de produção ou dos próprios testes.

## Referências

Recursos usados e recomendados:

- Plugin ESLint para Jest (Documentação):
  https://github.com/jest-community/eslint-plugin-jest
- Artigo sobre Test Smells (Martin Fowler):
  https://martinfowler.com/bliki/TestSmell.html
- Relatório sobre o trabalho: [Refatoração de Testes e Detecção de Test Smells](docs/Relatório%20-%20Refatoração%20de%20Testes%20e%20Detecção%20de%20Test%20Smells.pdf)
