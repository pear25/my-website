import ReactTypingEffect from "react-typing-effect";

const Typer = (props) => {

    function generateRandomColor() {
        let maxVal = 0xFFFFFF; // 16777215.
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        // add logic for dark mode.
        if (randColor === 0xFFFFFF) {
            randColor = 0x000000
        }
        return `#${randColor.toUpperCase()}`
    }

    return (
        <ReactTypingEffect
            typingDelay={1500}
            speed={50}
            eraseDelay={4000}
            eraseSpeed={100}
            text={props.text}
            cursorRenderer={cursor => <p>{cursor}</p>}
            displayTextRenderer={(text, i) => {
                return (
                    <p className="font-mono">
                        {text.split('').map((char, i) => {
                            const key = `${i}`;
                            return (
                                <span
                                    key={key}
                                    style={{ color: generateRandomColor() }}
                                >{char}</span>
                            );
                        })}
                    </p>
                );
            }}
        />
    )
}

export default Typer;