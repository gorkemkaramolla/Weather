import react from "react";
import img1 from "../../images/Screenshot_1.jpg";
class Table extends react.Component {
    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.title} </td>
                </tr>
            </div>
        );
    }
}

export default Table;
