import { atom } from 'nanostores';

export type ActiveImageValue = 0 | 1 | 2 | 3 | 4;
export const activeImage = atom<ActiveImageValue>(0)