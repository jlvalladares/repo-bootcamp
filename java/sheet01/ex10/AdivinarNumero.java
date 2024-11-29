import java.util.Random;
import java.util.Scanner;

public class AdivinarNumero {
    public static void main(String[] args) {
        Random random = new Random();

        int numeroAleatorio = random.nextInt(100) + 1; 
        Scanner scanner = new Scanner(System.in);
        int numeroIn;
        System.out.println("¡Bienvenido al juego de adivinar  número!");
        System.out.println("He generado un número entre 1 y 100.");

        do {
            System.out.print("Ingresa tu número: ");
            numeroIn = scanner.nextInt();

            if (numeroIn < numeroAleatorio) {
                System.out.println("¡Más!");
            } else if (numeroIn > numeroAleatorio) {
                System.out.println("¡Ménos!");
            }
        } while (numeroIn != numeroAleatorio);

        System.out.println("¡Felicidades! Lo que te ha costado adivinarlo ehhh!.");
    }
}