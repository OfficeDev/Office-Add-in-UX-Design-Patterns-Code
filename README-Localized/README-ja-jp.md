# Office アドインの UX 設計パターン。 

このリポジトリは、Office アドインの共通 UX 設計パターンの HTML および CSS のサンプル実装を提供します。

Office アドインを設計する場合、作成するアドインの UX 設計は、Office を拡張する魅力的なエクスペリエンスを提供する必要があります。優れたアドインを作成するために、アドインは初回実行時エクスペリエンス、ファーストクラスの UX エクスペリエンス、ページ間のスムーズな移動などを提供する必要があります。クリーンでモダンな UX エクスペリエンスを提供すると、ユーザーによるアドインの保持や採用が増加します。このレポートは、以下の開発者のための UX リソースが提供されます。

* ベスト プラクティスに基づく共通 UX 設計パターン。
* Office のファブリック コンポーネントとスタイル。
* 既定の Office UI の自然な拡張機能に見えるアドイン。 

> 重要事項:要件を満たすようにこれらの設計パターンをカスタマイズした後、アドインが使用可能となるすべてのプラットフォームでアドインのテストを実行してください。これらの UX 設計パターンは、Office 2016 と Windows 10 を使用してテストされました。

## これらのリソースを使用して作業を開始する方法

これらの設計やコード リソースを使用するための前提条件はありません。アドイン用に優れた UX の作成を開始するには、以下を実行します。

* UX 設計パターンを確認して、アドインに重要なパターンを識別します。たとえば、最初の実行エクスペリエンスの 1 つを選択します。
* 次に、今のいずれかの操作を実行します。
	* コード ファイルをアドイン プロジェクトにコピーして、要件を満たすようにカスタマイズします。選択した設計パターンの [assets フォルダー](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets)、およびコード フォルダーが必要です。次のリンクを参照してください。
	* 仕様を参照して、ユーザー独自の UX 設計を作成する際のガイドとして使用します。次のリンクを参照してください。
	* Adobe Illustrator ファイルをダウンロードして、ユーザー独自のアドイン設計を模擬表示するように編集します。ファイルは[ここから](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files)ダウンロードできます。

## 全般

* **ランディング (または汎用) ページ**は、標準のアドイン ページです。ユーザーがランディング ページにリダイレクトされるのは、初回実行時エクスペリエンスの後の場合と、サインイン プロセスの後の場合があります。([仕様](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Standard_Layout.pdf "PDF")、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page)) 
* **ブランド バーのブランド イメージ**は、フッターに自分のブランドを表す画像を付加したランディング ページです。([仕様](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Brand_Bar.md), 、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar))

<table>
 <tr><th>ランディング</th><th>ブランド バー</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/landing.page.PNG" alt="landing page" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/brand.bar.PNG" alt="brand bar" style="width:264px;"/></A></td></tr>
 </table>

## 初回実行時

初回実行時エクスペリエンスは、最初にアドインを開いたときにユーザーが持つエクスペリエンスです。次の一覧は、アドインに含めることができる初回実行時の設計パターンです。その下に、設計パターンの各画像を示します。

* **開始手順**: アドインの使用を開始する手順の、順序付きリストをユーザーに提供します。([仕様](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_StepsToStart.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step))
* **価値**: アドインの価値提供を明確にします。([仕様](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_ValuePlacemat.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat))
* **ビデオ**: アドインの使用を開始する前に、ユーザーにビデオを表示します。([仕様](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_VideoPlacemat.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat))
* **チュートリアル**: アドインの使用を開始する前に、ユーザーに一連の機能または情報を体験させます。([仕様](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_PagingPanel.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough))
* [Office ストア](https://msdn.microsoft.com/ja-jp/library/office/jj220033.aspx)には、アドインの試用版を管理するシステムが存在しますが、アドインの試用版エクスペリエンスの UI を自分で管理したい場合は、次のパターンを使用します。

	* **試用**: アドインの試用版で開始する方法をユーザーに示します。([仕様](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_TrialVersion.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat))
	* **試用版の機能**: ユーザーが試用を考えている機能がアドインの試用版では使用できないことをユーザーに示します。また、アドインは無料であるものの、サブスクリプションを必要とする機能がある場合は、このパターンの使用を検討する必要があります。さらに、このパターンを使用して、試用期間が終了した後にダウングレードしたエクスペリエンスを提供することも検討できます。([コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature))

> 重要事項:自分で試用版を管理し、試用版を管理するために Office ストアを使用しないと決定した場合、販売者ダッシュボードのテスト用メモに **[追加購入が必要になる場合があります]** タグを必ず組み込んでください。

ユーザーに初回実行時エクスペリエンスを 1 回示すか、何回も示すかを検討することがシナリオにとって重要かどうかを検討します。たとえば、ユーザーがアドインを間隔を空けて使用する場合、ユーザーがアドインの使用方法を忘れる可能性があります。これらのユーザーには、初回実行時エクスペリエンスを再度表示すると役に立つ可能性があります。 

 <table>
 <tr><th>開始手順</th><th>価値</th><th>ビデオ</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/instruction.step.PNG" alt="instruction steps" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/value.placemat.PNG" alt="value placemat" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/video.placemat.PNG" alt="video placemat" style="width:264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>チュートリアルの最初のページ</th><th>試用</th><th>試用版の機能</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/walkthrough1.PNG" alt="walkthrough 1" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.PNG" alt="trial placemat" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.feature.PNG" alt="trial placemat feature" style="width:264px;"/></A></td></tr>
 </table> 

## 通知

アドインがユーザーにエラーなどのイベントや進展を通知する方法は、いろいろあります。これらの方法を次に示します。その下に、設計パターンの各画像を示します。

* **埋め込みダイアログ**: ボタンまたはその他のコントロールを使用して、情報や必要に応じて対話型エクスペリエンスを提供するダイアログを作業ウィンドウ内に表示します。ユーザーにアクションの確認を促す場合にこれを使うことを検討できます。([仕様](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Embedded_Dialog.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog))
* **インライン メッセージ**: エラー、成功、情報を示します。メッセージは作業ウィンドウ内の指定した場所に表示できます。たとえば、ユーザーがテキスト ボックスに入力した電子メール アドレスの書式が間違っている場合、テキスト ボックスの下にエラー メッセージが表示されます。([仕様](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Notification_Inline_Message.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message))
* **メッセージ バナー**: 単一の行に折りたたんだり、複数の行に展開したり、非表示にできるバナーで、情報や場合によっては簡単なアクションの呼びかけを提供します。アドインを開始するときに、メッセージ バナーを使用して、サービスの更新または役に立つヒントを報告することを検討できます。([仕様](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_MessageBanner.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner))
* **進行状況バー**: ユーザーが以降のアクションを行う前に完了する必要がある、実行時間の長い、同期プロセス (構成タスクなど) の進行状況を示します。これは別のスポット ページであり、アドインのブランド化を強化します。進行状況バーは、アドインに戻るまでに後どれだけかかるかの尺度をプロセスが定期的に送信できる場合に使用します。([仕様](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar))
* **スピナー**: 実行時間の長い、同期プロセスが進行中であることを示しますが、どの程度進んでいるのかは示しません。これは別のスポット ページであり、アドインのブランド化を強化します。スピナーは、プロセスがどの程度進んでいるかをアドインが確実に知ることができない場合に使用します。([仕様](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner))
* **トースト**: 数秒で消える簡単なメッセージを提供します。ユーザーがメッセージに気づかない場合があるため、トーストは重要ではない情報にのみ使用します。これは、電子メールの受信など、リモート システムでユーザーにイベントを通知する場合に良い方法です。([仕様](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Toast.md)、[コード](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast))

 <table>
 <tr><th>埋め込みダイアログ</th><th>インライン メッセージ</th><th>メッセージ バナー</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/embedded.dialog.PNG" alt="embedded dialog" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/inline.message.PNG alt="inline message" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/message.banner.PNG" alt="message banner" style="width:264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>進行状況バー</th><th>スピナー</th><th>トースト</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/progress.bar.PNG" alt="progress bar" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/spinner.PNG" alt="spinner" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/toast.PNG" alt="toast" style="width:264px;"/></A></td></tr>
 </table>

## コンポーネント

以下に、さまざまなシナリオで使用できるアドインのその他のコンポーネントを示します。  

### クライアント ダイアログ

クライアント ダイアログは、ユーザーがアドインで操作できる別の方法を提供します。 

* **警告ダイアログ**は、ユーザーが制御できないエラーや通知などの重要な情報を含む警告ボックスを表示します。
* **Typeramp ダイアログ**は、テキスト コンテンツを含むダイアログ ボックスを表示します。Typeramp ダイアログを使用して、詳細な情報をユーザーに表示します。
* **ナビゲーション ダイアログ**は、ナビゲーションを含むダイアログ ボックスを表示します。ナビゲーション ダイアログを使用すると、ユーザーは異なるコンテンツ間を移動できます。

<table>
 <tr><th>警告ダイアログ</th><th>Typeramp ダイアログ</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/alert"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/alert.dialog.png" alt="alert dialog" style="width:264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/typeramp"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/typeramp.dialog.png" alt="typeramp dialog" style="width:300px;"/></A></td></tr></tr>
 </table>
 
 <table>
 <tr><th>ナビゲーション ダイアログ</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/navigation"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/navigation.dialog.png" alt="navigation dialog" style="width: 264px;"/></A></td></tr>
</tr>
 </table>


### フィードバックおよび評価

アドインの可視性と導入を向上させるため、Office ストアでユーザーがアドインの評価およびレビューを行える機能を提供する必要があります。このパターンでは、以下を使用して、フィードバックおよび評価オプションをユーザーに提供する方法を示します。
- プロンプトなしのフィードバック - フッターのナビゲーション メニューまたはアイコンを使用します。
- プロンプトありのフィードバック - アドインが 3 回実行されると、ユーザーにフィードバックを求めるメッセージが表示されます。

 <table>
 <tr><th>評価とフィードバック</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/feedback/office-store"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/feedback.ratings.PNG" alt="Feedback and Ratings" style="width: 200px;"/></A></td></tr>
</tr>
 </table>

## 既知の問題

* アドイン プロジェクトの外部でコード ファイルを実行すると、JavaScript エラーがスローされます。 
	* 解決方法:これらのファイルが Office アドイン プロジェクトに追加されていることを確認します。 
* これらの設計パターンを単一ページ アプリ (SPA) に変換すると、HTML ページのすべてのセクションが上詰めになり、互いに重なってしまいます。 
	* 解決方法:HTML から変換する場合、追加のラッパー DIV を追加できます。これら追加した DIV の高さが正しくリセットされることを確認します。たとえば、親 DIV を高さ 100%、子 DIV を高さなし、孫 DIV を 100% に設定した場合、子 DIV を 100% に設定し、セクションのレイアウトを適切に設定する必要があります。    
	
## その他の技術情報

* [Office アドインの設計のベスト プラクティス](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI ファブリック](http://dev.office.com/fabric/)。このプロジェクトは、バージョン 2.1.0 を使用します。

このプロジェクトでは、[Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/) が採用されています。詳細については、「[規範に関する FAQ](https://opensource.microsoft.com/codeofconduct/faq/)」を参照してください。または、その他の質問やコメントがあれば、[opencode@microsoft.com](mailto:opencode@microsoft.com) までにお問い合わせください。

Copyright (c) Microsoft Corporation 2016. All rights reserved.



