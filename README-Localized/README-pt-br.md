# Padrões de design da experiência do usuário para suplementos do Office 

Este repositório fornece implementações de exemplo em HTML, CSS e JavaScript de padrões de design comuns da experiência do usuário para suplementos do Office.

Ao criar suplementos do Office, o design da experiência do usuário do suplemento deve fornecer experiências atraentes que estendam as funcionalidades do Office. Por exemplo, o suplemento deve fornecer uma tela de apresentação, uma experiência do usuário de primeira classe e transições suaves entre as páginas, entre outros itens. Fornecer uma experiência do usuário simples e moderna aumenta a retenção de usuários e a adoção do suplemento. Esse repositório dispõe de recursos da experiência do usuário para desenvolvedores que implementam:

* Padrões de design comuns da experiência do usuário com base nas práticas recomendadas.
* Estilos e componentes do Office Fabric.
* Suplementos que parecem uma extensão natural da interface do usuário padrão do Office. 

Para obter informações gerais e os tipos de padrões de design de experiência do usuário disponíveis, confira o artigo [Modelos de padrão de design de experiência do usuário para Suplementos do Office](https://dev.office.com/docs/add-ins/design/ux-design-patterns).

> Importante: Após personalizar esses padrões de design para atender às suas necessidades, lembre-se de testar seu suplemento em todas as plataformas onde seu suplemento estará disponível. Esses padrões de design da experiência do usuário foram testados usando o Office 2016 e Windows 10.

## Usando os padrões de design da experiência do usuário

Você pode usar as [especificações de design da experiência do usuário](https://github.com/OfficeDev/Office-Add-in-Design-Patterns/blob/master/Patterns/Source%20Files) como um guia para criar um design personalizado da experiência do usuário ou pode adicionar o [código-fonte](https://github.com/OfficeDev/Office-Add-in-UX-Design-Patterns-Code/tree/master/templates) diretamente no projeto. Para adicionar o código-fonte:

1. Clone este repositório. 
2. Copie a [pasta de ativos](https://github.com/OfficeDev/Office-Add-in-UX-Design-Pattern-Code/tree/master/assets) e a pasta de código do padrão individual que você escolheu para o projeto do suplemento.  
3. Incorpore o padrão individual ao suplemento. Por exemplo:
	- Edite o local de origem ou a URL de comando do suplemento no manifesto.
	- Use o padrão de design da experiência do usuário como modelo para outras páginas.
	- Crie um link para o padrão de design da experiência do usuário.

## Problemas conhecidos

* A execução de alguns arquivos de código fora de um projeto de suplemento gera um erro de JavaScript. 
	* Resolução: Adicione esses arquivos a um projeto de suplemento do Office. 
* Após a conversão desses padrões de design para um Aplicativo de Página Única (SPA), todas as seções da página HTML ficam alinhadas na parte superior e se sobrepõem umas às outras. 
	* Resolução: Ao converter de HTML, DIVs de invólucro adicionais podem ser adicionados. Certifique-se de que a altura desses DIVs adicionais sejam redefinidas corretamente. Por exemplo, se um DIV pai estiver definido com uma altura de 100%, um DIV filho não tiver altura e um DIV neto for definido como 100%, será necessário definir o DIV filho como 100% para realizar o layout das seções corretamente.    
	
## Recursos adicionais

* [Práticas recomendadas para o desenvolvimento de Suplementos do Office](https://dev.office.com/docs/add-ins/overview/add-in-development-best-practices)
* [Office UI Fabric](http://dev.office.com/fabric/). Este projeto usa a versão 2.1.0 ou superior.

Este projeto adotou o [Código de Conduta do Código Aberto da Microsoft](https://opensource.microsoft.com/codeofconduct/). Para saber mais, confira as [Perguntas frequentes do Código de Conduta](https://opensource.microsoft.com/codeofconduct/faq/) ou contate [opencode@microsoft.com](mailto:opencode@microsoft.com) se tiver outras dúvidas ou comentários.

Copyright (C) Microsoft Corporation 2016. Todos os direitos reservados.



