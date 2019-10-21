export class planet {
    name: string;
    moons: number;
    distanceFromSun: number;

    constructor(Name: string, Moons: number, DFS: number){
        this.name = Name;
        this.moons = Moons;
        this.distanceFromSun = DFS;
    }
}