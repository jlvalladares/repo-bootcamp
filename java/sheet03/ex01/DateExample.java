import java.text.SimpleDateFormat;
import java.util.Date;
import java.time.LocalDateTime;
public class DateExample{
    public static void main(String[] args){
        SimpleDateFormat formato1 = new SimpleDateFormat("dd/MM/yyyy");
        SimpleDateFormat formato2 = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
        SimpleDateFormat formato3 = new SimpleDateFormat("EEE, MMM dd yyyy");
        Date fecha = new Date();
        String diaFormateado = formato1.format(fecha);
        String diaFormateado2 = formato2.format(fecha);
        String diaFormateado3 = formato3.format(fecha);
        System.out.println("Formato 1: " + diaFormateado);
        System.out.println("Formato 2: " + diaFormateado2);
        System.out.println("Formato 3: " + diaFormateado3);
        
    }
}