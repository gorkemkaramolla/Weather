import react from "react";
import Table from "../Table/Table";
import "./Weather.css";
class Weather extends react.Component {
    render() {
        return (
            <div className="box">
                <Table title="Today" />
            </div>
        );
    }
}

export default Weather;
