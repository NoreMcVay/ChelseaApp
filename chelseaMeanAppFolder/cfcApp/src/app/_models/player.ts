export class Player {

constructor(
    public firstname: string = '',
    public surname: string = '',
    public age: number = 0,
    public squadnumber: number = 0,
    public previous: string = '',
    public nationality: string = ''
  ) { }
}

export interface PlayerInterface {
  firstname: string;
  surname: string;
  age: number;
  squadnumber: number;
  previous: string;
  nationality: string;
}
