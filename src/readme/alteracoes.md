# Duplicar e alterar

## [✓] Exclusão logos Suhai

## [] Alterações de cores

Alterar cor verde de todos os os campos para cor Azul da marca Cantares com exceção dos botões do whatsapp e de contato.

Novas Cores:
Dark Teal: #0a5d78
Ocean Blue: #2094c6
Charcoal: #595a5c
Silver: #c6bebf

## [✓] Adicionar seção de parceitos

Incluir aba Seguradoras parceiras: Porto Seguro, Suhai, Tokio Marine, Azul, Allianz, Itaú, Bradesco, HDI, Zurich, Mapfre, Ituran e APVS Brasil (Proteção Veicular)

## [✓] Alteração de texto no Hero

Alteração da frase:
"Proteja sua moto com o seguro que cabe no seu bolso. Seguro de moto para todas as cilindradas a partir de R$ 79,00/mês. Simples, rápido e sem burocracia."

Para:
"Proteja a sua moto com quem entende de moto.

Seguro de moto para todas as cilindradas a partir de R$ 79,00/mês. Simples, rápido e sem burocracia."

## [✓] Alteração de texto no rodapé:

No rodapé página alterar:
"Cantares é uma Corretora Autorizada da Suhai Seguros, oferecendo as melhores soluções em seguro de motos para todo o Brasil."

Para:
"Cantares é uma Corretora parceira das principais Seguradoras de moto e a maior proteção veicular da América Latina, oferecendo as melhores soluções em seguro de motos para todo o Brasil."

## [✓] Alterar ordem das seções

Benefícios
Depoimentos
Coberturas
Contato

Para essa ordem:
Benefícios
Coberturas
Parceiros
Depoimentos
Contato

Atue como um desenvolvedor React e Tailwind especialista. Meu cliente pediu para alterar a paleta de cores global da aplicação, mas eu preciso manter as cores originais exclusivamente em uma página específica.

Aqui estão as diretrizes do que preciso que você faça:

1. Atualize as variáveis no :root do arquivo index.css:
   Substitua as cores principais para a nova paleta abaixo (por favor, converta os Hexadecimais para HSL, pois minha configuração do Tailwind exige HSL sem a função hsl(), ex: 200 50% 50%):

Dark Teal: #0a5d78 (Use para --primary ou gradientes escuros)

Ocean Blue: #2094c6 (Use para destaque/secundária)

Charcoal: #595a5c (Use para --foreground / textos)

Silver: #c6bebf (Use para bordas ou elementos mutados)
Ajuste o --background e outras variáveis de forma que fiquem harmoniosas com essa nova paleta.

2. Crie uma classe de tema para a página antiga:
   No mesmo index.css, logo abaixo do :root, crie uma nova classe chamada .theme-suhai. Cole dentro dessa classe TODAS as variáveis CSS de cores originais que estavam no meu :root atual (aquelas com os tons de verde lime e floresta).

3. Aplicar classe theme-suhai na pagina
   Aplicar a classe className="theme-suhai" no componente da página específica para que ela volte a usar as cores antigas e sobrescreva o novo :root
