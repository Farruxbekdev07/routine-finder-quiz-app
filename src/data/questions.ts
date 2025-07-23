import type { QuestionProps } from "../types/question";

export const QUESTIONS_MOCK_DATA: QuestionProps[] = [
  {
    id: 1,
    question: "What's your hair type or texture?",
    options: ["Straight", "Curly", "Wavy", "Fine"],
  },
  {
    id: 2,
    question: "How often do you wash your hair?",
    options: [
      "Daily",
      "Every other day",
      "Twice a week",
      "Once a week",
      "Once every two weeks",
    ],
  },
  {
    id: 3,
    question: "What benefit do you look for in your hair products?",
    options: [
      "Anti-breakage",
      "Hydration",
      "Soothing dry scalp",
      "Repairs the appearance of damaged hair",
      "Volume",
      "Curl and coil enhancing",
    ],
  },
  {
    id: 4,
    question: "Is there anything troubling you about your hair?",
    options: ["Breakage", "Frizz", "Scalp dryness", "Damage", "Tangling"],
  },
  {
    id: 5,
    question: "What is your natural hair color(s) today?",
    options: ["Black", "Brown", "Blonde", "Red/Orange", "Silver/Grey"],
  },
];
