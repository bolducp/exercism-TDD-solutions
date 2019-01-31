import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class IsogramChecker {

    boolean isIsogram(String phrase) {
        String[] chars = phrase.replaceAll("\\s+|\\p{Punct}", "").toLowerCase().split("");
        Set<String> charSet = new HashSet<>(Arrays.asList(chars));
        return chars.length == charSet.size();
    }

}
