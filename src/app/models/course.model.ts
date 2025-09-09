export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
    id: string;
    name: string;
    category: string;
    level: Level;
    active: boolean;
}