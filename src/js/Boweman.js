import { Character } from "./app";

export default class Boweman extends Character {
    constructor(name) {
        super(name);
        this.type = 'Boweman';
        this.attack = 25;
        this.defence = 25;
    }
}