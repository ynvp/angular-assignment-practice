export class OfficeEmployee {
    id: string;
    FIRST_NAME!: string;
    LAST_NAME!: string;
    EMAIL!: string;
    PHONE_NUMBER!: string;
    HIRE_DATE!: string;
    SALARY!: number;
    DEPARTMENT_ID!: number;
    Image!: string;

    constructor(
        id: string,
        FIRST_NAME: string,
        LAST_NAME: string,
        EMAIL: string,
        PHONE_NUMBER: string,
        HIRE_DATE: string,
        SALARY: number,
        DEPARTMENT_ID: number,
        Image: string
    ) {
        this.id = id;
        this.FIRST_NAME = FIRST_NAME;
        this.LAST_NAME = LAST_NAME;
        this.EMAIL = EMAIL;
        this.PHONE_NUMBER = PHONE_NUMBER;
        this.HIRE_DATE = HIRE_DATE;
        this.SALARY = SALARY;
        this.DEPARTMENT_ID = DEPARTMENT_ID;
        this.Image = Image;
    }

    getFullName(): string {
        return `${this.FIRST_NAME} ${this.LAST_NAME}`;
    }

    getYearSalary(): number {
        let finalSal = 12 * this.SALARY;
        return finalSal;
    }
}
