const AnimalShelter = require('./index');
const myShelter = new AnimalShelter();


describe('myShelter should be instantiated', () => {
  test('myShelter should exist', () => {
    expect(myShelter).toBeTruthy();
  });
});

describe('Should be able to enqueue items correctly', () => {

  test('An animal is enqueued correctly', () => {
    const testAnimal = { name: 'Fluffy', species: 'cat' };
    myShelter.enqueue(testAnimal);

    expect(myShelter.stackA.peek().name).toBe('Fluffy');
  });

  test('Multiple items are enqueued correctly', () => {
    const testAnimal = { name: 'Chairman Meow', species: 'cat' };
    const testAnimal2 = { name: 'Frumpy Cat', species: 'cat' };
    const testAnimal3 = { name: 'Gus', species: 'dog' };
    const testAnimal4 = { name: 'Porkchop', species: 'cat' };
    myShelter.enqueue(testAnimal);
    myShelter.enqueue(testAnimal2);
    myShelter.enqueue(testAnimal3);
    myShelter.enqueue(testAnimal4);

    expect(myShelter.stackA.peek().name).toBe('Porkchop');
  });

});

describe('Should be able to dequeue items correctly', () => {
  test('Dequeue should be last value enqueued', () => {
    console.log(myShelter.stackA);

    const oldestDog = myShelter.dequeue('dog');

    expect(oldestDog.name).toBe('Gus');
  });
});
