import CombatEvent from "./combatEvent";

class CombatRestartEvent extends CombatEvent {
    static type = "combatRestart";

    constructor(time) {
        super(CombatRestartEvent.type, time);
    }
}

export default CombatRestartEvent;
