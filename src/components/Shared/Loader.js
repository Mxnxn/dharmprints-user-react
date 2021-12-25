const Loader = (props) => {
    return (
        <svg version="1.1" id="L5" x="0px" y="0px" viewBox="0 0 100 100" height="200" enableBackground="new 0 0 0 0">
            <circle fill="#2bb9a9" stroke="none" cx="6" cy="50" r="6">
                <animateTransform attributeName="transform" dur="1s" type="translate" values="0 20 ; 0 -20; 0 20" repeatCount="indefinite" begin="0.1" />
            </circle>
            <circle fill="#2bb9a9" stroke="none" cx="30" cy="50" r="6">
                <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.2" />
            </circle>
            <circle fill="#2bb9a9" stroke="none" cx="54" cy="50" r="6">
                <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.3" />
            </circle>
        </svg>
    );
};

export default Loader;
