# Testes Unitários - Calculadora.js

Testes unitários com **Jest** para a classe `Calculadora.js`, que realiza operações matemáticas como soma, subtração, multiplicação, divisão, cálculo de juros e descontos.

---

## O que são testes unitários?

Testes automatizados que verificam partes isoladas do código, garantindo que funções ou métodos retornem os resultados esperados.

---

## Ciclo AAA: Arrange, Act, Assert

1. **Arrange**: preparar dados e instâncias necessários para o teste.  
2. **Act**: executar a função a ser testada.  
3. **Assert**: verificar se o resultado corresponde ao esperado.

---

## Estrutura dos testes no Jest

- `describe`: agrupa testes relacionados.
- `test` ou `it`: define um caso de teste.
- `expect`: cria asserções para validar os resultados.

Exemplo:

```js
describe("somar()", () => {
  test("deve somar dois valores", () => {
    const calculadora = new Calculadora();     // Arrange
    const resultado = calculadora.somar(2, 3); // Act
    expect(resultado).toBe(5);                 // Assert
  });
});
````

---

## Como rodar os testes

```bash
git clone https://github.com/Xavier-sa/testesUnitariosJS.git
cd testesUnitariosJS
npm install
npm test
```

---

## Estrutura do projeto

```
/src        - Código da Calculadora
/tests      - Testes unitários
package.json - Configuração do projeto
README.md    - Documentação
```

---

## O que está sendo testado?

* Operações básicas: soma, subtração, multiplicação, divisão
* Tratamento de erros (ex: divisão por zero)
* Cálculo de juros (simples e compostos)
* Aplicação de descontos
* Validação de entradas

---

## Ciclo AAA - Visual

```
+------------+   +------------+   +------------+
|  Arrange   |→ |    Act     |→ |   Assert   |
| Preparar   |   | Executar   |   | Verificar |
+------------+   +------------+   +------------+
```

---

## Imagens (adicione no GitHub ou localmente)

```markdown
![Arrange](./images/arrange.png)
![Act](./images/act.png)
![Assert](./images/assert.png)
```


