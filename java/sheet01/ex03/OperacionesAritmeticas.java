import java.util.Scanner;


public class OperacionesAritmeticas{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Introduce el primer numero: ");
        int a = scanner.nextInt();
        System.out.println("introduce el segundo numero: ");
        int b = scanner.nextInt();
        int suma = a+b;
        int resta = a-b;
        int multi = a*b;
        double divi = (double) a/b;
        System.out.println("La suma es: " + suma);
        System.out.println("La resta es: " + resta);
        System.out.println("La multiplicacion es: " + multi);    
        System.out.println("La división es: " + divi);
    }
}