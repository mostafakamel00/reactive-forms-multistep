import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const toggleFade = trigger('fade', [
  transition('void => *', [
    style({ opacity: 0 }),
    animate('1500ms', style({ opacity: 1 })),
  ]),
]);
