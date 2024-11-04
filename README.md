# 🚧Projeto Todo List - React Native

<br />

<div align="center">
    <img src="https://i.imgur.com/EGUUELt.png" title="source: imgur.com" width="60%"/> 
    <p>+</p>
    <img src="https://ik.imagekit.io/vzr6ryejm/react_native/logo-wordmark-light_v2.png?updatedAt=1719817353728" title="source: imgur.com" width="25%"/> 
</div>

<br /><br />

## 1. Descrição

O Projeto Todo List (Lista de Tarefas) é um **aplicativo mobile** (app Android e IOS), desenvolvido em **React Native** e **Expo**, com o objetivo de consumir  a API Todo List, desenvolvida em **Nest JS**. A aplicação permite o gerenciamento das **Tarefas** e das **Categorias** das tarefas.

### 1.1. Principais Funcionalidades

- **CRUD de Tarefas**: Gerenciamento das tarefas.
- **CRUD de Categorias**: Gerenciamento das categorias.

------

## 2. Tecnologias

| Item                         | Descrição             |
| ---------------------------- | --------------------- |
| **Servidor**                 | Node JS               |
| **Linguagem de programação** | TypeScript            |
| **Biblioteca**               | React Native          |
| **Build**                    | Expo                  |
| **Estilização**              | Tailwind + Nativewind |

------

## 3. Outras Bibliotecas

| Item                                        | Descrição            |
| ------------------------------------------- | -------------------- |
| **Expo Vector Icons**                       | Ícones               |
| **React Navigator**                         | Rotas e Navegação    |
| **Axios**                                   | Consumo da API       |
| **React Native Community Date Time Picker** | Calendário e Relógio |
| **React Native Element Dropdown**           | Select input         |
| **React Native Indicators**                 | Loaders              |
| **Toastify React Native**                   | Alerts               |

------

## 4. Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [yarn](https://yarnpkg.com/)
- [Expo](https://docs.expo.dev/tutorial/create-your-first-app/)
- Backend da API NestJS rodando ([Repositório da API](https://github.com/rafaelq80/todolist_nest_2024))
- [Android Studio](https://developer.android.com/studio?hl=pt-br)
- Emulador do Android Studio ou [Memu](https://www.memuplay.com/)

------

## 5. Instalação - Ambiente Local

### 5.1. Instalação do Expo

```bash
yarn add expo-cli
```

### 5.2. Clonando o repositório

```bash
git clone https://github.com/usuario/todolist_react_native.git
cd todolist_react_native
```

### 5.3. Instalando as dependências

Utilize o comando abaixo para instalar todas as bibliotecas através do yarn:

```bash
yarn
```

### 5.4. Configuração do ambiente

A URL da API NestJS deve estar apontando para o endereço abaixo:

```bash
http://ip_computador:4000
```

### 5.4. Executando o projeto

Inicie o servidor de desenvolvimento com o yarn:

```bash
yarn expo
```

Abra o app no Emulador de sua preferência ou no seu celular Android ou IOS), apontando para o QR-Code que será exibido no Terminal

> [!TIP]
>
> Para executar o app no seu celular, visite a loja de aplicativos do seu aparelho e instale o **Expo Go**.

> [!WARNING]
>
> No Ambiente Windows, só é possível gerar o app na versão Android. Para gerar o app na versão IOS é necessário utilizar uma máquina virtual ou um computador da Apple executando o MAC OS.

---

## 6. Estrutura do Projeto

```plaintext
src/
├── /components           # Componentes reutilizáveis
├── /models               # Modelos de dados do aplicativo
├── /routes           	  # Configurações de navegação
├── /services             # Chamadas de API e serviços
├── /styles               # Arquivos de estilização nativa
├── /types                # Tipos de dados utilizados pela navegação
├── /utils                # Funções utilitárias
├── /views                # Telas do aplicativo
├── App.tsx               # Ponto de entrada do aplicativo
└── package.json          # Dependências e configurações do projeto

```

------

## 7. Implementações Futuras

- [ ] Implementar a Autenticação
- [ ] Implementar o Perfil do usuário
- [ ] Implementar o cadastro do usuário com foto via câmera

------

## 8. Referências sobre React Native

- <a href="https://reactnative.dev/" target="_blank">Site Oficial - React Native</a>
- <a href="https://reactnative.dev/docs/environment-setup" target="_blank">Documentação Oficial - React Native</a>
- <a href="https://expo.dev/" target="_blank">Site Oficial - Expo</a>
- <a href="https://docs.expo.dev/" target="_blank">Documentação Oficial - Expo</a>