export class Employee {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public about: string,
    public shopId: number,
    public isDeleted: boolean,
  ) { }
}
