// 1. Crie um objeto em JavaScript para colocar dois atributos de um
// produto. Atribua o preço e descrição do produto com o valor “90” e a
// descrição com o valor “Mouse”. Mostre no console o valor dos dois
// atributos.



    const shop = {
        descrição: 'Mouse',
        preço: 90.00
    }
    
    console.log(`Está em oferta um ${shop.descrição} por R$${shop.preço}`)
    







// 2. Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console,
// exatamente como está na atividade.


    let notebook = {
        Processador: 'i7',
        Memória: '16GB',
        Preço: 5000,
        HD: '1TB',
        SSD: '256GB'
    };

   for(let atributo in notebook) {
    console.log(`${atributo}: ${notebook[atributo]}`)
   }
        





// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.


   const alunos = [
    {
        nome: 'Edson',
        notas: [9,3] 
    },
    {
        nome: 'Marcio',
        notas: [6,0]
    }
   ]

   for(const aluno of alunos){
    let soma = 0
    for(nota of aluno.notas) {
        soma += nota;
    }

    const media = (soma / aluno.notas.length)

    console.log(`A média do aluno ${aluno.nome} é ${media}`);
   }




// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000// Definir um array para armazenar as informações das pessoas



const pessoas = [];

// Loop para cadastrar pessoas
    do {
        const pessoa = {};
        
        pessoa.nome = prompt("Informe o nome:");
        pessoa.idade = parseInt(prompt("Informe a idade:"));
        pessoa.trabalhando = prompt("Está trabalhando? (Sim ou Não)").toLowerCase() === 'sim';
        
        if (pessoa.trabalhando) {
            pessoa.salario = parseFloat(prompt("Informe o salário:"));
        }
        
        pessoas.push(pessoa);

        const continuar = prompt("Deseja continuar cadastrando? (Sim ou Não)").toLowerCase();
        if (continuar !== 'sim') {
            break;
        }
    } while (true);

    // Filtrar e mostrar as pessoas cadastradas
    const desempregadas = pessoas.filter(pessoa => !pessoa.trabalhando);
    const empregadasMenos2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario < 2500);
    const empregadasMais2500 = pessoas.filter(pessoa => pessoa.trabalhando && pessoa.salario >= 2500);

    console.log("\nPessoas desempregadas:");
    desempregadas.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`));

    console.log("\nPessoas empregadas com salários menores que 2500:");
    empregadasMenos2500.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`));

    console.log("\nPessoas empregadas com salários maiores que 2500:");
    empregadasMais2500.forEach(pessoa => console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`));
