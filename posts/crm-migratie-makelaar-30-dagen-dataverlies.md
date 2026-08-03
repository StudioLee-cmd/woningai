---
title: "CRM-migratie als makelaar: 30 dagen zonder dataverlies"
slug: crm-migratie-makelaar-30-dagen-dataverlies
date: "2026-07-27"
excerpt: "Overstappen naar een nieuw CRM zonder je lopende verkoopopdrachten kwijt te raken. Een plan van 30 dagen, met parallel draaien als vangnet."
image: "/images/blog/crm-migratie-makelaar-30-dagen-dataverlies.jpg"
authorSlug: "tim-van-der-lee"
tags: ["CRM", "Automatisering", "Makelaar"]
cluster: "automatisering"
---

De meeste makelaars die weten dat hun CRM niet meer voldoet, stellen de overstap nog minstens een jaar uit. Niet omdat het nieuwe systeem tegenvalt, maar om één zin die tijdens elke offerte valt: en wat gebeurt er dan met alles wat er nu in zit?

Terecht. In je huidige pakket zitten niet alleen namen en adressen. Er zitten lopende verkoopopdrachten in, bezichtigingen die volgende week staan, notities van een gesprek met een verkoper die pas over acht maanden echt gaat verhuizen. Een adressenbestand overzetten kan iedereen. Een lopend dossier overzetten zonder dat er halverwege iemand tussen wal en schip valt, is het echte werk.

Toch is dit goed te plannen. Niet in een weekend, wel in dertig dagen, en het kritieke onderdeel is niet de export maar de periode waarin je beide systemen naast elkaar laat lopen. Hieronder staat het volledige schema per week, wat er wel en niet mee moet, en de vijf momenten waarop het in de praktijk misgaat. Dit artikel gaat over de overstap zelf; twijfel je nog wélk systeem het moet worden, begin dan bij de keuze [die bij jouw kantoorgrootte past](/blog/makelaarssoftware-kiezen-kantoorgrootte). Wie zijn [workflow automatisering voor makelaars](/automatisering) daarna goed inricht, verdient die migratieweken binnen een kwartaal terug. De opvolging die nu handmatig gaat begint namelijk vanzelf te lopen zodra de data schoon in het nieuwe [crm voor makelaars](/crm) staat.

**In het kort:**

- Het risico zit niet in je adressenbestand, maar in je lopende dossiers: opdrachten, bezichtigingen en afspraken die tijdens de overstap doorlopen.
- Reken op vier weken: exporteren en opschonen, testimport, parallel draaien, definitief omzetten.
- Parallel draaien is de belangrijkste week en wordt bijna altijd overgeslagen.
- Migreer bewust niet alles. Oude data meenemen die je niet meer mag of wilt bewaren maakt je nieuwe systeem meteen weer rommelig.
- Bevries het oude systeem pas als je een maand lang niets hebt gemist, en houd de export daarna nog een jaar als archief.

## Waarom makelaars deze overstap jaren uitstellen

Bij een makelaarskantoor is bijna geen enkel contact een los gegeven. Een verkoper hangt aan een pand, dat pand hangt aan bezichtigingen, die bezichtigingen hangen aan kopers, en die kopers zijn over twee jaar zelf verkopers. Die verbanden zijn precies wat een simpele export naar een spreadsheet kapotmaakt: je houdt de rijen, je verliest de relaties ertussen.

Daar komt bij dat een makelaarskantoor niet even dicht kan. Een webshop kan een migratie in een rustige nacht doen. Bij jou belt op dinsdagochtend gewoon iemand over de bezichtiging van morgen, en dan moet iemand die afspraak kunnen terugvinden, in welk systeem dan ook. Dat is de reden dat het klassieke advies "zet het om in het weekend" hier niet werkt en dat parallel draaien wel werkt.

En er speelt iets menselijks. Het oude systeem is rommelig, maar iedereen weet wáár het rommelig is. Die kennis zit in hoofden, niet in het systeem, en die verdwijnt op de dag van de overstap. Daarom is een migratie voor de helft een dataklus en voor de helft een gewenningsklus.

## Wat gaat er mee, en wat juist niet

De eerste beslissing is niet technisch. Bepaal per soort gegeven of het meegaat, en wees streng: alles wat je meesleept moet je in het nieuwe systeem opnieuw onderhouden.

| Soort gegeven | Meenemen? | Waarom |
|---|---|---|
| Actieve verkoopopdrachten en dossiers | Ja, met voorrang | Dit is het lopende werk, hier mag niets uitvallen |
| Contacten met activiteit in de laatste 24 maanden | Ja | Dit is je warme bestand |
| Bezichtigings- en afspraakhistorie per pand | Ja, bij het pand | Zonder historie is de context van een gesprek weg |
| Contacten zonder enige activiteit sinds jaren | Nee, archiveren | Kost onderhoud, levert niets op, en de grondslag ontbreekt vaak |
| Losse notitievelden en vrije tekst | Selectief | Vaak waardevol, vaak ook dubbel; lees ze door voor je ze overzet |
| Oude mailwisselingen | Nee | Die horen in je mailarchief, niet in je klantsysteem |

Die vierde rij is er niet alleen om op te ruimen. Persoonsgegevens mag je niet langer bewaren dan nodig is voor het doel waarvoor je ze verzamelde, zoals de <a href="https://www.autoriteitpersoonsgegevens.nl/themas/basis-avg/privacy-en-persoonsgegevens/bewaren-van-persoonsgegevens" target="_blank" rel="noopener">Autoriteit Persoonsgegevens</a> uitlegt. Een migratie is het natuurlijke moment om die schoonmaak te doen, want je raakt elk record toch aan.

![Oude houten kaartenbak met dossiermappen en een sleutelbos aan een houten label in een makelaarsarchief](/images/blog/crm-migratie-makelaar-30-dagen-dataverlies-2.jpg)

Maak van die keuzes één document voordat je iets exporteert. Niet omdat het netjes staat, maar omdat je er in week drie op teruggrijpt als iemand roept dat er iets mist. Meestal mist er dan niets, maar is het bewust weggelaten.

## Week 1: exporteren en opschonen

In week één raak je het nieuwe systeem nog niet aan. Je haalt alles uit het oude en kijkt er eerlijk naar.

1. **Trek een volledige export.** Vraag je huidige leverancier om een export van alle objecten, niet alleen contacten: panden, opdrachten, afspraken, notities, koppelingen. Vraag expliciet naar de relatievelden, dus welk contact bij welk pand hoort.
2. **Bewaar die export ongewijzigd.** Zet een kopie apart die je nooit bewerkt. Dat is je terugvalpunt voor de rest van het traject.
3. **Ontdubbel op e-mailadres en telefoonnummer.** Bij de meeste kantoren staat een verkoper die later koper werd twee keer in het systeem. Voeg samen, kies de meest recente gegevens als leidend.
4. **Markeer de dode data** volgens de tabel hierboven. Niet verwijderen, markeren. Verwijderen doe je pas als de migratie geslaagd is.
5. **Los de rommel op die je toch al kende.** Verkeerde postcodes, afspraken zonder pand, contacten zonder eigenaar. Dit is het enige moment waarop je die lijst nog kort is.

Reken hier op een paar avonden. Elk uur dat je hier steekt bespaart je in week drie een veelvoud, omdat je in een schoon bestand meteen ziet dat er iets niet klopt.

## Week 2: importeren in een testomgeving

Nu pas gaat de data naar het nieuwe systeem, en nog niet naar het echte.

Laat je nieuwe leverancier een testomgeving klaarzetten en importeer daar de opgeschoonde export in. Controleer daarna niet steekproefsgewijs op aantallen, maar op verbanden. Pak vijf lopende dossiers en loop ze helemaal na: staat het pand er, hangt de juiste verkoper eraan, staan de bezichtigingen er nog bij, is de notitie van dat ene gesprek meegekomen. Kloppen die vijf, dan klopt het patroon meestal.

Let specifiek op velden die in het oude systeem vrije tekst waren en in het nieuwe een keuzelijst zijn. Daar sneuvelt in de praktijk de meeste informatie, omdat een waarde die niet in de lijst past stilletjes leeg blijft. Een goed [crm systeem voor makelaars](/crm) laat je die lijsten zelf uitbreiden, dus vul ze aan voordat je opnieuw importeert in plaats van de waarde te laten vallen.

Importeer in deze week gerust twee of drie keer opnieuw. Een testomgeving is er om leeg te gooien. Dit is de laatste week waarin een fout gratis is.

## Week 3: parallel draaien

Dit is de week die vrijwel elk migratieplan overslaat, en precies de week die bepaalt of het goed gaat.

Parallel draaien betekent: je zet het nieuwe systeem live, maar je oude systeem blijft gewoon openstaan en leidend voor lopende afspraken. Alles wat er die week binnenkomt, voer je in het nieuwe systeem in. Alles wat je opzoekt, zoek je eerst in het nieuwe systeem op, en pas als je het daar niet vindt in het oude.

Dat dubbele werk voelt onlogisch en is het hele punt. Je ontdekt namelijk niet wat er ontbreekt door een bestand te controleren, je ontdekt het op het moment dat je iets nodig hebt en het er niet staat. Eén week echte werkdagen legt meer bloot dan een dag klikken door de testomgeving.

Houd die week een simpel lijstje bij van alles wat je niet terugvond. Aan het einde van de week is dat lijstje je restwerk. Bij een goed voorbereide migratie staan er een handvol dingen op, meestal notitievelden en een enkele koppeling. Staat er meer dan een pagina op, dan ga je nog niet over en herhaal je week twee.

Vergeet in deze week je koppelingen niet: je website, je mail, je agenda en de plek waar je aanmeldingen binnenkomen. Een migratie die alleen de data verplaatst en de instroom vergeet, betekent dat elke nieuwe lead in het oude systeem blijft vallen. Wie zijn [klantbeheer software voor makelaars](/crm) koppelt aan de plek waar leads echt binnenkomen, merkt dit meteen; wie dat niet doet, komt er weken later achter.

## Week 4: omzetten en bevriezen

In week vier draai je de rollen om. Het nieuwe systeem is leidend, het oude gaat op alleen-lezen.

Doe een laatste, verse export uit het oude systeem voor de periode van week drie, zodat wat er tijdens het parallel draaien nog in het oude systeem is beland alsnog meekomt. Zet daarna de schrijfrechten uit in plaats van het account op te zeggen. Zeg pas op als je een volle maand niets hebt gemist, en bewaar de laatste export daarna nog minstens een jaar als archief.

Plan in dezelfde week één uur uitleg met iedereen die ermee werkt. Niet over knoppen, maar over afspraken: waar leg je een gesprek vast, wanneer maak je een taak aan, welk veld is verplicht. Een systeem gaat zelden stuk op techniek, wel op twee collega's die hetzelfde anders vastleggen.

## De vijf valkuilen

- **Overzetten in het hoogseizoen.** Kies een rustige maand. Een migratie tijdens je drukste weken kost je opdrachten, geen tijd.
- **Alles willen meenemen.** Je nieuwe systeem is binnen een maand net zo rommelig als je oude, en de opschoning die je uitstelde is dan twee keer zo groot.
- **Geen eigenaar aanwijzen.** Eén persoon is verantwoordelijk voor de migratie. Bij gedeelde verantwoordelijkheid controleert niemand de dossiers.
- **De koppelingen vergeten.** Website, mail, agenda en leadformulieren horen bij de migratie, anders lekt je instroom weg naar een systeem dat je aan het uitfaseren bent.
- **Direct alles automatiseren.** Zet eerst de data goed, laat het twee weken draaien, en bouw dan pas je flows. Automatisering op vervuilde data verspreidt de vervuiling alleen sneller. Een goede eerste stap ná de migratie is je bestand [opdelen in kopers, verkopers en doorstromers](/blog/klantsegmentatie-makelaar-crm-kopers-verkopers-doorstromers), want pas dan levert opvolging per groep iets op.

## Veelgestelde vragen

### Hoe lang duurt een CRM-migratie voor een makelaarskantoor echt?

Reken op vier weken doorlooptijd bij een kantoor van één tot tien medewerkers, waarvan het meeste werk in week één en week drie zit. De doorlooptijd wordt bepaald door het opschonen en het parallel draaien, niet door de technische import.

### Kan ik de migratie zelf doen of heb ik hulp nodig?

De export, de opschoning en het parallel draaien doe je zelf, want daar zit jouw kennis van je eigen dossiers in. Voor de veldkoppeling tussen het oude en het nieuwe systeem is hulp van de nieuwe leverancier verstandig, omdat daar de relaties tussen panden en contacten worden vastgelegd.

### Wat doe ik met contacten waarvan ik geen recente toestemming heb?

Neem ze niet mee naar het nieuwe systeem, maar zet ze in een apart archief. Een migratie is geen reden om een bestand opnieuw te gaan gebruiken waarvoor de grondslag ontbreekt.

### Moet ik mijn oude systeem meteen opzeggen?

Nee. Zet het op alleen-lezen en houd het minstens een maand aan. Opzeggen kost je niets als je een maand wacht, en het scheelt je alles als er in die maand toch iets blijkt te missen.

<div class="container"><div class="row justify-content-center"><div class="col-lg-10 col-xl-8 mx-auto"><p class="lees-ook my-5 px-4 py-3 rounded-3 fs-6 text-dark" style="background-color: rgba(193, 255, 114, 0.18);"><strong class="text-dark">Lees ook:</strong> <a href="/blog/waardebepaling-aanvragen-verkoopopdrachten-makelaar" class="text-dark fw-semibold">Waardebepaling-aanvragen omzetten in verkoopopdrachten</a> →</p></div></div></div>

## Conclusie

Een CRM-migratie mislukt zelden op de import. Het gaat mis op de dossiers die tijdens de overstap doorlopen, en dat is precies waar parallel draaien voor bestaat. Vier weken, een eerlijke opschoning en één week dubbel werken zijn genoeg om over te stappen zonder dat een verkoper of een bezichtiging ertussen valt.

Wil je eerst weten wat er in jouw huidige systeem zit en wat een overstap in de praktijk zou betekenen? Vraag een [gratis ai scan voor makelaars](/gratis-scan) aan, dan lopen we je bestand en je koppelingen door voordat je iets exporteert. Onze Groei-of-Geld-Terug Garantie geldt vanaf Managed Groei Pro: word je binnen 6 maanden niet beter zichtbaar dan bij de start, dan krijg je je geld terug. Zichtbaarheid meten we bij SEO in Ahrefs en bij video en advertenties in views. Jij verkoopt woningen, wij regelen de rest.
