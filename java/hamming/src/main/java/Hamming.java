class Hamming {
    char[] leftStrandChars;
    char[] rightStrandChars;

    Hamming(String leftStrand, String rightStrand) {
        if (leftStrand.length() != rightStrand.length()) {
          throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
        }
        this.leftStrandChars = leftStrand.toCharArray();
        this.rightStrandChars = rightStrand.toCharArray();
    }

    int getHammingDistance() {
      int hammingDistance = 0;

      for (int i = 0; i < this.leftStrandChars.length; i++) {
        if (this.leftStrandChars[i] != this.rightStrandChars[i]) {
          hammingDistance += 1;
        }
      }
      return hammingDistance;
    }
}
