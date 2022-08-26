import { Role } from '../enums';
import { GetDisplayRolesByUser, GetRoleDisplayByEnum } from '../utils/users';

describe("User Utils Test", () => {
  const TestUser = {
    "id": 7,
    "roles": [ Role.Developer, Role.Lead, Role.Designer ],
    "name": "Testing User"
  }
  const validRoleArray = ["Developer", "Team Lead", "Designer"];

  it("Valid run of TestUser", () => {
    expect(GetDisplayRolesByUser(TestUser)).toEqual(expect.arrayContaining(validRoleArray));
  });

  it("Valid Run of getting string value of Role", () => {
    expect(GetRoleDisplayByEnum(Role.Developer)).toBe("Developer");
  });
});

export {};
