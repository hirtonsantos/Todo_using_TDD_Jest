const students = require("./students")

describe('Testes para alunos', () => {
    
    it('Deve retornar 10 quando as notas forem 5, 3 e 2', () => {
        const notes = [5, 3, 2]
        expect(students.sum(notes)).toEqual(10)
    })

    it('Deve retornar zero quando uma das notas for 0', () => {
        const notes = [1, 2, 3, 4, 5, 0]
        expect(students.sum(notes)).toEqual(0)
    })

    it('Deve dobrar a nota quando o aluno tiver mais de cinco notas', () => {
        const notes = [1, 2, 3, 4, 5, 6]
        expect(students.sum(notes)).toEqual(42)
    }) 

})