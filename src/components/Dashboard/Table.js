import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";

const Table = (props) => {
    return (
        <div class="form">
            <h5>Orders</h5>
            <table className="table table-responsive">
                <thead className="thead">
                    <th>Sr</th>
                    <th>Sr</th>
                    <th>Sr</th>
                    <th>Sr</th>
                    <th>Sr</th>
                </thead>
                <tbody className="tbody">
                    {[1, 2, 3, 4, 5].map(() => (
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <nav class="pagination">
                        <ul>
                            <li class="page-item">
                                <a class="page-link">
                                    <AiOutlineSwapLeft style={{ transform: "scale(1,-1)" }} />
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link">
                                    <AiOutlineSwapRight />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </tfoot>
            </table>
        </div>
    );
};

export default Table;
