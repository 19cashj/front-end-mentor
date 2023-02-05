import { atom } from 'nanostores';

export type TimeSpanValue = 'daily' | 'weekly' | 'monthly';
export const timeSpan = atom<TimeSpanValue>('daily')