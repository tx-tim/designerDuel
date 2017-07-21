
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
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "1.8.alexa-thinking.gif",
        answers: [
            {
                text: "Visibility of System Status",
                score: 3
            },
            {
                text: "Aesthetic and Minimalist Design",
                score: 1
            }
        ]
    },
    {
        id: 1,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "9.fruitful-input-masks.gif",
        answers: [
            {
                text: "Error Prevention",
                score: 4
            }
        ]
    },
    {
        id: 2,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "1.4.3.upload-file.png",
        answers: [
            {
                text: "Visibility of System Status",
                score: 3
            },
            {
                text: "Consistency and Standards",
                score: 2
            },
            {
                text: "User Control and Freedom",
                score: 1
            }
        ]
    },
    {
        id: 3,
        question: "For which usability heuristics is this a counterexample?",
        imageUrl: imageUrlPrefix + "5.unfortunatelystopped.counterex.png",
        answers: [
            {
                text: "Error Prevention",
                score: 3
            },
            {
                text: "Visibility of System Status",
                score: 1
            }
        ]
    },
    {
        id: 4,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "5.gmail-attachment.jpg",
        answers: [
            {
                text: "Help users recognize, diagnose, and recover from errors",
                score: 4
            },
            {
                text: "Error Prevention",
                score: 3
            }
        ]
    },
    {
        id: 5,
        question: "For which usability heuristics is this a counterexample?",
        imageUrl: imageUrlPrefix + "6.1.input-placeholder.counterex.gif",
        answers: [
            {
                text: "Recognition Rather than Recall",
                score: 4
            },
            {
                text: "Visibility of System Status",
                score: 3
            },
            {
                text: "Consistency and Standards",
                score: 1
            }
        ]
    },
    {
        id: 6,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "1.shazam-applwatch.gif",
        answers: [
            {
                text: "Visibility of System Status",
                score: 4
            },
            {
                text: "Aesthetic and Minimalist Design",
                score: 3
            }
        ]
    },
    {
        id: 7,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "3.8.unsend-gmail.jpg",
        answers: [
            {
                text: "User Control and Freedom",
                score: 4
            },
            {
                text: "Help users recognize, diagnose, and recover from errors",
                score: 3
            },

        ]
    },
    {
        id: 8,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "7.1.4.googleimages.png",
        answers: [
            {
                text: "Flexibility and Efficiency of Use",
                score: 4
            },
            {
                text: "Visibility of System Status",
                score: 3
            },
            {
                text: "Consistency and Standards",
                score: 2
            }
        ]
    },
    {
        id: 9,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "6.8.thingsDesignersSay.png",
        answers: [
            {
                text: "Recognition Rather that Recall",
                score: 4
            }
        ]
    },
    {
        id: 10,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "4.fbli.jpeg",
        answers: [
            {
                text: "Consistency and Standards",
                score: 4
            }
        ]
    },
    {
        id: 11,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "7.sketchkbs.png",
        answers: [
            {
                text: "Flexibility and Efficiency of Use",
                score: 4
            }
        ]
    },
    {
        id: 12,
        question: "For which usability heuristics is this a counterexample?",
        imageUrl: imageUrlPrefix + "4.mobileispect.counterex.png",
        answers: [
            {
                text: "Consistency and Standards",
                score: 3
            }
        ]
    },
    {
        id: 13,
        question: "What usability heuristics are represented by this image?",
        imageUrl: imageUrlPrefix + "2.wording.png",
        answers: [
            {
                text: "Match Between System and the Real World",
                score: 4
            }
        ]
    }
];
