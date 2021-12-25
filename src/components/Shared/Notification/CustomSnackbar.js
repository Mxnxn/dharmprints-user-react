import React from "react";

import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useState } from "react";
import SnackMessage from "./Snackbar";

const useCustomSnackbar = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [state, setState] = useState({
        head: "",
        message: "",
        variant: true,
    });

    useEffect(() => {
        if (state.head && state.message)
            enqueueSnackbar(state.message, {
                autoHideDuration: 2500,
                content: (key) => <SnackMessage variant={state.variant} key={key} message={state.message} head={state.head} />,
            });
        else if (state.head && state.message)
            enqueueSnackbar(state.message, {
                autoHideDuration: 5000,
                content: (key) => <SnackMessage variant={state.variant} key={key} message={state.message} head={state.head} />,
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return (value) => setState({ head: value.head, variant: !!value.variant, message: value.message });
};

export default useCustomSnackbar;
