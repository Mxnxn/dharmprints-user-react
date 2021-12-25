import { UpdateUserProfile } from "Api/User";
import useCustomSnackbar from "components/Shared/Notification/CustomSnackbar";
import { useState } from "react";

const Profile = ({ state, setState }) => {
    console.log(state);
    const [user, setUser] = useState({
        _id: state.user._id,
        city: state.user.city,
        companyName: state.user.companyName,
        name: state.user.name,
        phone: state.user.phone,
        pincode: state.user.pincode,
        state: state.user.state,
        street: state.user.street,
    });

    const mSnackbar = useCustomSnackbar();

    const onSaveHandler = async () => {
        let changed = false;
        Object.keys(user).forEach((key) => {
            if (user[key] !== state.user[key]) return (changed = true);
        });

        if (changed) {
            const formData = new FormData();
            Object.keys(user).forEach((key) => formData.set(key, user[key]));
            const response = await UpdateUserProfile(formData);
            setState({
                ...state,
                user: {
                    _id: response.message._id,
                    city: response.message.city,
                    companyName: response.message.companyName,
                    name: response.message.name,
                    phone: response.message.phone,
                    pincode: response.message.pincode,
                    state: response.message.state,
                    street: response.message.street,
                },
            });
            return mSnackbar({ head: "Success", message: "Your profile has been updated!" });
        }
    };

    const onChangeHandler = (evt) => {
        setUser({ ...user, [evt.target.name]: evt.target.value });
    };

    return (
        <div class="form">
            <h3>Account</h3>
            <div class="c-input-group">
                <label>E-mail</label>
                <input onChange={onChangeHandler} type="text" disabled value={state.user.email} />
            </div>
            <div class="c-input-group">
                <label>Phone</label>
                <input onChange={onChangeHandler} name="message" name="phone" value={user.phone} />
            </div>
            <div class="c-input-group">
                <label>Name</label>
                <input onChange={onChangeHandler} type="text" name="name" value={user.name} />
            </div>
            <div class="c-input-group">
                <label>Company Name</label>
                <input onChange={onChangeHandler} name="message" name="companyName" value={user.companyName} />
            </div>
            <div className="d-flex align-items-center" style={{ margin: "15px 0" }}>
                <h3>Address</h3> <span style={{ fontSize: 12, marginLeft: 6, color: "#dc3545" }}>(Maximum 3)</span>
                <button className="btn btn-sm btn-success d-flex align-items-center justify-content-center" style={{ marginLeft: 12 }}>
                    Add
                </button>
            </div>
            <div className="row">
                {[1].map((el, idx) => (
                    <div style={{ background: "#FAFAFA", marginRight: 30, marginBottom: 15, padding: 15 }} className="col-sm-12 col-md-12 col-lg-5">
                        <h4 style={{ color: "#dc3545" }}> #{idx + 1}</h4>
                        <div class="c-input-group">
                            <label>Street</label>
                            <input onChange={onChangeHandler} name="message" name="street" value={user.street} />
                        </div>
                        <div class="c-input-group">
                            <label>Landmark</label>
                            <input
                                onChange={onChangeHandler}
                                name="message"
                                name="landmark"
                                value={user.landmark}
                                placeholder="Please enter landmark for ease of delivery"
                            />
                        </div>

                        <div class="c-input-group">
                            <label>State/Province</label>
                            <input onChange={onChangeHandler} name="message" name="state" value={user.state} />
                        </div>
                        <div class="c-input-group" style={{ marginBottom: 25 }}>
                            <label>Pincode</label>
                            <input onChange={onChangeHandler} name="message" name="pincode" value={user.pincode} />
                        </div>
                    </div>
                ))}
            </div>
            <div class="submit-btn">
                <button onClick={onSaveHandler}>Send</button>
            </div>
        </div>
    );
};

export default Profile;
