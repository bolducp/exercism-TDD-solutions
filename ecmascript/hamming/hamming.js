class Hamming {
    constructor() {}

    compute(firstSequence, secondSequence) {
        let differenceCount = 0;

        if (firstSequence.length !== secondSequence.length) {
            throw new Error ("DNA strands must be of equal length.");
        }

        for (var i = 0; i < firstSequence.length; i++) {
            if (firstSequence[i] !== secondSequence[i]) {
                differenceCount += 1;
            }
        }
        return differenceCount;
    }
}

export default Hamming;