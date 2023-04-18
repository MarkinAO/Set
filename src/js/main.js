export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(unit) {
    if (this.members.has(unit)) throw new Error(`${unit.name} уже добавлен в команду`);
    this.members.add(unit);
  }

  addAll(...units) {
    units.forEach((unit) => {
      if (!this.members.has(unit)) this.members.add(unit);
    });
  }

  toArray() {
    return [...this.members];
  }
}
