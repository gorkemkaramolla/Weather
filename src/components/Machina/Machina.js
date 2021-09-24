import React from "react";
export default class Machina extends React.Component {
    static defaultProps = {
        s1: "😊",
        s2: "😊",
        s3: "😊",
    };

    constructor(props) {
        super(props);
        this.state = {
            money: 50,
        };
    }
    render() {
        var isTry;

        const { s1, s2, s3 } = this.props;
        function shake() {
            const fruits = [s1, s2, s3];
            const randomElement1 =
                fruits[Math.floor(Math.random() * fruits.length)];
            const randomElement2 =
                fruits[Math.floor(Math.random() * fruits.length)];
            const randomElement3 =
                fruits[Math.floor(Math.random() * fruits.length)];
            const winner =
                randomElement1 == randomElement2 &&
                randomElement1 == randomElement3;

            if (winner) {
                isTry = true;
                return (
                    randomElement1 +
                    randomElement2 +
                    randomElement3 +
                    "<br>" +
                    "$$$COINGRATZ$$$"
                );
            } else {
                isTry = false;

                return (
                    randomElement1 +
                    randomElement2 +
                    randomElement3 +
                    "<br>" +
                    "No money This  time Baby (*_*) $"
                );
            }
        }

        const show = () => {
            document.querySelector(".random").innerHTML = shake();
            if (isTry === true) {
                this.setState({ money: this.state.money + 20 });
            } else {
                this.setState({ money: this.state.money - 1 });
            }
        };

        return (
            <div >
                <h1>{this.state.money + "$"}</h1>
                <h1 className="random"></h1>
                <button onClick={show}>Shake</button>
            </div>
        );
    }
}
