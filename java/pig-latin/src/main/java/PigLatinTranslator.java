import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class PigLatinTranslator {

    String firstChar(String str) {
        return str.length() < 1 ? str : str.substring(0, 1);
    }

    String firstTwoChars(String str) {
        return str.length() < 2 ? str : str.substring(0, 2);
    }

    boolean containsValue(String value, String[] arr) {
        return Arrays.asList(arr).contains(value);
    }

    String handleConstanants(String input) {
        Pattern pattern = Pattern.compile("[b-df-hj-np-tv-xz]*");
        Matcher constanantMatcher = pattern.matcher(input);
        constanantMatcher.find();

        if (input.substring(0, constanantMatcher.end() + 1).contains("qu")) {
            return input.substring(constanantMatcher.end() + 1) + constanantMatcher.group(0) + "uay";
        }
        return input.substring(constanantMatcher.end()) + constanantMatcher.group(0) + "ay";
    }
    
    String translateSentence(String sentence) {
        String[] words = sentence.split("\\s+");
        String translatedString = "";

        for (String word : words) {
            translatedString += " " + translate(word);
        }

        return translatedString.trim();
    }
    
    String translate(String input) {
        if (input.contains(" ")) {
            return translateSentence(input);
        }

        String[] vowelSounds = {"a", "e", "i", "o", "u", "xr", "xy", "yt"};

        String first = firstChar(input);
        String firstTwo = firstTwoChars(input);

        if (containsValue(first, vowelSounds) || containsValue(firstTwo, vowelSounds)) {
            return input + "ay";
        } else if (input.charAt(0) == 'y') {
            return input.substring(1) + "yay";
        } else if (input.length() == 2 && input.charAt(1) == 'y') {
            return "y" + input.substring(0, 1) + "ay";
        } else {
           return handleConstanants(input);
        }
    }
}
