export const versions = [
    '0.5',
    '0.4',
    '0.3',
    '0.1',
]

export function getLatestVersion(): string {
    const sortedVersions = versions.sort((a, b) => {
        const [majorA, minorA] = a.split('.').map(Number);
        const [majorB, minorB] = b.split('.').map(Number);

        if (majorA !== majorB) {
            return majorB - majorA;
        } else {
            return minorB - minorA;
        }
    });

    return sortedVersions[0];
}