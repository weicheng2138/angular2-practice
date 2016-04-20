import {Injectable} from "angular2/core";
import {SOLDIERS} from "./mock-soldier";

@Injectable()
export class SoldierService {
    getSoldiers() {
        return Promise.resolve(SOLDIERS);
    }
}