public class Funciones {
    public static int sumar(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;

        int resultado = sumar(num1, num2);

        System.out.println("La suma de " + num1 + " y " + num2 + " es: " + resultado);
    }
}