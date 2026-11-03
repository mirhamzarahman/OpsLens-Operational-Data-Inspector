
/**
 * OpsLens - Gap Analyzer
 * Finds the maximum consecutive gap using buckets.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function findMaximumGap(measurements) {
    const length = measurements.length;

    if (length < 2) return 0;

    let minValue = Infinity;
    let maxValue = -Infinity;

    // Find the minimum and maximum measurements.
    for (const value of measurements) {
        minValue = Math.min(minValue, value);
        maxValue = Math.max(maxValue, value);
    }

    if (minValue === maxValue) return 0;

    // Calculate bucket dimensions.
    const bucketSize = Math.max(
        1,
        Math.ceil((maxValue - minValue) / (length - 1))
    );

    const bucketCount =
        Math.floor((maxValue - minValue) / bucketSize) + 1;

    const buckets = Array.from(
        { length: bucketCount },
        () => ({
            min: Infinity,
            max: -Infinity
        })
    );

    // Distribute measurements into buckets.
    for (const value of measurements) {
        const index = Math.floor(
            (value - minValue) / bucketSize
        );

        buckets[index].min = Math.min(
            buckets[index].min,
            value
        );

        buckets[index].max = Math.max(
            buckets[index].max,
            value
        );
    }

    let maximumGap = 0;
    let previousMaximum = minValue;

    // Compare consecutive non-empty buckets.
    for (const bucket of buckets) {
        if (bucket.min === Infinity) continue;

        maximumGap = Math.max(
            maximumGap,
            bucket.min - previousMaximum
        );

        previousMaximum = bucket.max;
    }

    return maximumGap;
}

module.exports = { findMaximumGap };
