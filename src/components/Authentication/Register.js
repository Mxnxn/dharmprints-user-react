import { RegisterUser } from "Api/User";
import useCustomSnackbar from "components/Shared/Notification/CustomSnackbar";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { SIGNIN } from "routes";
import { Link } from "react-router-dom";
const Register = (props) => {
    const mSnackbar = useCustomSnackbar();

    const [state, setState] = useState({
        value: {
            email: "",
            password: "",
            street: "",
            city: "",
            state: "",
            pincode: "",
            companyName: "",
            phone: "",
            landmark: "",
            cpassword: "",
        },
        showPassword: false,
        file: null,
        error: null,
    });

    const valueHandler = (evt) => {
        setState({ ...state, value: { ...state.value, [evt.target.name]: evt.target.value } });
    };

    const onSubmitHandler = async () => {
        if (state.value.cpassword !== state.value.password) {
            return mSnackbar({ head: "Kindly, Check", variant: false, message: "Passwords aren't matching" });
        }

        const formData = new FormData();
        Object.keys(state.value).forEach((key) => {
            if (key !== "cpassword") formData.set(key, state.value[key]);
        });
        formData.append("businessProof", state.file);
        const response = await RegisterUser(formData);
        if (response.code !== 200) return mSnackbar({ head: "Something went wrong!", variant: false, message: response.message[0] + "." });
        return mSnackbar({ head: "Successful", variant: true, message: "Registration Successfully Submitted! " + "." });
    };

    return (
        <>
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12  animeFadeInLeft" data-wow-offset="50">
                <h3 class="title-7">register</h3>
                <div class="login_wrapper login_wrapper_2 ">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <h5>Personal Information</h5>
                            <div class="input_wrap">
                                <label>
                                    Name<span>*</span>
                                </label>
                                <input value={state.value.name} onChange={valueHandler} name="name" type="text" />
                            </div>
                            <div class="input_wrap">
                                <label>
                                    Email address<span>*</span>
                                </label>
                                <input value={state.value.email} onChange={valueHandler} name="email" type="email" />
                            </div>
                            <div class="input_wrap">
                                <label>
                                    Password<span>*</span>
                                </label>
                                <input value={state.value.password} onChange={valueHandler} name="password" type={state.showPassword ? "text" : "password"} />
                            </div>
                            <div class="input_wrap">
                                <label>
                                    Confirm Password<span>*</span>
                                </label>
                                <input value={state.value.cpassword} onChange={valueHandler} name="cpassword" type={state.showPassword ? "text" : "password"} />
                                <span class="show-pass">
                                    {state.showPassword ? (
                                        <BsEyeSlash
                                            onClick={() => {
                                                setState((prev) => ({ ...prev, showPassword: !prev.showPassword }));
                                            }}
                                            style={{ fontSize: 24, cursor: "Pointer" }}
                                        />
                                    ) : (
                                        <BsEye
                                            onClick={() => {
                                                setState((prev) => ({ ...prev, showPassword: !prev.showPassword }));
                                            }}
                                            style={{ fontSize: 24, cursor: "Pointer" }}
                                        />
                                    )}
                                </span>
                            </div>
                            <div class="input_wrap">
                                <label>
                                    Phone<span>*</span>
                                </label>
                                <input value={state.value.phone} onChange={valueHandler} name="phone" type="email" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <h5>Business Information</h5>
                            <div class="input_wrap">
                                <label>
                                    Name<span>*</span>
                                </label>
                                <input value={state.value.companyName} onChange={valueHandler} name="companyName" type="email" />
                            </div>
                            <div class="input_wrap">
                                <label>
                                    Street<span>*</span>
                                </label>
                                <input value={state.value.street} onChange={valueHandler} name="street" type="email" />
                            </div>
                            <div class="input_wrap">
                                <label>
                                    Landmark<span>*</span>
                                </label>
                                <input value={state.value.landmark} onChange={valueHandler} name="landmark" type="email" />
                            </div>
                            <div class="input_wrap">
                                <label>
                                    City<span>*</span>
                                </label>
                                <input value={state.value.city} onChange={valueHandler} name="city" type="email" />
                            </div>
                            <div class="input_wrap">
                                <label>
                                    State<span>*</span>
                                </label>
                                <input value={state.value.state} onChange={valueHandler} name="state" type="email" />
                            </div>
                            <div class="input_wrap">
                                <label>
                                    Pincode<span>*</span>
                                </label>
                                <input value={state.value.pincode} onChange={valueHandler} name="pincode" type="email" />
                            </div>
                            <div class="input_wrap">
                                <label>
                                    Business Proof<span>*</span>
                                </label>
                                <div
                                    class="alert d-flex align-items-center"
                                    style={{ width: "100%", height: "50px", cursor: "pointer", border: "1px solid #ddd", padding: "0 15px" }}
                                    onClick={() => {
                                        document.getElementById("bproof").click();
                                    }}
                                >
                                    {state.file ? state.file.name : "Upload Here"}
                                </div>
                                <input
                                    id="bproof"
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={(evt) => {
                                        if (evt.target.files[0].type === "image/jpg" || evt.target.files[0].type === "image/jpeg") {
                                            state.file = evt.target.files[0];
                                            state.error = false;
                                            setState({ ...state });
                                        } else {
                                            state.file = null;
                                            state.error = "Please upload in valid Format";
                                            setState({ ...state });
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-lg-3"></div>
                        <div className="col-sm-12 col-lg-6">
                            <div class="input_wrap input_wrap_3">
                                <div className="d-flex justify-content-center pt-15"></div>
                                <button onClick={onSubmitHandler}>register</button>
                                <div className="d-flex align-items-center flex-column mb-10 pt-15">
                                    <div className="input-wrap">
                                        Account activation can take upto 2 days. On average, it requires 6 hours. You will get mail on provided E-mail.
                                    </div>
                                    <div class="input_wrap" style={{ marginTop: 6 }}>
                                        Already have an account? <Link to={SIGNIN.path}>Sign in</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
