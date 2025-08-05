# ⛽ Gasolina x Álcool

Este repositório contém o aplicativo "Gasolina x Álcool", desenvolvido em **React Native** com **Expo**. O objetivo principal é auxiliar motoristas a decidir qual combustível é mais vantajoso (álcool ou gasolina) com base nos preços informados, além de manter um histórico dos cálculos realizados.

---

### 💡 Ideia e Conceito

O aplicativo foi criado para ser uma ferramenta prática e rápida para o dia a dia, aplicando conceitos essenciais do desenvolvimento mobile como persistência de dados, navegação entre telas e modularização de componentes.

---

### ✨ Funcionalidades Implementadas

* **Cálculo de Vantagem:** Com base nos preços do álcool e da gasolina, o aplicativo calcula e informa qual combustível é mais econômico para abastecer (considerando a regra de que o álcool compensa se o preço for até 70% do preço da gasolina).
* **Persistência de Dados (`AsyncStorage`):** Todos os cálculos realizados são salvos automaticamente no histórico do aplicativo, permitindo que o usuário consulte resultados anteriores.
* **Histórico de Cálculos:** Uma tela dedicada exibe a lista de todos os cálculos feitos, com a data, os valores informados e o resultado. É possível limpar o histórico.
* **Componentes Separados:** A aplicação é modularizada em componentes React Native, facilitando a manutenção e a reutilização de código.
* **Navegação entre Telas (`React Navigation`):** O aplicativo possui uma navegação fluida entre as telas de entrada, calculadora, resultado e histórico.
* **Feedback ao Usuário:** Utiliza alertas (simulando modais) para informar sobre campos vazios ou valores inválidos.
* **Design Intuitivo:** Interface limpa e fácil de usar, com um fundo temático que simula um posto de combustível.

---

### 🚀 Tecnologias e Bibliotecas Utilizadas

* **React Native:** Framework para construção de aplicativos móveis nativos.
* **Expo:** Plataforma que facilita o desenvolvimento, construção e implantação de apps React Native.
* **JavaScript:** Linguagem de programação principal.
* **`@react-native-async-storage/async-storage`:** Biblioteca para armazenamento persistente de dados localmente no dispositivo.
* **`@react-navigation/native`:** Biblioteca para navegação entre as diferentes telas do aplicativo.
* **`@react-navigation/stack`:** Utilizado para implementar a navegação em pilha (stack navigator).

---

### 📁 Estrutura do Projeto

A organização do projeto é modular, com componentes bem definidos para cada parte da funcionalidade:


```
├── assets/                  # Imagens utilizadas na interface (fundo, frentistas).
├── .expo/                   # Arquivos de configuração do Expo.
├── .gitignore               # Arquivos e pastas a serem ignorados pelo Git.
├── App.js                   # Componente principal que configura a navegação entre as telas.
├── app.json                 # Configurações do aplicativo Expo.
├── calculadora.js           # Componente da tela de cálculo, onde o usuário insere os preços.
├── entrada.js               # Componente da tela inicial/de boas-vindas do aplicativo.
├── historico.js             # Componente da tela que exibe o histórico de cálculos.
├── index.js                 # Ponto de entrada da aplicação React Native.
├── package-lock.json        # Gerenciamento de dependências.
├── package.json             # Define as informações do projeto e suas dependências.
└── resultado.js             # Componente da tela que exibe o resultado do cálculo.
```

---

### ▶️ Como Rodar o Projeto

Para testar este aplicativo em seu ambiente local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/anads07/gasolina-x-alcool
    cd gasolina-x-alcool
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou, se preferir Yarn:
    yarn install
    ```
    Certifique-se de que as bibliotecas de navegação e AsyncStorage estão instaladas. Caso contrário, instale-as:
    ```bash
    npm install @react-native-async-storage/async-storage @react-navigation/native @react-navigation/stack
    # ou
    yarn add @react-native-async-storage/async-storage @react-navigation/native @react-navigation/stack
    ```

3.  **Inicie o aplicativo Expo:**
    ```bash
    npx expo start
    ```
    Após executar este comando, uma página será aberta no seu navegador com um QR Code. Escaneie-o com o aplicativo **Expo Go** no seu celular (disponível para iOS e Android) para ver o projeto rodando diretamente no seu dispositivo, ou opte por usar um emulador/simulador.

---

### 💡 Aprendizados Chave e Habilidades Desenvolvidas

Este projeto foi fundamental para aprofundar conhecimentos em:

* **Navegação em Aplicativos Mobile:** Implementação de navegação em pilha usando `React Navigation` para múltiplas telas.
* **Persistência de Dados (`AsyncStorage`):** Salvamento e carregamento de histórico de cálculos no dispositivo.
* **Modularização de Componentes:** Divisão da lógica e UI em componentes reutilizáveis (`Entrada`, `Calculadora`, `Resultado`, `Historico`).
* **Gerenciamento de Estado:** Utilização de `useState` para gerenciar o estado dos inputs e resultados.
* **Validação de Dados:** Implementação de validações para garantir a entrada correta de valores.
* **Interação com o Usuário:** Fornecimento de feedback através de alertas e navegação intuitiva.
* **Layout Responsivo:** Criação de interfaces que se adaptam a diferentes tamanhos de tela em dispositivos móveis.

Este aplicativo demonstra minha capacidade de construir soluções mobile completas, com navegação, persistência de dados e uma arquitetura organizada.
