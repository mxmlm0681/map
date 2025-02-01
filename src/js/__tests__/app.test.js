import Zombie from '../zombie';
import Team from '../team';
import ErrorRepository from '../errorRepository';

test('Team add Zombie', () => {
  const shaun = new Zombie('Shon');
  const team = new Team();
  team.add(shaun);
  const received = team.toArray();
  const expected = [{
    name: 'Shon',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }];

  expect(received).toEqual(expected);
});

test('Team addAll Zombie', () => {
  const shaun = new Zombie('Shon');
  const zombak = new Zombie('Зомбак');
  const team = new Team();
  team.addAll(shaun, zombak);
  const received = team.toArray();
  const expected = [{
    name: 'Shon',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  },
  {
    name: 'Зомбак',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  }];

  expect(received).toEqual(expected);
});

test('Team add Bowman repeatedly', () => {
  const shaun = new Zombie('Shon');
  const team = new Team();
  team.add(shaun);

  expect(() => {
    team.add(shaun);
  }).toThrow();
});

test('Add error', () => {
    const received = new ErrorRepository();
    received.errorSet('12345', 'someError');
    expect(received.translate('12345')).toBe('someError');
});

test('Unknown error', () => {
    const received = new ErrorRepository();
    received.errorSet('error', 'error');
    expect(received.translate('54321')).toBe('Unknown error');
});
