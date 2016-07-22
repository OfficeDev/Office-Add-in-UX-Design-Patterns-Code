# Padrões de design da experiência do usuário para suplementos do Office. 

Esse repositório fornece implementações de exemplo em HTML e CSS de padrões de design de experiência do usuário comuns para suplementos do Office.

Quando você projeta Suplementos do Office, o design da experiência do usuário do suplemento deve fornecer experiências atraentes que estendam o Office. Para a criação de um ótimo suplemento, ele deve fornecer uma tela de apresentação, uma experiência do usuário de primeira classe e transições suaves entre as páginas, entre outros itens. Fornecer uma experiência do usuário simples e moderna aumenta a retenção de usuários e a adoção do suplemento. Este relatório tem recursos da experiência do usuário para desenvolvedores que implementam:

* Padrões de design comuns da experiência do usuário com base nas práticas recomendadas.
* Estilos e componentes do Office Fabric.
* Suplementos que parecem uma extensão natural da interface do usuário padrão do Office. 

> Importante: Após personalizar esses padrões de design para atender às suas necessidades, lembre-se de testar seu suplemento em todas as plataformas onde seu suplemento estará disponível. Esses padrões de design da experiência do usuário foram testados usando o Office 2016 e Windows 10.

## Como faço para começar a usar esses recursos?

Não existem pré-requisitos para usar esses recursos de design ou código. Para começar a criar uma ótima experiência do usuário para o suplemento:

* Examine os padrões de design da experiência do usuário e identifique quais deles são importantes para o suplemento. Por exemplo, selecione uma das telas de apresentação.
* Depois, siga um ou mais destes procedimentos:
	* Copie os arquivos de código para o projeto de suplemento e comece a personalizá-los para atender a seus requisitos. Será necessária a [pasta ativos](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets) e a pasta de código para o padrão de design escolhido. Veja os links abaixo.
	* Veja as especificações e use-as como um guia ao criar seu próprio design de experiência do usuário. Veja os links abaixo.
	* Baixe os arquivos do Adobe Illustrator e edite-os para simularem seus próprios designs de suplemento. Obtenha-os [aqui](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files).

## Geral

* 
            A **página de chegada (ou genérica)** é uma página de suplemento padrão. Os usuários podem ser redirecionados a uma página de chegada após uma tela de apresentação ou processo de entrada. ([especificações](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Helpful%20Templates/AddIn_Template_Standard_Layout.pdf "PDF"), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page))
* 
            A **imagem da marca na barra de marca** é a página de chegada com uma imagem no rodapé que representa sua marca. ([especificações](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Brand_Bar.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar))

<table>
 <tr><th>Página de Chegada</th><th>Barra de Marca</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/landing-page"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/landing.page.PNG" alt="landing page" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/generic/brand-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/brand.bar.PNG" alt="brand bar" style="width: 264px;"/></A></td></tr>
 </table>

## Tela de apresentação

Uma tela de apresentação é a experiência que o usuário tem ao abrir o suplemento pela primeira vez. A seguir são listados os padrões de design de tela de apresentação que você pode incluir no suplemento. Há imagens de cada um deles abaixo.

* **Etapas para iniciar** fornece aos usuários uma lista ordenada de etapas a serem executadas para começar a usar o suplemento. ([especificação](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_StepsToStart.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step))
* **Valor** comunica a proposta de valor do suplemento. ([especificação](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_ValuePlacemat.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat))
* **Vídeo** mostra aos usuários um vídeo antes que eles comecem a usar o suplemento. ([especificação](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_VideoPlacemat.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat))
* **Passo a passo** apresenta aos usuários uma série de recursos ou informações antes que comecem a usar o suplemento. ([especificação](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_PagingPanel.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough))
* A [Office Store](https://msdn.microsoft.com/pt-br/library/office/jj220033.aspx) possui um sistema que gerencia versões de avaliação de um suplemento, mas se você deseja controlar a interface do usuário da experiência de avaliação do suplemento, use os seguintes padrões:

	* **Avaliação** mostra aos usuários como começar a usar uma versão de avaliação do suplemento. ([especificação](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/FirstRun_TrialVersion.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat))
	* **Recurso de avaliação** avisa aos usuários que o recurso que estão tentando usar não está disponível na versão de avaliação do suplemento. Alternativamente, se o suplemento for gratuito, mas houver um recurso que exija uma assinatura, considere usar esse padrão. Também é possível considerar usar esse padrão para fornecer uma experiência rebaixada após o término de uma versão de avaliação. ([código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature))

> Importante: Se você decidir gerenciar sua própria avaliação e não usar a Office Store para gerenciar a avaliação, certifique-se de incluir a marca **Compra adicional pode ser necessária** nas anotações da avaliação no painel do vendedor.

Considere se mostrar aos usuários a tela de apresentação uma ou muitas vezes é importante para seu cenário. Por exemplo, se os usuários utilizam o suplemento periodicamente, podem se esquecer de como usá-lo. Ver a tela de apresentação novamente pode ser útil para esses usuários. 

 <table>
 <tr><th>Etapas para iniciar</th><th>Valor</th><th>Vídeo</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/instruction-step"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/instruction.step.PNG" alt="instruction steps" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/value-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/value.placemat.PNG" alt="value placemat" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/video-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/video.placemat.PNG" alt="video placemat" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Primeira página do passo a passo</th><th>Avaliação</th><th>Recurso de avaliação</th></tr>
 <tr>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/walkthrough"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/walkthrough1.PNG" alt="walkthrough 1" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.PNG" alt="trial placemat" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/first-run/trial-placemat-feature"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/trial.placemat.feature.PNG" alt="trial placemat feature" style="width: 264px;"/></A></td></tr>
 </table> 

## Notificações

Há várias maneiras pelas quais o suplemento pode notificar os usuários sobre eventos, como erros, ou sobre o andamento. Essas técnicas são listadas a seguir. Há imagens de cada um deles abaixo.

* 
            A **caixa de diálogo inserida** mostra uma caixa de diálogo dentro do painel de tarefas que fornece informações e, opcionalmente, uma experiência interativa, usando botões ou outros controles. Considere o uso de uma para solicitar que o usuário confirme uma ação. ([especificação](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Embedded_Dialog.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog))
* 
            A **mensagem embutida** indica o erro, o êxito ou as informações e pode ser exibida em um local especificado no painel de tarefas. Por exemplo, se um usuário insere um endereço de email formatado incorretamente em uma caixa de texto, uma mensagem de erro aparece logo abaixo da caixa de texto. ([especificação](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Notification_Inline_Message.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message))
* 
            A **faixa de mensagem** fornece informações e, opcionalmente, uma chamada à ação simples em uma faixa que pode ser recolhida para uma única linha, expandida para várias linhas ou ignorada. Considere o uso de faixas de mensagem para relatar uma atualização de serviço ou uma dica útil quando o suplemento for iniciado. ([especificação](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_MessageBanner.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner))
* 
            A **barra de progresso** indica o andamento de um processo demorado e síncrono, como uma tarefa de configuração que deve ser concluída para que o usuário possa executar outras ações. É uma página intersticial separada que também reforça a marca do suplemento. Use uma barra de progresso quando o processo puder enviar medições periódicas de seu progresso ao suplemento. ([especificação](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar))
* 
            O **controle giratório** indica que um processo demorado e síncrono está em andamento, mas não fornece uma indicação de seu progresso. É uma página intersticial separada que também reforça a marca do suplemento. Use um controle giratório quando o suplemento não puder saber confiavelmente o progresso de um processo. ([especificação](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Progress.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner))
* 
            A **notificação do sistema** fornece uma breve mensagem que desaparece após alguns segundos. Como o usuário pode não ver a mensagem, use a notificação do sistema somente para informações não essenciais. É uma boa opção notificar os usuários sobre um evento em um sistema remoto, como o recebimento de um email. ([especificação](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns/blob/master/Patterns/Notification_Toast.md), [código](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast))

 <table>
 <tr><th>Caixa de diálogo inserida</th><th>Mensagem embutida</th><th>Faixa de mensagem</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/embedded-dialog"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/embedded.dialog.PNG" alt="embedded dialog" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/inline-message"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/inline.message.PNG" alt="inline message" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/message-banner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/message.banner.PNG" alt="message banner" style="width: 264px;"/></A></td></tr>
 </table>

 <table>
 <tr><th>Barra de progresso</th><th>Controle giratório</th><th>Notificação do sistema</th></tr>
 <tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/progress-bar"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/progress.bar.PNG" alt="progress bar" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/spinner"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/spinner.PNG" alt="spinner" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/notifications/toast"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/toast.PNG" alt="toast" style="width: 264px;"/></A></td></tr>
 </table>

## Componentes

Veja a seguir os componentes adicionais que você pode usar no suplemento em uma variedade de cenários.  

### Caixa de diálogo de cliente

As caixas de diálogo de cliente oferecem uma outra maneira para seus usuários trabalharem com seu suplemento. 

* 
            A **caixa de diálogo de alerta** mostra uma caixa de alerta com informações importantes, como erros ou notificações além do controle do usuário.
* 
            A **caixas de diálogo de typeramp** mostra uma caixa de diálogo com conteúdo textual. Use a caixas de diálogo de typeramp para exibir informações elaborativas para o usuário.
* 
            A **caixa de diálogo de navegação** mostra uma caixa de diálogo com navegação. Use a caixa de diálogo de navegação para permitir que os usuários naveguem em conteúdos diferentes.

<table>
 <tr><th>Caixa de diálogo de alerta</th><th>Caixa de diálogo de typeramp</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/alert"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/alert.dialog.png" alt="alert dialog" style="width: 264px;"/></A></td>
<td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/typeramp"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/typeramp.dialog.png" alt="typeramp dialog" style="width: 300px;"/></A></td></tr></tr>
 </table>
 
 <table>
 <tr><th>Diálogo de navegação</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/dialog/navigation"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/navigation.dialog.png" alt="navigation dialog" style="width: 264px;"/></A></td></tr>
</tr>
 </table>


### Comentários e Classificações

Para melhorar a visibilidade e a adoção do seu suplemento, você deve fornecer aos usuários a capacidade de classificar e examinar seu suplemento na Office Store. Esse padrão demonstra como apresentar opções de comentários e classificação para os usuários usando:
- Comentários não solicitados - usando o menu de navegação ou o ícone no rodapé.
- Comentários solicitados - depois que o suplemento é executado 3 vezes, um usuário é solicitado a fornecer comentários.

 <table>
 <tr><th>Classificações e Comentários</th></tr>
<tr><td><A href="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates/feedback/office-store"><img src="https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/blob/master/Images/feedback.ratings.PNG" alt="Feedback and Ratings" style="width: 200px;"/></A></td></tr>
</tr>
 </table>

## Problemas conhecidos

* A execução de alguns arquivos de código fora de um projeto de suplemento gera um erro de JavaScript. 
	* Resolução: Adicione esses arquivos a um projeto de suplemento do Office. 
* Após a conversão desses padrões de design para um Aplicativo de Página Única (SPA), todas as seções da página HTML ficam alinhadas na parte superior e se sobrepõem umas às outras. 
	* Resolução: Ao converter de HTML, DIVs de invólucro adicionais podem ser adicionados. Certifique-se de que a altura desses DIVs adicionais sejam redefinidas corretamente. Por exemplo, se um DIV pai estiver definido com uma altura de 100%, um DIV filho não tiver altura e um DIV neto for definido como 100%, será necessário definir o DIV filho como 100% para realizar o layout das seções corretamente.    
	
## Recursos adicionais

* [Práticas recomendadas para o desenvolvimento de Suplementos do Office](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/). Este projeto usa a versão 2.1.0.

Este projeto adotou o [Código de Conduta do Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/). Para saber mais, confira as [Perguntas frequentes do Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou contate [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.

Copyright (C) Microsoft Corporation 2016. Todos os direitos reservados.



