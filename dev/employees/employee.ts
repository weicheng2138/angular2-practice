export class Employee {
    // employeeId: string,
    // firstName: string,
    // lastName: string,
    // englishName: string,
    // birthday: string,
    // address: string,
    // title: string,
    // department: string,
    // cellphone: number,
    // email: string

    constructor(
        public employeeId:string = "",
        public firstName: string = "",
        public lastName: string = "",
        public englishName: string = "",
        public birthday: string = null,
        public address: string = null,
        public title: string = null,
        public department: string = null,
        public cellphone: string = "",
        public email: string = null
    ){}
}