class ReverseString {

    String reverse(String inputString) {
      char[] chars = inputString.toCharArray();
      int inputLength = inputString.length();
      int midPoint = inputLength / 2;

      for (int i = 0; i < midPoint; i++) {
          char currentChar = chars[i];
          char fromOppositeEnd = chars[inputLength - 1 - i];
          // swap the values for each pair of chars at equivalent distances from the beginning and end
          chars[i] = fromOppositeEnd;
          chars[inputLength - 1 - i] = currentChar;
      }

      return new String(chars);
    }
}
