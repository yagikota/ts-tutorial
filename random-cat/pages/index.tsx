import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "./index.module.css";

// getServerSidePropsから渡されるpropsの型
type Props = {
    initialImageUrl: string;
};

// TODO: アロー関数と関数宣言について調べる
const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
    // ❶ useStateを使って状態を定義する
    const [imageUrl, setImageUrl] = useState(initialImageUrl);
    const [loading, setLoading] = useState(true);
    // ❷ マウント時に画像を読み込む宣言
    // useEffect(() => {
    //     fetchImage().then((newImage) => {
    //         setImageUrl(newImage.url); // 画像URLの状態を更新する
    //         setLoading(false); // ローディング状態を更新する
    //     });
    // }, []); // 第2引数はどのタイミングで処理内容を実行するかの指定

    const handleClick = async () => {
        setLoading(true); // 読込中フラグを立てる
        const newImage = await fetchImage();
        setImageUrl(newImage.url); // 画像URLの状態を更新する
        setLoading(false); // 読込中フラグを倒す
    };
    return (
        <div className={styles.page}>
            <button
                onClick={handleClick}
                style={{
                    backgroundColor: "#319795",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
                    padding: "4px 8px",
                }}
            >
                きょうのにゃんこ🐱
            </button>
            <div className={styles.frame}>
                {loading || <img src={imageUrl} className={styles.img} />}
            </div>
        </div>
    );
};
export default IndexPage;

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const image = await fetchImage();
    return {
        props: {
            initialImageUrl: image.url,
        },
    };
};

type Image = {
    url: string;
};
// MEMO: async/await: 非同期処理をより同期処理と同じような文脈で書くことができる
const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images: unknown = await res.json();
    if (!Array.isArray(images)) {
        throw new Error("猫の画像が取得できませんでした");
    }
    const image: unknown = images[0];
    // Imageの構造をなしているか？
    if (!isImage(image)) {
        throw new Error("猫の画像が取得できませんでした");
    }
    return image;
};

// TODO: 型ガード関数について調べる
const isImage = (value: unknown): value is Image => {
    // 値がオブジェクトなのか？
    if (!value || typeof value !== "object") {
        return false;
    }
    // urlプロパティが存在し、かつ、それが文字列なのか？
    return "url" in value && typeof value.url === "string";
};

fetchImage().then((image) => {
    console.log(image.url);
});
