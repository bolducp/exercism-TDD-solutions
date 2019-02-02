import java.util.Optional;

class Twofer {
    private static final String message = "One for %s, one for me.";

    String twofer(String name) {
        return String.format(message, Optional.ofNullable(name).filter(str -> !str.equals("")).orElse("you"));
    }
}
