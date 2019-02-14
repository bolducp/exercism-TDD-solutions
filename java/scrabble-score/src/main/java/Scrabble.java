import java.util.HashMap;

class Scrabble {
    private final String word;
    private static final HashMap<String, Integer> letterValues = new HashMap<>();

    Scrabble(String word) {
        this.word = word.toUpperCase();
        initializeLetterValuesMap();
    }

    int getScore() {
        if (word == "") return 0;

        String[] letters = this.word.split("");
        int sum = 0;
        for (String letter: letters) {
            sum += letterValues.get(letter);
        }
        return sum;
    }

    private void initializeLetterValuesMap() {
        insertLetterValues("AEIOULNRST", 1);
        insertLetterValues("DG", 2);
        insertLetterValues("BCMP", 3);
        insertLetterValues("FHVWY", 4);
        insertLetterValues("K", 5);
        insertLetterValues("JX", 8);
        insertLetterValues("QZ", 10);
    }

    private void insertLetterValues(String lettersString, Integer value) {
        String[] letters = lettersString.split("");
        for (String letter : letters) {
            letterValues.put(letter, value);
        }
    }
}
