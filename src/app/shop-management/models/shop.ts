export class Shop {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public address: string,
    public description: string,
    public shopTypeId: number,
    public isDeleted: boolean,
  ) { }
}
