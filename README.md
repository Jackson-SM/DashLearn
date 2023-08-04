### Sobre o que é o projeto?
 > O Projeto que visa desenvolver um dashboard para gerenciamento de tarefas e anotações. Com ele, é possível criar tarefas, definir prazos e responsáveis, bem como acompanhar o andamento e progresso de cada uma delas. Além disso, o Dashlearn também oferece a possibilidade de criar anotações para manter todas as informações relevantes em um só lugar. Acreditamos que o nosso projeto pode ser uma grande ajuda para aumentar a produtividade e melhorar a gestão de tarefas e projetos.


### Como iniciar o projeto:
- Clonar o projeto:
```bash
git clone git@github.com:Jackson-SM/DashLearn.git
```
 - Instalar Dependências:
 ```bash
cd DashLearn
yarn
 ```
 - Iniciar Projeto em Localhost:
 ```bash
yarn dev
 ```

 - Configurações de dependências
      - Stitches - stitches.config.ts
      - Jest - jest.config.ts
      - Eslint - .eslintrc.json
      - Prettier - .prettierrc

### Estrutura de Pastas
 - Components: Responsável por portar os componentes utilizados globalmente na Aplicação.
      - index.tsx / Arquivo principal
      - styles.ts / Arquivo de estilo
      - /Components / Componentes Locais
 - Assets: Guardar arquivos estáticos como imagens, fontes etc...
 - Config: Pasta de configuração de arquivos. Pode ser um arquivo utilizado globalmente como um tema, ou configuração de alguma biblioteca.
 - Contexts: Pasta para manter as Context Api's na nossa aplicação.
 - Hooks: Guardar os Hooks que serão utilizados na nossa aplicação.
 - Pages: Páginas já montados com todos os componentes.
 - Routes: Arquivos relacionados a rotas.
 - Styles: Estilos globais da aplicação, como temas, globalCss e etc...
 - Test: Arquivos de testes ou configuração de testes além de funções relacionados ao mesmo.
