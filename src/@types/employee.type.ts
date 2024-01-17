export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const dumpEmployeeList: IEmployee[] = [{
    id: new Date().toJSON().toString(),
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith123@gmail.com',
},
];

export enum PageEnum {
    list,
    add
}
