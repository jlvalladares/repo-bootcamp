import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.util.Scanner;

public class ValidacionEmail{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Intoduce un email: ");
        String email = scanner.nextLine();
        if (correoValido(email)){
            System.out.println("El correo electrónico introducido es válido.");
        }else{
            System.out.println("El correo electrónico introducido no es válido.");
        }
    }
    public static boolean correoValido(String correo){
        String regex = "^[\\w._%+-]+@[\\w.-]+\\.[a-zA-Z]{2,}$";
        Pattern patron = Pattern.compile(regex);
        Matcher match = patron.matcher(correo);
        return match.matches();
    }
}