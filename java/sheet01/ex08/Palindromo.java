import java.util.Scanner;

public class Palindromo {
        public static boolean esPalindromo(String cadena){
            cadena = cadena.toLowerCase().replaceAll("\\s+", "").replaceAll("[^a-zA-Z0-9]", "");
            StringBuilder cadenaInvertida = new StringBuilder(cadena).reverse();
            return cadena.equals(cadenaInvertida.toString());
        }
        public static void main(String[] agrs){
            Scanner scanner = new Scanner(System.in);
            System.out.print("Ingrese una cadena: ");
            String cadena = scanner.nextLine();
            if (esPalindromo(cadena)) {
                System.out.println("La cadena es un palíndromo.");
            } else {
                System.out.println("La cadena no es un palíndromo.");
            }
        }
}