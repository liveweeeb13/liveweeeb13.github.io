const T = {
  fr: {
    nav_intro:"Introduction",nav_quick:"Premiers pas",nav_syntax:"Syntaxe",nav_io:"Entrée / Sortie",nav_vars:"Variables",nav_math:"Maths",nav_text:"Texte",nav_control:"Contrôle",nav_types:"Types",nav_files:"Fichiers",nav_json:"JSON",nav_multi:"Multi-fichiers",nav_plugins:"Plugins",
    intro_desc:"Elios est un langage de script simple, compilé en C. L'idée c'est d'écrire du code lisible sans se prendre la tête — tout passe par <code>§fonction[args]</code>, point.",
    intro_why:"Pourquoi Elios ?",intro_f1:"Une syntaxe unique pour tout — pas de surprises",intro_f2:"Variables accessibles partout, même dans les fichiers importés",intro_f3:'Des plugins pour ajouter tes propres fonctions dans <code>./addons</code>',intro_f4:"Un mode debug qui montre ce qui se passe vraiment",
    quick_title:"Premiers pas",quick_desc:"Tu es à deux commandes d'un programme qui tourne.",quick_run:"Lancer un fichier",quick_debug:"Voir ce qui se passe",quick_var:"Avec une variable",
    syntax_title:"La syntaxe en bref",syntax_desc:"Tout fonctionne pareil — une fois que t'as compris le principe, tu sais tout écrire.",syntax_rules:"Ce qu'il faut retenir",syn_r1:'Chaque instruction commence par <code>§</code>',syn_r2:'Les arguments vont entre <code>[...]</code>',syn_r3:'Tu sépares plusieurs arguments avec <code>;</code>',syn_r4:'Une variable s\'écrit <code>$NOM_VAR</code>',syn_r5:'Un commentaire commence par <code>#</code>',
    io_title:"Entrée / Sortie",io_desc:"Afficher du texte, demander quelque chose à l'utilisateur — les bases.",io_log:"Affiche un message dans le terminal.",io_input:"Pose une question et récupère la réponse.",io_clear:"Vide le terminal.",
    vars_title:"Variables",vars_desc:'Une variable définie quelque part est accessible partout — même dans un fichier chargé avec <code>§require</code>. Pas de portée compliquée.',vars_def:"Crée ou met à jour une variable.",vars_use:"Utiliser une variable",vars_ref:'Tu accèdes à une variable avec <code>$NOM_VARIABLE</code> :',
    math_title:"Maths",math_desc:"Les opérations classiques, rien de plus.",m_add:"Addition",m_sub:"Soustraction",m_mul:"Multiplication",m_div:"Division",m_mod:"Reste de la division",m_pow:"Puissance",m_sqrt:"Racine carrée",m_floor:"Arrondi vers le bas",m_ceil:"Arrondi vers le haut",m_round:"Arrondi classique",m_abs:"Valeur absolue",m_min:"Le plus petit",m_max:"Le plus grand",m_rand:"Nombre aléatoire",
    text_title:"Texte",text_desc:"Tout ce qu'il faut pour manipuler des chaînes de caractères.",t_len:"Nombre de caractères",t_upper:"Tout en majuscules",t_lower:"Tout en minuscules",t_trim:"Retire les espaces au début et à la fin",t_contains:"Vérifie si un mot est dans la chaîne",t_replace:"Remplace une partie du texte",t_index:"Trouve où un mot apparaît",t_eic:"Compare deux textes sans tenir compte de la casse",
    ctrl_title:"Contrôle du programme",ctrl_desc:"Conditions, boucles, et comment sortir d'une boucle ou du programme.",ctrl_if:"Condition",ctrl_while:"Répéter tant que",ctrl_for:"Répéter N fois",ctrl_jump:"Sauts",ctrl_break:"Sortir de la boucle",ctrl_cont:"Passer directement à l'itération suivante",
    types_title:"Vérifier le type d'une valeur",types_desc:"Utile quand tu veux t'assurer que ce que tu as c'est bien un nombre, un texte, etc.",ty_num:"C'est un nombre ?",ty_nan:"C'est pas un nombre ?",ty_even:"C'est pair ?",ty_odd:"C'est impair ?",ty_text:"C'est du texte ?",ty_bool:"C'est un booléen ?",ty_int:"C'est un entier ?",ty_float:"C'est un décimal ?",ty_json:"C'est du JSON valide ?",ty_typeof:"Quel est le type ?",
    files_title:"Fichiers",files_desc:"Lire et écrire des fichiers depuis ton programme Elios.",f_path:"Construit un chemin depuis le répertoire du script.",f_read:"Lit le contenu d'un fichier.",f_write:"Écrit du texte dans un fichier.",f_exist:"Vérifie si le fichier existe.",f_create:"Crée un fichier vide.",
    json_title:"JSON",json_desc:"Travailler avec des fichiers ou des données au format JSON.",j_read:"Charge un fichier JSON.",j_write:"Sauvegarde des données en JSON.",j_get:"Récupère une valeur dans un objet JSON.",j_set:"Modifie une valeur dans un objet JSON.",
    multi_title:"Diviser en plusieurs fichiers",multi_desc:'Tu peux répartir ton code sur plusieurs fichiers <code>.elios</code> et les assembler avec <code>§require</code>.',mul_req:'Charge un fichier <code>.elios</code> dans le programme courant.',mul_feat:"Ce que ça permet",mul_f1:"Les fichiers sont chargés avant que le code s'exécute",mul_f2:"Les variables sont partagées entre tous les fichiers",mul_f3:'Tu peux imbriquer des <code>require</code>',mul_f4:"Les dépendances circulaires sont détectées automatiquement",mul_ex:"Exemple",
    plug_title:"Plugins",plug_desc:'Tu peux étendre Elios en ajoutant tes propres fonctions dans le dossier <code>./addons</code>.',plug_create:"Créer un plugin",plug_file:'Nom du fichier : <code>./addons/mon-plugin-elios-addon.dll</code>',plug_usage:"L'utiliser dans Elios",plug_builtins:"Plugins disponibles",plug_example:"example-plugin — des fonctions d'exemple pour commencer",
    ex_label:"Exemple"
  },
  en: {
    nav_intro:"Introduction",nav_quick:"Getting Started",nav_syntax:"Syntax",nav_io:"Input / Output",nav_vars:"Variables",nav_math:"Math",nav_text:"Text",nav_control:"Control Flow",nav_types:"Types",nav_files:"Files",nav_json:"JSON",nav_multi:"Multi-File",nav_plugins:"Plugins",
    intro_desc:"Elios is a small scripting language compiled in C. The goal is to keep things simple — everything goes through <code>§function[args]</code> and that's pretty much it.",
    intro_why:"Why Elios?",intro_f1:"One syntax for everything — no exceptions to memorize",intro_f2:"Variables are global and shared across all your files",intro_f3:'Drop your plugins in <code>./addons</code> and they just work',intro_f4:"Debug mode shows you exactly what's happening under the hood",
    quick_title:"Getting Started",quick_desc:"You're two commands away from a running program.",quick_run:"Run a file",quick_debug:"See what's going on",quick_var:"With a variable",
    syntax_title:"How the syntax works",syntax_desc:"Once you get the pattern, you can write anything — it always looks the same.",syntax_rules:"The rules",syn_r1:'Every instruction starts with <code>§</code>',syn_r2:'Arguments go inside <code>[...]</code>',syn_r3:'Separate multiple arguments with <code>;</code>',syn_r4:'Reference a variable with <code>$VAR_NAME</code>',syn_r5:'Start a comment with <code>#</code>',
    io_title:"Input / Output",io_desc:"Print stuff, ask the user a question — the basics.",io_log:"Prints a message to the terminal.",io_input:"Asks the user something and returns their answer.",io_clear:"Clears the terminal.",
    vars_title:"Variables",vars_desc:'A variable set anywhere is accessible everywhere — even inside files loaded with <code>§require</code>. No scoping headaches.',vars_def:"Creates or updates a variable.",vars_use:"Using a variable",vars_ref:'Access a variable with <code>$VARIABLE_NAME</code>:',
    math_title:"Math",math_desc:"The usual arithmetic operations.",m_add:"Add",m_sub:"Subtract",m_mul:"Multiply",m_div:"Divide",m_mod:"Remainder",m_pow:"Power",m_sqrt:"Square root",m_floor:"Round down",m_ceil:"Round up",m_round:"Round",m_abs:"Absolute value",m_min:"Smallest value",m_max:"Largest value",m_rand:"Random number",
    text_title:"Text",text_desc:"Everything you need to work with strings.",t_len:"Number of characters",t_upper:"All uppercase",t_lower:"All lowercase",t_trim:"Strip leading and trailing spaces",t_contains:"Check if a word is in the string",t_replace:"Replace part of the text",t_index:"Find where a word appears",t_eic:"Compare two strings, ignoring case",
    ctrl_title:"Control Flow",ctrl_desc:"Conditions, loops, and how to break out of them.",ctrl_if:"If / else",ctrl_while:"Repeat while condition is true",ctrl_for:"Repeat N times",ctrl_jump:"Jumps",ctrl_break:"Exit the loop",ctrl_cont:"Jump straight to the next iteration",
    types_title:"Checking value types",types_desc:"Handy when you want to make sure something is a number, a string, etc.",ty_num:"Is it a number?",ty_nan:"Is it not a number?",ty_even:"Is it even?",ty_odd:"Is it odd?",ty_text:"Is it a string?",ty_bool:"Is it a boolean?",ty_int:"Is it an integer?",ty_float:"Is it a decimal?",ty_json:"Is it valid JSON?",ty_typeof:"What type is it?",
    files_title:"Files",files_desc:"Read and write files straight from your Elios program.",f_path:"Build a path from the script's directory.",f_read:"Read a file's content.",f_write:"Write text to a file.",f_exist:"Check if a file exists.",f_create:"Create an empty file.",
    json_title:"JSON",json_desc:"Load, save and work with JSON data.",j_read:"Load a JSON file.",j_write:"Save data as JSON.",j_get:"Get a value from a JSON object.",j_set:"Set a value in a JSON object.",
    multi_title:"Splitting into multiple files",multi_desc:'You can spread your code across multiple <code>.elios</code> files and pull them together with <code>§require</code>.',mul_req:'Load a <code>.elios</code> file into the current program.',mul_feat:"What you get",mul_f1:"Files are loaded before execution starts",mul_f2:"Variables are shared between all files",mul_f3:'You can nest <code>require</code> calls',mul_f4:"Circular dependencies are caught automatically",mul_ex:"Example",
    plug_title:"Plugins",plug_desc:'You can extend Elios with your own functions by dropping a plugin in the <code>./addons</code> folder.',plug_create:"Creating a plugin",plug_file:'Filename: <code>./addons/my-plugin-elios-addon.dll</code>',plug_usage:"Using it in Elios",plug_builtins:"Available plugins",plug_example:"example-plugin — example functions to get you started",
    ex_label:"Example"
  },
  es: {
    nav_intro:"Introducción",nav_quick:"Inicio rápido",nav_syntax:"Sintaxis",nav_io:"Entrada / Salida",nav_vars:"Variables",nav_math:"Matemáticas",nav_text:"Texto",nav_control:"Control",nav_types:"Tipos",nav_files:"Archivos",nav_json:"JSON",nav_multi:"Multi-archivo",nav_plugins:"Plugins",
    intro_desc:'Elios es un lenguaje de scripting ligero basado en Node.js, diseñado para la simplicidad y la potencia. Usa una sintaxis intuitiva con el formato <code>§función[args]</code>.',
    intro_why:"¿Por qué Elios?",intro_f1:"Sintaxis uniforme — todas las funciones siguen el mismo patrón",intro_f2:"Variables globales compartidas entre archivos",intro_f3:'Sistema de plugins extensible mediante <code>./addons</code>',intro_f4:"Modo debug integrado para diagnósticos fáciles",
    quick_title:"Inicio rápido",quick_desc:"Lanza tu primer programa Elios en segundos.",quick_run:"Ejecutar un programa",quick_debug:"Modo debug",quick_var:"Con variables",
    syntax_title:"Sintaxis básica",syntax_desc:"Elios usa una sintaxis consistente para todas las operaciones.",syntax_rules:"Reglas clave",syn_r1:'Todas las funciones empiezan con <code>§</code>',syn_r2:'Los argumentos van entre <code>[...]</code>',syn_r3:'Múltiples argumentos separados por <code>;</code>',syn_r4:'Variables referenciadas con <code>$NOMBRE_VAR</code>',syn_r5:'Los comentarios empiezan con <code>#</code>',
    io_title:"Entrada / Salida",io_desc:"Funciones para mostrar texto y leer la entrada del usuario.",io_log:"Imprime texto en la consola.",io_input:"Lee la entrada del usuario.",io_clear:"Limpia la pantalla de la consola.",
    vars_title:"Variables",vars_desc:'Las variables son globales y accesibles en todo el programa, incluidos los archivos cargados con <code>§require</code>.',vars_def:"Define o actualiza una variable.",vars_use:"Usar variables",vars_ref:'Referencia una variable con <code>$NOMBRE_VARIABLE</code>:',
    math_title:"Funciones matemáticas",math_desc:"Operaciones aritméticas y utilidades numéricas.",m_add:"Suma",m_sub:"Resta",m_mul:"Multiplicación",m_div:"División",m_mod:"Módulo (resto)",m_pow:"Potencia",m_sqrt:"Raíz cuadrada",m_floor:"Redondeo hacia abajo",m_ceil:"Redondeo hacia arriba",m_round:"Redondeo al más cercano",m_abs:"Valor absoluto",m_min:"Valor mínimo",m_max:"Valor máximo",m_rand:"Entero aleatorio",
    text_title:"Funciones de texto",text_desc:"Manipulación y análisis de cadenas.",t_len:"Longitud de cadena",t_upper:"Mayúsculas",t_lower:"Minúsculas",t_trim:"Eliminar espacios",t_contains:"Verificar subcadena",t_replace:"Reemplazar texto",t_index:"Buscar posición",t_eic:"Comparar sin distinción de mayúsculas",
    ctrl_title:"Control de flujo",ctrl_desc:"Condiciones, bucles e instrucciones de salto.",ctrl_if:"Condicional",ctrl_while:"Bucle while",ctrl_for:"Bucle for",ctrl_jump:"Saltos",ctrl_break:"Salir del bucle",ctrl_cont:"Saltar iteración",
    types_title:"Verificación de tipos",types_desc:"Funciones para inspeccionar y validar tipos de valores.",ty_num:"¿Numérico?",ty_nan:"¿No es un número?",ty_even:"¿Par?",ty_odd:"¿Impar?",ty_text:"¿Texto?",ty_bool:"¿Booleano?",ty_int:"¿Entero?",ty_float:"¿Decimal?",ty_json:"¿JSON?",ty_typeof:"Obtener tipo",
    files_title:"Operaciones con archivos",files_desc:"Leer, escribir y gestionar archivos desde Elios.",f_path:"Resuelve una ruta relativa al directorio actual.",f_read:"Lee un archivo.",f_write:"Escribe en un archivo.",f_exist:"Verifica si el archivo existe.",f_create:"Crea un nuevo archivo.",
    json_title:"Funciones JSON",json_desc:"Lectura y manipulación de datos JSON.",j_read:"Lee un archivo JSON.",j_write:"Escribe un archivo JSON.",j_get:"Obtiene un valor JSON.",j_set:"Establece un valor JSON.",
    multi_title:"Multi-archivo",multi_desc:'Organiza tu proyecto en múltiples archivos <code>.elios</code>.',mul_req:'Incluye un archivo <code>.elios</code>.',mul_feat:"Características",mul_f1:"Carga archivos antes de la ejecución",mul_f2:"Comparte variables entre archivos",mul_f3:'Soporte de <code>require</code> anidados',mul_f4:"Detección de dependencias circulares",mul_ex:"Ejemplo",
    plug_title:"Sistema de plugins",plug_desc:'Extiende Elios con funciones personalizadas en la carpeta <code>./addons</code>.',plug_create:"Crear un plugin",plug_file:'Archivo: <code>./addons/mi-plugin-elios-addon.js</code>',plug_usage:"Uso",plug_builtins:"Plugins disponibles",plug_example:"example-plugin — Funciones de ejemplo",
    ex_label:"Ejemplo"
  },
  de: {
    nav_intro:"Einführung",nav_quick:"Schnellstart",nav_syntax:"Syntax",nav_io:"Ein-/Ausgabe",nav_vars:"Variablen",nav_math:"Mathematik",nav_text:"Text",nav_control:"Steuerfluss",nav_types:"Typen",nav_files:"Dateien",nav_json:"JSON",nav_multi:"Multi-Datei",nav_plugins:"Plugins",
    intro_desc:'Elios ist eine leichtgewichtige, auf Node.js basierende Skriptsprache für Einfachheit und Leistung. Sie verwendet eine intuitive Syntax mit dem Format <code>§funktion[args]</code>.',
    intro_why:"Warum Elios?",intro_f1:"Einheitliche Syntax — alle Funktionen folgen demselben Schema",intro_f2:"Globale Variablen zwischen Dateien geteilt",intro_f3:'Erweiterbares Plugin-System über <code>./addons</code>',intro_f4:"Integrierter Debug-Modus für einfache Diagnose",
    quick_title:"Schnellstart",quick_desc:"Starten Sie Ihr erstes Elios-Programm in Sekunden.",quick_run:"Ein Programm ausführen",quick_debug:"Debug-Modus",quick_var:"Mit Variablen",
    syntax_title:"Grundlegende Syntax",syntax_desc:"Elios verwendet eine konsistente Syntax für alle Operationen.",syntax_rules:"Grundregeln",syn_r1:'Alle Funktionen beginnen mit <code>§</code>',syn_r2:'Argumente stehen in <code>[...]</code>',syn_r3:'Mehrere Argumente durch <code>;</code> getrennt',syn_r4:'Variablen mit <code>$VAR_NAME</code> referenzieren',syn_r5:'Kommentare beginnen mit <code>#</code>',
    io_title:"Ein-/Ausgabe",io_desc:"Funktionen zum Anzeigen von Text und Lesen von Benutzereingaben.",io_log:"Text in der Konsole ausgeben.",io_input:"Benutzereingabe lesen.",io_clear:"Konsolenbildschirm löschen.",
    vars_title:"Variablen",vars_desc:'Variablen sind global und im gesamten Programm verfügbar, auch in Dateien, die mit <code>§require</code> geladen werden.',vars_def:"Eine Variable definieren oder aktualisieren.",vars_use:"Variablen verwenden",vars_ref:'Referenzieren Sie eine Variable mit <code>$VARIABLENNAME</code>:',
    math_title:"Mathematikfunktionen",math_desc:"Arithmetische Operationen und numerische Hilfsmittel.",m_add:"Addition",m_sub:"Subtraktion",m_mul:"Multiplikation",m_div:"Division",m_mod:"Modulo (Rest)",m_pow:"Potenz",m_sqrt:"Quadratwurzel",m_floor:"Abrunden",m_ceil:"Aufrunden",m_round:"Runden",m_abs:"Absolutwert",m_min:"Minimalwert",m_max:"Maximalwert",m_rand:"Zufallszahl",
    text_title:"Textfunktionen",text_desc:"Zeichenfolgenmanipulation und -analyse.",t_len:"Zeichenkettenlänge",t_upper:"Großbuchstaben",t_lower:"Kleinbuchstaben",t_trim:"Leerzeichen entfernen",t_contains:"Teilzeichenkette prüfen",t_replace:"Text ersetzen",t_index:"Position finden",t_eic:"Groß-/Kleinschreibung ignorieren",
    ctrl_title:"Steuerfluss",ctrl_desc:"Bedingungen, Schleifen und Sprunganweisungen.",ctrl_if:"Bedingung",ctrl_while:"While-Schleife",ctrl_for:"For-Schleife",ctrl_jump:"Sprünge",ctrl_break:"Schleife beenden",ctrl_cont:"Iteration überspringen",
    types_title:"Typprüfung",types_desc:"Funktionen zur Inspektion und Validierung von Wertetypen.",ty_num:"Numerisch?",ty_nan:"Keine Zahl?",ty_even:"Gerade?",ty_odd:"Ungerade?",ty_text:"Text?",ty_bool:"Boolean?",ty_int:"Ganzzahl?",ty_float:"Dezimalzahl?",ty_json:"JSON?",ty_typeof:"Typ ermitteln",
    files_title:"Dateioperationen",files_desc:"Dateien aus Elios lesen, schreiben und verwalten.",f_path:"Relativen Pfad zum aktuellen Verzeichnis auflösen.",f_read:"Datei lesen.",f_write:"In Datei schreiben.",f_exist:"Prüfen ob Datei existiert.",f_create:"Neue Datei erstellen.",
    json_title:"JSON-Funktionen",json_desc:"JSON-Daten lesen und manipulieren.",j_read:"JSON-Datei lesen.",j_write:"JSON-Datei schreiben.",j_get:"JSON-Wert lesen.",j_set:"JSON-Wert setzen.",
    multi_title:"Multi-Datei",multi_desc:'Projekt in mehrere <code>.elios</code>-Dateien organisieren.',mul_req:'Eine <code>.elios</code>-Datei einbinden.',mul_feat:"Funktionen",mul_f1:"Dateien vor der Ausführung laden",mul_f2:"Variablen zwischen Dateien teilen",mul_f3:'Verschachtelte <code>require</code> unterstützen',mul_f4:"Zirkuläre Abhängigkeiten erkennen",mul_ex:"Beispiel",
    plug_title:"Plugin-System",plug_desc:'Elios mit eigenen Funktionen im Ordner <code>./addons</code> erweitern.',plug_create:"Plugin erstellen",plug_file:'Datei: <code>./addons/mein-plugin-elios-addon.js</code>',plug_usage:"Verwendung",plug_builtins:"Verfügbare Plugins",plug_example:"example-plugin — Beispielfunktionen",
    ex_label:"Beispiel"
  },
  pt: {
    nav_intro:"Introdução",nav_quick:"Início rápido",nav_syntax:"Sintaxe",nav_io:"Entrada / Saída",nav_vars:"Variáveis",nav_math:"Matemática",nav_text:"Texto",nav_control:"Controle",nav_types:"Tipos",nav_files:"Arquivos",nav_json:"JSON",nav_multi:"Multi-arquivo",nav_plugins:"Plugins",
    intro_desc:'Elios é uma linguagem de script leve baseada em Node.js, projetada para simplicidade e poder. Usa uma sintaxe intuitiva com o formato <code>§função[args]</code>.',
    intro_why:"Por que Elios?",intro_f1:"Sintaxe uniforme — todas as funções seguem o mesmo padrão",intro_f2:"Variáveis globais compartilhadas entre arquivos",intro_f3:'Sistema de plugins extensível via <code>./addons</code>',intro_f4:"Modo debug integrado para diagnósticos fáceis",
    quick_title:"Início rápido",quick_desc:"Lance seu primeiro programa Elios em segundos.",quick_run:"Executar um programa",quick_debug:"Modo debug",quick_var:"Com variáveis",
    syntax_title:"Sintaxe básica",syntax_desc:"Elios usa uma sintaxe consistente para todas as operações.",syntax_rules:"Regras principais",syn_r1:'Todas as funções começam com <code>§</code>',syn_r2:'Argumentos entre <code>[...]</code>',syn_r3:'Múltiplos argumentos separados por <code>;</code>',syn_r4:'Variáveis referenciadas com <code>$NOME_VAR</code>',syn_r5:'Comentários começam com <code>#</code>',
    io_title:"Entrada / Saída",io_desc:"Funções para exibir texto e ler a entrada do usuário.",io_log:"Imprime texto no console.",io_input:"Lê a entrada do usuário.",io_clear:"Limpa a tela do console.",
    vars_title:"Variáveis",vars_desc:'Variáveis são globais e acessíveis em todo o programa, incluindo arquivos carregados com <code>§require</code>.',vars_def:"Define ou atualiza uma variável.",vars_use:"Usar variáveis",vars_ref:'Referencie uma variável com <code>$NOME_VARIAVEL</code>:',
    math_title:"Funções matemáticas",math_desc:"Operações aritméticas e utilitários numéricos.",m_add:"Adição",m_sub:"Subtração",m_mul:"Multiplicação",m_div:"Divisão",m_mod:"Módulo (resto)",m_pow:"Potência",m_sqrt:"Raiz quadrada",m_floor:"Arredondar para baixo",m_ceil:"Arredondar para cima",m_round:"Arredondar",m_abs:"Valor absoluto",m_min:"Valor mínimo",m_max:"Valor máximo",m_rand:"Inteiro aleatório",
    text_title:"Funções de texto",text_desc:"Manipulação e análise de strings.",t_len:"Comprimento da string",t_upper:"Maiúsculas",t_lower:"Minúsculas",t_trim:"Remover espaços",t_contains:"Verificar substring",t_replace:"Substituir texto",t_index:"Encontrar posição",t_eic:"Comparar sem distinção de maiúsculas",
    ctrl_title:"Controle de fluxo",ctrl_desc:"Condições, laços e instruções de salto.",ctrl_if:"Condicional",ctrl_while:"Laço while",ctrl_for:"Laço for",ctrl_jump:"Saltos",ctrl_break:"Sair do laço",ctrl_cont:"Pular iteração",
    types_title:"Verificação de tipos",types_desc:"Funções para inspecionar e validar tipos de valores.",ty_num:"Numérico?",ty_nan:"Não é um número?",ty_even:"Par?",ty_odd:"Ímpar?",ty_text:"Texto?",ty_bool:"Booleano?",ty_int:"Inteiro?",ty_float:"Decimal?",ty_json:"JSON?",ty_typeof:"Obter tipo",
    files_title:"Operações com arquivos",files_desc:"Ler, escrever e gerenciar arquivos do Elios.",f_path:"Resolve um caminho relativo ao diretório atual.",f_read:"Ler um arquivo.",f_write:"Escrever em um arquivo.",f_exist:"Verificar se arquivo existe.",f_create:"Criar novo arquivo.",
    json_title:"Funções JSON",json_desc:"Leitura e manipulação de dados JSON.",j_read:"Ler arquivo JSON.",j_write:"Escrever arquivo JSON.",j_get:"Obter valor JSON.",j_set:"Definir valor JSON.",
    multi_title:"Multi-arquivo",multi_desc:'Organize seu projeto em múltiplos arquivos <code>.elios</code>.',mul_req:'Incluir um arquivo <code>.elios</code>.',mul_feat:"Recursos",mul_f1:"Carregar arquivos antes da execução",mul_f2:"Compartilhar variáveis entre arquivos",mul_f3:'Suporte a <code>require</code> aninhados',mul_f4:"Detectar dependências circulares",mul_ex:"Exemplo",
    plug_title:"Sistema de plugins",plug_desc:'Estenda o Elios com funções personalizadas na pasta <code>./addons</code>.',plug_create:"Criar um plugin",plug_file:'Arquivo: <code>./addons/meu-plugin-elios-addon.js</code>',plug_usage:"Uso",plug_builtins:"Plugins disponíveis",plug_example:"example-plugin — Funções de exemplo",
    ex_label:"Exemplo"
  },
  ja: {
    nav_intro:"はじめに",nav_quick:"クイックスタート",nav_syntax:"構文",nav_io:"入出力",nav_vars:"変数",nav_math:"数学",nav_text:"テキスト",nav_control:"制御フロー",nav_types:"型チェック",nav_files:"ファイル",nav_json:"JSON",nav_multi:"マルチファイル",nav_plugins:"プラグイン",
    intro_desc:'Eliosは、シンプルさとパワーのために設計されたNode.jsベースの軽量スクリプト言語です。<code>§関数[引数]</code>形式の直感的な構文を使用します。',
    intro_why:"Eliosを使う理由",intro_f1:"統一された構文 — すべての関数が同じパターンに従う",intro_f2:"ファイル間で共有されるグローバル変数",intro_f3:'<code>./addons</code>による拡張可能なプラグインシステム',intro_f4:"簡単な診断のための組み込みデバッグモード",
    quick_title:"クイックスタート",quick_desc:"数秒で最初のEliosプログラムを起動。",quick_run:"プログラムの実行",quick_debug:"デバッグモード",quick_var:"変数を使った例",
    syntax_title:"基本構文",syntax_desc:"Eliosはすべての操作に一貫した構文を使用します。",syntax_rules:"主なルール",syn_r1:'すべての関数は<code>§</code>で始まる',syn_r2:'引数は<code>[...]</code>で囲む',syn_r3:'複数の引数は<code>;</code>で区切る',syn_r4:'変数は<code>$変数名</code>で参照',syn_r5:'コメントは<code>#</code>で始まる',
    io_title:"入出力",io_desc:"テキストの表示とユーザー入力の読み取り関数。",io_log:"コンソールにテキストを表示。",io_input:"ユーザー入力を読み取る。",io_clear:"コンソール画面をクリア。",
    vars_title:"変数",vars_desc:'変数はグローバルで、<code>§require</code>で読み込まれたファイルを含むプログラム全体でアクセス可能です。',vars_def:"変数を定義または更新する。",vars_use:"変数の使い方",vars_ref:'<code>$変数名</code>で変数を参照:',
    math_title:"数学関数",math_desc:"算術演算と数値ユーティリティ。",m_add:"加算",m_sub:"減算",m_mul:"乗算",m_div:"除算",m_mod:"剰余",m_pow:"べき乗",m_sqrt:"平方根",m_floor:"切り捨て",m_ceil:"切り上げ",m_round:"四捨五入",m_abs:"絶対値",m_min:"最小値",m_max:"最大値",m_rand:"乱数整数",
    text_title:"テキスト関数",text_desc:"文字列の操作と分析。",t_len:"文字列の長さ",t_upper:"大文字",t_lower:"小文字",t_trim:"空白を削除",t_contains:"部分文字列の確認",t_replace:"テキストの置換",t_index:"位置の検索",t_eic:"大文字小文字を無視した比較",
    ctrl_title:"制御フロー",ctrl_desc:"条件分岐、ループ、ジャンプ命令。",ctrl_if:"条件分岐",ctrl_while:"whileループ",ctrl_for:"forループ",ctrl_jump:"ジャンプ",ctrl_break:"ループを終了",ctrl_cont:"次の反復へスキップ",
    types_title:"型チェック",types_desc:"値の型を検査・検証する関数。",ty_num:"数値?",ty_nan:"数値でない?",ty_even:"偶数?",ty_odd:"奇数?",ty_text:"テキスト?",ty_bool:"ブール値?",ty_int:"整数?",ty_float:"浮動小数点?",ty_json:"JSON?",ty_typeof:"型を取得",
    files_title:"ファイル操作",files_desc:"Eliosからファイルを読み書き・管理する。",f_path:"現在のディレクトリからの相対パスを解決。",f_read:"ファイルを読む。",f_write:"ファイルに書き込む。",f_exist:"ファイルが存在するか確認。",f_create:"新しいファイルを作成。",
    json_title:"JSON関数",json_desc:"JSONデータの読み取りと操作。",j_read:"JSONファイルを読む。",j_write:"JSONファイルに書く。",j_get:"JSON値を取得。",j_set:"JSON値を設定。",
    multi_title:"マルチファイル",multi_desc:'複数の<code>.elios</code>ファイルにプロジェクトを整理。',mul_req:'<code>.elios</code>ファイルをインクルード。',mul_feat:"機能",mul_f1:"実行前にファイルをロード",mul_f2:"ファイル間で変数を共有",mul_f3:'ネストされた<code>require</code>のサポート',mul_f4:"循環依存の検出",mul_ex:"例",
    plug_title:"プラグインシステム",plug_desc:'<code>./addons</code>フォルダのカスタム関数でEliosを拡張。',plug_create:"プラグインの作成",plug_file:'ファイル: <code>./addons/my-plugin-elios-addon.js</code>',plug_usage:"使い方",plug_builtins:"利用可能なプラグイン",plug_example:"example-plugin — サンプル関数",
    ex_label:"例"
  }
};

let currentLang = 'fr';

function applyLang(lang) {
  currentLang = lang;
  const d = T[lang];
  if (!d) return;
  document.querySelectorAll('[data-key]').forEach(el => {
    const k = el.getAttribute('data-key');
    if (d[k] !== undefined) el.innerHTML = d[k];
  });
}

function show(id, btn) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const sec = document.getElementById('sec-' + id);
  if (sec) sec.classList.add('active');
  if (btn) btn.classList.add('active');
  document.getElementById('main-content').scrollTop = 0;
}

document.getElementById('lang-sel').addEventListener('change', function() {
  applyLang(this.value);
});