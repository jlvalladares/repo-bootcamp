
import java.util.Scanner;

public class Condicionales {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
            System.out.println("Introduce un numero: ");
            int a = scanner.nextInt();
            if (a < 0){
                System.out.println("introducido es menor que 0");
            } else if( a > 0){
                System.out.println("introducido es mayor que 0");
            } else {
                System.out.println("introducido es 0");
            };
        }
    }


