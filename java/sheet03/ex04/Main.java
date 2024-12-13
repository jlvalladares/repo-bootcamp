import java.util.HashMap;
 public class Main{
    public static void main(String[] args){
        HashMap <String,Integer> edadPersonas = new HashMap<>();
        edadPersonas.put("Juan",30);
        edadPersonas.put("Ana",25);
        edadPersonas.put("Luis",35);
        for (String persona : edadPersonas.keySet()){
        System.out.println(persona +" tiene "+ edadPersonas.get(persona) + " años.");
    } 
    }
 }