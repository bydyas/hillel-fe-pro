import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/micah';

export function insertAvatar(src, place, seed) {
    let svg = createAvatar(style, {
        seed: document.querySelector(seed).textContent,
        backgroundColor: 'lightgrey',
      // ... and other options
    });

    document.querySelector(src).insertAdjacentHTML(place, svg); 
}
