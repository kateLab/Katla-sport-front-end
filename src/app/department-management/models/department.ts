export class Department {
  constructor(
      public id: number,
      public name: string,
      public description: string,
      public isDeleted: boolean,
      public parentId: number
  ) { }
}
