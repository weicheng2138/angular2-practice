import {Injectable} from "angular2/core";
import {SOLDIERS} from "./mock-soldier";
import {Soldier} from "./soldier";

@Injectable()
export class SoldierService {
    getSoldiers() {
        return Promise.resolve(SOLDIERS);
    }
    
    insertSoldier(soldier: Soldier) {
        Promise.resolve(SOLDIERS).then((soldiers: Soldier[]) => soldiers.push(soldier));
    }
}