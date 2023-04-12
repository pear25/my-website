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
            typingDelay={props.typingDelay}
            speed={props.speed}
            eraseDelay={props.eraseDelay}
            eraseSpeed={props.eraseSpeed}
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
                                    style={{ color: props.colorful ? generateRandomColor() : 0xFFFFFF }}
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