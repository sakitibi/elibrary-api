window.decodeBase64Unicode = function(base64) {
    try {
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return new TextDecoder("utf-8").decode(bytes);
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