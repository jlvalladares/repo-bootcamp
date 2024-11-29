import java.util.Scanner;
public class Saludo{
    public static void main (String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("¿Como te llamas?: ");
        String nombre = scanner.nextLine();
        System.out.println("¿Y tu género? (hombre, mujer, otro):");
        String genero = scanner.nextLine().toLowerCase();
        String saludo;
        switch (genero){
            case "hombre":
                 saludo = "¡Hola, señor " + nombre + "! Es un placer saludarte.";
                break;
            case "mujer":
                saludo = "¡Hola, señora " + nombre + "! Es un placer saludarte.";
                break;
            default:
                saludo = "¡Hola, " + nombre + "! Es un placer saludarte, saludorto o lo que sea.";
                break;
        }
    System.out.println(saludo);
    }
}