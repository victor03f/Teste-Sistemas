const isEven = require('./isEven')

/*test('este teste deve verificar se um número é par',()=>{
    const Dimensoes
    expect(isEven(entrada)).toBe(saida_esperada)
})*/

test('este teste deve verificar se um número é par e falhar',()=>{
    const entrada = {
        altura: 10,
        largura: 20,
        raio: 5
    }
    const saida_esperada_quadrado = 200
    const saida_esperada_triangulo = 100
    const saida_esperada_circulo = 1(3.14*5**2)

    expect(isEven(entrada, 'quadrado')).toEqual(saida_esperada_quadrado)
    expect(isEven(entrada, 'triangulo')).toEqual(saida_esperada_triangulo)
    expect(isEven(entrada, 'circulo')).toEqual(saida_esperada_circulo)
   
})
test('este teste deve verificar se um número é par',()=>{
    const entrada = {
        altura: 10,
        largura: 20,
        raio: 5
    }
    
    const saida_esperada = 'nao trabalhamos com isso '
    expect(isEven(entrada,'hexano')).toBe(saida_esperada)
})