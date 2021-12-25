import { useEffect, useState } from "react";
import { BsExclamationCircle, BsEye, BsEyeSlash } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import anime from "animejs";
import { Link } from "react-router-dom";
import { DASHBOARD, REGISTER } from "routes";
import { LoginUser } from "Api/User";
import { useHistory } from "react-router";
const ForgotPassword = ({ forgetPassword, setForgetPassword }) => {
    useEffect(() => {
        if (forgetPassword.open) {
            anime({
                targets: ".anime-forget-password",
                duration: 800,
                translateX: [-300, 0],
                opacity: [0, 1],
                delay: anime.stagger(400),
            });
        }
    }, [forgetPassword.open]);

    const closeForgetDialog = () => {
        anime({
            targets: ".anime-forget-password",
            duration: 800,
            translateX: [0, -200],
            opacity: [1, 0],
        });
        setTimeout(() => setForgetPassword({ ...forgetPassword, value: "", open: false }), 200);
    };

    return (
        <>
            <div className="d-flex justify-content-between ">
                <h3 class="title-7">Forget Password</h3>
                <IoClose onClick={closeForgetDialog} style={{ fontSize: 20, marginTop: 15, cursor: "pointer" }} />
            </div>
            <div class="login_wrapper login_wrapper_2">
                <div class="input_wrap">
                    <label>
                        E-mail Address<span>*</span>
                    </label>
                    <input type="email" value={forgetPassword.value} onChange={(evt) => setForgetPassword({ ...forgetPassword, value: evt.target.value })} />
                </div>
                <div class="input_wrap input_wrap_3">
                    <span class="mb-10 pt-15">A password reset link will be sent to your email address.</span>

                    <button style={{ marginTop: 12 }}>Send</button>
                </div>
            </div>
        </>
    );
};

const Signin = (props) => {
    window.scrollTo(0, 630);

    const [forgetPassword, setForgetPassword] = useState({
        value: "mananclassic@gmail.com",
        open: false,
    });

    const [password, setPassword] = useState({
        value: "password",
        type: true,
    });
    const [email, setEmail] = useState("mananclassic@gmail.com");
    const [alert, setAlert] = useState(false);

    const history = useHistory();

    const onSigninhandler = async () => {
        setAlert(false);
        const formData = new FormData();
        formData.set("password", password.value.trim());
        formData.set("email", email.trim());
        const response = await LoginUser(formData);
        if (response.code !== 200) return setAlert(response.message[0]);
        window.localStorage.setItem("_t", response.message.token);
        window.localStorage.setItem("_e", response.message.email);
        window.localStorage.setItem("_u", response.message.uid);
        return history.replace(DASHBOARD.path);
    };

    return (
        <>
            {!forgetPassword.open && <div className="col-xl-3 col-lg-3"></div>}
            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 animeFadeInLeft">
                <h3 class="title-7">Sign in</h3>
                <div class="login_wrapper">
                    {alert && (
                        <div class="input_wrap">
                            <div className="alert alert-danger">
                                <BsExclamationCircle style={{ fontSize: 13, marginRight: 5, verticalAlign: "revert" }} />
                                {alert}
                            </div>
                        </div>
                    )}
                    <div class="input_wrap">
                        <label>
                            E-mail Address <span>*</span>
                        </label>
                        <input type="email" onChange={(evt) => setEmail(evt.target.value)} value={email} />
                    </div>
                    <div class="input_wrap">
                        <label>
                            Password<span>*</span>
                        </label>
                        <input
                            onChange={(evt) => {
                                setPassword({ ...password, value: evt.target.value });
                            }}
                            type={password.type ? "password" : "text"}
                            value={password.value}
                            placeholder="Enter Password"
                        />
                        <span class="show-pass">
                            {password.type ? (
                                <BsEyeSlash
                                    onClick={() => {
                                        setPassword((prev) => ({ ...password, type: !prev.type }));
                                    }}
                                    style={{ fontSize: 24, cursor: "Pointer" }}
                                />
                            ) : (
                                <BsEye
                                    onClick={() => {
                                        setPassword((prev) => ({ ...password, type: !prev.type }));
                                    }}
                                    style={{ fontSize: 24, cursor: "Pointer" }}
                                />
                            )}
                        </span>
                    </div>
                    <div class="input_wrap">
                        <button onClick={onSigninhandler}>Sign in</button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div class="input_wrap">
                            <span
                                style={{ cursor: "pointer", textDecoration: "underline", color: "#222", fontWeight: 600 }}
                                onClick={() => setForgetPassword({ ...forgetPassword, open: true, value: email })}
                            >
                                Forgot password?
                            </span>
                        </div>
                        <div class="input_wrap">
                            New User?{" "}
                            <Link to={REGISTER.path} style={{ cursor: "pointer" }}>
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {forgetPassword.open && (
                <div className="col-xl-6 col-lg-6 col-sm-12 col-md-12 anime-forget-password">
                    <ForgotPassword forgetPassword={forgetPassword} setForgetPassword={setForgetPassword} />
                </div>
            )}
        </>
    );
};

export default Signin;
