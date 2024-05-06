function getGrade(score) {
    if (score === 100) {
      return 'A+';
    } else if (score >= 90) {
      return 'A';
    } else if (score === 89) {
      return 'B+';
    } else if (score >= 80) {
      return 'B';
    } else if (score === 79) {
      return 'C+';
    } else if (score >= 70) {
      return 'C';
    } else if (score === 69) {
      return 'D+';
    } else if (score >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  
  const grade = getGrade(90);
  console.log(grade);
  grade 가 90 일 때에는 결과가 A