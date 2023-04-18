import Team from '../js/main';

class Character {
  constructor(name) {
    this.name = name || 'defaultName';
    this.type = 'Bowman';
  }
}

const team = new Team();
const unit1 = new Character('kiLLer777');
const unit2 = new Character('$nipeR');
const unit3 = new Character('LegolasMegaElf');

test('Test method add', () => {
  team.add(unit1);
  expect(team.members.size).toBe(1);

  team.add(unit2);
  expect(team.members.size).toBe(2);

  expect(() => team.add(unit1)).toThrow('kiLLer777 уже добавлен в команду');
});

test('Test method addAll', () => {
  team.members.clear();
  expect(team.members.size).toBe(0);

  team.addAll(unit1, unit1, unit2, unit3);
  expect(team.members.size).toBe(3);
});

team.members.clear();
test('Test method toArray', () => {
  team.addAll(unit1, unit2, unit3);

  const res = [
    { name: 'kiLLer777', type: 'Bowman' },
    { name: '$nipeR', type: 'Bowman' },
    { name: 'LegolasMegaElf', type: 'Bowman' },
  ];

  expect(team.toArray()).toEqual(res);
});
