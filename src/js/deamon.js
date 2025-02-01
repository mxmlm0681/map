import { Character } from "./app";

export default class Deamon extends Character {
    constructor(name) {
        super(name);
        this.type = 'Deamon';
        this.attack = 10;
        this.defence = 40;
    }
}