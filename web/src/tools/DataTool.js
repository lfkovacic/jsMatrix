export class DataTool {
    static getMatchesArray(string, pattern) {
        const matchesRaw = [...string.matchAll(new RegExp(pattern, "g"))];
        return matchesRaw.map(match => `${match}`);
    }

    static removeDuplicates(data) {
        return [...new Set(data)];
    }

    static analyzeData(data) {
        const metaData = [];
        data.sort();
        let lastIndex = 0;
        data.forEach(element => {

            if (element != metaData[lastIndex - 1]?.name) {
                metaData[lastIndex] = ({ name: element, count: 1 });

                lastIndex++;
            }
            else metaData[lastIndex - 1].count++;
        });
        return metaData;
    }

    static copyToClipboard(text) {
        // navigator.permissions.query({ name: "clipboard-read" });
        navigator.clipboard.writeText(text);
    }

}