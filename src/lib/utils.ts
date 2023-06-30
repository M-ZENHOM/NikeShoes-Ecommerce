import axios from 'axios';
import confetti from 'canvas-confetti';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const isClient = typeof window === 'object';

export const fetcher = (url: string): Promise<any> =>
    axios.get(url).then((res) => res.data) as Promise<any>;

export const shootFireworks = () => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const interval: ReturnType<typeof setInterval> = setInterval(async () => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        await confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
            })
        );
        await confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}



export const notifyMsg = (msg: string) => {
    toast.success(msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

    });
};