const { validarEntrenamiento } = require('../fitlife');

describe('validarEntrenamiento', () => {
  test('Caso válido: entrenamiento con nombre, duración positiva y calorías no negativas', () => {
    const resultado = validarEntrenamiento({
      nombre: 'Full Body',
      tipo: 'Fuerza',
      duracion: 50,
      calorias: 350
    });
    expect(resultado.valido).toBe(true);
  });

  test('Caso inválido: nombre vacío o duración menor o igual a 0', () => {
    expect(
      validarEntrenamiento({ nombre: '   ', duracion: 30, calorias: 200 }).valido
    ).toBe(false);
    expect(
      validarEntrenamiento({ nombre: 'Cardio', duracion: 0, calorias: 200 }).valido
    ).toBe(false);
  });

  test('Caso límite: duración mínima válida (1 minuto) y 0 calorías', () => {
    const resultado = validarEntrenamiento({
      nombre: 'Estiramiento suave',
      tipo: 'Cardio',
      duracion: 1,
      calorias: 0
    });
    expect(resultado.valido).toBe(true);
  });
});
