import { faker } from "@faker-js/faker";
import { EmployeeDetails } from "./dataInterface";

export function getRandomEmpDetails(): EmployeeDetails {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    employeeID: faker.number.int(10000).toString(),
  };
}
