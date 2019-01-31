class RaindropConverter {

    String convert(int number) {
        String factorString = "";

        if (number % 3 == 0) {
          factorString =  "Pling";
        }

        if (number % 5 == 0) {
            factorString += "Plang";
        }

        if (number % 7 == 0) {
            factorString += "Plong";
        }

        if (factorString == "") {
            factorString = Integer.toString(number);
        }

        return factorString;
    }

}
