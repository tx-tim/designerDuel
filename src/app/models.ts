
export class Answer {
    text: string;
    score: number;
}

export class Round {
    id: number;
    question: string;
    imageUrl: string;
    answers: Answer[]
}
const imageUrlPrefix = "../assets/images/rounds/";

export const ROUNDS: Round[] = [
    {
        id: 0,
        question: "What usability heuristics are represented by this image? (google's upload to to drive mobile app)",
        imageUrl: imageUrlPrefix + "1.4.3.upload-file.png",
        answers: [
            {
                text: "Visibility of System Status",
                score: 0
            },
            {
                text: "Consistency and Standards",
                score: 0
            },
            {
                text: "User Control and Freedom",
                score: 0
            }
        ]
    },
    {
        id: 1,
        question: "For which usability heuristics is this a counterexample?",
        imageUrl: imageUrlPrefix + "5.unfortunatelystopped.counterex.png",
        answers: [
            {
                text: "Help users recover from errors",
                score: 0
            }
        ]
    },
    {
        id: 2,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "1.shazam-applwatch.gif",
        answers: [
            {
                text: "Visibility of System Status",
                score: 0
            },
            {
                text: "Aesthetic and Minimalist Design",
                score: 0
            }
        ]
    },
    {
        id: 3,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "7.1.4.googleimages.png",
        answers: [
            {
                text: "Flexibility and Efficiency of Use",
                score: 0
            },
            {
                text: "Visibility of System Status",
                score: 0
            },
            {
                text: "Consistency and Standards",
                score: 0
            }
        ]
    },
    {
        id: 4,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "4.fbli.jpeg",
        answers: [
            {
                text: "Consistency and Standards",
                score: 0
            }
        ]
    },
    {
        id: 4,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "2.wording.png",
        answers: [
            {
                text: "Match Between System and the Real World",
                score: 0
            }
        ]
    },
];
