import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Anagram {
    String word;
    char[] lettersAlphabetized;

    Anagram(String word) {
        this.word = word.toLowerCase();
        char[] chars = this.word.toCharArray();
        Arrays.sort(chars);
        this.lettersAlphabetized = chars;
    }

    boolean isAnagram(String candidate) {
        String lowerCaseCandidate = candidate.toLowerCase();
        if (this.word.equals(lowerCaseCandidate)) {
            return false;
        }
        char[] candidateChars = lowerCaseCandidate.toCharArray();
        Arrays.sort(candidateChars);

        return Arrays.equals(candidateChars, this.lettersAlphabetized);
    }

    List<String> match(List<String> candidates){
        List<String> anagrams = new ArrayList<>();
        for (String candidate: candidates) {
            if (isAnagram(candidate)) {
                anagrams.add(candidate);
            }
        }
        return anagrams;
    }
}
