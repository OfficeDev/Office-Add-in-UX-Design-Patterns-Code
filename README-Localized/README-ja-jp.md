# Office アドインの UX 設計パターン 

このリポジトリは、Office アドイン用の共通 UX 設計パターンの HTML、CSS、JavaScript のサンプル実装を提供します。

Office アドインを設計する場合、作成するアドインの UX 設計は、Office を拡張する魅力的なエクスペリエンスを提供する必要があります。たとえば、アドインは初回実行時エクスペリエンス、ファーストクラスの UX エクスペリエンス、ページ間のスムーズな移動などを提供する必要があります。クリーンでモダンな UX エクスペリエンスを提供すると、ユーザーによるアドインの保持や採用が増加します。このリポジトリは、以下を実装する開発者のための UX リソースを提供します。

* ベスト プラクティスに基づく共通 UX 設計パターン。
* Office のファブリック コンポーネントとスタイル。
* 既定の Office UI の自然な拡張機能に見えるアドイン。 

使用可能な UX 設計パターン概要と種類については、「[Office アドイン用の UX 設計パターン テンプレート](https://dev.office.com/docs/add-ins/design/ux-design-patterns)」を参照してください。

> 重要事項:要件を満たすようにこれらの設計パターンをカスタマイズした後、アドインが使用可能となるすべてのプラットフォームでアドインのテストを実行してください。これらの UX 設計パターンは、Office 2016 と Windows 10 を使用してテストされました。

## UX 設計パターンの使用

[UX デザイナー仕様](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files)を独自の UX 設計を作成する際のガイドとして使用することも、[ソース コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates)をプロジェクトに直接追加することもできます。ソース コードを追加するには、次のようにします。

1. このリポジトリの複製を作成します。 
2. [資産フォルダー](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets)と、アドイン プロジェクトに対して選ぶ個々のパターンのコード フォルダーをコピーします。  
3. 個々のパターンをアドインに組み込みます。たとえば次のようにします。
	- マニフェスト内で、ソースの場所またはアドイン コマンドの URL を編集します。
	- 他のページのテンプレートとして、UX 設計パターンを使用します。
	- UX 設計パターンとの間にリンクを設定します。

## 既知の問題

* アドイン プロジェクトの外部でコード ファイルを実行すると、JavaScript エラーがスローされます。 
	* 解決方法:これらのファイルが Office アドイン プロジェクトに追加されていることを確認します。 
* これらの設計パターンを単一ページ アプリ (SPA) に変換すると、HTML ページのすべてのセクションが上詰めになり、互いに重なってしまいます。 
	* 解決方法:HTML から変換する場合、追加のラッパー DIV を追加できます。これら追加した DIV の高さが正しくリセットされることを確認します。たとえば、親 DIV を高さ 100%、子 DIV を高さなし、孫 DIV を 100% に設定した場合、子 DIV を 100% に設定し、セクションのレイアウトを適切に設定する必要があります。    
	
## その他の技術情報

* [Office アドインの設計のベスト プラクティス](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI ファブリック](http://dev.office.com/fabric/)。このプロジェクトは、バージョン 2.1.0 以降を使用します。

このプロジェクトでは、[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) が採用されています。詳細については、「[規範に関する FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。または、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までにお問い合わせください。

Copyright (c) Microsoft Corporation 2016. All rights reserved.



