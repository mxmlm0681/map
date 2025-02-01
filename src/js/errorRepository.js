export default class ErrorRepository {
    constructor() {
        this.mapError = new Map();
    }

    errorSet(key, descr) {
        this.mapError.set(key, descr);
    }

    translate(code) {
        if (this.mapError.get(code)) {
            return this.mapError.get(code);
        }

        return 'Unknown error';
    }
}