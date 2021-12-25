import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import { useState } from "react";
import { getDate } from "utils/CommonFunctions";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
import { IoCaretDown } from "react-icons/io5";

const Wallet = ({ state, setState }) => {
    const [userWallet, setUserWallet] = useState(state.wallet);

    const [moreMenu, setMoreMenu] = useState(null);

    return (
        <div className="form">
            <div className="d-flex justify-content-between">
                <h3>Wallet</h3>
                <h3 style={{ color: "#000" }}>Current: {userWallet.currentBalance}</h3>
            </div>
            <h5>History</h5>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="alert alert-info">
                        <CgDanger style={{ verticalAlign: "text-bottom" }} /> <span style={{ fontWeight: 600 }}> Info:</span>{" "}
                        <MdPendingActions style={{ fontSize: 24 }} /> showing that Your balance request is in pending. We generally took 2-3 hours to update
                        status.
                    </div>
                </div>
            </div>
            <table className="table table-responsive">
                <thead className="thead">
                    <th style={{ width: 20 }}>Sr</th>
                    <th>Request Date</th>
                    <th>Updation Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>#</th>
                </thead>
                <tbody className="tbody">
                    {userWallet.balanceHistory.map((hist, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{getDate(hist.createdAt)}</td>
                            <td>{getDate(hist.updatedAt)}</td>
                            <td>
                                <h4 color={{ color: "#000" }}>{hist.balance}</h4>
                            </td>
                            <td>
                                {hist.granted && <BsFillCheckCircleFill className="text-success" />}
                                {hist.reject && <BsFillXCircleFill className="text-danger" />}
                                {!hist.reject && !hist.granted && <MdPendingActions className="text-info" style={{ fontSize: 20 }} />}
                            </td>
                            <td style={{ width: 50 }}>
                                <div className="d-flex">
                                    <div className="dropdown">
                                        <button className="btn-icn-wrapper" onClick={() => setMoreMenu((prev) => (idx === prev ? -1 : idx))}>
                                            <IoCaretDown className="btn-icn" />
                                        </button>
                                        <div class={idx === moreMenu ? "dropdown-menu show" : "dropdown-menu"} style={{ right: 0 }}>
                                            <a
                                                class="dropdown-item"
                                                style={{ cursor: "pointer" }}
                                                href={`${process.env.REACT_APP_API_URL}/${hist.file}`}
                                                target="_blank"
                                                onClick={() => {
                                                    setMoreMenu(null);
                                                }}
                                            >
                                                Uploaded Receipt
                                            </a>
                                            <span class="dropdown-item" style={{ cursor: "pointer" }}>
                                                Raise a query
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
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
            </div>
        </div>
    );
};

export default Wallet;
