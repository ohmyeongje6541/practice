package a.basic;

public class Practice {
    public static void main(String[] args) {
        // 정수를 입력받아 홀수인지 짝수인지 판별하세요.
        int num = 17;

        if (num % 2 == 0) {
            System.out.println("17은 짝수입니다");
        } else {
            System.out.println("17은 홀수입니다");
        }

        // 점수를 입력받아 학점을 출력하세요.
        int score = 85;

        if(score >= 90) {
            System.out.println("A");
        } else if(score >=80) {
            System.out.println("B");
        } else if(score >=70) {
            System.out.println("C");
        } else if (score >= 60) {
            System.out.println("D");
        } else {
            System.out.println("F");
        }

        //연도를 입력받아 윤년인지 판별하세요.
        int year = 2024;

        if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            System.out.println("2024년은 윤년입니다");
        } else {
            System.out.println("2024년은 윤년이 아닙니다");
        }

        // 세 변의 길이를 입력받아 삼각형을 만들 수 있는지 검사하세요.
        int a = 3, b = 4, c = 5;

        if (a > 0 && b > 0 && c > 0 && (c < a + b)) {
            System.out.println("삼각형을 만들 수 있습니다");
        } else  {
            System.out.println("삼각형을 만들 수 없습니다");
        }

        //월을 입력받아 계절을 출력하세요. switch 문을 사용하세요.
        int month = 7;

        String season = switch (month) {
            case 3, 4, 5 -> "봄";
            case 6, 7, 8 -> "여름";
            case 9, 10, 11 -> "가을";
            case 12, 1, 2 -> "겨울";
            default -> "잘못된 월";
        };
        System.out.println(month + "월은" + season + "입니다.");

        //요일 번호를 입력받아 평일/주말을 구분하세요. 향상된 switch 문을 사용하세요.
        int day = 6;

        String days = switch (day) {
            case 1 -> "월요일";
            case 2 -> "화요일";
            case 3 -> "수요일";
            case 4 -> "목요일";
            case 5 -> "금요일";
            case 6 -> "토요일";
            case 7 -> "일요일";
            default -> "잘못된 요일입니다";
        };
        System.out.println(day + ":" + days + "은 주말입니다");

        // 키(cm)와 몸무게(kg)를 입력받아 BMI를 계산하고 판정하세요.
        double height = 175.0;  // cm
        double weight = 70.0;   // kg

        double heightMeter = height / 100;
        double BMI = weight / (heightMeter * heightMeter);

        System.out.printf("BMI: " + BMI);
        if (BMI < 18.5) {
            System.out.println("저체중");
        } else if (BMI >= 18.5 && BMI < 23) {
            System.out.println("정상 체중입니다");
        } else if (BMI >= 23 && BMI < 25) {
            System.out.println("과체중");
        } else {
            System.out.println("비만");
        }
        // 세 개의 정수 중 최댓값을 구하세요. if 문을 사용하세요.
        int a1 = 10, b1 = 25, c1 = 17;

        if (a1 > b1 && a1 > c1) {
            System.out.println("최댓값:" + a1);
        } else if (b1 > a1 && b1 > c1) {
            System.out.println("최댓값:" + b1);
        } else {
            System.out.println("최댓값:" + c1);
        }

        // 세 과목의 점수를 입력받아 합격 여부를 판단하세요.
        int math = 70, english = 80, science = 45;

        double average = (math + english + science) / 3;

        if (average >= 60 && math >= 40 && english >= 40 && science >= 40) {
            System.out.println("합격");
        } else {
            System.out.println("불합격 (과목 낙제)");
        }

        int price = 120000;
        boolean isMember = true;

        double disCount = 0;

        if (price >= 100000) {
            disCount = 0.1;
        } else if (price >= 50000) {
            disCount = 0.05;
        } else  {
            disCount = 0;
        }

        if (isMember) {
            disCount += 0.05;
        }

        int finalPrice = (int)(price * (1-disCount));

        System.out.println("원가: " + price + "원");
        System.out.println("할인율: " + (int)(disCount * 100) + "%");
        System.out.println("최종 금액: " + finalPrice + "원");
    }
}
