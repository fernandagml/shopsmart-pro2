# **🛒 ShopSmart Pro**

O **ShopSmart Pro** é um sistema de cálculos comerciais desenvolvido como atividade avaliativa para o curso técnico de **Desenvolvimento de Sistemas**. O foco principal deste projeto é demonstrar o domínio na manipulação do **DOM (Document Object Model)**, validação de dados de entrada e a integração entre a lógica de programação e a interface visual.

---

**🚀 Tecnologias Utilizadas**

* **HTML5:** Estrutura semântica e acessível.  
* **CSS3:** Estilização moderna com foco em UI/UX, utilizando variáveis e layouts flexíveis.  
* **JavaScript (Vanilla):** Lógica de negócio, cálculos matemáticos e manipulação dinâmica de elementos.  
* **Google Fonts & Icons:** Uso das fontes *Inter* e *Poppins* para uma tipografia limpa.

---

**🛠️ Funcionalidades e Regras de Negócio**

O sistema processa dois valores de entrada para realizar as seguintes operações:

* **Cálculo de Total:** Multiplica o valor unitário (**Valor 1**) pela quantidade (**Valor 2**).  
* **Desconto e Juros:** Aplica uma percentagem (**Valor 2**) sobre o montante principal (**Valor 1**).  
* **Comissões:** Calcula o valor da comissão com base na percentagem informada.  
* **Lucro:** Realiza a análise entre o custo (**Valor 1**) e o valor de venda (**Valor 2**).  
* **Limpeza de Dados:** Reseta os campos de input e oculta a área de resultados, devolvendo o foco ao primeiro campo.

---

**🧠 Lógica de Programação**

A prioridade deste projeto foi a construção de um JavaScript funcional e bem estruturado. Pontos de destaque:

1. **Validação de Dados:** As funções utilizam a verificação isNaN() para garantir que os cálculos só ocorram se ambos os campos estiverem preenchidos corretamente.  
2. **Injeção de Conteúdo:** O resultado é gerado dinamicamente através de *Template Literals*, permitindo que o JavaScript controle totalmente a estrutura de exibição (títulos, parágrafos e listas).  
3. **Experiência do Utilizador:** O uso do método .focus() na função de limpeza garante agilidade para novas operações.

---

**✒️ Autor**

Desenvolvido por **Fernanda Gaspar**.