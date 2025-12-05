type Props = {
    ticker: string;
    width?: number;
    height?: number;
};

const colorMap: Record<string, string> = {
    MSFT: "#006f98",
    NFLX: "#E50914",
    GOOGL: "#4285F4",
    AAPL: "#909191",
    TSLA: "#CC0000",
    IBM: "#0033A0",
    ORCL: "#F80000",
    AMZN: "#ce8003",
};

export default function Sym({ ticker, width, height }: Props) {
    const upper = ticker.toUpperCase();
    const bg = colorMap[upper] || "#444"; // fallback if unknown

    const w = width ?? 48;
    const h = height ?? 48;

    return (
        <div
            className="flex items-center justify-center rounded-full text-white font-bold select-none text-xs"
            style={{
                width: w,
                height: h,
                backgroundColor: bg,
            }}
        >
            {upper}
        </div>
    );
}
