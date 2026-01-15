export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanations: string[];
}

export const QUIZ_DATA: Question[] = [
  {
    id: 1,
    question: "Segundo o histórico da UML, qual organização adotou a UML 1.1 como padrão mundial em 1997, encerrando a 'Guerra dos Métodos'?",
    options: ["Object Management Group", "Rational Software Corporation", "International Standards Org", "Institute of Electrical Eng", "World Wide Web Consortium"],
    correctIndex: 0,
    explanations: [
      "Correto! O OMG assumiu a UML para garantir um padrão aberto e independente.",
      "Incorreto. A Rational era a empresa dos criadores, mas submeteu o padrão ao OMG.",
      "Incorreto. A ISO padroniza muitas tecnologias, mas a UML é mantida pelo OMG.",
      "Incorreto. O IEEE foca em padrões de hardware e eletricidade.",
      "Incorreto. O W3C foca em padrões para a Web como HTML e CSS."
    ]
  },
  {
    id: 2,
    question: "Na engenharia de requisitos, como são classificados os requisitos que descrevem 'como o sistema é', focando em qualidade e restrições?",
    options: ["Requisitos de Implementação", "Requisitos Não Funcionais", "Requisitos Comportamentais", "Requisitos de Estrutura", "Requisitos Funcionais"],
    correctIndex: 1,
    explanations: [
      "Incorreto. Implementação refere-se a código e ferramentas técnicas.",
      "Correto! Tratam de desempenho, segurança, confiabilidade e outras qualidades.",
      "Incorreto. Comportamentais descrevem ações, geralmente ligadas a funções.",
      "Incorreto. 'Estrutura' não é uma categoria padrão de requisitos de engenharia.",
      "Incorreto. Requisitos funcionais descrevem 'o que' o sistema faz, não sua qualidade."
    ]
  },
  {
    id: 3,
    question: "Qual diagrama da UML é comparado à 'planta baixa' de uma casa, mostrando onde estão as paredes mas não as pessoas andando dentro dela?",
    options: ["Diagrama de Sequência", "Diagrama de Atividades", "Diagrama de Classes", "Diagrama de Objetos", "Diagrama de Casos de Uso"],
    correctIndex: 2,
    explanations: [
      "Incorreto. Sequência mostra interação temporal (pessoas andando).",
      "Incorreto. Atividades mostram o fluxo de processos dinâmicos.",
      "Correto! Define a estrutura estática do sistema, como uma planta fixa.",
      "Incorreto. Objetos mostram instâncias específicas em um momento, não o molde geral.",
      "Incorreto. Casos de Uso mostram as intenções e funcionalidades externas."
    ]
  },
  {
    id: 4,
    question: "No Diagrama de Classes, qual símbolo representa a visibilidade 'Protegido', permitindo acesso às classes filhas?",
    options: ["O símbolo de til (~)", "O símbolo de menos (-)", "O símbolo de mais (+)", "O símbolo de cerquilha (#)", "O símbolo de asterisco (*)"],
    correctIndex: 3,
    explanations: [
      "Incorreto. O til (~) representa visibilidade de Pacote.",
      "Incorreto. O menos (-) representa visibilidade Privada.",
      "Incorreto. O mais (+) representa visibilidade Pública.",
      "Correto! A cerquilha (#) é a notação padrão para o modificador Protected.",
      "Incorreto. Asteriscos são usados para multiplicidade."
    ]
  },
  {
    id: 5,
    question: "Em um sistema de Escola Técnica, um 'Professor' ensina vários 'Estudantes'. Qual termo define essa conexão estrutural entre classes?",
    options: ["Generalização", "Dependência", "Realização", "Composição", "Associação"],
    correctIndex: 4,
    explanations: [
      "Incorreto. Generalização é herança (um professor não é um estudante).",
      "Incorreto. Dependência é um uso passageiro, não uma conexão estrutural.",
      "Incorreto. Realização é a implementação de uma interface.",
      "Incorreto. Composição indica posse forte; estudantes existem sem o professor.",
      "Correto! Associação descreve o vínculo duradouro entre instâncias de classes."
    ]
  },
  {
    id: 6,
    question: "Qual é a principal diferença conceitual entre o Diagrama de Classes e o Diagrama de Objetos segundo a metáfora do 'molde'?",
    options: ["A classe é o molde; o objeto é a peça que saiu dele.", "A classe é a peça real; o objeto é o molde abstrato.", "A classe é dinâmica; o objeto é estático e imutável.", "A classe foca no tempo; o objeto foca na estrutura.", "A classe usa losangos; o objeto usa linhas tracejadas."],
    correctIndex: 0,
    explanations: [
      "Correto! Classes definem a estrutura (abstrato) e objetos são as instâncias (concreto).",
      "Incorreto. É o contrário: classes são abstratas e objetos são concretos.",
      "Incorreto. Classes são estáticas; objetos possuem estado dinâmico em execução.",
      "Incorreto. Nenhum dos dois foca primariamente no tempo.",
      "Incorreto. Losangos são para relações estruturais, não para distinguir instâncias."
    ]
  },
  {
    id: 7,
    question: "No Diagrama de Pacotes, qual é a 'Regra de Ouro' sobre o agrupamento de classes em pastas ou domínios?",
    options: ["Uma classe pode pertencer a múltiplos pacotes simultaneamente.", "Um tipo pode pertencer a apenas um pacote específico.", "As classes devem ser duplicadas em cada pacote que as utiliza.", "Pacotes não podem conter classes, apenas outros subpacotes.", "A visibilidade de todas as classes deve ser sempre pública."],
    correctIndex: 1,
    explanations: [
      "Incorreto. Cada elemento deve ter um único namespace (pacote) proprietário.",
      "Correto! Uma classe pertence exclusivamente a um único pacote.",
      "Incorreto. Duplicação de modelos quebra a integridade da arquitetura.",
      "Incorreto. O propósito principal dos pacotes é justamente conter classes.",
      "Incorreto. Pacotes podem ocultar classes com visibilidade privada."
    ]
  },
  {
    id: 8,
    question: "O Diagrama de Sequência possui dois eixos principais. O que o eixo vertical representa neste diagrama?",
    options: ["A hierarquia de classes.", "Os objetos participantes.", "O tempo da interação.", "A visibilidade dos métodos.", "O acoplamento do sistema."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Hierarquia de classes é vista no Diagrama de Classes.",
      "Incorreto. Objetos participantes ficam no eixo horizontal (topo).",
      "Correto! A descida no eixo vertical representa a progressão do tempo.",
      "Incorreto. Visibilidade é um conceito estático do modelo de classes.",
      "Incorreto. Acoplamento é uma métrica de design, não um eixo do diagrama."
    ]
  },
  {
    id: 9,
    question: "Em um Diagrama de Sequência para matricular aluno, o que indica uma linha tracejada voltando do objeto 'Aluno' para o 'Sistema'?",
    options: ["Uma chamada de método síncrono.", "A criação de um novo objeto.", "A destruição do objeto aluno.", "O retorno de uma mensagem.", "Uma mensagem perdida na rede."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Chamadas síncronas usam linhas sólidas com setas cheias.",
      "Incorreto. Criação usa setas sólidas com o estereótipo <<create>>.",
      "Incorreto. Destruição é marcada por um X na linha de vida.",
      "Correto! Linhas tracejadas indicam a resposta (return) de um estímulo anterior.",
      "Incorreto. Mensagens perdidas usam uma notação circular específica."
    ]
  },
  {
    id: 10,
    question: "Qual diagrama é descrito como uma 'versão orientada a objetos do clássico Fluxograma', focando no fluxo de controle?",
    options: ["Diagrama de Sequência", "Diagrama de Estados", "Diagrama de Classes", "Diagrama de Tempo", "Diagrama de Atividades"],
    correctIndex: 4,
    explanations: [
      "Incorreto. Sequência foca em mensagens entre objetos no tempo.",
      "Incorreto. Estados foca no ciclo de vida de um único objeto.",
      "Incorreto. Classes foca na estrutura estática, não no fluxo.",
      "Incorreto. Tempo foca em restrições cronológicas precisas.",
      "Correto! Atividades modelam lógica de processos e algoritmos."
    ]
  },
  {
    id: 11,
    question: "No contexto de Casos de Uso, o que representa a fronteira do sistema que envolve as elipses?",
    options: ["O escopo do sistema a ser construído.", "A comunicação externa com a internet.", "O banco de dados físico do projeto.", "A rede de computadores da empresa.", "O hardware onde o software rodará."],
    correctIndex: 0,
    explanations: [
      "Correto! Define o que faz parte do software modelado e o que é externo.",
      "Incorreto. A internet é um canal, não o limite lógico da aplicação.",
      "Incorreto. O banco de dados está dentro do sistema, não é sua fronteira.",
      "Incorreto. Infraestrutura de rede é externa à lógica de casos de uso.",
      "Incorreto. Hardware é modelado no Diagrama de Implantação."
    ]
  },
  {
    id: 12,
    question: "Qual relacionamento de Caso de Uso é obrigatório, onde um caso base sempre executa o comportamento do caso incluído?",
    options: ["Generalização", "Inclusão", "Associação", "Extensão", "Herança"],
    correctIndex: 1,
    explanations: [
      "Incorreto. Generalização trata de especialização de casos.",
      "Correto! O relacionamento <<include>> torna o comportamento mandatório.",
      "Incorreto. Associação liga atores a casos de uso.",
      "Incorreto. <<extend>> é opcional e condicional.",
      "Incorreto. Herança em Casos de Uso é chamada de Generalização."
    ]
  },
  {
    id: 13,
    question: "No Diagrama de Máquina de Estado, o que é uma 'Guarda', representada entre colchetes sobre a transição?",
    options: ["O nome do evento que dispara a ação.", "O estado final do ciclo de vida.", "Uma condição booleana para a transição.", "A ação executada dentro do estado.", "O tempo máximo de permanência."],
    correctIndex: 2,
    explanations: [
      "Incorreto. O gatilho é o evento; a guarda é a condição após o evento.",
      "Incorreto. O estado final é um símbolo gráfico específico.",
      "Correto! A transição só ocorre se o gatilho acontecer E a guarda for True.",
      "Incorreto. Ações internas são marcadas com prefixos como entry, do ou exit.",
      "Incorreto. Restrições de tempo são eventos temporais, não simples guardas."
    ]
  },
  {
    id: 14,
    question: "Qual diagrama estrutural mostra a arquitetura física, mapeando artefatos de software em nós de hardware?",
    options: ["Diagrama de Estrutura Composta", "Diagrama de Componentes", "Diagrama de Comunicação", "Diagrama de Implantação", "Diagrama de Pacotes"],
    correctIndex: 3,
    explanations: [
      "Incorreto. Foca na estrutura interna de elementos complexos.",
      "Incorreto. Foca na organização lógica dos componentes de software.",
      "Incorreto. É um diagrama de interação dinâmica entre objetos.",
      "Correto! Mostra a topografia de hardware e a alocação de software (nós e artefatos).",
      "Incorreto. Foca no agrupamento lógico de namespaces."
    ]
  },
  {
    id: 15,
    question: "O Diagrama de Comunicação é semanticamente equivalente ao de Sequência, mas enfatiza:",
    options: ["A ordem temporal das mensagens.", "O ciclo de vida dos objetos.", "As restrições de tempo real.", "A hierarquia de herança.", "A organização estrutural dos objetos."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Enfatizar tempo é o papel do Diagrama de Sequência.",
      "Incorreto. Sequência ou Estados mostram melhor o ciclo de vida.",
      "Incorreto. Tempo real é o foco do Diagrama de Tempo.",
      "Incorreto. Herança é o foco do Diagrama de Classes.",
      "Correto! Ele destaca os vínculos (links) físicos entre os objetos que colaboram."
    ]
  },
  {
    id: 16,
    question: "Quem são os 'Três Amigos' responsáveis pela unificação dos métodos que resultou na criação da UML?",
    options: ["Booch, Rumbaugh e Jacobson", "Turing, Von Neumann e Ada", "Gates, Jobs e Wozniak", "Richie, Thompson e Kernighan", "Fowler, Beck e Martin"],
    correctIndex: 0,
    explanations: [
      "Correto! Grady Booch, James Rumbaugh e Ivar Jacobson unificaram seus métodos para criar a UML.",
      "Incorreto. São pioneiros da computação e matemática, não da UML.",
      "Incorreto. São ícones do hardware e sistemas operacionais.",
      "Incorreto. Criadores do C e Unix.",
      "Incorreto. Grandes autores de métodos ágeis e arquitetura, mas não os pais da UML."
    ]
  },
  {
    id: 17,
    question: "Na modelagem de uma Escola Técnica, se o 'Financeiro' precisa ver o 'Acadêmico', qual relação usamos no Diagrama de Pacotes?",
    options: ["Generalização", "Dependência", "Composição", "Realização", "Extensão"],
    correctIndex: 1,
    explanations: [
      "Incorreto. Pacotes não herdam um do outro dessa forma estrutural.",
      "Correto! Indica que um pacote requer elementos de outro para funcionar.",
      "Incorreto. Composição é entre classes/instâncias.",
      "Incorreto. Realização é entre classe e interface.",
      "Incorreto. Extensão é um termo de Casos de Uso."
    ]
  },
  {
    id: 18,
    question: "Qual elemento gráfico representa um 'Ator' no Diagrama de Caso de Uso?",
    options: ["Um retângulo.", "Uma elipse.", "Um boneco palito.", "Um losango.", "Um triângulo."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Retângulos são a fronteira do sistema.",
      "Incorreto. Elipses são os próprios Casos de Uso.",
      "Correto! O 'Stick Man' é a representação universal para Atores.",
      "Incorreto. Losangos são decisões em diagramas de atividades.",
      "Incorreto. Triângulos são pontas de setas de generalização."
    ]
  },
  {
    id: 19,
    question: "No Diagrama de Classes, qual a diferença visual entre Agregação e Composição?",
    options: ["Agregação usa linha tracejada; Composição usa sólida.", "Agregação usa seta aberta; Composição usa fechada.", "Agregação usa círculo; Composição usa quadrado.", "Agregação usa diamante vazio; Composição o usa cheio.", "Agregação não tem seta; Composição tem seta dupla."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Ambas usam linhas sólidas.",
      "Incorreto. Seta aberta ou fechada não define o tipo de diamante.",
      "Incorreto. Círculos e quadrados não são usados para agregados.",
      "Correto! Diamante vazio = Agregação (fraca); Diamante cheio = Composição (forte).",
      "Incorreto. Navegabilidade é independente do tipo de agregação."
    ]
  },
  {
    id: 20,
    question: "O que define um 'Artefato' no contexto de um Diagrama de Implantação?",
    options: ["O hardware físico como um servidor.", "O protocolo de rede utilizado.", "O usuário que opera o sistema.", "A sala onde o servidor fica.", "O software em si."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Hardware é modelado como 'Nó'.",
      "Incorreto. Protocolos são caminhos de comunicação.",
      "Incorreto. Usuários são modelados como 'Atores'.",
      "Incorreto. Localização física não é um artefato de software.",
      "Correto! Artefatos são peças físicas de informação (arquivos, DLLs, scripts)."
    ]
  },
  {
    id: 21,
    question: "Qual nível de abstração da modelagem foca apenas nos conceitos do domínio do problema, sem detalhes técnicos?",
    options: ["Nível Conceitual", "Nível de Implementação", "Nível de Especificação", "Nível de Código", "Nível Físico"],
    correctIndex: 0,
    explanations: [
      "Correto! Foca na compreensão do negócio, ignorando tecnologia.",
      "Incorreto. Trata de como a tecnologia será usada para resolver o problema.",
      "Incorreto. Foca nas interfaces do sistema de software.",
      "Incorreto. É o nível mais baixo, próximo à codificação.",
      "Incorreto. Trata da distribuição física de componentes."
    ]
  },
  {
    id: 22,
    question: "No Diagrama de Atividades, qual símbolo é utilizado para representar uma decisão?",
    options: ["Um retângulo arredondado.", "Um losango.", "Um círculo preto sólido.", "Uma barra espessa preta.", "Um olho de boi."],
    correctIndex: 1,
    explanations: [
      "Incorreto. Retângulos arredondados são Ações.",
      "Correto! O losango indica desvios baseados em condições booleanas.",
      "Incorreto. Círculo preto sólido é o ponto de início.",
      "Incorreto. Barras espessas são Forks/Joins para paralelismo.",
      "Incorreto. O olho de boi indica o fim da atividade."
    ]
  },
  {
    id: 23,
    question: "O que o Diagrama de Tempo enfatiza que o diferencia dos outros diagramas de interação?",
    options: ["A estrutura estática das classes.", "A troca de mensagens síncronas.", "As restrições temporais e mudança de estado.", "A organização física dos servidores.", "O fluxo de atividades do usuário."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Foco do Diagrama de Classes.",
      "Incorreto. Foco do Diagrama de Sequência.",
      "Correto! Foca na duração precisa dos estados de um objeto no tempo.",
      "Incorreto. Foco do Diagrama de Implantação.",
      "Incorreto. Foco do Diagrama de Atividades."
    ]
  },
  {
    id: 24,
    question: "Na UML, a relação de 'Realização' (uma classe implementa uma interface) é representada por:",
    options: ["Linha sólida com diamante preenchido.", "Linha sólida com seta aberta simples.", "Linha tracejada com seta aberta.", "Linha tracejada com seta triangular vazia.", "Linha sólida sem pontas nas extremidades."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Esta é a Composição.",
      "Incorreto. Esta é uma Associação simples dirigida.",
      "Incorreto. Esta é uma Dependência.",
      "Correto! A linha tracejada com triângulo vazio simboliza a realização de um contrato.",
      "Incorreto. Linhas sem pontas são associações genéricas."
    ]
  },
  {
    id: 25,
    question: "Em um Diagrama de Objetos, como deve ser formatado o nome do objeto para estar correto segundo a notação?",
    options: ["Deve estar em negrito.", "Deve estar em itálico.", "Deve estar entre parênteses.", "Deve estar entre aspas.", "Deve estar sublinhado."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Negrito não é uma regra de notação para instâncias.",
      "Incorreto. Itálico é usado para classes abstratas.",
      "Incorreto. Parênteses não são usados em nomes de objetos.",
      "Incorreto. Aspas são usadas para estereótipos.",
      "Correto! Sublinhar o nome (objeto:Classe) é obrigatório para indicar instâncias."
    ]
  },
  {
    id: 26,
    question: "Qual é a metáfora utilizada para explicar a diferença entre Diagramas Estruturais e Comportamentais?",
    options: ["O esqueleto e o tráfego.", "O livro e o filme.", "O mapa e o território.", "O carro e o motorista.", "O hardware e o software."],
    correctIndex: 0,
    explanations: [
      "Correto! Estrutura é o esqueleto estático; Comportamento é o tráfego dinâmico.",
      "Incorreto. Livros e filmes podem ser ambos narrativas (comportamento).",
      "Incorreto. Esta metáfora trata da relação entre modelo e realidade.",
      "Incorreto. Ambos são elementos de um sistema em uso.",
      "Incorreto. Tratam de camadas de abstração técnica, não de diagramas."
    ]
  },
  {
    id: 27,
    question: "No Diagrama de Sequência, o que indica o retângulo vertical sobre a linha de vida do objeto?",
    options: ["Que o objeto foi destruído.", "Que o objeto está ativo.", "Que o objeto é uma classe abstrata.", "Que o objeto está aguardando mensagem.", "Que o objeto é um ator externo."],
    correctIndex: 1,
    explanations: [
      "Incorreto. Destruição é marcada por um X.",
      "Correto! É o foco de controle ou período de ativação do objeto.",
      "Incorreto. Abstração é um conceito de classe, não de linha de vida.",
      "Incorreto. Estar inativo é mostrado apenas pela linha de vida tracejada.",
      "Incorreto. Atores são representados por bonecos palito no topo."
    ]
  },
  {
    id: 28,
    question: "Se um caso de uso 'Login' pode ser estendido por 'Erro de Senha' apenas se o usuário errar, qual relação usamos?",
    options: ["Include", "Generalization", "Extend", "Association", "Realization"],
    correctIndex: 2,
    explanations: [
      "Incorreto. Include é obrigatório.",
      "Incorreto. Generalização é herança.",
      "Correto! Extend é usado para comportamentos opcionais e condicionais.",
      "Incorreto. Associação liga atores a casos de uso.",
      "Incorreto. Realização é implementação técnica."
    ]
  },
  {
    id: 29,
    question: "O que o 'Fragmento Combinado [alt]' representa em um Diagrama de Sequência?",
    options: ["Um loop de repetição.", "Uma chamada paralela.", "Uma referência a outro diagrama.", "Caminhos alternativos.", "Uma região crítica de tempo."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Loop de repetição é o fragmento 'loop'.",
      "Incorreto. Chamada paralela é o fragmento 'par'.",
      "Incorreto. Referência é o fragmento 'ref'.",
      "Correto! O fragmento 'alt' representa escolha condicional (IF/ELSE).",
      "Incorreto. Região crítica usa o fragmento 'critical'."
    ]
  },
  {
    id: 30,
    question: "No Diagrama de Estrutura Composta, o que representam as 'Portas'?",
    options: ["Variáveis locais do método principal.", "Erros de compilação da classe.", "Herança de classes externas.", "Conexões de banco de dados.", "Pontos de interação distintos e isolamento."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Variáveis não são modeladas como portas físicas.",
      "Incorreto. Diagramas não modelam erros de compilação.",
      "Incorreto. Herança usa setas de generalização.",
      "Incorreto. Conexões são modeladas como links ou associações.",
      "Correto! Portas isolam a estrutura interna permitindo interação controlada."
    ]
  },
  {
    id: 31,
    question: "Qual diagrama é ideal para visualizar o ciclo de vida completo de um objeto, como uma 'Ordem de Compra'?",
    options: ["Diagrama de Máquina de Estado", "Diagrama de Sequência", "Diagrama de Pacotes", "Diagrama de Componentes", "Diagrama de Caso de Uso"],
    correctIndex: 0,
    explanations: [
      "Correto! É perfeito para mostrar os diversos estados por que um objeto passa.",
      "Incorreto. Foca em uma interação específica, não no ciclo de vida global.",
      "Incorreto. Foca na organização lógica de namespaces.",
      "Incorreto. Foca na estrutura modular do software.",
      "Incorreto. Foca nas funcionalidades externas."
    ]
  },
  {
    id: 32,
    question: "Em requisitos de software, 'O sistema deve carregar o feed em menos de 2 segundos' é um exemplo de:",
    options: ["Requisito Funcional", "Requisito Não Funcional", "Requisito de Negócio", "Requisito de Usuário", "Requisito de Domínio"],
    correctIndex: 1,
    explanations: [
      "Incorreto. Funcional descreve a ação de carregar o feed.",
      "Correto! Trata-se de desempenho, uma restrição de qualidade.",
      "Incorreto. Requisitos de negócio focam em metas financeiras ou operacionais.",
      "Incorreto. Requisito de usuário descreve a necessidade na linguagem do leigo.",
      "Incorreto. Requisito de domínio foca em regras intrínsecas da área (ex: contabilidade)."
    ]
  },
  {
    id: 33,
    question: "O que acontece com a 'parte' em uma relação de Composição se o 'todo' for destruído?",
    options: ["A parte continua existindo independentemente.", "A parte é arquivada em outro pacote.", "A parte morre junto com o todo.", "A parte é transferida para outra classe.", "A parte se torna uma classe abstrata."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Isso seria Agregação.",
      "Incorreto. O modelo de pacotes é independente do ciclo de vida das instâncias.",
      "Correto! Na Composição, a existência da parte é vinculada à do todo.",
      "Incorreto. Transferência automática não faz parte da semântica da Composição.",
      "Incorreto. Abstração é uma característica estática, não dinâmica."
    ]
  },
  {
    id: 34,
    question: "Para que servem as 'Swimlanes' em um Diagrama de Atividades?",
    options: ["Para decorar o diagrama visualmente.", "Para indicar o tempo de duração da atividade.", "Para separar atividades de estados.", "Para mostrar quem é responsável pela ação.", "Para definir a prioridade do processo."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Elas possuem significado semântico organizacional.",
      "Incorreto. Tempo não é o foco das raias.",
      "Incorreto. Atividades e estados são elementos lógicos, não raias.",
      "Correto! As raias (swimlanes) indicam partições de responsabilidade (ex: Departamentos).",
      "Incorreto. Prioridade não é modelada visualmente por raias."
    ]
  },
  {
    id: 35,
    question: "No Diagrama de Sequência, o que significa uma seta com a ponta 'create' apontando para a cabeça de um objeto?",
    options: ["O objeto está sendo deletado.", "O objeto está enviando um erro.", "O objeto está em estado de espera.", "O objeto está retornando dados.", "O objeto está sendo criado naquele momento."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Deletar usa um X no final da linha de vida.",
      "Incorreto. Erros são mensagens normais ou exceções.",
      "Incorreto. Espera é o vazio na linha de vida ativa.",
      "Incorreto. Retorno usa linhas tracejadas.",
      "Correto! Indica a instanciação de um novo objeto durante o cenário."
    ]
  },
  {
    id: 36,
    question: "Qual é a função principal do Diagrama de Visão Geral da Interação?",
    options: ["Visualizar o fluxo de controle macro entre interações.", "Mostrar detalhes de mensagens individuais.", "Modelar o hardware físico do sistema.", "Definir a estrutura interna das classes.", "Listar os requisitos não funcionais."],
    correctIndex: 0,
    explanations: [
      "Correto! É um híbrido de Atividades e Sequência para fluxo de alto nível.",
      "Incorreto. Isso é papel do Diagrama de Sequência detalhado.",
      "Incorreto. Papel do Diagrama de Implantação.",
      "Incorreto. Papel do Diagrama de Classes ou Estrutura Composta.",
      "Incorreto. Requisitos são listados em documentos ou diagramas de Casos de Uso."
    ]
  },
  {
    id: 37,
    question: "Em um Diagrama de Classes, a multiplicidade '0..1' indica que a relação é:",
    options: ["Obrigatória e única.", "Opcional.", "Múltipla.", "Proibida.", "Infinita."],
    correctIndex: 1,
    explanations: [
      "Incorreto. Obrigatória e única seria '1'.",
      "Correto! Pode haver zero ou uma instância relacionada.",
      "Incorreto. Múltipla seria '1..*' ou '0..*'.",
      "Incorreto. Proibida seria '0'.",
      "Incorreto. Infinita seria '*'."
    ]
  },
  {
    id: 38,
    question: "O conceito de 'Polimorfismo' na orientação a objetos é facilitado por qual tipo de relacionamento na UML?",
    options: ["Associação", "Dependência", "Herança", "Agregação", "Composição"],
    correctIndex: 2,
    explanations: [
      "Incorreto. Associação liga classes, mas não garante polimorfismo.",
      "Incorreto. Dependência é apenas uso passageiro.",
      "Correto! A herança permite que subclasses sejam tratadas como a superclasse.",
      "Incorreto. Agregação é um tipo de associação estrutural.",
      "Incorreto. Composição foca no ciclo de vida compartilhado."
    ]
  },
  {
    id: 39,
    question: "No Diagrama de Pacotes, o que significa a notação '<<import>>'?",
    options: ["Um pacote copiou o conteúdo do outro.", "Um pacote bloqueia o acesso ao outro.", "Um pacote herda de outro pacote.", "Um pacote acessa o conteúdo público do outro.", "Um pacote foi deletado."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Importação não duplica fisicamente o conteúdo.",
      "Incorreto. Ela permite o acesso, não o bloqueia.",
      "Incorreto. Herança entre pacotes é generalização.",
      "Correto! Permite que elementos de um pacote vejam os públicos do outro.",
      "Incorreto. Diagramas não mostram ações de deleção de modelos."
    ]
  },
  {
    id: 40,
    question: "Qual diagrama comportamental foca no 'PROCESSO' em vez do objeto?",
    options: ["Diagrama de Máquina de Estado", "Diagrama de Classes", "Diagrama de Estrutura Composta", "Diagrama de Implantação", "Diagrama de Atividades"],
    correctIndex: 4,
    explanations: [
      "Incorreto. Estados foca no ciclo de vida de um objeto.",
      "Incorreto. Classes foca na estrutura estática.",
      "Incorreto. Estrutura Composta foca na colaboração interna de classes.",
      "Incorreto. Implantação foca na infraestrutura física.",
      "Correto! O Diagrama de Atividades é o equivalente OO ao fluxograma de processos."
    ]
  },
  {
    id: 41,
    question: "O que representa o símbolo de diamante preenchido no lado do 'Todo' em uma relação?",
    options: ["Composição", "Agregação", "Dependência", "Associação Simples", "Generalização"],
    correctIndex: 0,
    explanations: [
      "Correto! O diamante preenchido é a marca da Composição.",
      "Incorreto. Agregação usa diamante vazio.",
      "Incorreto. Dependência usa seta tracejada.",
      "Incorreto. Associação simples usa apenas uma linha.",
      "Incorreto. Generalização usa seta com triângulo vazio."
    ]
  },
  {
    id: 42,
    question: "No Diagrama de Comunicação, como é definida a ordem temporal das mensagens?",
    options: ["Pela posição vertical das setas.", "Por números de sequência.", "Pela cor das setas de ligação.", "Pela espessura dos links.", "Não há ordem temporal neste diagrama."],
    correctIndex: 1,
    explanations: [
      "Incorreto. A posição vertical define tempo no Diagrama de Sequência.",
      "Correto! As mensagens são numeradas (ex: 1.1, 1.2) para indicar a ordem.",
      "Incorreto. Cores não possuem semântica padrão na UML.",
      "Incorreto. Espessura não define cronologia.",
      "Incorreto. Há ordem temporal, mas ela é textual (numérica)."
    ]
  },
  {
    id: 43,
    question: "Qual é o objetivo principal da fase de 'Análise e Design' no fluxo de engenharia de software?",
    options: ["Descobrir o que fazer.", "Escrever o código fonte final.", "Traduzir o 'O quê' em 'Como' (Modelagem).", "Testar o sistema contra bugs.", "Entregar o produto ao usuário."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Descobrir 'o que' fazer é papel dos Requisitos.",
      "Incorreto. Escrever código é papel da Implementação.",
      "Correto! É onde os requisitos abstratos ganham forma técnica modelada.",
      "Incorreto. Testar é papel da Garantia de Qualidade.",
      "Incorreto. Entregar é papel da Implantação/Release."
    ]
  },
  {
    id: 44,
    question: "Em um Diagrama de Classes, o que a seção do meio do retângulo da classe representa?",
    options: ["O nome da classe.", "Os métodos.", "Os eventos de sistema.", "Os atributos (estado).", "As exceções tratadas."],
    correctIndex: 3,
    explanations: [
      "Incorreto. O nome fica na seção superior.",
      "Incorreto. Os métodos ficam na seção inferior.",
      "Incorreto. Eventos não possuem seção fixa no retângulo de classe.",
      "Correto! A seção central descreve os dados ou estado da classe.",
      "Incorreto. Exceções não têm local fixo na notação padrão."
    ]
  },
  {
    id: 45,
    question: "O que a 'Barra de Fork' representa no Diagrama de Atividades?",
    options: ["O fim do processo.", "Uma decisão condicional.", "A sincronização de fluxos paralelos.", "O início do diagrama.", "A divisão de um fluxo em vários paralelos."],
    correctIndex: 4,
    explanations: [
      "Incorreto. O fim é um círculo bullseye.",
      "Incorreto. Decisão é um losango.",
      "Incorreto. Sincronizar é papel do 'Join' (barra de entrada múltipla).",
      "Incorreto. Início é um círculo preto sólido.",
      "Correto! Fork (Garfo) divide um fluxo único em vários fluxos paralelos."
    ]
  },
  {
    id: 46,
    question: "Em um Diagrama de Caso de Uso de uma escola, 'Secretário' e 'Sistema Financeiro' são exemplos de:",
    options: ["Atores", "Casos de Uso", "Cenários", "Pacotes", "Classes"],
    correctIndex: 0,
    explanations: [
      "Correto! Representam entidades externas que interagem com o sistema.",
      "Incorreto. Casos de Uso seriam 'Matricular Aluno' ou 'Gerar Boleto'.",
      "Incorreto. Cenários são instâncias narrativas de casos de uso.",
      "Incorreto. Pacotes agrupam elementos de modelo.",
      "Incorreto. Classes são para estrutura interna do sistema."
    ]
  },
  {
    id: 47,
    question: "Qual diagrama é utilizado para modelar sistemas reativos como semáforos ou caixas eletrônicos?",
    options: ["Diagrama de Pacotes", "Diagrama de Máquina de Estado", "Diagrama de Objetos", "Diagrama de Componentes", "Diagrama de Caso de Uso"],
    correctIndex: 1,
    explanations: [
      "Incorreto. Pacotes agrupam namespaces.",
      "Correto! Sistemas dirigidos a eventos são modelados via transições de estado.",
      "Incorreto. Objetos mostram fotos da memória do sistema.",
      "Incorreto. Componentes mostram módulos de código.",
      "Incorreto. Casos de Uso focam no usuário externo."
    ]
  },
  {
    id: 48,
    question: "No contexto de UML, o que significa dizer que uma classe 'Depende' de outra?",
    options: ["É uma relação de 'Posse permanente'.", "É uma relação de 'Todo-Parte' forte.", "É uma relação de 'Uso Temporário'.", "É uma relação de 'Herança'.", "É uma relação de 'Implementação'."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Posse permanente é Associação ou Composição.",
      "Incorreto. Todo-Parte forte é Composição.",
      "Correto! Indica que uma classe usa a outra brevemente (ex: como parâmetro).",
      "Incorreto. Herança é Generalização.",
      "Incorreto. Implementação é Realização."
    ]
  },
  {
    id: 49,
    question: "O que diferencia um Diagrama de Sequência de um Diagrama de Comunicação?",
    options: ["A Sequência usa atores; a Comunicação não usa objetos.", "A Sequência é estrutural; a Comunicação é comportamental.", "A Sequência mostra hardware; a Comunicação mostra software.", "A Sequência foca no tempo; a Comunicação foca na estrutura dos vínculos.", "Não há diferença, são nomes diferentes para o mesmo diagrama."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Ambos usam objetos e podem usar atores.",
      "Incorreto. Ambos são comportamentais.",
      "Incorreto. Ambos modelam software no nível lógico/memória.",
      "Correto! A Sequência organiza por tempo; a Comunicação organiza por conexões.",
      "Incorreto. Eles são semanticamente equivalentes, mas visualmente distintos."
    ]
  },
  {
    id: 50,
    question: "Qual símbolo representa o estado inicial em um Diagrama de Atividades ou de Estados?",
    options: ["Um círculo com um 'X'.", "Um retângulo vazio.", "Um losango vazio.", "Um quadrado preenchido.", "Um círculo preto sólido."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Círculo com X geralmente é fim de fluxo local.",
      "Incorreto. Retângulos são ações ou estados.",
      "Incorreto. Losangos são decisões.",
      "Incorreto. Quadrados não têm uso padrão para estados.",
      "Correto! O ponto preto sólido marca o ponto de entrada."
    ]
  },
  {
    id: 51,
    question: "Em um sistema escolar, se 'Turma' é composta por 'Alunos', mas os alunos continuam existindo sem a turma, a relação é:",
    options: ["Agregação", "Composição", "Generalização", "Realização", "Dependência"],
    correctIndex: 0,
    explanations: [
      "Correto! Agregação é o todo-parte onde a parte sobrevive ao todo.",
      "Incorreto. Na composição, o aluno morreria ao apagar a turma.",
      "Incorreto. Aluno não é um subtipo de Turma.",
      "Incorreto. Realização é para contratos de interface.",
      "Incorreto. É uma conexão mais forte que o mero uso temporário."
    ]
  },
  {
    id: 52,
    question: "Qual é a função dos 'Nós' no Diagrama de Implantação?",
    options: ["Representar métodos da classe.", "Representar o hardware ou ambiente de execução.", "Representar o banco de dados lógico.", "Representar os usuários do sistema.", "Representar as mensagens trocadas."],
    correctIndex: 1,
    explanations: [
      "Incorreto. Métodos são para Diagrama de Classes.",
      "Correto! Cubos que representam servidores, PCs ou ambientes de software.",
      "Incorreto. Banco de dados lógico é modelado por classes/componentes.",
      "Incorreto. Usuários são Atores.",
      "Incorreto. Mensagens são para diagramas de interação."
    ]
  },
  {
    id: 53,
    question: "No Diagrama de Sequência, o que significa a mensagem 'getDados()' sobre uma seta sólida?",
    options: ["O retorno de uma informação.", "A criação de um objeto.", "Uma chamada de método ou requisição.", "Uma condição de guarda.", "Um comentário explicativo."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Retorno usa linhas tracejadas.",
      "Incorreto. Criação usa estereótipos específicos.",
      "Correto! Setas sólidas indicam estímulos ou chamadas de procedimento.",
      "Incorreto. Guardas ficam entre colchetes [ ].",
      "Incorreto. Comentários ficam em notas explicativas."
    ]
  },
  {
    id: 54,
    question: "Por que a UML é considerada uma linguagem e não uma metodologia?",
    options: ["Porque ela dita como gerenciar a equipe.", "Porque ela é uma linguagem de programação compilável.", "Porque ela só serve para documentação final.", "Porque ela fornece o vocabulário, não o processo.", "Porque ela proíbe o uso de metodologias ágeis."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Gerenciamento é parte da metodologia (ex: Scrum).",
      "Incorreto. UML é de modelagem, não de programação direta (embora gere código).",
      "Incorreto. Serve para análise, design e comunicação, não só fim.",
      "Correto! Oferece as ferramentas visuais sem impor 'como' ou 'quando' desenhar.",
      "Incorreto. Ela é compatível com quase qualquer metodologia."
    ]
  },
  {
    id: 55,
    question: "No Diagrama de Máquina de Estado, o que é uma 'Transição'?",
    options: ["O momento em que o objeto é criado.", "O tempo que o objeto fica parado.", "A destruição final do objeto.", "A lista de atributos do objeto.", "A mudança de um estado para outro."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Criação é um evento inicial.",
      "Incorreto. Ficar parado é estar no 'Estado'.",
      "Incorreto. Destruição é o estado final.",
      "Incorreto. Atributos ficam no Diagrama de Classes.",
      "Correto! É a seta que liga dois estados após um estímulo."
    ]
  },
  {
    id: 56,
    question: "Em relação aos requisitos, qual técnica de elicitação envolve a criação rápida de modelos visuais para validação?",
    options: ["Prototipação", "Entrevistas", "Questionários", "Brainstorming", "Leitura de manuais"],
    correctIndex: 0,
    explanations: [
      "Correto! Criar telas ou fluxos rápidos para o usuário ver e validar.",
      "Incorreto. Entrevistas são diálogos verbais.",
      "Incorreto. Questionários são formulários escritos.",
      "Incorreto. Brainstorming é geração criativa de ideias.",
      "Incorreto. Leitura é análise documental passiva."
    ]
  },
  {
    id: 57,
    question: "O que representa a multiplicidade '1..*' em uma associação?",
    options: ["Exatamente um.", "Um ou muitos.", "Zero ou muitos.", "Zero ou um.", "Número desconhecido."],
    correctIndex: 1,
    explanations: [
      "Incorreto. Exatamente um é '1'.",
      "Correto! Exige pelo menos um e não tem limite superior.",
      "Incorreto. Zero ou muitos é '*' ou '0..*'.",
      "Incorreto. Zero ou um é '0..1'.",
      "Incorreto. Multiplicidades são sempre definidas por intervalos."
    ]
  },
  {
    id: 58,
    question: "Qual é a principal vantagem de usar o Diagrama de Pacotes em sistemas grandes?",
    options: ["Aumentar a complexidade do código.", "Definir a sequência exata de execução.", "Organizar o sistema em grupos lógicos.", "Mostrar o hardware onde o sistema roda.", "Detalhar os atributos de cada classe."],
    correctIndex: 2,
    explanations: [
      "Incorreto. O objetivo é reduzir a percepção de complexidade por organização.",
      "Incorreto. Papel do Diagrama de Sequência.",
      "Correto! Permite gerenciar a arquitetura em níveis macro de domínio.",
      "Incorreto. Papel do Diagrama de Implantação.",
      "Incorreto. Papel do Diagrama de Classes."
    ]
  },
  {
    id: 59,
    question: "No Diagrama de Sequência, o que a notação 'alt' define em um fragmento combinado?",
    options: ["Um loop infinito.", "Uma execução paralela.", "Uma referência externa.", "Caminhos alternativos.", "Uma região crítica."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Loop usa 'loop'.",
      "Incorreto. Paralelo usa 'par'.",
      "Incorreto. Referência usa 'ref'.",
      "Correto! Define blocos de decisão excludentes (IF/ELSE).",
      "Incorreto. Crítica usa 'critical'."
    ]
  },
  {
    id: 60,
    question: "Qual diagrama deve ser usado para mostrar a estrutura interna de uma classe complexa e suas partes?",
    options: ["Diagrama de Sequência", "Diagrama de Casos de Uso", "Diagrama de Atividades", "Diagrama de Tempo", "Diagrama de Estrutura Composta"],
    correctIndex: 4,
    explanations: [
      "Incorreto. Sequência foca em trocas de mensagens.",
      "Incorreto. Casos de Uso foca em metas do usuário.",
      "Incorreto. Atividades foca em fluxo de processo.",
      "Incorreto. Tempo foca em cronologia.",
      "Correto! Detalha como as partes internas de um objeto se conectam (portas/conectores)."
    ]
  },
  {
    id: 61,
    question: "Em um Diagrama de Classes, os métodos representam:",
    options: ["O comportamento do objeto.", "O que o objeto sabe.", "O estado do objeto.", "A identidade do objeto.", "A visibilidade do objeto."],
    correctIndex: 0,
    explanations: [
      "Correto! Operações definem as ações que a classe pode realizar.",
      "Incorreto. O que ele sabe são os Atributos.",
      "Incorreto. O estado é o valor atual dos Atributos.",
      "Incorreto. Identidade é o endereço/ID único da instância.",
      "Incorreto. Visibilidade é uma propriedade de acesso (+, -, #)."
    ]
  },
  {
    id: 62,
    question: "O que significa um pacote marcado como '[global]' no Diagrama de Pacotes?",
    options: ["Ele contém apenas classes abstratas.", "Ele é visível para todos os outros subsistemas.", "Ele não pode ser acessado por ninguém.", "Ele é um pacote de terceiros.", "Ele contém erros de compilação."],
    correctIndex: 1,
    explanations: [
      "Incorreto. Abstração não tem relação com marcação global.",
      "Correto! Significa acesso universal sem necessidade de importação explícita.",
      "Incorreto. Seria o oposto de global.",
      "Incorreto. Pacotes de terceiros costumam usar nomes de domínio reverso.",
      "Incorreto. Diagramas não modelam erros técnicos de build."
    ]
  },
  {
    id: 63,
    question: "No Diagrama de Atividades, o que o 'Join' faz?",
    options: ["Divide um fluxo em vários.", "Finaliza o diagrama.", "Sincroniza fluxos paralelos em um só.", "Inicia uma decisão condicional.", "Cria um novo objeto."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Dividir é o papel do 'Fork'.",
      "Incorreto. Fim é o Nó Final.",
      "Correto! Espera todos os fluxos de entrada chegarem para continuar um único fluxo.",
      "Incorreto. Decisão é um losango.",
      "Incorreto. Criação é uma ação específica."
    ]
  },
  {
    id: 64,
    question: "Qual a diferença entre Requisitos Funcionais (RF) e Não Funcionais (RNF)?",
    options: ["RF é o que o usuário sente; RNF é o que ele vê.", "RF são opcionais; RNF são obrigatórios.", "RF são para hardware; RNF são para software.", "RF é o que o sistema faz; RNF é como o sistema é.", "Não há diferença prática entre eles."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Ambos podem ser invisíveis para o usuário final.",
      "Incorreto. Ambos podem ser mandatórios ou opcionais.",
      "Incorreto. Requisitos de software cobrem ambos os tipos.",
      "Correto! RF = funcionalidade; RNF = características de qualidade/limitações.",
      "Incorreto. A distinção é fundamental na engenharia de software."
    ]
  },
  {
    id: 65,
    question: "Em um Diagrama de Sequência, mensagens assíncronas são representadas por:",
    options: ["Seta com ponta cheia.", "Linha tracejada.", "Linha dupla.", "Linha curva.", "Seta com ponta aberta."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Ponta cheia é para mensagens síncronas.",
      "Incorreto. Linha tracejada é para retorno (reply).",
      "Incorreto. Linha dupla não é notação padrão UML.",
      "Incorreto. Linhas curvas não representam assincronismo.",
      "Correto! Indica que o chamador não espera a conclusão da tarefa."
    ]
  },
  {
    id: 66,
    question: "O que o Diagrama de Tempo utiliza no eixo X e no eixo Y, respectivamente?",
    options: ["Tempo e Estados.", "Objetos e Classes.", "Atividades e Atores.", "Pacotes e Dependências.", "Hardware e Software."],
    correctIndex: 0,
    explanations: [
      "Correto! X é cronológico e Y mostra as alternâncias de estado.",
      "Incorreto. Objetos/Classes ficam no Diagrama de Classes ou Objetos.",
      "Incorreto. Diagrama de Atividades usa partições para atores.",
      "Incorreto. Diagrama de Pacotes é puramente estrutural.",
      "Incorreto. Diagrama de Implantação foca nisso."
    ]
  },
  {
    id: 67,
    question: "Em um Caso de Uso, qual relacionamento é usado quando um comportamento é opcional e ocorre sob condições específicas?",
    options: ["Include", "Extend", "Generalization", "Association", "Realization"],
    correctIndex: 1,
    explanations: [
      "Incorreto. Include é mandatório.",
      "Correto! Extend permite adicionar comportamento opcional sob certos pontos de extensão.",
      "Incorreto. Generalização é herança lúdica.",
      "Incorreto. Associação liga atores a casos.",
      "Incorreto. Realização é implementação."
    ]
  },
  {
    id: 68,
    question: "O que caracteriza a 'Perspectiva de Implementação' na modelagem de classes?",
    options: ["Foco apenas nos conceitos de negócio.", "Foco nas interfaces sem detalhar código.", "Nível mais detalhado, descrevendo o código real.", "Desenhos feitos apenas para usuários leigos.", "Uso exclusivo de português estruturado."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Este é o nível Conceitual.",
      "Incorreto. Este é o nível de Especificação.",
      "Correto! Inclui tipos específicos de dados, atributos privados e métodos de suporte.",
      "Incorreto. Usuários leigos raramente veem diagramas de classe de implementação.",
      "Incorreto. Português estruturado é para algoritmos, não para modelagem OO."
    ]
  },
  {
    id: 69,
    question: "No Diagrama de Máquina de Estado, o 'Evento/Gatilho' é:",
    options: ["A condição para sair do estado.", "O nome do estado atual.", "A ação final do processo.", "A ocorrência que dispara a transição.", "O objeto que possui o estado."],
    correctIndex: 3,
    explanations: [
      "Incorreto. A condição é a Guarda.",
      "Incorreto. Nome do estado é o identificador do nó.",
      "Incorreto. Ação final é o encerramento do diagrama.",
      "Correto! É o estímulo externo que solicita a mudança de estado.",
      "Incorreto. O objeto é o contexto do diagrama."
    ]
  },
  {
    id: 70,
    question: "Qual diagrama da UML mostra 'snapshots' do sistema em um ponto específico do tempo com dados reais?",
    options: ["Diagrama de Classes", "Diagrama de Pacotes", "Diagrama de Sequência", "Diagrama de Atividades", "Diagrama de Objetos"],
    correctIndex: 4,
    explanations: [
      "Incorreto. Classes foca no molde abstrato.",
      "Incorreto. Pacotes foca na organização de código.",
      "Incorreto. Sequência foca em mensagens dinâmicas.",
      "Incorreto. Atividades foca em fluxo de controle.",
      "Correto! Mostra exemplos concretos de instâncias (valores nos atributos)."
    ]
  },
  {
    id: 71,
    question: "Em um Diagrama de Implantação, linhas conectando os nós representam:",
    options: ["Caminhos de comunicação.", "Fluxo de dados do usuário.", "Herança de classes.", "Dependência de pacotes.", "Inclusão de casos de uso."],
    correctIndex: 0,
    explanations: [
      "Correto! Representam redes, cabos ou conexões entre hardwares.",
      "Incorreto. Fluxo de dados é para o Diagrama de Fluxo de Dados (não UML).",
      "Incorreto. Herança usa setas de triângulo.",
      "Incorreto. Dependência usa setas tracejadas.",
      "Incorreto. Inclusão é para Casos de Uso."
    ]
  },
  {
    id: 72,
    question: "Qual princípio da orientação a objetos a 'Herança' representa na UML?",
    options: ["Relação 'Tem um'.", "Relação 'É um'.", "Relação 'Usa um'.", "Relação 'Conhece um'.", "Relação 'Faz um'."],
    correctIndex: 1,
    explanations: [
      "Incorreto. 'Tem um' é Composição/Agregação.",
      "Correto! Indica que a subclasse é uma especialização da superclasse.",
      "Incorreto. 'Usa um' é Dependência.",
      "Incorreto. 'Conhece um' é Associação.",
      "Incorreto. 'Faz um' não é um termo padrão de OO."
    ]
  },
  {
    id: 73,
    question: "No Diagrama de Atividades, o 'Nó Final' é representado por:",
    options: ["Um círculo preto sólido.", "Um losango vazio.", "Um círculo com um 'X' ou 'Olho de Boi'.", "Um retângulo arredondado.", "Uma barra preta."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Início é o círculo preto sólido.",
      "Incorreto. Losango é decisão.",
      "Correto! O Olho de Boi simboliza o fim absoluto do fluxo de atividade.",
      "Incorreto. Retângulos são ações.",
      "Incorreto. Barras pretas são sincronizações."
    ]
  },
  {
    id: 74,
    question: "O que significa a visibilidade 'Privada' representada pelo sinal (-)?",
    options: ["Visível para todos.", "Visível para classes do mesmo pacote.", "Visível para classes filhas.", "Visível apenas para a própria classe.", "Visível para o usuário final."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Público (+) é visível para todos.",
      "Incorreto. Pacote (~) é para o mesmo pacote.",
      "Incorreto. Protegido (#) é para filhas.",
      "Correto! Máximo encapsulamento: apenas métodos da própria classe acessam.",
      "Incorreto. Usuários finais não veem visibilidade de atributos de código."
    ]
  },
  {
    id: 75,
    question: "Em um Diagrama de Classes, se 'Carro' e 'Roda' têm uma relação onde a roda não existe sem o carro, usamos:",
    options: ["Agregação", "Associação", "Dependência", "Realização", "Composição"],
    correctIndex: 4,
    explanations: [
      "Incorreto. Na agregação a roda existiria sem o carro.",
      "Incorreto. Associação é muito genérica para este caso de posse.",
      "Incorreto. Dependência é para uso temporário.",
      "Incorreto. Realização é para contratos de interface.",
      "Correto! Composição implica que o ciclo de vida da parte é regido pelo todo."
    ]
  },
  {
    id: 76,
    question: "Para que serve a 'Linha de Vida' no Diagrama de Sequência?",
    options: ["Para representar a existência do objeto no tempo.", "Para conectar o servidor ao cliente.", "Para medir a performance do sistema.", "Para separar as raias de atividade.", "Para definir a herança da classe."],
    correctIndex: 0,
    explanations: [
      "Correto! Mostra por quanto tempo uma instância permanece na memória.",
      "Incorreto. Conexão física é para Implantação.",
      "Incorreto. Performance não é o objetivo da linha de vida lúdica.",
      "Incorreto. Raias são para o Diagrama de Atividades.",
      "Incorreto. Herança é para o Diagrama de Classes."
    ]
  },
  {
    id: 77,
    question: "Qual diagrama é descrito como uma 'fusão híbrida' entre Diagrama de Atividades e Diagrama de Sequência?",
    options: ["Diagrama de Comunicação", "Diagrama de Visão Geral da Interação", "Diagrama de Tempo", "Diagrama de Estrutura Composta", "Diagrama de Implantação"],
    correctIndex: 1,
    explanations: [
      "Incorreto. Comunicação foca nos links estruturais.",
      "Correto! Usa notação de atividade para controlar o fluxo entre diagramas de sequência.",
      "Incorreto. Tempo foca em cronologia precisa.",
      "Incorreto. Estrutura Composta foca na colaboração interna.",
      "Incorreto. Implantação foca no hardware."
    ]
  },
  {
    id: 78,
    question: "No Diagrama de Pacotes, a notação de 'Pasta' representa:",
    options: ["Um arquivo físico.", "Uma classe principal.", "Um pacote.", "Um banco de dados.", "Um servidor de aplicação."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Arquivo físico é um Artefato.",
      "Incorreto. Classe usa um retângulo de três seções.",
      "Correto! O ícone de pasta com aba superior é o símbolo oficial de Pacote.",
      "Incorreto. Banco de dados usa o símbolo de cilindro (geralmente).",
      "Incorreto. Servidor é um Nó (cubo)."
    ]
  },
  {
    id: 79,
    question: "Em requisitos não funcionais, 'O sistema deve suportar 1 milhão de usuários simultâneos' é um requisito de:",
    options: ["Funcionalidade", "Interface", "Segurança", "Escalabilidade", "Usabilidade"],
    correctIndex: 3,
    explanations: [
      "Incorreto. Funcionalidade trata de 'o que' é feito.",
      "Incorreto. Interface trata de cores, botões e telas.",
      "Incorreto. Segurança trata de proteção de dados.",
      "Correto! Escalabilidade ou Desempenho trata do volume de carga suportado.",
      "Incorreto. Usabilidade trata da facilidade de uso."
    ]
  },
  {
    id: 80,
    question: "O que são 'Partes' no Diagrama de Estrutura Composta?",
    options: ["As classes pais de uma herança.", "Os métodos públicos da classe.", "Os pacotes externos importados.", "Os comentários do código.", "Instâncias que pertencem à classe composta."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Herança usa setas de triângulo.",
      "Incorreto. Métodos ficam na seção inferior da classe.",
      "Incorreto. Pacotes são agrupamentos de alto nível.",
      "Incorreto. Comentários são anotações em balões.",
      "Correto! São papéis que instâncias assumem dentro da estrutura interna do objeto."
    ]
  },
  {
    id: 81,
    question: "No Diagrama de Máquina de Estado, o círculo preto sólido indica:",
    options: ["O estado inicial.", "Um estado de erro.", "O estado final.", "Uma transição complexa.", "Uma guarda falsa."],
    correctIndex: 0,
    explanations: [
      "Correto! Marca o ponto de entrada na máquina de estados.",
      "Incorreto. Erros não têm símbolo fixo universal.",
      "Incorreto. Fim é o círculo olho de boi.",
      "Incorreto. Transições são setas.",
      "Incorreto. Guardas são textos [ ]."
    ]
  },
  {
    id: 82,
    question: "Qual relação é descrita como 'Todo-Parte' Fraca, onde a parte existe independente do todo?",
    options: ["Composição", "Agregação", "Herança", "Implementação", "Dependência"],
    correctIndex: 1,
    explanations: [
      "Incorreto. Composição é todo-parte forte.",
      "Correto! Agregação simboliza agrupamentos onde as partes são independentes.",
      "Incorreto. Herança é relação 'é um'.",
      "Incorreto. Implementação é contrato de interface.",
      "Incorreto. Dependência é uso temporário."
    ]
  },
  {
    id: 83,
    question: "O que o diagrama de sequência revela que o diagrama de classes não consegue mostrar?",
    options: ["A hierarquia de herança.", "Os atributos privados.", "A lógica temporal das mensagens.", "A organização em pacotes.", "A arquitetura física."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Herança é especialidade do Diagrama de Classes.",
      "Incorreto. Atributos são detalhados nas classes.",
      "Correto! Mostra a ordem exata em que as coisas acontecem durante a execução.",
      "Incorreto. Pacotes são para Diagrama de Pacotes.",
      "Incorreto. Arquitetura física é para Implantação."
    ]
  },
  {
    id: 84,
    question: "Em um Diagrama de Atividades, o que é uma 'Ação'?",
    options: ["O ator que executa o processo.", "O resultado final do sistema.", "A linha que conecta os elementos.", "Um passo no processo.", "A condição de guarda."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Ator é uma partição ou elipse.",
      "Incorreto. Resultado é um estado final ou nó de dados.",
      "Incorreto. Linhas são fluxos (edges).",
      "Correto! Unidade atômica de trabalho dentro de uma atividade.",
      "Incorreto. Guarda é o critério de decisão."
    ]
  },
  {
    id: 85,
    question: "Qual a função dos 'Conectores' no Diagrama de Estrutura Composta?",
    options: ["Criar novas instâncias de classes.", "Definir a herança entre componentes.", "Exportar o código para Java.", "Documentar o autor da classe.", "Ligar portas ou partes, definindo o canal."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Instanciação usa estereótipos create.",
      "Incorreto. Herança usa setas de triângulo.",
      "Incorreto. UML não exporta código nativamente sem ferramentas CASE.",
      "Incorreto. Metadados não são o foco principal dos conectores.",
      "Correto! Permitem a troca de informação entre as partes internas."
    ]
  },
  {
    id: 86,
    question: "No Diagrama de Classes, a parte superior do retângulo contém:",
    options: ["O nome da classe.", "Os atributos.", "Os métodos.", "A visibilidade.", "As exceções."],
    correctIndex: 0,
    explanations: [
      "Correto! O identificador principal da classe fica no topo.",
      "Incorreto. Atributos ficam no meio.",
      "Incorreto. Métodos ficam na base.",
      "Incorreto. Visibilidade são os símbolos (+, -, #) anexados a itens.",
      "Incorreto. Exceções não têm seção padrão."
    ]
  },
  {
    id: 87,
    question: "O que significa a seta tracejada com ponta aberta no Diagrama de Classes?",
    options: ["Herança.", "Dependência.", "Composição.", "Agregação.", "Associação Bidirecional."],
    correctIndex: 1,
    explanations: [
      "Incorreto. Herança usa linha sólida com triângulo vazio.",
      "Correto! Significa que uma classe conhece ou usa a outra temporariamente.",
      "Incorreto. Composição usa diamante preenchido.",
      "Incorreto. Agregação usa diamante vazio.",
      "Incorreto. Associação usa linha sólida contínua."
    ]
  },
  {
    id: 88,
    question: "Qual diagrama utiliza 'raias' para mostrar responsabilidades?",
    options: ["Diagrama de Sequência", "Diagrama de Classes", "Diagrama de Atividades", "Diagrama de Estados", "Diagrama de Objetos"],
    correctIndex: 2,
    explanations: [
      "Incorreto. Sequência usa colunas lógicas de objetos.",
      "Incorreto. Classes usa compartimentos dentro do retângulo.",
      "Correto! As swimlanes (raias) dividem o fluxo por executor.",
      "Incorreto. Estados foca em transições de um só objeto.",
      "Incorreto. Objetos foca em snapshots de memória."
    ]
  },
  {
    id: 89,
    question: "Em um Caso de Uso, o que significa a relação 'Include'?",
    options: ["Que o caso de uso é opcional.", "Que o caso de uso é filho do outro.", "Que o ator não tem acesso ao caso.", "Que o caso de uso base obrigatoriamente executa o outro.", "Que o sistema falhou."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Opcional é Extend.",
      "Incorreto. Filho é Generalização.",
      "Incorreto. Atores têm acesso conforme a linha de associação.",
      "Correto! Significa uma sub-rotina obrigatória do caso de uso.",
      "Incorreto. UML não modela falhas de sistema via relacionamentos."
    ]
  },
  {
    id: 90,
    question: "No Diagrama de Sequência, o que representa a mensagem de 'Retorno'?",
    options: ["Linha sólida avançando.", "Linha curva dupla.", "Círculo com x.", "Losango amarelo.", "Linha tracejada voltando."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Linha sólida é chamada síncrona.",
      "Incorreto. Notação inexistente na UML oficial.",
      "Incorreto. Círculo com X é fim de fluxo.",
      "Incorreto. Losangos são para atividades.",
      "Correto! Indica a volta da informação ao solicitante."
    ]
  },
  {
    id: 91,
    question: "Qual a principal utilidade do Diagrama de Comunicação em comparação ao de Sequência?",
    options: ["Economia de espaço e foco nos vínculos estruturais.", "Mostrar a ordem temporal exata.", "Detalhar loops complexos.", "Modelar hardware.", "Mostrar estados do objeto."],
    correctIndex: 0,
    explanations: [
      "Correto! É mais compacto e enfatiza como os objetos estão ligados.",
      "Incorreto. Tempo é o foco da Sequência.",
      "Incorreto. Loops são melhor vistos na Sequência com fragmentos.",
      "Incorreto. Hardware é para Implantação.",
      "Incorreto. Estados são para Máquina de Estado."
    ]
  },
  {
    id: 92,
    question: "Em um Diagrama de Classes, atributos são definidos como:",
    options: ["O que o objeto faz.", "O que o objeto sabe.", "Quem usa o objeto.", "Onde o objeto vive.", "Quando o objeto morre."],
    correctIndex: 1,
    explanations: [
      "Incorreto. 'O que faz' são os Métodos.",
      "Correto! São as informações e dados que a classe mantém.",
      "Incorreto. 'Quem usa' são as Associações/Dependências.",
      "Incorreto. Localização é para Implantação.",
      "Incorreto. Ciclo de vida é para Estados."
    ]
  },
  {
    id: 93,
    question: "O que a 'Guerra dos Métodos' na década de 90 envolveu?",
    options: ["Disputa entre Windows e Linux.", "Conflito entre programadores Java e C++.", "Competição entre métodos OO .", "Briga entre gerentes e desenvolvedores.", "Disputa de mercado entre Apple e IBM."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Guerra de OS é outro contexto.",
      "Incorreto. Linguagens são ferramentas, métodos são processos.",
      "Correto! Diferentes abordagens (Booch, OMT, OOSE) lutavam por hegemonia.",
      "Incorreto. Conflitos de gestão não criam padrões como a UML.",
      "Incorreto. Disputas comerciais corporativas gerais."
    ]
  },
  {
    id: 94,
    question: "No Diagrama de Implantação, onde são colocados os 'Artefatos'?",
    options: ["Fora do diagrama.", "Nas linhas de comunicação.", "Em um diagrama separado.", "Dentro dos Nós.", "No banco de dados apenas."],
    correctIndex: 3,
    explanations: [
      "Incorreto. Eles devem estar vinculados à infraestrutura.",
      "Incorreto. Linhas conectam nós entre si.",
      "Incorreto. Podem estar em subdiagramas, mas o local lógico é o nó.",
      "Correto! Arquivos rodam ou são armazenados em hardwares (Nós).",
      "Incorreto. Banco de dados é um tipo de nó ou componente."
    ]
  },
  {
    id: 95,
    question: "Qual é o foco do Diagrama de Sequência?",
    options: ["Estrutura estática.", "Distribuição física.", "Ciclo de vida do objeto.", "Casos de uso do usuário.", "Interação em ordem temporal."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Estática é Classes.",
      "Incorreto. Física é Implantação.",
      "Incorreto. Ciclo de vida é Estados.",
      "Incorreto. Metas de uso é Casos de Uso.",
      "Correto! Capturar a dinâmica da colaboração passo a passo."
    ]
  },
  {
    id: 96,
    question: "Em um Diagrama de Estados, o que o retângulo com cantos arredondados representa?",
    options: ["Um estado.", "Um evento.", "Uma transição.", "Um ator.", "Um pacote."],
    correctIndex: 0,
    explanations: [
      "Correto! Representa uma condição ou situação na vida de um objeto.",
      "Incorreto. Eventos são textos sobre as transições.",
      "Incorreto. Transições são setas.",
      "Incorreto. Atores não aparecem em diagramas de estado.",
      "Incorreto. Pacotes são para organização estrutural."
    ]
  },
  {
    id: 97,
    question: "No Diagrama de Classes, qual é o símbolo para visibilidade 'Pública'?",
    options: ["-", "+", "~", "#", "*"],
    correctIndex: 1,
    explanations: [
      "Incorreto. Menos é Privado.",
      "Correto! Indica que qualquer classe pode acessar o membro.",
      "Incorreto. Til é Pacote.",
      "Incorreto. Cerquilha é Protegido.",
      "Incorreto. Asterisco é multiplicidade."
    ]
  },
  {
    id: 98,
    question: "O que significa a dependência '<<access>>' no Diagrama de Pacotes?",
    options: ["Um pacote deleta o outro.", "Um pacote bloqueia o acesso.", "Um pacote importa o conteúdo público de outro (sem merge).", "Um pacote copia o código fonte.", "Um pacote se funde ao outro."],
    correctIndex: 2,
    explanations: [
      "Incorreto. Deleção não é modelada assim.",
      "Incorreto. A dependência habilita o acesso.",
      "Correto! Adiciona os elementos públicos ao namespace sem misturá-los.",
      "Incorreto. Importação lógica, não cópia física.",
      "Incorreto. Fusão seria o estereótipo <<merge>>."
    ]
  },
  {
    id: 99,
    question: "Qual diagrama serve para validar se o diagrama de classes faz sentido na prática usando dados reais?",
    options: ["Diagrama de Sequência", "Diagrama de Atividades", "Diagrama de Estados", "Diagrama de Objetos", "Diagrama de Caso de Uso"],
    correctIndex: 3,
    explanations: [
      "Incorreto. Sequência foca em trocas de mensagens.",
      "Incorreto. Atividades foca em fluxos operacionais.",
      "Incorreto. Estados foca em um só objeto reativo.",
      "Correto! Ao criar objetos reais, testamos se as regras da classe funcionam.",
      "Incorreto. Casos de Uso são pré-requisitos, não validação estrutural."
    ]
  },
  {
    id: 100,
    question: "Na UML, o que representa a relação 'Generalização' entre Atores em um Caso de Uso?",
    options: ["Que os atores são irmãos.", "Que os atores não podem interagir.", "Que um ator exclui o outro.", "Que um ator é parte do sistema.", "Que um actor herda o comportamento do outro."],
    correctIndex: 4,
    explanations: [
      "Incorreto. Parentesco lateral não existe na UML.",
      "Incorreto. A relação habilita o uso das mesmas funções.",
      "Incorreto. Exclusão não é um termo padrão de atores.",
      "Incorreto. Atores são sempre externos ao sistema.",
      "Correto! O ator filho pode realizar todos os casos de uso do pai."
    ]
  }
];

export const getFullQuizData = (): Question[] => QUIZ_DATA;
