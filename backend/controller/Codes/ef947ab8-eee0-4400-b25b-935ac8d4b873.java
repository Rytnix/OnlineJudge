import java.util.Scanner;

public class ArraySum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int size = scanner.nextInt();

        int[] array = new int[size];

        // Inputting the array elements
        for (int i = 0; i < size; i++) {
            array[i] = scanner.nextInt();
        }

        int sum = 0;

        // Calculating the sum of array elements
        for (int i = 0; i < size; i++) {
            sum += array[i];
        }

        System.out.println( sum);

        scanner.close();
    }
}
