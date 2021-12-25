import { useEffect } from "react";
import anime from "animejs";
const Contact = (prop) => {
    useEffect(() => {
        let animeVar = anime.timeline({
            easing: "easeOutSine",
        });
        animeVar
            .add({
                targets: ".dashboard-h2-wrapper h2",
                translateY: [60, 0],
                opacity: [0, 1],
                duration: 500,
            })
            .add({
                targets: ".dashboard-p-wrapper p",
                opacity: [0, 1],
                translateY: [50, 0],
                duration: 500,
            })
            .add({
                targets: ".contact-wrapper",
                translateY: [100, 0],
                opacity: [0, 1],
                duration: 400,
            });
    }, []);

    return (
        <>
            {" "}
            <div class="contact__area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12">
                            <div class="contact__content text-center mb-140">
                                <div className="dashboard-h2-wrapper" style={{ height: 92, overflow: "hidden" }}>
                                    <h2>Contact Us</h2>{" "}
                                </div>
                                <div className="dashboard-p-wrapper" style={{ height: 52, overflow: "hidden" }}>
                                    <p>
                                        For me, the most important part of improving at photography has been sharing it. Sign up for an Exposure account, or{" "}
                                        <br /> post regularly to Tumblr, or both. Tell people you’re trying to get better at photography.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact-wrapper">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-6">
                                <div class="contactbox">
                                    <div class="contactbox__heading">
                                        <h5>Contact us</h5>
                                        <h2>
                                            Please contact us quickly if <br />
                                            you need help.
                                        </h2>
                                    </div>
                                    <div class="contactbox__info pt-20">
                                        <h5>NewYork Add:</h5>
                                        <ul>
                                            <li>S9 Heaven Stress, Beverly Hill, Melbourne, USA.</li>
                                            <li>Open: 9:30 am – 9:00 pm</li>
                                        </ul>
                                    </div>
                                    <div class="contactbox__info pt-20">
                                        <h5>London</h5>
                                        <ul>
                                            <li>S9 Heaven Stress, Beverly Hill, Melbourne, USA.</li>
                                            <li>Open: 9:30 am – 9:00 pm</li>
                                        </ul>
                                    </div>
                                    <div class="contactbox__info pt-20">
                                        <h5>Contacts Email:</h5>
                                        <ul>
                                            <li>Agota@erentheme.com Phone</li>
                                            <li>
                                                <a href="tel:(+100)123456789">(+100) 123 456 789</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12 col-md-6">
                                <div class="form">
                                    <h5>write to us</h5>
                                    <form action="#" method="POST">
                                        <div class="c-input-group">
                                            <label>Your Email (required)</label>
                                            <input type="text" />
                                        </div>
                                        <div class="c-input-group">
                                            <label>Subject</label>
                                            <input type="text" />
                                        </div>
                                        <div class="c-input-group">
                                            <label>Your Message</label>
                                            <textarea name="message"></textarea>
                                        </div>
                                        <div class="submit-btn">
                                            <input type="submit" value="Send" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="map__area">
                <div class="google-map contact-map">
                    <iframe
                        class="w-100"
                        height="800"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.504393688501!2d73.1974457!3d22.3110703!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68f1e59ee76d48f!2sManan%20graphics!5e0!3m2!1sen!2sin!4v1638599444601!5m2!1sen!2sin"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default Contact;
