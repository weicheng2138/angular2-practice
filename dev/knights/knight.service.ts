import {Injectable} from "angular2/core";
import {KNIGHTS} from "./mock-knight";
import {Knight} from "./knight";

@Injectable()
export class KnightService {
    getKnights() {
        return Promise.resolve(KNIGHTS);
    }

    insertKnight(knight: Knight) {
        Promise.resolve(KNIGHTS).then((knights: Knight[]) => knights.push(knight));
    }
}