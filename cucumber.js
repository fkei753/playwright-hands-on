module.exports = {
  default: {
    require: ["features/step_definitions/*.ts"], // ステップ定義
    requireModule: ["ts-node/register"],        // ts-nodeでTypeScriptを実行
    paths: ["features/**/*.feature"],           // featureファイルの場所
    publishQuiet: true,
    format: ["progress", "html:reports/report.html"]
  }
};
