const { faker } = require('@faker-js/faker');

export function createRandomUser() {
    return {
        username: faker.internet.username(),
        password: faker.internet.password(),
    };
}