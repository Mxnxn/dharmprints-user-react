import { AddItemToCart } from "Api/Cart";
import { GetAProducts } from "Api/Product";
import useCustomSnackbar from "components/Shared/Notification/CustomSnackbar";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CATEGORISEDPRODUCT, PRODUCTS, ROOT, SIGNIN } from "routes";
import { classManager, getPrice } from "utils/CommonFunctions";

const SoloProduct = (props) => {
    const { id } = useParams("id");

    const displaySnackbar = useCustomSnackbar();

    const [state, setState] = useState({
        product: {},
        order: { len: null, height: null, qty: null, design: null, estimatedPrice: 0, eyelets: false },
        datafetch: false,
    });

    const [selectedVariant, setSelectedVariant] = useState({
        _id: "",
        pid: "",
        name: "",
        price: "",
        numericPrice: "",
        nextStep: false,
    });

    useEffect(() => {
        (async () => {
            const response = await GetAProducts(id);
            if (response.code === 200) return setState({ ...state, product: response.message, datafetch: true });
        })();
    }, []);

    const onAddItemToCart = async () => {
        // if (!localStorage.getItem("_u")) return history.replace("/myaccount");
        setState({ ...state, alert: null });
        const { product, order } = state;
        if (!order.qty) return setState({ ...state, alert: "Invalid Quantity" });
        const formData = new FormData();
        formData.set("pid", product._id);
        formData.set("name", product.name);
        formData.set("price", product.price);
        formData.set("numericPrice", product.numericPrice);
        for (let i = 0; i < product.images.length; i++) {
            const img = product.images[i];
            formData.set(`images[${i}]`, img._id);
        }
        for (let i = 0; i < product.category.length; i++) {
            const cat = product.category[i];
            formData.set(`category[${i}]`, cat._id);
        }
        formData.set("gsmOrMicron", product.gsmOrMicron);
        formData.set("description", product.description);
        formData.set("eyelets", order.eyelets);
        formData.set("qty", order.qty);
        formData.set("uid", localStorage.getItem("_u"));
        formData.append("designFile", order.design);
        if (!product.sizeWithQty) {
            formData.set("rate", parseInt(order.qty) * parseInt(product.numericPrice));
            setState({
                ...state,
                order: { ...order, estimatedPrice: parseInt(order.qty) * parseInt(product.numericPrice) },
                alert: null,
            });
            const response = await AddItemToCart(formData);
            console.log(response.message);
            classManager("cart__sidebar", "open-cart");
            classManager("cart-offcanvas-overlay", "open-cart-overlay");
            return displaySnackbar({ head: response.message[0], variant: "success", message: "Thank you!" });
        }
        if (Number(order.len) > 1 && Number(order.height) > 1) {
            formData.set("rate", getPrice(order.len, order.height, product.sizes) * Number(product.numericPrice) * Number(order.qty));
            formData.set("len", order.len);
            formData.set("height", order.height);
            setState({
                ...state,
                order: {
                    ...order,
                    estimatedPrice: getPrice(order.len, order.height, product.sizes) * Number(product.numericPrice) * Number(order.qty),
                    alert: null,
                },
            });
            const response = await AddItemToCart(formData);
            console.log(response.message);
            classManager("offcanvas-wishlist", "offcanvas-open");
            classManager("cart__sidebar", "open-cart");

            return displaySnackbar({ head: response.message[0], variant: "success", message: "Thank you!" });
        } else {
            return setState({ ...state, alert: "Please fill below fields carefully!" });
        }
    };

    const valueHandler = (evt) => {
        setState({ ...state, order: { ...state.order, [evt.target.name]: evt.target.value } });
    };

    return (
        state.datafetch && (
            <>
                <div class="single_breadcrumb pt-25">
                    <div class="container">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to={ROOT}>Home</Link>
                                </li>
                                <li class="breadcrumb-item">
                                    <Link to={PRODUCTS.path}>Products</Link>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    {state.product.name}
                                </li>
                            </ol>
                        </nav>
                        <div class="row pb-160 mb-30 viewcontent__footer border-top-0 border-bottom">
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="row">
                                    {state.product.images.map((img, idx) => (
                                        <div class="col-xl-6 col-lg-6 col-md-6">
                                            <div class="single_preview_product">
                                                <div class="tab-content" id="myTabContent1">
                                                    <div class="tab-pane fade show active" id="home1" role="tabpanel">
                                                        <div class="full-view">
                                                            <a class="popup-image" href={`${process.env.REACT_APP_API_URL}/${img.url}`} target="_blank">
                                                                <img src={`${process.env.REACT_APP_API_URL}/${img.url}`} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div class="d-flex align-items-center mt-80">
                                    <ul>
                                        <li>Category:</li>
                                    </ul>
                                    <ul>
                                        <li className="tags">
                                            {state.product.category.map((cat) => (
                                                <Link to={`${CATEGORISEDPRODUCT.dynamicPath}/${cat._id}`}>
                                                    <span style={{ fontSize: 18 }}>{cat.name}</span>
                                                </Link>
                                            ))}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="single_preview_content pl-30 ">
                                    <h2 class="title-5 edit-title border-bottom-0">{state.product.name}</h2>

                                    <>
                                        {!selectedVariant.nextStep && (
                                            <div className="row pb-15">
                                                <div className="col-sm-12">
                                                    <div className="variant-cont">
                                                        {state.product.variants.map((variant) => (
                                                            <div className="variant" onClick={() => setSelectedVariant(variant)}>
                                                                <div className="variant-name">{variant.name}</div>
                                                                <div className="variant-price">₹ {variant.numericPrice}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div class="s-des caps">
                                            <h5>{state.product.hasVariants ? selectedVariant.details : state.product.description}</h5>
                                        </div>
                                        <div class="s-des">
                                            <h3>{state.product.hasVariants ? selectedVariant.price : state.product.price}</h3>
                                        </div>
                                        {!state.product.hasVariants && localStorage.getItem("_t") && (
                                            <>
                                                <div className="alert alert-info mt-30">Design file size should be less than 15 MB.</div>
                                                {state.product.eyelets && (
                                                    <>
                                                        <h2 className="title-5 border-0">Size</h2>
                                                        <div className="input_wrap">
                                                            <label>Height</label>
                                                            <input
                                                                value={state.order.height}
                                                                name="height"
                                                                onChange={(evt) => valueHandler(evt)}
                                                                placeholder="12, 24, 36"
                                                            />
                                                        </div>
                                                        <div className="input_wrap">
                                                            <label>Width</label>
                                                            <input
                                                                value={state.order.len}
                                                                name="len"
                                                                onChange={(evt) => valueHandler(evt)}
                                                                placeholder="12, 24, 36"
                                                            />
                                                        </div>
                                                    </>
                                                )}
                                                <h2 className="title-5 border-0">Quantity</h2>

                                                <div className="input_wrap">
                                                    <label>Repeat Quantity</label>
                                                    <input
                                                        value={state.order.qty}
                                                        name="qty"
                                                        onChange={(evt) => valueHandler(evt)}
                                                        placeholder="1,2,1000,500"
                                                    />
                                                </div>
                                                <h2 className="title-5 border-0">Design</h2>
                                                {state.alert && <div className="alert alert-danger">{state.alert}</div>}

                                                <div className="input_wrap">
                                                    <label>Design File</label>
                                                    <div
                                                        className="alert"
                                                        onClick={() => {
                                                            document.getElementById("upld").click();
                                                        }}
                                                        style={{ cursor: "pointer" }}
                                                        placeholder="12, 24, 36"
                                                    >
                                                        {state.order.design ? state.order.design.name : "Upload Here"}
                                                    </div>
                                                    <input
                                                        type="file"
                                                        onChange={(evt) => {
                                                            if (!evt.target.files[0])
                                                                return setState({ ...state, alert: "Kindly, Upload Design with Instruction." });
                                                            let arr = evt.target.files[0].type.split("/");
                                                            if (arr[1].toLowerCase() === "pdf") {
                                                                setState({ ...state, order: { ...state.order, design: evt.target.files[0] } });
                                                            } else {
                                                                setState({
                                                                    ...state,
                                                                    alert: "Please Upload CDR file with Instruction and Contact Information. Refer Help and Support for more Details.",
                                                                });
                                                            }
                                                            console.log(evt.target.files[0]);
                                                        }}
                                                        style={{ display: "none" }}
                                                        id="upld"
                                                    />
                                                </div>
                                                <div class="viewcontent__action single_action pt-30">
                                                    <button
                                                        onClick={() => {
                                                            console.log(state.order);
                                                        }}
                                                    >
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </>
                                        )}

                                        {window.localStorage.getItem("_t") ? (
                                            <>
                                                {!selectedVariant.nextStep && state.product.hasVariants && selectedVariant.price && (
                                                    <div class="viewcontent__action single_action pt-30">
                                                        <button onClick={() => setSelectedVariant({ ...selectedVariant, nextStep: true })}>Next</button>
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <div class="viewcontent__action single_action pt-30">
                                                <span>
                                                    <Link to={SIGNIN.path}>Sign In/Register</Link>
                                                </span>
                                            </div>
                                        )}
                                    </>
                                    {selectedVariant.nextStep && (
                                        <>
                                            <div class="viewcontent__action single_action pt-30">
                                                <button onClick={() => setSelectedVariant({ ...selectedVariant, nextStep: false })}>Back</button>
                                            </div>
                                            <div className="alert alert-info mt-30">Design file size should be less than 15 MB.</div>
                                            {state.product.eyelets && (
                                                <>
                                                    <h2 className="title-5 border-0">Size</h2>
                                                    <div className="input_wrap">
                                                        <label>Height</label>
                                                        <input
                                                            value={state.order.height}
                                                            name="height"
                                                            onChange={(evt) => valueHandler(evt)}
                                                            placeholder="12, 24, 36"
                                                        />
                                                    </div>
                                                    <div className="input_wrap">
                                                        <label>Width</label>
                                                        <input
                                                            value={state.order.len}
                                                            name="len"
                                                            onChange={(evt) => valueHandler(evt)}
                                                            placeholder="12, 24, 36"
                                                        />
                                                    </div>
                                                </>
                                            )}
                                            <h2 className="title-5 border-0">Quantity</h2>

                                            <div className="input_wrap">
                                                <label>Repeat Quantity</label>
                                                <input value={state.order.qty} name="qty" onChange={(evt) => valueHandler(evt)} placeholder="1,2,1000,500" />
                                            </div>
                                            <h2 className="title-5 border-0">Design</h2>
                                            {state.alert && <div className="alert alert-danger">{state.alert}</div>}

                                            <div className="input_wrap">
                                                <label>Design File</label>
                                                <div
                                                    className="alert"
                                                    onClick={() => {
                                                        document.getElementById("upld").click();
                                                    }}
                                                    style={{ cursor: "pointer" }}
                                                    placeholder="12, 24, 36"
                                                >
                                                    {state.order.design ? state.order.design.name : "Upload Here"}
                                                </div>
                                                <input
                                                    type="file"
                                                    onChange={(evt) => {
                                                        if (!evt.target.files[0])
                                                            return setState({ ...state, alert: "Kindly, Upload Design with Instruction." });
                                                        let arr = evt.target.files[0].type.split("/");
                                                        if (arr[1].toLowerCase() === "pdf") {
                                                            setState({ ...state, order: { ...state.order, design: evt.target.files[0] } });
                                                        } else {
                                                            setState({
                                                                ...state,
                                                                alert: "Please Upload CDR file with Instruction and Contact Information. Refer Help and Support for more Details.",
                                                            });
                                                        }
                                                        console.log(evt.target.files[0]);
                                                    }}
                                                    style={{ display: "none" }}
                                                    id="upld"
                                                />
                                            </div>
                                            <div class="viewcontent__action single_action pt-30">
                                                <button onClick={() => console.log(state.order)}>Add to cart</button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default SoloProduct;
