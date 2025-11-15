# WEB1-ATV4

🚀 Atividade 4 – Versionamento, Acessibilidade e Deploy

Esta é a Atividade 4, continuação do projeto da ONG Esperança (Atividades 1, 2 e 3).
Nessa etapa o foco foi deixar o projeto mais próximo de um projeto profissional, trabalhando com:
Git e GitHub (versionamento e colaboração);
Acessibilidade (WCAG 2.1 nível AA);
Preparação para produção (minificação e otimização).

🎯 Objetivos da Atividade

Usar Git e GitHub de forma organizada (branches, commits, releases);
Melhorar a acessibilidade do site para diferentes pessoas e dispositivos;
Otimizar o código para uso em ambiente de produção;
Entregar um repositório completo com código, documentação e histórico.

🧱 Versionamento com Git/GitHub

Para esta atividade foi usado Git para controlar as versões do projeto e GitHub para o repositório remoto.
Estratégia de branches (GitFlow simplificado)
main → branch principal, com as versões estáveis;
develop → branch de desenvolvimento;
feature/... → branches para funcionalidades (ex: feature/js-spa, feature/acessibilidade).

Commits semânticos

Os commits foram organizados com mensagens simples e semânticas, por exemplo:
feat: adicionar validação de formulário
style: ajustar contraste dos botões
fix: corrigir layout no mobile
docs: atualizar README da atividade 4

Releases

As versões foram marcadas com tags e releases no GitHub, seguindo um padrão simples de versionamento:
v1.0.0 – Estrutura HTML (Atividade 1)
v2.0.0 – Estilos com CSS/Design System (Atividade 2)
v3.0.0 – Interatividade com JavaScript (Atividade 3)
v4.0.0 – Acessibilidade, otimizações e README final (Atividade 4)

♿ Acessibilidade (WCAG 2.1 Nível AA)

Foram aplicadas várias melhorias pensando em acessibilidade:
Estrutura semântica com uso de header, nav, main, section, footer e h1, h2, h3 organizados;
Navegação por teclado: todos os links e botões podem ser acessados com Tab e Enter;
Estilos de foco visível adicionados em links e botões, para o usuário saber onde está o cursor;
Texto alternativo (alt) em todas as imagens importantes;
Contraste de cores ajustado para ficar dentro da recomendação de 4.5:1 para textos normais;
Suporte para leitores de tela com estrutura clara e textos descritivos.
Modo de alto contraste / modo escuro
Foi pensado um sistema usando CSS com variáveis, que facilita criar:
Modo padrão (claro) – já aplicado nas atividades anteriores;
Modo de alto contraste/escuro – que pode ser ativado trocando as variáveis de cor (ex.: fundo escuro, textos claros).

⚙️ Otimização para Produção

Para simular um ambiente mais próximo de produção, foram feitas as seguintes ações:
Separação limpa de HTML, CSS e JavaScript em pastas (/css, /js, /assets);
Uso de design system com variáveis CSS, o que facilita manutenção e ajustes globais;
Preparação dos arquivos para minificação (HTML, CSS e JS podem ser minificados usando ferramentas online ou build tools, reduzindo o tamanho dos arquivos);
Imagens otimizadas manualmente (compressão) para reduzir o peso das páginas.

📂 Repositório no GitHub

O projeto está disponível em um repositório público no GitHub, contendo:
Código fonte completo (HTML, CSS e JS);
Pastas organizadas (/css, /js, /assets/img);
Histórico de commits;
Estrutura de branches;
README com a descrição das Atividades 1, 2, 3 e 4.

📄 Documentação Técnica (README)

O README foi atualizado para:
Explicar o contexto do projeto (ONG e terceiro setor);
Descrever o que foi feito em cada atividade;
Documentar as tecnologias usadas (HTML5, CSS3, JavaScript, Git/GitHub);
Mostrar como rodar o projeto localmente (abrir o index.html no navegador);
Registrar os aprendizados e a divisão de tarefas da dupla.

✨ Competências Desenvolvidas

Técnicas:
HTML5, CSS3 e JavaScript;
Organização de código e design system;
Uso de Git e GitHub;
Noções de acessibilidade e otimização.

Profissionais:
Planejamento em etapas (Atv 1 → 2 → 3 → 4);
Organização de tarefas e versionamento;
Escrita de documentação técnica simples.

Sociais:

Consciência sobre o impacto de ferramentas digitais para ONGs;
Atenção à acessibilidade para diferentes tipos de usuários;
Uso da tecnologia com foco em inclusão social.

👥 Autores

Desenvolvido por
Anselmo Junior e Luiz Felix da Silva Filho

Curso: Análise e Desenvolvimento de Sistemas
Disciplina: Desenvolvimento Web – Atividade 4
