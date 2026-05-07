# artboard-batch-export-queue

アートボード一括書き出しキュー は、SNS、BOOTH、資料用など用途別に形式、倍率、命名、出力先をプリセット化する。

## 何を解決するか

用途別サイズを書き出すたびに設定し直す手間がある。

## 差別化

書き出し前プレビュー、命名規則、用途メモ、再実行履歴を同じキューに残す。

## 公開先

- BOOTH / GitHub Release

## 現在の到達点

- core / validators / report / review-model / CLI に責務を分割済み
- Illustrator ExtendScript + ScriptUI の最小実装または配布用骨格を同梱済み
- 代表シナリオ `samples/representative-suite.json` で正常系、必須項目不足、warning、混在バッチを自動検証済み
- 厳格 QCDS は Quality、Cost、Delivery、Satisfaction の全観点 S+ で評価済み
- docs ZIP は `dist/artboard-batch-export-queue-docs.zip`

## 主要コマンド

```powershell
npm test
npm start
```

## 重要ドキュメント

- [要件定義](docs/requirements.md)
- [仕様](docs/specification.md)
- [設計](docs/design.md)
- [手動テスト](docs/manual-test.md)
- [厳格手動テスト追補](docs/strict-manual-test-addendum.md)
- [QCDS評価](docs/qcds-evaluation.md)
- [厳格QCDS metrics](docs/qcds-strict-metrics.json)
- [トレーサビリティ](docs/traceability-matrix.md)

## 参照したアイデアパック

- created_idea: `D:\AI\AdobePlugin\created_idea_005_artboard-batch-export-queue`
- idea ZIP: `D:\AI\AdobePlugin\created_idea_005_artboard-batch-export-queue\idea_005_artboard-batch-export-queue.zip`
- PICKUP rank: 25
- Domain: AdobePlugin
- Adobe host: Illustrator
