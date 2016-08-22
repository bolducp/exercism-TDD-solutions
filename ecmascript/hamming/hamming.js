class Hamming {
    constructor() {}

    compute(firstSequence, secondSequence) {
        if (firstSequence.length !== secondSequence.length) {
            throw new Error ("DNA strands must be of equal length.");
        }
    
        let differenceCount = 0;
        let firstSequenceArray = firstSequence.split("");
        
        firstSequenceArray.forEach((char, index) => {
            if (char !== secondSequence[index]) {
                differenceCount += 1;
            }
        });
        return differenceCount;
    }
}

export default Hamming;