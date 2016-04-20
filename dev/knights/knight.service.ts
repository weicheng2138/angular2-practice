import {Injectable} from "angular2/core";
import {KNIGHTS} from "./mock-knight";

@Injectable()
export class KnightService {
    getKnights() {
        return Promise.resolve(KNIGHTS);
    }
}