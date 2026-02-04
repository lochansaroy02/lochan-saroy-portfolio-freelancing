import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
const Leetcode = () => {



    const src = `![LeetCode Stats](https://leetcard.jacoblin.cool/lochansaroy14?theme=dark&font=Noto%20Sans%20Tai%20Le&ext=heatmap)`;

    return (
        <ReactMarkdown remarkPlugins={[gfm]} children={src} />
    )
}

export default Leetcode