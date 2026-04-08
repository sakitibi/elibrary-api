window.decodeBase64Unicode = function(base64) {
    const bytes = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
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