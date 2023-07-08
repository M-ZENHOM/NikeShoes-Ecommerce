import axios, { AxiosResponse } from 'axios';
import confetti from 'canvas-confetti';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const fetcher = async <T>(url: string): Promise<T> => {
    const res: AxiosResponse<T> = await axios.get(url);
    return res.data;
};

export function formatPrice(price: number, currency: string) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
    }).format(price)
}

export function formatOrdarImg(str: string) {
    return str.replace(/\[|\]/g, "").replace(/"/g, '')
}
export function formatMillisecondsToDays(milliseconds: number) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24) + " days";
    return days;
}

export const shootFireworks = (): void => {
    const duration = 15 * 100;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.2, 0.4), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.6, 0.8), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}



export const notifyMsg = (msg: string): void => {
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