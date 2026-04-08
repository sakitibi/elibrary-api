window.decodeDoubleForCpp = function(base64) {
    try {
        const d = (b) => {
            const bin = atob(b.replace(/\s/g, ''));
            const bytes = new Uint8Array(bin.length);
            for (let i = 0; i < bin.length; i++) {
                bytes[i] = bin.charCodeAt(i);
            }
            return new TextDecoder("utf-8").decode(bytes);
        };
        // 2回実行して結果を返す
        return d(d(base64));
    } catch (e) {
        console.error("Decode Error:", e);
        return "Decode Error";
    }
};
// C++ インスタンスの作成
Module.onRuntimeInitialized = () => {
    window.quiz = new Module.QuizSystem();

    // 1. ページ読み込み時にルーティングを実行
    window.quiz.handleRouting();
    
    // 2. セッションやクイズ選択を監視するループを開始
    setInterval(() => {
        window.quiz.checkSession();
    }, 50);
};