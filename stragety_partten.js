//Define different text transformation strategies

const toLowerCase = (text) => {
    return text.toLowerCase();
}

const toUpperCase = (text) => {
    return text.toUpperCase();
}

const toTitleCase = (text) => {
    return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Context class that uses the text transformation strategies
class TextProcessor {
    constructor(transformStrategy) {
        this.transformStrategy = transformStrategy;
    }

    // Method to set the transformation strategy dynamically
    setTransformStrategy(transformStrategy) {
        this.transformStrategy = transformStrategy;
    }

    // Method to perform transformation using the chosen strategy
    transform() {
        return this.transformStrategy(text);
    }
}

const text = "Hello, world!";

const textProcessor = new TextProcessor(toLowerCase);
console.log("Transformed to lowercase: ", textProcessor.transform(text));

textProcessor.setTransformStrategy(toUpperCase);
console.log("Transformed to uppercase: ", textProcessor.transform(text));

textProcessor.setTransformStrategy(toTitleCase);
console.log("Transformed to title case: ", textProcessor.transform(text));
