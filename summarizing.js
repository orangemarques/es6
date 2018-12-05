const alunos = [];

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const getTurma = () => getRandomInt(1,20);

for(var i=0; i<1000; i++) {
    alunos.push(
        {
            "nome": "aluno"+(10+i), 
            "turma": getTurma(),
            "medias":[
                {"materia":"matematica", "nota": 7},
                {"materia":"portugues", "nota": 8},
                {"materia":"historia", "nota": 6},
                {"materia":"ciencias", "nota": 9},
                {"materia":"fisica", "nota": 4+getRandomInt(1,7)},
            ]

        }
    )
}

const resultado = alunos.map(
    (aluno) => {

        const passou = (aluno.medias).every(
            (media) => media.nota >= 6
        )

        return {"turma":aluno.turma, "passou": passou}
    }

)
.reduce(
    (total, dados) => {

        const _index = total.findIndex(
            (info) => info.turma === dados.turma
        );

        if(_index !== -1) {
            total[_index].aprovados += dados.passou?1:0;
            total[_index].reprovados += dados.passou?0:1;

        } else {
            total.push({"turma":dados.turma, "aprovados":0+(dados.passou?1:0), "reprovados":0+(dados.passou?0:1)})
        }

        return total;
    },
    []

).sort(
    (a,b) => a.turma - b.turma
)

console.log(resultado)
