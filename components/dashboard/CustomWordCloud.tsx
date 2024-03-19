import { useTheme } from "next-themes";
import D3WordCloud from "react-d3-cloud";

const data = [
    {
        text: 'nigga',
        value: 10
    }
]

const CustomWordCLoud = () => {

    const theme = useTheme()

    const fontSizeMapper = (word: { value: number }) =>
        Math.log2(word.value) * 5 + 16;

    return (
        <div>
            <D3WordCloud
                data={data}
                height={550}
                font="Times"
                fontSize={fontSizeMapper}
                rotate={0}
                padding={10}
                fill={theme.theme === "dark" ? "white" : "black"} 
            />
        </div>
    );
}

export default CustomWordCLoud;