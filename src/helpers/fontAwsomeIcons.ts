import {
    IconLookup,
    IconDefinition,
    findIconDefinition
} from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

const phoneReceiver: IconLookup = { prefix: 'fas', iconName: 'phone' };
const envelope: IconLookup = { prefix: 'fas', iconName: 'envelope' };
const star: IconLookup = { prefix: 'fas', iconName: 'star' };
const paperClip: IconLookup = { prefix: 'fas', iconName: 'paperclip' };

export const phoneReceiverIconDefinition: IconDefinition = findIconDefinition(phoneReceiver);
export const envelopeIconDefinition: IconDefinition = findIconDefinition(envelope);
export const starIconDefinition: IconDefinition = findIconDefinition(star);
export const paperClipIconDefinition: IconDefinition = findIconDefinition(paperClip);