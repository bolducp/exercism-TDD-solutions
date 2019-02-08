import java.time.LocalDate;
import java.time.LocalDateTime;

class Gigasecond {
    private LocalDateTime birthDateTime;
    static final int GIGASECOND = 1_000_000_000;

    Gigasecond(LocalDateTime birthDateTime) {
      this.birthDateTime = birthDateTime;
    }

    Gigasecond(LocalDate birthDate) {
      this(birthDate.atStartOfDay());
    }

    LocalDateTime getDateTime() {
      return this.birthDateTime.plusSeconds(GIGASECOND);
    }
}
