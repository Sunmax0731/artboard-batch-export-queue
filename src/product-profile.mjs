export const productProfile = {
  "repository": "artboard-batch-export-queue",
  "title": "アートボード一括書き出しキュー",
  "domain": "AdobePlugin",
  "hostApp": "Illustrator",
  "rank": 25,
  "ideaNo": 5,
  "overview": "SNS、BOOTH、資料用など用途別に形式、倍率、命名、出力先をプリセット化する。",
  "problem": "用途別サイズを書き出すたびに設定し直す手間がある。",
  "differentiation": "書き出し前プレビュー、命名規則、用途メモ、再実行履歴を同じキューに残す。",
  "publish": "BOOTH / GitHub Release",
  "surface": "Illustrator ExtendScript + ScriptUI",
  "entity": "artboard export job",
  "requiredFields": [
    "id",
    "title",
    "source",
    "artboard",
    "preset",
    "destination",
    "owner",
    "acceptance"
  ],
  "warningField": "namingRule",
  "benchmarkRepos": [
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/git-release-publish-assistant",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
