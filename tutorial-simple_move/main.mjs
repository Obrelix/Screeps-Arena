import { } from 'game/utils';
import { } from 'game/prototypes';
import { } from 'game/constants';
import { } from 'arena';
import { getObjectsByPrototype } from 'game/utils';
import { Creep, Flag } from 'game/prototypes';

export function loop() {
    var creeps = getObjectsByPrototype(Creep);
    var flags = getObjectsByPrototype(Flag);
    creeps[0].moveTo(flags[0]);
}
