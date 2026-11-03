
/**
 * OpsLens - Version Comparator
 * Compares dotted software version identifiers.
 *
 * Returns:
 * -1: First version is older.
 *  1: First version is newer.
 *  0: Both versions are equivalent.
 */

function compareVersions(versionOne, versionTwo) {
    const revisionsOne = versionOne.split(".");
    const revisionsTwo = versionTwo.split(".");

    const totalRevisions = Math.max(
        revisionsOne.length,
        revisionsTwo.length
    );

    for (let index = 0; index < totalRevisions; index++) {
        const revisionOne = Number(
            revisionsOne[index] || 0
        );

        const revisionTwo = Number(
            revisionsTwo[index] || 0
        );

        if (revisionOne < revisionTwo) return -1;
        if (revisionOne > revisionTwo) return 1;
    }

    return 0;
}

module.exports = { compareVersions };
