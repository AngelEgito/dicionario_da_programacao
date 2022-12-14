function carregaDicionario () {
    var biografias ={
        bio01: {nome:"HTML e CSS", 
                imagem: "https://www.labarchimede.it/images/corsi/logo_htmlcss_300x294.png", 
                descricao: "O HTML é a linguagem base para se desenvolver qualquer site. É uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir. O CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML, ou seja, definir a aparência das páginas, para deixá-las visualmente mais bonitas e agradáveis, podendo alterar a fonte, cor, posicionamento dos elementos, layout e muito mais.", 
                citacao: "O HTML e o CSS são utilizados para criar páginas web e atuam de forma complementar."
            },
        bio02: {nome:"JavaScript", 
                imagem: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png", 
                descricao: "É uma linguagem multiparadigma (programação funcional e imperativa), versátil, com tipagem dinâmica (não é necessário definir os tipos das variáveis ao declará-las), sintaxe acessível, e recursos avançados como orientação a objetos e APIs para trabalhar com textos, matrizes, datas e expressões regulares. Atualmente, segue as especificações ECMAScript, que visam garantir o suporte e o funcionamento da linguagem entre os diferentes navegadores.", 
                citacao: "O JavaScript é uma linguagem de programação de alto nível voltada para o desenvolvimento web, criada originalmente para funcionar do lado do usuário, ou seja, nos navegadores. Junto do HTML e do CSS, é uma das principais tecnologias da web, permitindo a criação de páginas interativas com elementos dinâmicos e boa performance."
            },
        bio03: {nome:"Phyton", 
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Htcq1puH4XsNKQG0iVRes_P9CPb4O8T13hu3kJbNXLlm7TvEhZhUdcyiZYUe9IqiIAw&usqp=CAU", 
            descricao: "Python é uma linguagem de propósito geral de alto nível, multiparadigma, suporta o paradigma orientado a objetos, imperativo, funcional e procedural. Possui tipagem dinâmica e uma de suas principais características é permitir a fácil leitura do código e exigir poucas linhas de código se comparado ao mesmo programa em outras linguagens. Devido às suas características, ela é utilizada, principalmente, para processamento de textos, dados científicos e criação de CGIs para páginas dinâmicas para a web. ", 
            citacao: "Python é uma linguagem de programação extremamente simples e versátil, pois, como sua sintaxe é moderna e objetiva, ela foi elaborada para que as pessoas desenvolvedoras escrevam instruções com menos linhas de código."
        },
        bio04: {nome:"Java", 
            imagem: "https://www.eadplus.com.br/wp-content//uploads/2015/08/wjava.jpg", 
            descricao: "Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.", 
            citacao: "Java é uma linguagem de programação amplamente usada para codificar aplicações Web. Ela tem sido uma escolha popular entre os desenvolvedores há mais de duas décadas, com milhões de aplicações Java em uso hoje."
        },
        bio05: {nome:"PHP", 
            imagem: "https://ih1.redbubble.net/image.439203201.3965/flat,800x800,075,f.u3.jpg", 
            descricao: "PHP é uma linguagem de programação utilizada por programadores e desenvolvedores para construir sites dinâmicos, extensões de integração de aplicações e agilizar no desenvolvimento de um sistema.", 
            citacao: "Essa linguagem é mundialmente conhecida e uma das mais utilizadas pela facilidade em aprendê-la, manuseá-la, além de ser compatível com quase todos os sistemas operacionais que existem – o que torna seu custo menor."
        },
        bio06: {nome:"React JS", 
            imagem: "https://www.nicepng.com/png/detail/222-2224705_react-js-logo.png", 
            descricao: "O React é uma biblioteca de código aberto para interfaces gráficas (GUI) que tem como foco uma só coisa: tornar a experiência do usuário com a interface mais eficiente.", 
            citacao: "O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites. Os componentes dessa ferramenta foram desenvolvidos pelo Facebook."
        }

    };

    var content = document.getElementById("content");
    
    for (var bio in biografias) {

    content.innerHTML +=

      '<div class="card">' +

      '<img src="' +

      biografias[bio].imagem +

      '"/>' +

      "<details>" +

      "<summary>" +

      biografias[bio].nome +

      "</summary>" +

      "<p>" +

      biografias[bio].descricao +

      "</p>" +

      "<blockquote><q>" +

      biografias[bio].citacao +

      "</q></blockquote>" +

      "</details></div>";
    
    }
           
}

var nome = document.getElementById('nome');
var email = document.getElementById('email');
var telefone = document.getElementById('telefone');

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function validaFormulario(){
  if(nome.value != "" && email.value != "" && telefone.value != ""){
    alert("Prontinho! você receberá as novidades por email.")
  }else{ 
    alert("Por favor, preencha os campos nome, email e telefone .")
  }
}

carregaDicionario();