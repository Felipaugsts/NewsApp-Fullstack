const { ApolloServer } = require("apollo-server");

const typeDefs = `
type Item {
    id: Int 
    type: String
    title: String
    post: String
    src: String
    img: String
    header: String
  
}
type Query { 
    users: [Item]
    post: [Item]
}
`;
const items = [
    {id: 1, 
        type: "users", 
        title: "BBC Brasil", 
        header: "Coronavirus",
        post: "Coronavirus: o que mantem a media de mortes por covid-19 tao alta no Brasil",  post: " Pais tem registrado em torno de mil obitos por dia nas ultimas semanas, mas a permanencia da taxa em patamar tao elevado e preocupante",
        img: " https://ogimg.infoglobo.com.br/in/24498781-fd9-4c4/FT1086A/652/x88578906_RI-Rio-de-Janeiro-RJ-23-06-2020-PANDEMIA-CORONAVIRUSEnsaio-no-Cemiterio-do-Caju-sobre-co.jpg.pagespeed.ic.XnGTBHi556.jpg",
        src: "https://www.bbc.com/portuguese/brasil-53426224"
    },

    {id: 2, 
        type: "users", 
        title: "Folha de Sao paulo", 
        header: "Fake News Facebook",
        post: "Ameaca do Facebook veio porque tentamos combater fake news, diz Sencionalista",
        img: " https://f.i.uol.com.br/fotografia/2020/07/14/15947692005f0e3f30a8d3c_1594769200_3x2_md.jpg",
        src: "https://www1.folha.uol.com.br/mercado/2020/07/ameaca-do-facebook-veio-porque-tentamos-combater-fake-news-diz-sensacionalista.shtml"
    },

    {id: 3, 
        type: "users", 
        title: "BBC Brasil", 
        header: "colaboração sobre Amazônia",
        post:"'Brasil não é Bolsonaro' e acordo Mercosul-UE trará controle e colaboração sobre Amazônia, diz relator do Parlamento Europeu",
        img: "https://ichef.bbci.co.uk/news/590/cpsprodpb/5EC0/production/_113365242_whatsubject.jpg",
        src: "https://www.bbc.com/portuguese/brasil-53399200"
    },

    {id: 3, 
        type: "users", 
        title: "Toledo News", 
        header: "86 casos do novo Coronavírus",
        post:"Quarta-feira: Toledo registra mais 86 casos do novo Coronavírus",
        img: "https://www.toledonews.com.br/arquivos/noticias/2020/07/1594847888Coroninha.jpg",
        src: "https://www.toledonews.com.br/noticia/quarta-feira-toledo-registra-mais-86-casos-do-novo-coronavirus"
    }
]


const resolvers = {
    Query: { 
        users() {
            return items.filter(items => items.type === "users");
        },
        post() { 
            return items.filter(items => items.type === "post");
        }
    }
    
};

const server = new ApolloServer ({ typeDefs, resolvers})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });