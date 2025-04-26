const quotes = [
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do.",
    "Mistakes are proof that you are trying.",
    "Push yourself, because no one else is going to do it for you.",
    "Dream big and dare to fail.",
    "You are capable of amazing things.",
    "Every accomplishment starts with the decision to try."
];

function setRandomQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteDiv = document.querySelector('.motivational-quote');
    if (quoteDiv) quoteDiv.textContent = quote;
}

const topics = [
    "Real Numbers",
    "Polynomials",
    "Pair of Linear Equations in Two Variables",
    "Quadratic Equations",
    "Arithmetic Progressions",
    "Triangles",
    "Coordinate Geometry",
    "Introduction to Trigonometry",
    "Some Applications of Trigonometry",
    "Circles",
    "Areas Related to Circles",
    "Surface Areas and Volumes",
    "Statistics",
    "Probability"
];

const mcqs = {
    "Real Numbers": [
        { question: "What is the HCF of 12 and 15?", options: ["3", "4", "5", "6"], answer: "3" },
        { question: "What is the LCM of 4 and 5?", options: ["10", "15", "20", "25"], answer: "20" },
        { question: "Which of the following is an irrational number?", options: ["√2", "3", "4", "5"], answer: "√2" },
        { question: "What is the decimal expansion of 1/3?", options: ["0.333...", "0.25", "0.5", "0.75"], answer: "0.333..." },
        { question: "What is the prime factorization of 60?", options: ["2×2×3×5", "2×3×5", "2×2×5", "3×3×5"], answer: "2×2×3×5" },
        { question: "What is the HCF of 18 and 24?", options: ["6", "8", "12", "18"], answer: "6" },
        { question: "What is the LCM of 6 and 8?", options: ["12", "18", "24", "36"], answer: "24" },
        { question: "Which of the following is a terminating decimal?", options: ["1/3", "1/4", "1/6", "1/7"], answer: "1/4" },
        { question: "What is the square root of 49?", options: ["6", "7", "8", "9"], answer: "7" },
        { question: "What is the cube root of 27?", options: ["2", "3", "4", "5"], answer: "3" }
    ],
    "Polynomials": [
        { question: "What is the degree of the polynomial x^3 + 2x^2 + x?", options: ["1", "2", "3", "4"], answer: "3" },
        { question: "What is the value of the polynomial x^2 - 3x + 2 at x=1?", options: ["0", "1", "2", "3"], answer: "0" },
        { question: "Which of the following is a quadratic polynomial?", options: ["x^2 + 2x + 1", "x + 1", "x^3 + x", "x^4 + 1"], answer: "x^2 + 2x + 1" },
        { question: "What is the sum of the roots of x^2 - 5x + 6?", options: ["2", "3", "5", "6"], answer: "5" },
        { question: "What is the product of the roots of x^2 - 5x + 6?", options: ["2", "3", "5", "6"], answer: "6" },
        { question: "What is the remainder when x^3 - 3x^2 + 4 is divided by x-1?", options: ["0", "1", "2", "3"], answer: "2" },
        { question: "What is the factorization of x^2 - 4?", options: ["(x-2)(x+2)", "(x-4)(x+4)", "(x-1)(x+1)", "(x-3)(x+3)"], answer: "(x-2)(x+2)" },
        { question: "What is the degree of the zero polynomial?", options: ["0", "1", "Undefined", "2"], answer: "Undefined" },
        { question: "What is the value of x in x^2 - 4x + 4 = 0?", options: ["2", "4", "0", "1"], answer: "2" },
        { question: "What is the coefficient of x^2 in 3x^2 + 2x + 1?", options: ["1", "2", "3", "4"], answer: "3" }
    ],
    "Pair of Linear Equations in Two Variables": [
        { question: "What is the solution of x + y = 5 and x - y = 1?", options: ["x=3, y=2", "x=2, y=3", "x=1, y=4", "x=4, y=1"], answer: "x=3, y=2" },
        { question: "Which method is used to solve linear equations graphically?", options: ["Substitution", "Elimination", "Graphical", "Cross-multiplication"], answer: "Graphical" },
        { question: "What is the condition for two lines to be parallel?", options: ["a1/a2 = b1/b2", "a1/a2 ≠ b1/b2", "a1/a2 = b1/b2 = c1/c2", "None of these"], answer: "a1/a2 = b1/b2" },
        { question: "What is the condition for two lines to be coincident?", options: ["a1/a2 = b1/b2 = c1/c2", "a1/a2 ≠ b1/b2", "a1/a2 = b1/b2", "None of these"], answer: "a1/a2 = b1/b2 = c1/c2" },
        { question: "What is the solution of x - y = 2 and x + y = 4?", options: ["x=3, y=1", "x=2, y=2", "x=4, y=0", "x=1, y=3"], answer: "x=3, y=1" },
        { question: "Which method eliminates one variable by adding or subtracting equations?", options: ["Substitution", "Elimination", "Graphical", "Cross-multiplication"], answer: "Elimination" },
        { question: "What is the solution of 2x + 3y = 12 and x - y = 3?", options: ["x=3, y=2", "x=2, y=3", "x=4, y=1", "x=1, y=4"], answer: "x=3, y=2" },
        { question: "What is the condition for two lines to intersect?", options: ["a1/a2 ≠ b1/b2", "a1/a2 = b1/b2", "a1/a2 = b1/b2 = c1/c2", "None of these"], answer: "a1/a2 ≠ b1/b2" },
        { question: "What is the solution of x + 2y = 7 and 2x - y = 4?", options: ["x=3, y=2", "x=2, y=3", "x=1, y=4", "x=4, y=1"], answer: "x=3, y=2" },
        { question: "Which method substitutes the value of one variable into another equation?", options: ["Substitution", "Elimination", "Graphical", "Cross-multiplication"], answer: "Substitution" }
    ],
    "Quadratic Equations": [
        { question: "What is the sum of the roots of x^2 - 5x + 6 = 0?", options: ["5", "6", "7", "8"], answer: "5" },
        { question: "What is the product of the roots of x^2 - 5x + 6 = 0?", options: ["5", "6", "7", "8"], answer: "6" },
        { question: "What is the discriminant of x^2 - 4x + 4 = 0?", options: ["0", "4", "8", "16"], answer: "0" },
        { question: "What is the nature of roots if the discriminant is negative?", options: ["Real and equal", "Real and distinct", "Imaginary", "None"], answer: "Imaginary" },
        { question: "What is the quadratic formula?", options: ["(-b ± √(b^2 - 4ac)) / 2a", "(b ± √(b^2 - 4ac)) / 2a", "(-b ± √(b^2 + 4ac)) / 2a", "None"], answer: "(-b ± √(b^2 - 4ac)) / 2a" },
        { question: "What is the value of x in x^2 - 9 = 0?", options: ["3", "-3", "±3", "None"], answer: "±3" },
        { question: "What is the value of x in x^2 + 4x + 4 = 0?", options: ["-2", "2", "±2", "None"], answer: "-2" },
        { question: "What is the value of x in x^2 - 2x - 8 = 0?", options: ["4", "-4", "±4", "None"], answer: "4" },
        { question: "What is the value of x in x^2 + 6x + 9 = 0?", options: ["-3", "3", "±3", "None"], answer: "-3" },
        { question: "What is the value of x in x^2 - 16 = 0?", options: ["4", "-4", "±4", "None"], answer: "±4" }
    ],
    "Arithmetic Progressions": [
        { question: "What is the nth term of the AP 2, 4, 6, 8...?", options: ["2n", "n+2", "n-2", "n/2"], answer: "2n" },
        { question: "What is the sum of the first n terms of the AP 1, 2, 3, 4...?", options: ["n(n+1)/2", "n(n-1)/2", "n^2", "None"], answer: "n(n+1)/2" },
        { question: "What is the common difference of the AP 3, 6, 9, 12...?", options: ["3", "6", "9", "12"], answer: "3" },
        { question: "What is the first term of the AP 5, 10, 15, 20...?", options: ["5", "10", "15", "20"], answer: "5" },
        { question: "What is the 10th term of the AP 1, 3, 5, 7...?", options: ["19", "20", "21", "22"], answer: "19" },
        { question: "What is the sum of the first 5 terms of the AP 2, 4, 6, 8...?", options: ["20", "25", "30", "35"], answer: "30" },
        { question: "What is the common difference of the AP 7, 14, 21, 28...?", options: ["7", "14", "21", "28"], answer: "7" },
        { question: "What is the 15th term of the AP 1, 2, 3, 4...?", options: ["15", "16", "17", "18"], answer: "15" },
        { question: "What is the sum of the first 10 terms of the AP 1, 2, 3, 4...?", options: ["55", "60", "65", "70"], answer: "55" },
        { question: "What is the nth term of the AP 5, 10, 15, 20...?", options: ["5n", "n+5", "n-5", "n/5"], answer: "5n" }
    ],
    "Triangles": [
        { question: "What is the Pythagoras theorem?", options: ["a^2 + b^2 = c^2", "a^2 - b^2 = c^2", "a^2 + b = c^2", "a + b^2 = c^2"], answer: "a^2 + b^2 = c^2" },
        { question: "What is the sum of angles in a triangle?", options: ["180°", "90°", "360°", "None"], answer: "180°" },
        { question: "What is the area of a triangle with base b and height h?", options: ["1/2 × b × h", "b × h", "1/3 × b × h", "None"], answer: "1/2 × b × h" },
        { question: "What is the hypotenuse in a right triangle?", options: ["The longest side", "The shortest side", "Any side", "None"], answer: "The longest side" },
        { question: "What is the perimeter of a triangle with sides a, b, and c?", options: ["a + b + c", "a × b × c", "a^2 + b^2 + c^2", "None"], answer: "a + b + c" },
        { question: "What is the type of triangle with all sides equal?", options: ["Equilateral", "Isosceles", "Scalene", "None"], answer: "Equilateral" },
        { question: "What is the type of triangle with two sides equal?", options: ["Equilateral", "Isosceles", "Scalene", "None"], answer: "Isosceles" },
        { question: "What is the type of triangle with all sides different?", options: ["Equilateral", "Isosceles", "Scalene", "None"], answer: "Scalene" },
        { question: "What is the type of triangle with one angle 90°?", options: ["Right-angled", "Acute-angled", "Obtuse-angled", "None"], answer: "Right-angled" },
        { question: "What is the type of triangle with all angles less than 90°?", options: ["Acute-angled", "Right-angled", "Obtuse-angled", "None"], answer: "Acute-angled" }
    ],
    "Coordinate Geometry": [
        { question: "What is the distance formula?", options: ["√((x2-x1)^2 + (y2-y1)^2)", "(x2-x1) + (y2-y1)", "(x2+x1)^2 + (y2+y1)^2", "None of these"], answer: "√((x2-x1)^2 + (y2-y1)^2)" },
        { question: "What is the midpoint formula?", options: ["((x1+x2)/2, (y1+y2)/2)", "(x1+x2, y1+y2)", "((x1-x2)/2, (y1-y2)/2)", "None"], answer: "((x1+x2)/2, (y1+y2)/2)" },
        { question: "What is the slope of a line?", options: ["(y2-y1)/(x2-x1)", "(x2-x1)/(y2-y1)", "(x1+x2)/(y1+y2)", "None"], answer: "(y2-y1)/(x2-x1)" },
        { question: "What is the equation of a line in slope-intercept form?", options: ["y = mx + c", "x = my + c", "y = mx - c", "None"], answer: "y = mx + c" },
        { question: "What is the area of a triangle with vertices (x1, y1), (x2, y2), (x3, y3)?", options: ["1/2 × |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|", "|x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|", "1/3 × |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|", "None"], answer: "1/2 × |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|" },
        { question: "What is the equation of a line passing through (x1, y1) and (x2, y2)?", options: ["(y-y1) = m(x-x1)", "(x-x1) = m(y-y1)", "(y-y1) = m(x+x1)", "None"], answer: "(y-y1) = m(x-x1)" },
        { question: "What is the centroid of a triangle with vertices (x1, y1), (x2, y2), (x3, y3)?", options: ["((x1+x2+x3)/3, (y1+y2+y3)/3)", "((x1+x2)/2, (y1+y2)/2)", "((x1+x2+x3)/2, (y1+y2+y3)/2)", "None"], answer: "((x1+x2+x3)/3, (y1+y2+y3)/3)" },
        { question: "What is the length of the diagonal of a rectangle with length l and breadth b?", options: ["√(l^2 + b^2)", "l + b", "l × b", "None"], answer: "√(l^2 + b^2)" },
        { question: "What is the equation of a circle with center (h, k) and radius r?", options: ["(x-h)^2 + (y-k)^2 = r^2", "(x+h)^2 + (y+k)^2 = r^2", "(x-h)^2 - (y-k)^2 = r^2", "None"], answer: "(x-h)^2 + (y-k)^2 = r^2" },
        { question: "What is the equation of a parabola with vertex (h, k)?", options: ["(x-h)^2 = 4a(y-k)", "(y-k)^2 = 4a(x-h)", "(x-h)^2 + (y-k)^2 = r^2", "None"], answer: "(x-h)^2 = 4a(y-k)" }
    ],
    "Introduction to Trigonometry": [
        { question: "What is sin(90°)?", options: ["0", "1", "-1", "Undefined"], answer: "1" },
        { question: "What is cos(0°)?", options: ["0", "1", "-1", "Undefined"], answer: "1" },
        { question: "What is tan(45°)?", options: ["0", "1", "-1", "Undefined"], answer: "1" },
        { question: "What is sin(0°)?", options: ["0", "1", "-1", "Undefined"], answer: "0" },
        { question: "What is cos(90°)?", options: ["0", "1", "-1", "Undefined"], answer: "0" },
        { question: "What is tan(0°)?", options: ["0", "1", "-1", "Undefined"], answer: "0" },
        { question: "What is sin(30°)?", options: ["1/2", "√3/2", "1", "0"], answer: "1/2" },
        { question: "What is cos(30°)?", options: ["√3/2", "1/2", "1", "0"], answer: "√3/2" },
        { question: "What is tan(30°)?", options: ["1/√3", "√3", "1", "0"], answer: "1/√3" },
        { question: "What is the value of sin^2(θ) + cos^2(θ)?", options: ["1", "0", "2", "Undefined"], answer: "1" }
    ],
    "Some Applications of Trigonometry": [
        { question: "What is the main application of trigonometry in real life?", options: ["Measuring heights and distances", "Calculating area", "Finding volume", "None"], answer: "Measuring heights and distances" },
        { question: "Which trigonometric ratio is used to find the height of a building when the base and angle are known?", options: ["tan", "sin", "cos", "cot"], answer: "tan" },
        { question: "If the angle of elevation to the top of a tower is 30° and the distance to the tower is 100m, which function helps find the height?", options: ["tan", "sin", "cos", "sec"], answer: "tan" },
        { question: "Which instrument is commonly used with trigonometry to measure angles of elevation?", options: ["Theodolite", "Barometer", "Thermometer", "Altimeter"], answer: "Theodolite" },
        { question: "If the shadow of a pole is 10m and the angle of elevation of the sun is 45°, what is the height of the pole?", options: ["10m", "5m", "20m", "15m"], answer: "10m" },
        { question: "Which trigonometric function relates the opposite and adjacent sides?", options: ["tan", "sin", "cos", "cot"], answer: "tan" },
        { question: "If the angle of depression from a lighthouse to a boat is 60°, which function is used to find the distance to the boat?", options: ["tan", "sin", "cos", "cot"], answer: "tan" },
        { question: "Trigonometry is used in navigation to:", options: ["Find distances and directions", "Measure temperature", "Calculate speed", "None"], answer: "Find distances and directions" },
        { question: "Which of the following is NOT an application of trigonometry?", options: ["Measuring heights", "Measuring distances", "Measuring weight", "Navigation"], answer: "Measuring weight" },
        { question: "If the angle of elevation to the top of a tree is 60° and the distance from the tree is 5m, what is the height of the tree? (Use tan 60° = √3)", options: ["5√3 m", "10 m", "5 m", "3 m"], answer: "5√3 m" }
    ],
    "Circles": [
        { question: "What is the formula for the circumference of a circle?", options: ["2πr", "πr^2", "πd", "None of these"], answer: "2πr" },
        { question: "What is the formula for the area of a circle?", options: ["πr^2", "2πr", "πd", "None of these"], answer: "πr^2" },
        { question: "What is the formula for the diameter of a circle?", options: ["2r", "r/2", "πr", "None of these"], answer: "2r" },
        { question: "What is the formula for the radius of a circle?", options: ["d/2", "2d", "πd", "None of these"], answer: "d/2" },
        { question: "What is the formula for the length of an arc?", options: ["(θ/360) × 2πr", "(θ/360) × πr^2", "(θ/360) × πd", "None of these"], answer: "(θ/360) × 2πr" },
        { question: "What is the formula for the area of a sector?", options: ["(θ/360) × πr^2", "(θ/360) × 2πr", "(θ/360) × πd", "None of these"], answer: "(θ/360) × πr^2" },
        { question: "What is the formula for the area of a segment?", options: ["Area of sector - Area of triangle", "Area of sector + Area of triangle", "Area of circle - Area of triangle", "None of these"], answer: "Area of sector - Area of triangle" },
        { question: "What is the formula for the chord length?", options: ["2√(r^2 - d^2)", "√(r^2 - d^2)", "2r", "None of these"], answer: "2√(r^2 - d^2)" },
        { question: "What is the formula for the area of a circle with diameter d?", options: ["π(d/2)^2", "πd^2", "2πd", "None of these"], answer: "π(d/2)^2" },
        { question: "What is the formula for the area of a circle with circumference C?", options: ["C^2/4π", "C^2/2π", "C^2/π", "None of these"], answer: "C^2/4π" }
    ],
    "Areas Related to Circles": [
        { question: "What is the area of a circle with radius r?", options: ["πr^2", "2πr", "πd", "None of these"], answer: "πr^2" },
        { question: "What is the circumference of a circle with radius r?", options: ["2πr", "πr^2", "πd", "None of these"], answer: "2πr" },
        { question: "What is the area of a sector with angle θ?", options: ["(θ/360) × πr^2", "(θ/360) × 2πr", "(θ/360) × πd", "None of these"], answer: "(θ/360) × πr^2" },
        { question: "What is the length of an arc with angle θ?", options: ["(θ/360) × 2πr", "(θ/360) × πr^2", "(θ/360) × πd", "None of these"], answer: "(θ/360) × 2πr" },
        { question: "What is the area of a segment with angle θ?", options: ["Area of sector - Area of triangle", "Area of sector + Area of triangle", "Area of circle - Area of triangle", "None of these"], answer: "Area of sector - Area of triangle" },
        { question: "What is the area of a circle with diameter d?", options: ["π(d/2)^2", "πd^2", "2πd", "None of these"], answer: "π(d/2)^2" },
        { question: "What is the area of a circle with circumference C?", options: ["C^2/4π", "C^2/2π", "C^2/π", "None of these"], answer: "C^2/4π" },
        { question: "What is the area of a circle with radius r and angle θ?", options: ["(θ/360) × πr^2", "(θ/360) × 2πr", "(θ/360) × πd", "None of these"], answer: "(θ/360) × πr^2" },
        { question: "What is the area of a circle with radius r and diameter d?", options: ["πr^2", "πd^2", "2πr", "None of these"], answer: "πr^2" },
        { question: "What is the area of a circle with radius r and circumference C?", options: ["C^2/4π", "C^2/2π", "C^2/π", "None of these"], answer: "C^2/4π" }
    ],
    "Surface Areas and Volumes": [
        { question: "What is the volume of a sphere with radius r?", options: ["4/3πr^3", "2πr^2", "πr^2", "None of these"], answer: "4/3πr^3" },
        { question: "What is the surface area of a sphere with radius r?", options: ["4πr^2", "2πr^2", "πr^2", "None of these"], answer: "4πr^2" },
        { question: "What is the volume of a cylinder with radius r and height h?", options: ["πr^2h", "2πr^2h", "πr^2", "None of these"], answer: "πr^2h" },
        { question: "What is the surface area of a cylinder with radius r and height h?", options: ["2πr(h+r)", "2πr^2h", "πr^2", "None of these"], answer: "2πr(h+r)" },
        { question: "What is the volume of a cone with radius r and height h?", options: ["1/3πr^2h", "2/3πr^2h", "πr^2h", "None of these"], answer: "1/3πr^2h" },
        { question: "What is the surface area of a cone with radius r and slant height l?", options: ["πr(l+r)", "2πr(l+r)", "πr^2", "None of these"], answer: "πr(l+r)" },
        { question: "What is the volume of a cube with side a?", options: ["a^3", "a^2", "2a^3", "None of these"], answer: "a^3" },
        { question: "What is the surface area of a cube with side a?", options: ["6a^2", "4a^2", "2a^2", "None of these"], answer: "6a^2" },
        { question: "What is the volume of a cuboid with length l, breadth b, and height h?", options: ["l×b×h", "2l×b×h", "l×b", "None of these"], answer: "l×b×h" },
        { question: "What is the surface area of a cuboid with length l, breadth b, and height h?", options: ["2(lb+bh+hl)", "lb+bh+hl", "2lb+2bh+2hl", "None of these"], answer: "2(lb+bh+hl)" }
    ],
    "Statistics": [
        { question: "What is the mean of 2, 4, 6, 8?", options: ["5", "6", "7", "8"], answer: "5" },
        { question: "What is the median of 2, 4, 6, 8?", options: ["5", "6", "7", "8"], answer: "5" },
        { question: "What is the mode of 2, 4, 6, 8?", options: ["5", "6", "7", "8"], answer: "5" },
        { question: "What is the range of 2, 4, 6, 8?", options: ["6", "7", "8", "9"], answer: "6" },
        { question: "What is the variance of 2, 4, 6, 8?", options: ["5", "6", "7", "8"], answer: "5" },
        { question: "What is the standard deviation of 2, 4, 6, 8?", options: ["5", "6", "7", "8"], answer: "5" },
        { question: "What is the mean deviation of 2, 4, 6, 8?", options: ["5", "6", "7", "8"], answer: "5" },
        { question: "What is the coefficient of variation of 2, 4, 6, 8?", options: ["5", "6", "7", "8"], answer: "5" },
        { question: "What is the skewness of 2, 4, 6, 8?", options: ["5", "6", "7", "8"], answer: "5" },
        { question: "What is the kurtosis of 2, 4, 6, 8?", options: ["5", "6", "7", "8"], answer: "5" }
    ],
    "Probability": [
        { question: "What is the probability of getting a head when flipping a coin?", options: ["1/2", "1/3", "1/4", "1"], answer: "1/2" },
        { question: "What is the probability of getting a tail when flipping a coin?", options: ["1/2", "1/3", "1/4", "1"], answer: "1/2" },
        { question: "What is the probability of getting a 1 when rolling a die?", options: ["1/6", "1/3", "1/4", "1"], answer: "1/6" },
        { question: "What is the probability of getting a 2 when rolling a die?", options: ["1/6", "1/3", "1/4", "1"], answer: "1/6" },
        { question: "What is the probability of getting a 3 when rolling a die?", options: ["1/6", "1/3", "1/4", "1"], answer: "1/6" },
        { question: "What is the probability of getting a 4 when rolling a die?", options: ["1/6", "1/3", "1/4", "1"], answer: "1/6" },
        { question: "What is the probability of getting a 5 when rolling a die?", options: ["1/6", "1/3", "1/4", "1"], answer: "1/6" },
        { question: "What is the probability of getting a 6 when rolling a die?", options: ["1/6", "1/3", "1/4", "1"], answer: "1/6" },
        { question: "What is the probability of getting an even number when rolling a die?", options: ["1/2", "1/3", "1/4", "1"], answer: "1/2" },
        { question: "What is the probability of getting an odd number when rolling a die?", options: ["1/2", "1/3", "1/4", "1"], answer: "1/2" }
    ]
};

let userName = '';

function showHomePage() {
    document.getElementById('main-header').style.display = '';
    document.getElementById('motivational-quote').style.display = '';
    displayTopics();
}

document.addEventListener('DOMContentLoaded', () => {
    setRandomQuote();
    // Ask for user's name before showing topics
    userName = prompt('Please enter your name:');
    if (!userName) userName = 'Student';
    showHomePage();
});

function getRandomMCQs(topic, count = 10) {
    const all = mcqs[topic] || [];
    const shuffled = all.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, all.length));
}

function displayMCQs(topic) {
    document.getElementById('main-header').style.display = 'none';
    document.getElementById('motivational-quote').style.display = 'none';

    const container = document.createElement('div');
    container.className = 'mcq-container';
    container.innerHTML = `<h2>${topic} - MCQs</h2><div style='margin-bottom:10px;'>Welcome, <b>${userName}</b>!</div>`;

    // Add a back button at the top of the MCQ container
    const backButton = document.createElement('button');
    backButton.textContent = 'Back to Topics';
    backButton.style.marginBottom = '1rem';
    backButton.onclick = displayTopics;
    container.appendChild(backButton);

    const randomMCQs = getRandomMCQs(topic, 10);
    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion(index) {
        container.innerHTML = `<h2>${topic} - MCQs</h2><div style='margin-bottom:10px;'>Welcome, <b>${userName}</b>!</div>`;
        // Add the back button to every MCQ screen
        const backButton = document.createElement('button');
        backButton.textContent = 'Back to Topics';
        backButton.style.marginBottom = '1rem';
        backButton.onclick = displayTopics;
        container.appendChild(backButton);

        const mcq = randomMCQs[index];
        const mcqElement = document.createElement('div');
        mcqElement.className = 'mcq';
        mcqElement.innerHTML = `
            <p>${index + 1}. ${mcq.question}</p>
            ${mcq.options.map((option, i) => `<label><input type="radio" name="mcq-${index}" value="${option}"> ${option}</label>`).join('<br>')}
            <br><button id="submit-answer">Submit</button>
        `;
        container.appendChild(mcqElement);

        const submitButton = mcqElement.querySelector('#submit-answer');
        submitButton.addEventListener('click', () => {
            const selectedOption = mcqElement.querySelector(`input[name="mcq-${index}"]:checked`);
            if (!selectedOption) {
                alert('Please select an answer.');
                return;
            }

            const isCorrect = selectedOption.value === mcq.answer;
            const feedbackMessage = document.createElement('div');
            feedbackMessage.textContent = isCorrect ? 'Correct Answer! 🎉' : `Wrong Answer! The correct answer is: ${mcq.answer}`;
            feedbackMessage.style.color = isCorrect ? 'green' : 'red';
            feedbackMessage.style.fontWeight = 'bold';
            container.appendChild(feedbackMessage);

            if (isCorrect) score++;

            submitButton.style.display = 'none';
            const nextButton = document.createElement('button');
            nextButton.textContent = (index + 1 < randomMCQs.length) ? 'Next' : 'Finish';
            nextButton.addEventListener('click', () => {
                if (index + 1 < randomMCQs.length) {
                    showQuestion(index + 1);
                } else {
                    showScore();
                }
            });
            container.appendChild(nextButton);
        });
    }

    function showScore() {
        container.innerHTML = `<h2>Quiz Completed!</h2><div style='margin-bottom:10px;'>Well done, <b>${userName}</b>!</div>`;
        container.innerHTML += `<p>Your score: <b>${score} / ${randomMCQs.length}</b></p>`;
        let message = '';
        if (score === randomMCQs.length) {
            message = 'Outstanding! You got all correct!';
        } else if (score >= 8) {
            message = 'Great job! Keep it up!';
        } else if (score >= 5) {
            message = 'Good effort! Practice makes perfect.';
        } else {
            message = 'Don\'t give up! Review the concepts and try again.';
        }
        container.innerHTML += `<p style='font-weight:bold;'>${message}</p>`;
        const backButton = document.createElement('button');
        backButton.textContent = 'Back to Topics';
        backButton.addEventListener('click', displayTopics);
        container.appendChild(backButton);
    }

    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(container);

    showQuestion(currentQuestionIndex);
}

function displayTopics() {
    const main = document.querySelector('main');
    main.innerHTML = `
        <section id="topics">
            <h2>Topics</h2>
            <div style='margin-bottom:10px;'>Welcome, <b>${userName}</b>!</div>
            <ul>
                ${topics.map(topic => `<li><a href="#" class="topic-link">${topic}</a></li>`).join('')}
            </ul>
        </section>
    `;
    document.getElementById('main-header').style.display = '';
    document.getElementById('motivational-quote').style.display = '';
    document.querySelectorAll('.topic-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const topic = event.target.textContent;
            displayMCQs(topic);
        });
    });
}