import { AddToWalletRequest } from "Api/User";
import useCustomSnackbar from "components/Shared/Notification/CustomSnackbar";
import { useState } from "react";
import { CgDanger } from "react-icons/cg";
import { FiX } from "react-icons/fi";
import { WALLET } from "routes";
const Recharge = (props) => {
    const mSnackbar = useCustomSnackbar();

    const [addToWallet, setAddToWallet] = useState({
        file: null,
        amount: 0,
    });

    const uploadRequest = async () => {
        if (Number(addToWallet.amount) < 1)
            return mSnackbar({ variant: false, head: "Something Went Wrong!", message: "Enter amount that ysou've transferred." });
        const formData = new FormData();
        formData.set("uid", window.localStorage.getItem("_u"));
        formData.set("amount", addToWallet.amount);
        formData.append("receipt", addToWallet.file);
        const response = await AddToWalletRequest(formData);
        console.log(response);
        if (response.code !== 200) return mSnackbar({ variant: false, head: "Something Went Wrong!", message: response.message[0] });
        mSnackbar({ variant: true, head: "Successful", message: "It will be reflected in your wallet asap!" });
        return window.location.replace(WALLET.path);
    };
    return (
        <div className="form">
            <h4>Recharge Points</h4>
            <div className="alert alert-danger">
                <CgDanger style={{ verticalAlign: "text-bottom" }} /> <span style={{ fontWeight: 600 }}> Careful:</span> Details such as
                <span style={{ fontWeight: 600 }}> Bank Details </span> and <span style={{ fontWeight: 600 }}>QR Code </span> given below should be
                confidential. In such case of disclose, we can suspend account.
            </div>
            <div className="alert alert-info">
                <CgDanger style={{ verticalAlign: "text-bottom" }} /> <span style={{ fontWeight: 600 }}> Note:</span> Please enter{" "}
                <span style={{ fontWeight: 600 }}> EXACT</span> amount as you have transfered and that will be added to wallet. If you've already submitted
                wrong, we will reject and You can request for new addition with same receipt.
            </div>
            <div className="alert alert-info">
                <CgDanger style={{ verticalAlign: "text-bottom" }} /> <span style={{ fontWeight: 600 }}> Note:</span> We support
                <span style={{ fontWeight: 600 }}> GPAY, PhonePe, PayTm, Bhim</span> and one can transfer via scanning{" "}
                <span style={{ fontWeight: 600 }}>QR Code </span> provided below for more, another options are{" "}
                <span style={{ fontWeight: 600 }}> Net Banking, IMPS, NEFT, RTGS </span> for that details are provided below.
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <h4>Details</h4>
                    <div className="alert alert-success">
                        <p style={{ fontSize: 18 }}>
                            <CgDanger style={{ verticalAlign: "middle" }} /> <span style={{ fontWeight: 600 }}> Net Banking, IMPS, NEFT, RTGS </span> <br />
                            Name: <span style={{ fontWeight: 600 }}>Dharmprints.com</span>
                            <br />
                            Bank Name: <span style={{ fontWeight: 600 }}>Kotak Mahindra</span>
                            <br />
                            Account Number: <span style={{ fontWeight: 600 }}>1234500000</span>
                            <br />
                            IFSC: <span style={{ fontWeight: 600 }}>KKBK0000EVER</span>
                            <br />
                        </p>
                    </div>
                    <img src={require("../../assets/images/gpayqr.jpeg").default} className="img-responsive" style={{ borderRadius: 12 }} />
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12">
                    <div className="wrapper" style={{ background: "#FAFAFA", padding: 15 }}>
                        <h4>Fill This to submit request</h4>
                        <div class="c-input-group">
                            <label>
                                Amount as per Proof<span className="text-danger"> *</span>
                            </label>
                            <input
                                type="text"
                                value={addToWallet.amount}
                                onChange={(evt) => {
                                    setAddToWallet({ ...addToWallet, amount: evt.target.value });
                                }}
                                placeholder="500, 1000, 1500"
                            />
                        </div>
                        <div class="c-input-group">
                            <label>
                                Transfer Proof<span className="text-danger"> *</span>
                            </label>
                            {addToWallet.file ? (
                                <div
                                    class="alert d-flex align-items-center justify-content-between"
                                    style={{
                                        width: "100%",
                                        background: "white",
                                        height: "50px",
                                        cursor: "pointer",
                                        border: "1px solid #ddd",
                                        padding: "0 15px",
                                    }}
                                    onClick={() => {
                                        return setAddToWallet({ ...addToWallet, file: null });
                                    }}
                                >
                                    <span>{addToWallet.file.name}</span>
                                    <FiX style={{ fontSize: 18, color: "#FF0000" }} />
                                </div>
                            ) : (
                                <>
                                    <div
                                        class="alert  d-flex align-items-center justify-content-between"
                                        style={{
                                            width: "100%",
                                            background: "white",
                                            height: "50px",
                                            cursor: "pointer",
                                            border: "1px solid #ddd",
                                            padding: "0 15px",
                                        }}
                                        onClick={() => {
                                            document.getElementById("upldreceipt").click();
                                        }}
                                    >
                                        Upload here
                                    </div>
                                    <input
                                        type="file"
                                        onChange={(evt) => {
                                            if (!evt.target.files[0])
                                                return mSnackbar({
                                                    variant: false,
                                                    head: "Kindly, Upload.",
                                                    message: "Receipt/Screenshot of your Transfer.",
                                                });
                                            if (
                                                evt.target.files[0].type === "image/png" ||
                                                evt.target.files[0].type === "image/jpg" ||
                                                evt.target.files[0].type === "image/jpeg"
                                            ) {
                                                return setAddToWallet({ ...addToWallet, file: evt.target.files[0] });
                                            }
                                            return mSnackbar({
                                                variant: false,
                                                head: "Kindly, upload Image File.",
                                                message: "Jpeg, Jpg or Png",
                                            });
                                        }}
                                        style={{ display: "none" }}
                                        id="upldreceipt"
                                    />
                                </>
                            )}
                        </div>
                        <div className="submit-btn">
                            <button onClick={uploadRequest}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recharge;
