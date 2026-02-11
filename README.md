# Site de Artista Músico - Pulo Santana

Este projeto é um website moderno e visualmente impactante desenvolvido para um artista músico. O site foi construído com foco em design responsivo, animações suaves e uma experiência de usuário imersiva.

## 🚀 Tecnologias Utilizadas

- **[React](https://react.dev/)**: Biblioteca JavaScript para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset do JavaScript que adiciona tipagem estática.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build rápida e servidor de desenvolvimento.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first para estilização rápida e moderna.
- **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.
- **[Intersection Observer API](https://developer.mozilla.org/pt-BR/docs/Web/API/Intersection_Observer_API)**: Para animações de scroll (fade-in, slide-up).

## ✨ Funcionalidades

- **Design Responsivo**: Adaptável para desktops, tablets e smartphones.
- **Hero Section**: Efeito parallax e animação de texto tipo "máquina de escrever".
- **Navegação Suave**: Scroll suave entre as seções (Home, Sobre, Música, Vídeos, Agenda, Galeria, Contato).
- **Player de Música Fixo**: Player integrado na parte inferior da tela com reprodução contínua.
- **Discografia 3D**: Cards de álbuns com efeito de inclinação 3D ao passar o mouse.
- **Galeria de Fotos**: Visualização em grade com modal fullscreen.
- **Formulário de Contato**: Validação de campos e feedback visual.
- **Animações**: Microinterações em botões e efeitos de entrada ao rolar a página.

## 📦 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1. Clone o repositório (ou baixe os arquivos):
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   ```

2. Entre na pasta do projeto:
   ```bash
   cd puloSantana
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

### Desenvolvimento

Para iniciar o servidor de desenvolvimento local:

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`.

### Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## 🎨 Personalização

- **Imagens**: Substitua as imagens na pasta `public` ou atualize as URLs nos arquivos de componentes.
- **Cores**: A paleta de cores pode ser ajustada no arquivo `tailwind.config.js`.
- **Conteúdo**: Os textos e dados (shows, álbuns) estão nos respectivos componentes dentro de `src/components`.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar e modificar.
