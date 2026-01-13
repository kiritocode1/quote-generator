const quotes = [
    { text: "Believe in yourself.", author: "Unknown" },
    { text: "Small steps every day.", author: "Japanese Proverb" },
    { text: "Discipline beats motivation.", author: "Jocko Willink" },
    { text: "Focus on progress, not perfection.", author: "Bill Phillips" },
    { text: "You are stronger than you think.", author: "A.A. Milne" },
    { text: "Consistency creates confidence.", author: "Unknown" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" }
];

const app = document.getElementById("app");

// Create Card Container
const card = document.createElement("div");
card.className = "glass p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 text-center max-w-sm mx-auto transition-all duration-300";

// Create Quote Text Element
const quoteText = document.createElement("p");
quoteText.className = "text-2xl md:text-3xl font-serif text-white mb-4 leading-tight min-h-[5rem] flex items-center justify-center italic";
quoteText.textContent = "Click below to find inspiration.";

// Create Author Element
const authorText = document.createElement("p");
authorText.className = "text-neutral-400 text-sm font-sans uppercase tracking-widest mb-8 opacity-0 transition-opacity duration-300";

// Create Button
const button = document.createElement("button");
button.className = "group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-black bg-white rounded-full shadow-lg hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 transform hover:scale-105 active:scale-95";
button.innerHTML = `
    <span>Get Inspired</span>
    <svg class="w-4 h-4 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
`;

// Append Elements
card.appendChild(quoteText);
card.appendChild(authorText);
card.appendChild(button);
app.appendChild(card);

// Generate Quote Function
function generateQuote() {
    // 1. Fade OUT
    quoteText.classList.remove("animate-fade-in");
    authorText.classList.remove("animate-fade-in");

    quoteText.style.opacity = "0";
    authorText.style.opacity = "0";

    setTimeout(() => {
        // 2. Update Content
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];

        quoteText.textContent = `"${quote.text}"`;
        authorText.textContent = `— ${quote.author}`;

        // 3. Fade IN
        quoteText.style.opacity = "1";
        authorText.style.opacity = "1";

        // Re-trigger animation
        void quoteText.offsetWidth; // trigger reflow
        quoteText.classList.add("animate-fade-in");
        authorText.classList.add("animate-fade-in");
    }, 200); // short delay for fade out effect
}

// Event Listeners
button.addEventListener("click", generateQuote);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
        generateQuote();
    }
});

// Initial Load Animation
window.addEventListener('DOMContentLoaded', () => {
    card.classList.add('animate-fade-in');
});
