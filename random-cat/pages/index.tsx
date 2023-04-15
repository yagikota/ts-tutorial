import { NextPage } from "next";
import { useEffect, useState } from "react";

// TODO: アロー関数と関数宣言について調べる
const IndexPage: NextPage = () => {
    // ❶ useStateを使って状態を定義する
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(true);
    // ❷ マウント時に画像を読み込む宣言
    useEffect(() => {
        fetchImage().then((newImage) => {
            setImageUrl(newImage.url); // 画像URLの状態を更新する
            setLoading(false); // ローディング状態を更新する
        });
    }, []); // 第2引数はどのタイミングで処理内容を実行するかの指定
    // ❸ ローディング中でなければ、画像を表示する
    return <div>{loading || <img src={imageUrl} />}</div>;
};
export default IndexPage;

type Image = {
    url: string;
};
// MEMO: async/await: 非同期処理をより同期処理と同じような文脈で書くことができる
const fetchImage = async (): Promise<Image> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await res.json();
    console.log(images);
    return images[0];
};

fetchImage().then((image) => {
    console.log(image.url);
});
