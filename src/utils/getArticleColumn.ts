export const getArticleColumn = (column: string): string => {
  switch (column) {
    case "option1":
      return "Saúde";
    case "option2":
      return "Educação";
    case "option3":
      return "Cultura e Sociedade";
    case "option4":
      return "Diversidade e Inclusão";
    default:
      return ""; // Default to 1 column if no match
  }
};
