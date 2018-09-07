export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) {}
}

export const HEROES: any[] = [
    {
        id: 1,
        name: 'aa'
    },
    {
        id: 2,
        name: 'bb'
    },
    {
        id: 3,
        name: 'cc'
    }
];
export class Flyer {
    public name: string;
    public canFly: boolean;
}
