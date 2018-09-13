# <a name="php-calendar-api-sample"></a>Exemplo de API de Calendário PHP #

[日本 (日本語)](https://github.com/jasonjoh/php-calendar/blob/master/loc/readme-ja.md) (japonês)

Este exemplo mostra como usar a [API de Calendário](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations) no PHP. O exemplo é um aplicativo de "espetáculos futuros" destinado a um festival shakespeariano de uma comunidade fictícia de teatro. Os usuários podem conectar as respectivas contas do Office 365 e adicionar eventos ao calendário com os horários dos espetáculos em que vão participar. O usuário tem a opção de convidar amigos, que envia uma solicitação de reunião a cada amigo convidado. 

## <a name="api-features-used"></a>Recursos usados da API ##

- Como criar eventos em um calendário padrão do usuário
- Como adicionar anexos aos eventos
- Como adicionar participantes aos eventos
- Usando o [modo de exibição Calendário](https://msdn.microsoft.com/office/office365/APi/calendar-rest-operations#GetCalendarView) para expandir os eventos recorrentes e exibir todos os compromissos de um único dia.

## <a name="required-software"></a>Software necessário ##

- [PHP 5.6](http://php.net/downloads.php)
- Um servidor Web compatível com PHP.

Em meus testes, usei o IIS 8 instalado em um laptop com Windows 8.1. Instalei o PHP 5.6.0 usando o [Web Platform Installer](http://www.microsoft.com/web/downloads/platform.aspx) (somente para Windows/IIS).

## <a name="running-the-sample"></a>Execução do exemplo ##

Presumimos que você já instalou o PHP antes de começar, e que configurou o servidor Web para processar e servir arquivos do PHP. 

1. Baixe ou bifurque o projeto de exemplo.
1. Crie um novo diretório, no diretório raiz da Web, chamado `php-calendar`. Copie os arquivos do repositório para este diretório.
1. [Registre o aplicativo no Azure Active Directory](https://github.com/jasonjoh/office365-azure-guides/blob/master/RegisterAnAppInAzure.md). É necessário registrar o aplicativo como um aplicativo Web usando a URL de Entrada do `http://localhost/php-calendar` e atribuir a ele a permissão "Ter acesso total aos calendários dos usuários", que está disponível na lista suspensa "Permissões delegadas".
1. Edite o arquivo `.\o365\ClientReg.php`. 
    1. Copie a ID do cliente obtida durante o registro do aplicativo e cole-a como o valor da variável `$clientId`. 
    1. Copie a chave criada durante o registro do aplicativo e cole-a como o valor da variável `$clientSecret`.
    1. Salve o arquivo.
1. Se não configurou a instalação do PHP com um Certificado de Autoridade de Certificação atualizado para verificar o SSL, as solicitações falharão, a menos que você execute o Fiddler no servidor e defina a variável `$enableFiddler` como `true`, no `Office365Service.php`. Como alternativa, insira a seguinte linha, imediatamente antes das chamadas para `curl_exec`. **No entanto**, ao fazê-lo, desabilitará as verificações de SSL, o que NÃO deve ser feito durante a produção.

    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
1. Abra um navegador da Web e navegue até `http://localhost/php-calendar/home.php`.
1. Você verá uma lista de horários de espetáculos futuros para várias peças do festival shakespeariano. Clique em um dos botões "Conectar meu Calendário" para entrar no Office 365.
1. Depois de entrar, você será redirecionado para a home page, e os botões estarão exibidos com o texto "Adicionar ao Calendário". Clique no botão ao lado de um horário de espetáculo específico para adicioná-lo ao calendário. Os eventos com um campo "Cupom obrigatório" definido como Sim incluirão o cupom como anexo no evento.

## <a name="copyright"></a>Direitos autorais ##

Copyright (c) Microsoft. Todos os direitos reservados.

----------
Conecte-se comigo no Twitter [@JasonJohMSFT](https://twitter.com/JasonJohMSFT)

Siga o [Blog de desenvolvedores do Exchange](http://blogs.msdn.com/b/exchangedev/)