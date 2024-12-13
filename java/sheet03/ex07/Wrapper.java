public class Wrapper{
    public static void main(String[] args){
        String cadena = "123";
        String nuevaCadena = cadena.replaceAll(" ", "");
        int numero = Integer.parseInt(nuevaCadena);
        System.out.println("El resultado es de multipicar " + cadena + " por 2 : " + numero*2);
    }
}