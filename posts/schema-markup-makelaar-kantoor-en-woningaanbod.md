---
title: "Schema markup voor makelaars: wat Google met je aanbod doet"
slug: schema-markup-makelaar-kantoor-en-woningaanbod
date: "2026-11-28"
excerpt: "Schema markup voor je makelaarskantoor: RealEstateAgent op je kantoorpagina, wat Google met je woningaanbod doet en hoe je alles in 6 stappen controleert."
image: "/images/blog/schema-markup-makelaar-kantoor-en-woningaanbod.jpg"
authorSlug: "tim-van-der-lee"
tags: ["Vindbaarheid", "Woningaanbod"]
cluster: "vindbaarheid"
---

Zoek op je eigen kantoornaam en kijk wat Google laat zien. Bij sommige makelaars staat er een duidelijke naam en, op de computer, het pad van de pagina. Bij andere alleen een blauwe link met een afgekapte zin. Een deel van dat verschil zit niet in de tekst van de pagina, maar in een stukje code dat de bezoeker nooit ziet: schema markup.

Schema markup is een beschrijving van je pagina in een taal die zoekmachines lezen. Je vertelt daarmee niet alleen wat er staat, maar ook wat het is: dit is een makelaarskantoor, dit is het adres, dit is een woning die te koop staat. Voor een makelaar gaat het om 2 lagen: de markup van je kantoor op je kantoorpagina's, en de markup van je woningaanbod.

In dit artikel lees je welke schema markup een makelaar nodig heeft, wat Google er wel en niet mee doet in de zoekresultaten, en hoe je het in 6 stappen controleert. Eerlijk vooraf: Google heeft geen apart rich snippet voor woningaanbod. Wat wel kan, lees je hieronder.

**In het kort:**

- Schema markup beschrijft je pagina in een vaste taal (meestal JSON-LD), zodat zoekmachines begrijpen wat er staat.
- Voor je kantoor gebruik je het type RealEstateAgent, een onderdeel van LocalBusiness: naam, adres, telefoon, openingstijden en werkgebied.
- Voor je woningaanbod bestaat het type RealEstateListing, maar Google toont daar geen eigen rich snippet voor; breadcrumbs (op de computer) en beeldinformatie werken wel.
- Google belooft nooit dat correcte markup een rich result oplevert, en sterren op je eigen kantoorpagina toont Google niet.
- Controleer alles met de Rich Results Test en de Schema Markup Validator, en herhaal dat na elke wijziging aan je site.

## Wat schema markup precies is

Een zoekmachine leest je pagina als tekst. Ze ziet "Dorpsstraat 12, 4 kamers, 128 m²", maar weet niet zeker of dat een woning te koop is, een huurwoning of een adres van je kantoor. Schema markup haalt die twijfel weg.

De woorden komen van schema.org, een gezamenlijke woordenlijst van de grote zoekmachines. De meest gebruikte vorm is JSON-LD: een blok code in je pagina dat losstaat van de opmaak. Daardoor kun je het toevoegen zonder je ontwerp aan te passen.

Drie dingen die schema markup wel en niet doet:

1. **Het helpt zoekmachines je pagina te begrijpen.** Dat is de basis voor alles wat volgt.
2. **Het kan je pagina geschikt maken voor een rich result**, zoals breadcrumbs of bedrijfsinformatie. Geschikt, niet zeker.
3. **Het maakt een zwakke pagina niet sterk.** Markup is een etiket, geen inhoud. Hoe je een woningpagina zelf laat ranken, lees je in het artikel over [SEO voor individuele woningpagina's](/blog/woningpaginas-seo-makelaar-individuele-listings).

Schema markup is één onderdeel van je vindbaarheid. Het grotere plaatje, van Google Bedrijfsprofiel tot content, staat op de pagina over [seo voor makelaars](/seo).

## Laag 1: RealEstateAgent op je kantoorpagina's

Het type RealEstateAgent is op schema.org een onderdeel van LocalBusiness en Organization. Je gebruikt het op je homepage en op je contactpagina, en bij meerdere vestigingen op de pagina van elke vestiging.

De velden die ertoe doen:

- **name**: de naam van je kantoor, precies zoals op je gevel en in je Google Bedrijfsprofiel.
- **address**: straat, postcode en plaats, opgesplitst in losse velden.
- **telephone**: één nummer, in internationale notatie.
- **url** en **logo**: je website en je logo.
- **openingstijden**: per dag, met de tijden waarop je echt bereikbaar bent.
- **areaServed**: de plaatsen of wijken waar je werkt.
- **sameAs**: links naar je profielen elders, zoals je Funda-pagina en je social media.

Houd deze gegevens gelijk aan wat in je Google Bedrijfsprofiel en op je contactpagina staat. Drie verschillende schrijfwijzen van je adres maken het voor een zoekmachine lastiger, niet makkelijker.

### Voorbeeld: een minimaal kantoorblok

Voorbeeld voor een verzonnen kantoor, met korte regels zodat het leesbaar blijft:

```json
{
 "@context": "https://schema.org",
 "@type": "RealEstateAgent",
 "name": "Makelaardij Voorbeeld",
 "telephone": "+31301234567",
 "address": {
  "@type": "PostalAddress",
  "streetAddress": "Dorpsstraat 1",
  "postalCode": "1234 AB",
  "addressLocality": "Voorbeeldstad"
 },
 "areaServed": ["Voorbeeldstad", "Buurdorp"]
}
```

Vul het aan met je openingstijden, je logo en je sameAs-links. Plak het niet zomaar op elke pagina: één kantoorblok per vestigingspagina is genoeg.

## Laag 2: je woningaanbod en wat Google ermee doet

![Laag 2: je woningaanbod en wat Google ermee doet](/images/blog/schema-markup-makelaar-kantoor-en-woningaanbod-2.jpg)

Hier zit de grootste misvatting. Veel makelaars verwachten dat hun woningen met prijs, foto en kenmerken als rich snippet in Google verschijnen, zoals een product in een webwinkel. Dat rich result bestaat voor woningen niet.

Wat er wel is:

1. **RealEstateListing.** Schema.org heeft een eigen type voor een woningaanbod: een pagina die één of meer woningen beschrijft. Het staat nog in het "nieuwe" deel van schema.org en Google toont er geen eigen zoekresultaat voor. Het helpt wel om je pagina eenduidig te beschrijven.
2. **BreadcrumbList.** Het pad van je pagina, zoals "Home > Aanbod > Voorbeeldstad > Dorpsstraat 12". Google kan dat pad in het zoekresultaat op de computer tonen in plaats van een lange URL. Op desktop is dit het rich result dat je op een woningpagina het makkelijkst haalt. Sinds 23 januari 2025 toont Google breadcrumbs niet meer in mobiele zoekresultaten, omdat het pad op een klein scherm wordt afgekapt; de markup blijft wel werken voor desktop.
3. **Beeldinformatie.** Met de juiste markup voor je foto's kan Google Afbeeldingen meer laten zien over wie de foto maakte en waar hij bij hoort.

Wat je beter niet doet: je woning als Product markeren om prijs en sterren in beeld te krijgen. Een woning is geen product dat je in een winkelmand legt, en markup die niet klopt met de inhoud kan Google negeren of als misleidend zien.

## Waarom sterren op je kantoorpagina niet verschijnen

Een veelgestelde vraag: "Ik heb 80 reviews, waarom staan mijn sterren niet in Google?" Het antwoord staat in de richtlijnen van Google. Sterren voor een LocalBusiness toont Google alleen voor sites die reviews over andere bedrijven verzamelen. Reviews die je op je eigen site over je eigen kantoor zet, gelden als reviews over jezelf, en daarvoor laat Google geen sterren zien.

Je sterren verschijnen wel in je Google Bedrijfsprofiel, op Google Maps en in de lokale resultaten. Daar werk je dus aan via je reviews zelf, niet via markup. Hoe je die structureel verzamelt, lees je bij [google reviews verzamelen als makelaar](/reviews).

## Wat je realistisch mag verwachten

Google is er duidelijk over: correcte markup is geen belofte dat je een rich result krijgt. Ook een pagina die de test foutloos doorstaat, kan gewoon als blauwe link verschijnen. Markup bepaalt of je in aanmerking komt voor een bepaalde weergave, niet of die weergave er komt.

| Markup | Wat Google kan tonen | Let op |
|---|---|---|
| RealEstateAgent | Bedrijfsgegevens | Geen zekerheid |
| BreadcrumbList | Pad in resultaat | Alleen op desktop |
| RealEstateListing | Geen eigen weergave | Wel duidelijkheid |
| Reviews op eigen site | Geen sterren | Reviews over jezelf |

Zie de markup daarom als onderhoud, niet als campagne. Je doet het één keer goed, je controleert het na elke wijziging, en je verwacht er geen wonderen van.

## In 6 stappen je schema markup controleren

Het meeste werk zit niet in het toevoegen, maar in het controleren. Volg deze 6 stappen:

1. **Kies 5 pagina's**: je homepage, je contactpagina, je aanbodoverzicht en 2 woningpagina's.
2. **Test elke pagina in de Rich Results Test van Google.** Je ziet welke markup Google vindt en of die geschikt is voor een rich result.
3. **Test dezelfde pagina's in de Schema Markup Validator.** Die controleert alle schema.org-types, ook de types waar Google niets mee toont.
4. **Vergelijk de gegevens met je Google Bedrijfsprofiel.** Naam, adres, telefoon en openingstijden moeten letterlijk gelijk zijn.
5. **Kijk in Search Console bij Verbeteringen.** Daar meldt Google fouten in je breadcrumbs en andere markup.
6. **Herhaal na elke wijziging aan je site**, en minstens elk kwartaal.

Stel dat je bij stap 2 ziet dat er helemaal geen markup op je woningpagina's staat. Dan ligt het meestal aan de koppeling waarmee je aanbod op je site komt; vraag je websitebouwer of de pagina's automatisch markup krijgen.

## Veelvoorkomende fouten bij makelaarssites

Deze 5 fouten zie je op veel makelaarssites terug:

- **Een oud adres in de markup** na een verhuizing, terwijl de contactpagina wel klopt.
- **Dubbele blokken**: de website-plugin en het thema zetten allebei een kantoorblok neer, met verschillende gegevens.
- **Markup voor content die er niet staat**, zoals een veelgestelde-vragenblok in de code zonder vragen op de pagina.
- **Verkochte woningen met de status te koop** in de markup, omdat de pagina wel wordt aangepast maar het codeblok niet.
- **Het verkeerde type**: een makelaarskantoor als algemene Organization in plaats van RealEstateAgent.

Een site die markup automatisch uit dezelfde gegevens maakt als de pagina zelf, voorkomt de meeste van deze fouten. Vraag daar naar als je een nieuwe site laat maken, bijvoorbeeld een [professionele website voor makelaars](/gratis-website).

## Veelgestelde vragen

### Moet ik schema markup zelf schrijven?

Niet per se. Veel websitesystemen en plugins maken het automatisch. Controleer wel met de Rich Results Test wat ze precies neerzetten, want een plugin kent je werkgebied en openingstijden niet vanzelf.

### Helpt schema markup voor Funda?

Niet direct. Funda krijgt je aanbod via een eigen koppeling, niet via de code op je site. Schema markup helpt je eigen pagina's in Google.

### Krijg ik met RealEstateListing een rich snippet voor mijn woningen?

Op dit moment niet. Google toont geen eigen resultaat voor dit type. Het helpt wel om je pagina eenduidig te beschrijven.

### Hoe vaak moet ik de markup controleren?

Na elke wijziging aan je site of je kantoorgegevens, en verder één keer per kwartaal.

### Is JSON-LD beter dan andere vormen?

Voor Google zijn de 3 vormen even goed, zolang de markup klopt. Google noemt JSON-LD in de meeste gevallen het makkelijkst te onderhouden: het staat los van je opmaak, dus het breekt minder snel bij een nieuw ontwerp.

## Conclusie: eerst je kantoor, dan je aanbod

Schema markup voor een makelaar begint bij je kantoor: één goed RealEstateAgent-blok met dezelfde gegevens als je Google Bedrijfsprofiel. Daarna volgen breadcrumbs op je woningpagina's, het rich result dat je op desktop het makkelijkst haalt. RealEstateListing kun je toevoegen voor de volledigheid, zonder te verwachten dat Google er een rich snippet van maakt.

Wil je weten hoe je site er nu voor staat in Google? Vraag een [gratis seo scan voor makelaars](/gratis-scan) aan; je krijgt een cijfer voor vindbaarheid, conversie, AI-vindbaarheid en lokale signalen, met de belangrijkste verbeterpunten.
