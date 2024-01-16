export class DataTool {
    static getMatchesArray(string, pattern) {
        const matchesRaw = [...string.matchAll(new RegExp(pattern, "g"))];
        return matchesRaw.map(match => `${match}`);
    }

    static removeDuplicates(data) {
        return [...new Set(data)];
    }

    static analyzeData(data) {
        console.log("Analyzing");
        console.log(data);
        const metaData = [];
        data.sort();
        let lastIndex = 0;
        data.forEach(element => {

            if (element != metaData[lastIndex - 1]?.name) {
                console.log(metaData);
                console.log(`${element}==${metaData[lastIndex]?.name}: ${element == metaData[lastIndex]?.name}`)
                metaData[lastIndex] = ({ name: element, count: 1 });
                console.log(metaData[lastIndex]);
                console.log(lastIndex);

                lastIndex++;
            }
            else metaData[lastIndex - 1].count++;
        });
        console.log(metaData);

        return metaData;
    }

    static copyToClipboard(text) {
        // navigator.permissions.query({ name: "clipboard-read" });
        console.log(navigator);
        console.log(navigator.permissions.query())
        navigator.clipboard.writeText(text);
        console.log(navigator.clipboard);
    }

}