module.exports = {
    sum: notes =>  {
        if (Math.min(...notes)){
            const result = notes.reduce((acc, note) => {
                acc += note
                return acc
            }, 0)
            return notes.length > 5 ? result * 2 : result
        }
        return 0
    }
    // Este foi basicamente um exemplo de TDD. Criou os requisitos, criou os testes e depois as funções. 
    // Qualquer exemplo que saia deste escopo, não é TDD. No caso, é um teste normal.
}
