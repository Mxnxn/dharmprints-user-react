import anime from "animejs"

export const animeFadeInLeft = () => {
    anime({
        targets:".animeFadeInLeft",
        duration:1200,
        translateX: [-300,0],
        opacity:[0,1],
        delay:anime.stagger(400),
    })
}
