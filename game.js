// Array of Java challenges
const challenges = [
    {
      question: "Write a Java program to print 'Hello, World!'",
      answer: "public class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println(\"Hello, World!\");\n\t}\n}"
    },
    {
      question: "Write a Java program to find the sum of two numbers.",
      answer: "public class Main {\n\tpublic static void main(String[] args) {\n\t\tint num1 = 5, num2 = 10, sum;\n\t\tsum = num1 + num2;\n\t\tSystem.out.println(\"Sum = \" + sum);\n\t}\n}"
    },
    {
      question: "Write a Java program to check if a number is even or odd.",
      answer: "public class Main {\n\tpublic static void main(String[] args) {\n\t\tint num = 5;\n\t\tif(num % 2 == 0)\n\t\t\tSystem.out.println(\"Even\");\n\t\telse\n\t\t\tSystem.out.println(\"Odd\");\n\t}\n}"
    },
    {
      question: "Write a Java program to reverse a string.",
      answer: "public class Main {\n\tpublic static void main(String[] args) {\n\t\tString str = \"hello\";\n\t\tString reversed = \"\";\n\t\tfor(int i = str.length() - 1; i >= 0; i--) {\n\t\t\treversed += str.charAt(i);\n\t\t}\n\t\tSystem.out.println(reversed);\n\t}\n}"
    },
    {
      question: "Write a Java program to check if a string is palindrome or not.",
      answer: "public class Main {\n\tpublic static void main(String[] args) {\n\t\tString str = \"madam\";\n\t\tboolean isPalindrome = true;\n\t\tfor(int i = 0; i < str.length() / 2; i++) {\n\t\t\tif(str.charAt(i) != str.charAt(str.length() - 1 - i)) {\n\t\t\t\tisPalindrome = false;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\t\tSystem.out.println(isPalindrome ? \"Palindrome\" : \"Not Palindrome\");\n\t}\n}"
    }
    // Add more challenges here
  ];
  
  // Function to shuffle an array using Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  // Shuffle the challenges array before starting the game
  shuffleArray(challenges);
  
  let score = 0;
  let currentChallengeIndex = -1;
  
  function displayNextChallenge() {
    currentChallengeIndex++;
    if (currentChallengeIndex < challenges.length) {
      const challenge = challenges[currentChallengeIndex];
      document.getElementById("challenge").textContent = challenge.question;
      document.getElementById("editor").value = ''; // Clear previous answer
    } else {
      endGame();
    }
  }
  
  function checkCode() {
    const userCode = document.getElementById("editor").value.trim();
    const correctAnswer = challenges[currentChallengeIndex].answer.trim();
  
    if (userCode === correctAnswer) {
      score++;
    }
  
    displayNextChallenge();
  }
  
  function endGame() {
    localStorage.setItem("score", score);
    window.location.href = "score.html";
  }
  
  window.onload = function() {
    displayNextChallenge();
  };
  