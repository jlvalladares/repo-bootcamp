

public class Exceptions {
    public static void main(String[] args){
        try{
            int resultado = divide(10,2);
            System.out.println("Resultado de divirir 10/2: " + resultado);
            resultado = divide(10,0);
            System.out.println("Resultado de divirir 10/0: " + resultado);
        }catch (ArithmeticException e){
            System.out.println("Error: " + e.getMessage());
        }
    }
    

    public static int divide(int numerador, int denominador) throws ArithmeticException{
        if (denominador == 0){
            throw new ArithmeticException("Division por cero");
        }
        return numerador/denominador;
    }
    
}