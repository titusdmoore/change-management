describe("Beginning Tests", () => {
    it("Add 2 and 3 equals 5", () => {
        expect(2 + 3).toBe(5);
    });
    it("Subtract 4 from 2 equals -2", () => {
        expect(2 - 4).toBe(-2);
    });
    it("String should not be empty", () => {
        expect("").toBeFalsy();
    })
});

// Isolated Modules
export {};