
const {
    summarizePerformance
} = require("../src/performanceTracker");

const {
    findMaximumGap
} = require("../src/gapAnalyzer");

const {
    compareVersions
} = require("../src/versionComparator");

// 1. Performance analysis
const evaluationResults = [
    [8, 5],
    [4, 7],
    [9, 3],
    [6, 6]
];

console.log("=== Performance Analysis ===");
console.log(summarizePerformance(evaluationResults));

// 2. Measurement gap analysis
const measurements = [3, 6, 9, 1];

console.log("\n=== Gap Analysis ===");
console.log(
    "Maximum measurement gap:",
    findMaximumGap(measurements)
);

// 3. Software version comparison
console.log("\n=== Version Analysis ===");

const comparison = compareVersions("1.2", "1.10");

console.log("Version comparison result:", comparison);

if (comparison < 0) {
    console.log("Version 1.2 is older than 1.10");
} else if (comparison > 0) {
    console.log("Version 1.2 is newer than 1.10");
} else {
    console.log("Both versions are equivalent");
}
