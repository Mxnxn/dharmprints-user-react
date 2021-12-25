export const classVerifier = (id) => {
    const obj = document.getElementById(id).classList;
    let temp = [...obj];
    if (temp.length > 0) {
        const idx = temp.findIndex((el) => el === "show");
        if (idx !== -1) {
            return false;
        } else {
            return true;
        }
    }
};

export const classManager = (id, toAdd) => {
    const obj = document.getElementById(id).classList;
    let temp = [...obj];
    if (temp.length > 0) {
        const idx = temp.findIndex((el) => el === toAdd);
        if (idx !== -1) {
            return obj.remove(toAdd);
        } else {
            return obj.add(toAdd);
        }
    }
};

function contains(x, y, sizes) {
    return sizes.findIndex((el) => el === Number(x) || el === Number(y)) === -1 ? false : true;
}

export const getPrice = (input1, input2, sizes) => {
    let bx = Number(input1) / 12;
    let by = Number(input2) / 12;
    for (let i = 0; i < sizes.length; i++) {
        // console.log("Length -> ", bx, "| Fix ->", fix[i], `| ${bx} < ${fix[i]} ->`, bx < fix[i], "| Difference -> ", fix[i] - bx, Math.abs(fix[i] - bx) <= 1);
        if (contains(bx, by, sizes)) break;
        if (bx < sizes[i] && Math.abs(sizes[i] - bx) <= 1) {
            bx = sizes[i];
            break;
        }
        if (by < sizes[i] && sizes[i] - by <= 1) {
            by = sizes[i];
            break;
        }
        if (Math.abs(sizes[i] - bx) <= 2 && Math.abs(sizes[i] - by) <= 2) {
            if (bx < by) by = 3;
            else bx = 3;
            break;
        }
    }
    console.log(bx, by);
    return Number(bx * by);
};

//! DATE RELATED
const setHours = (hour) => {
    return hour > 10 ? hour : `0${hour}`;
};

export const getDate = (dt) => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const date = new Date(dt);
    const dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const mm = months[date.getMonth()];
    const year = date.getFullYear();
    const HH = date.getHours() > 12 ? setHours(date.getHours() % 12) : setHours(date.getHours());
    const MM = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const SS = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    const ampm = date.getHours() > 12 ? "PM" : "AM";
    return `${HH}:${MM}:${SS} ${ampm} ${dd} ${mm}, ${year}`;
};

export const setDate = (dt) => {
    const date = new Date(dt);
    const dd = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const mm = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    const year = date.getFullYear();

    return `${year}-${mm}-${dd}`;
};

export const GlobalLogout = () => {
    localStorage.removeItem("_u");
    localStorage.removeItem("_t");
    localStorage.removeItem("_e");
};
