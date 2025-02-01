export default class Team {
    constructor() {
        this.members = new Set()
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Персонаж уже добавлен');
        }

        this.members.add(character);
    }

    addAll(...characters) {
        for (const item of characters) {
            this.members.add(item);
        }
    }

    toArray() {
        return Array.from(this.members);
    }
}


