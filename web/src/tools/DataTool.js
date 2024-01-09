export class DataTool {
    static getMatchesArray(string, pattern) {
        const matchesRaw = [...string.matchAll(new RegExp(pattern, "g"))];
        return matchesRaw.map(match => `${match}`);
    }

    static removeDuplicates(data) {
        return [...new Set(data)];
    }

}