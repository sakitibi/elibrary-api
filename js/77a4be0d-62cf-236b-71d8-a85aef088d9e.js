window.decodeBase64Unicode = function(base64) {
    try {
        console.log("b64 input: ", base64);
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        const decoded = new TextDecoder("utf-8").decode(bytes);
        console.log("b64 decoded: ", decoded);
        return decoded;
    } catch (e) {
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