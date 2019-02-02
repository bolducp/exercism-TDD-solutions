import java.util.Objects;
import java.util.Optional;

class Twofer {
    String twofer(String name) {
      Optional<String> optionalName = Optional.ofNullable(name);
      String parsedName = optionalName.orElse("you");

      return String.format("One for %s, one for me.", parsedName == "" ? "you" : parsedName);
    }
}
