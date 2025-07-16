const { faker } = require('@faker-js/faker');

export function createRandomUser() {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()

    };
}