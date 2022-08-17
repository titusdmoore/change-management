describe("Beginning Tests", () => {
    it("Add 2 and 3 equals 5", () => {
        expect(2 + 3).toBe(5);
    });
    it("Subtract 3 from 2 equals -1", () => {
        expect(2 - 3).toBe(-1);
    });
    it("String should not be empty", () => {
        expect("").toBeFalsy();
    })
});

// Isolated Modules
export {};