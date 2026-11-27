---
title: "CRM-implementatie makelaar: roadmap met portefeuille-import"
slug: crm-implementatie-makelaar-roadmap-portefeuille-import
date: "2026-11-27"
excerpt: "Een CRM invoeren met je bestaande portefeuille erin: de vijfdaagse roadmap voor makelaars, van veldkeuze en import tot koppelingen en de eerste week live."
image: "/images/blog/crm-implementatie-makelaar-roadmap-portefeuille-import.jpg"
authorSlug: "tim-van-der-lee"
tags: ["CRM", "Administratie", "Data"]
cluster: "automatisering"
---

Je hebt een CRM gekozen. Het contract is getekend, de logins zijn binnen en op het scherm staat een leeg dashboard. Ergens anders staat je echte kantoor: een export uit je oude makelaarssoftware, een Excel-lijst met verkopers van de afgelopen jaren, de contacten in de telefoons van de makelaars en een mailbox vol waardebepalingen. De implementatie is het werk dat die twee werelden samenbrengt. Gaat het goed, dan werkt het team na een week in het CRM en staat de portefeuille er compleet in. Gaat het mis, dan heb je over drie maanden een CRM dat half gevuld is en een team dat stilletjes in de oude Excel blijft werken.

De eerste week past in vijf werkdagen, met per dag wat er af moet zijn. De portefeuille-import krijgt een eigen dag, omdat daar de meeste tijd in gaat zitten. Het gaat over het invoeren van een CRM bij een klein makelaarskantoor met 1 tot 10 mensen. Welk pakket je kiest, staat in ons stuk over [makelaarssoftware kiezen per kantoorgrootte](https://www.woningai.nl/blog/makelaarssoftware-kiezen-kantoorgrootte). Stap je over van een ander CRM met jaren aan historie, lees dan ook ons artikel over een [CRM-migratie zonder dataverlies](https://www.woningai.nl/blog/crm-migratie-makelaar-30-dagen-dataverlies): dat gaat over het veilig overzetten van historie, dit stuk over het in gebruik nemen.

## In het kort

- Een CRM-implementatie bij een klein makelaarskantoor past in vijf werkdagen, als je vooraf drie besluiten neemt: wie de eigenaar is, wat erin gaat en wat je achterlaat.
- Dag 1 zet de velden en pijplijnen vast, dag 2 is de portefeuille-import, dag 3 koppelt de kanalen, dag 4 zet de eerste automatiseringen aan en dag 5 gaat het team live.
- De import kost de meeste tijd in het opschonen: ontdubbelen, telefoonnummers in één formaat, de woning los van het woonadres en de toestemming met datum.
- Doe altijd eerst een proefimport van 50 records voordat de hele portefeuille erin gaat.
- De eerste dertig dagen na livegang bepalen of het CRM blijft: één bron, een vaste weekcontrole en geen tweede Excel ernaast.

## Implementatie of migratie: waar dit stuk over gaat

De twee woorden worden vaak door elkaar gebruikt, maar het zijn twee klussen. Een migratie is het overzetten van gegevens uit een vorig systeem, met alle risico's van velden die niet passen en historie die verdwijnt. Een implementatie is het in gebruik nemen van het nieuwe systeem: de inrichting, de import van je portefeuille, de koppelingen met je kanalen en het team dat ermee gaat werken.

Voor de meeste kleine kantoren is de implementatie het grootste deel. De portefeuille zit niet in één ander CRM maar verspreid over vier of vijf bronnen. De vraag is dan niet hoe je historie verliesvrij overzet, maar hoe je uit al die bronnen één schone klantkaart per persoon maakt. Een goed ingericht [crm voor makelaars](https://www.woningai.nl/crm) is daarna de plek waar elk contact, elke woning en elk gesprek samenkomt, en de basis voor [workflow automatisering voor makelaars](https://www.woningai.nl/automatisering).

## Voor dag 1: drie besluiten die de week bepalen

Zonder deze drie besluiten loopt de week vast op vragen die niemand durft te beantwoorden.

### Wie is de eigenaar?

Eén persoon op kantoor beslist over velden, labels en importkeuzes. Dat hoeft niet de directeur te zijn; vaak is het de binnendienstmedewerker die de administratie al doet. Die persoon reserveert vijf dagdelen in de week van implementatie.

### Wat gaat erin?

Maak een lijst van alle bronnen: de export van de oude software, de Excel-lijsten, de telefooncontacten, de mailbox van waardebepalingen, de visitekaartjes in de la. Zet achter elke bron hoeveel contacten erin zitten en wie de bron beheert.

### Wat laat je achter?

Niet alles hoeft mee. Contacten zonder naam, oude zoekers van wie je alleen een e-mailadres hebt en geen enkele interactie, dubbele lijsten van beurzen: laat ze achter of archiveer ze apart. Een CRM met minder maar schone contacten werkt beter dan een volle lijst die niemand vertrouwt.

## Dag 1: velden, pijplijnen en labels vastzetten

De eerste dag kom je niet aan de data. Je richt het CRM in zodat de data straks ergens kan landen.

### De velden

Houd de standaardvelden aan waar het kan en voeg alleen toe wat je echt gebruikt. Voor een makelaarskantoor zijn dat meestal: rol (verkoper, koper, huurder, relatie), woning (gekoppeld als apart object), bron van het contact, toestemming voor mail en WhatsApp met datum, en de makelaar die het contact beheert. Elk extra veld dat niemand invult, maakt het CRM rommeliger.

### De pijplijnen

Twee pijplijnen zijn genoeg om te beginnen. Een verkooppijplijn met fasen als waardebepaling, opdracht, in verkoop, onder bod, verkocht en overdracht. En een aankoop- of zoekerspijplijn met fasen als aanvraag, bezichtiging, bod en afgerond. Gebruik vaste fasen; een fase die per makelaar anders heet, maakt rapporten onbruikbaar.

### De labels

Labels zijn voor wat geen fase is: buurt, type woning, doorstromer, belegger. Spreek af dat alleen de eigenaar nieuwe labels aanmaakt. Hoe je die indeling gebruikt om kopers, verkopers en doorstromers apart te benaderen, lees je in ons artikel over [klantsegmentatie in je CRM](https://www.woningai.nl/blog/klantsegmentatie-makelaar-crm-kopers-verkopers-doorstromers).

## Dag 2: de portefeuille-import

![Dag 2: de portefeuille-import](/images/blog/crm-implementatie-makelaar-roadmap-portefeuille-import-2.jpg)

Dit is de dag waar de week om draait. Werk in vijf stappen en sla er geen over.

### Exporteren

Haal uit elke bron een bestand in CSV-formaat. Uit telefoons exporteer je de contacten per makelaar, uit de mailbox de afzenders van waardebepalingsaanvragen. Noem elk bestand naar zijn bron, zodat je straks per contact weet waar het vandaan kwam.

### Opschonen

Opschonen kost de meeste tijd. Vier dingen doe je bij elk bestand:

1. **Ontdubbelen** op e-mailadres en mobiel nummer. Dezelfde verkoper staat vaak in drie bronnen.
2. **Telefoonnummers** in één formaat zetten (+31 6 …), zodat WhatsApp en bellen straks werken.
3. **De woning los van het woonadres.** Een verkoper die verhuisd is, heeft een ander woonadres dan het adres van de woning die je verkocht.
4. **De toestemming meenemen**, met datum. Volgens de ACM bewijs je toestemming voor elektronische reclameberichten tot vijf jaar na verzending, en zonder datum bij het contact lukt dat niet. Een import die het veld toestemming of de datum weggooit, maakt je nieuwsbrief vanaf dag één onzeker.

### Mappen

Leg per kolom vast in welk CRM-veld hij landt. Een voorbeeld van zo'n mapping:

| Oude kolom | CRM-veld | Let op |
|---|---|---|
| Naam | Voornaam, achternaam | Splitsen |
| Telefoon 1 | Mobiel | +31-formaat |
| Adres object | Woning (gekoppeld) | Los van woonadres |
| Status opdracht | Pijplijnfase | Vaste lijst |
| Nieuwsbrief ja/nee | Toestemming + datum | Datum verplicht |
| Notities | Tijdlijn | Datum per notitie |

### Proefimport

Importeer eerst 50 records uit de grootste bron. Open er tien en controleer of naam, nummer, woning, fase en toestemming op de goede plek staan. Klopt er iets niet, verwijder de 50, pas de mapping aan en probeer opnieuw. Een fout in 50 records herstel je in een kwartier, een fout in 1.200 records kost een dag.

### Volledige import

Importeer daarna bron voor bron, de grootste eerst. Tel na elke bron hoeveel records er binnenkwamen en hoeveel er werden geweigerd. Het CRM geeft bij een import vrijwel altijd een lijst van geweigerde regels; los die op voordat je de volgende bron doet.

## Rekenvoorbeeld: wat de import aan uren kost

Stel: je portefeuille bestaat uit 1.200 contacten: 300 verkopers met een lopende of afgeronde opdracht, 650 kopers en zoekers en 250 relaties zoals notarissen, taxateurs en hypotheekadviseurs. Ontdubbelen en opschonen kost ongeveer 30 seconden per contact, samen 600 minuten of 10 uur. Mappen en de proefimport van 50 records kosten 2 uur, de controle na de volledige import nog eens 2 uur. Totaal: 14 uur.

Neem een uurwaarde van €75, dan kost de import in dit voorbeeld €1.050 aan eigen tijd. Daar staat tegenover dat elke makelaar daarna één klantkaart opent in plaats van drie bronnen doorzoekt. Scheelt dat per makelaar 15 minuten per dag, dan heb je met 3 makelaars de 14 uur binnen 19 werkdagen terug. Wat een CRM-pakket zelf per maand kost, verschilt per aanbieder; voor ons eigen aanbod staan de [tarieven van WoningAI](https://www.woningai.nl/tarieven) op een aparte pagina.

## Dag 3: de kanalen koppelen

Een CRM dat alleen gevuld wordt als iemand handmatig typt, loopt binnen een maand achter. Op dag 3 zorg je dat nieuwe contacten vanzelf binnenkomen.

- **Het websiteformulier** voor waardebepalingen en bezichtigingen maakt direct een contact aan, met de bron erbij.
- **De chat op je website** schrijft het gesprek naar de tijdlijn van het contact. Een [ai chatbot voor makelaars](https://www.woningai.nl/chatbot) doet dat zonder dat iemand kopieert en plakt.
- **De telefoon**: gemiste oproepen en gesprekken komen als notitie op de klantkaart.
- **De mailbox**: mails van en naar een bekend contact verschijnen in diens tijdlijn.
- **De agenda**: bezichtigingen en waardebepalingen staan bij het contact en bij de woning.

Test elke koppeling met een eigen testcontact. Vul het formulier in, start een chat, bel het kantoornummer en mis de oproep. Na vijf tests moeten er vijf items op de tijdlijn van hetzelfde contact staan.

## Dag 4: de eerste automatiseringen aanzetten

Begin met drie automatiseringen, niet meer. Elke automatisering die je in de eerste week aanzet, moet je ook kunnen controleren.

1. **Een bevestiging bij elke aanvraag.** Wie een waardebepaling of bezichtiging aanvraagt, krijgt binnen een minuut een bevestiging met de naam van de makelaar.
2. **Een taak bij elke nieuwe verkoper.** Komt er een waardebepaling binnen, dan krijgt de beherende makelaar een taak om binnen een werkdag te bellen.
3. **Een herinnering voor bezichtigingen.** Een dag voor de afspraak gaat er een herinnering uit.

Zet ze aan voor nieuwe contacten, niet voor de hele geïmporteerde portefeuille. Een import van 1.200 contacten die allemaal tegelijk een welkomstmail krijgen, is een fout die je niet terugdraait. Hoe je de geïmporteerde verkopers daarna gericht benadert, lees je in ons artikel over een [verkopers-database die warme leads vroeg herkent](https://www.woningai.nl/blog/makelaar-crm-verkopers-database-warme-leads-vroeg-identificeren).

## Dag 5: het team live

De laatste dag gaat over mensen, niet over techniek.

- **Een training van 90 minuten** met het hele team: een klantkaart openen, een notitie maken, een fase verzetten, een taak afvinken. Laat iedereen het zelf doen op een echt contact.
- **Eén afspraak**: vanaf vandaag gaat alles in het CRM. Geen notities meer in de telefoon, geen Excel-lijst ernaast.
- **De oude bronnen op alleen-lezen.** Zet de oude Excel-lijsten in een archiefmap en geef ze een naam met de datum. Zo weet iedereen dat ze niet meer bijgewerkt worden.
- **Een vast aanspreekpunt**: de eigenaar van de implementatie beantwoordt de eerste twee weken alle vragen.

## De eerste dertig dagen na livegang

Na dag 5 is het CRM ingericht, maar nog niet in gebruik. Dat gebeurt in de weken daarna.

### Week 1 en 2: een dagelijkse check

De eigenaar kijkt elke ochtend 15 minuten naar nieuwe contacten zonder makelaar, open taken die over tijd zijn en dubbele contacten die via een koppeling binnenkwamen.

### Week 3 en 4: een wekelijkse check

De check gaat naar één keer per week, met het team erbij. Elke makelaar noemt zijn drie belangrijkste lopende verkopers en laat ze in het CRM zien. Wie iets niet terugvindt, weet waar het misging.

### Na dertig dagen: opruimen

Verwijder velden die niemand invulde, voeg samen wat dubbel is en kijk welke vierde automatisering de meeste tijd zou schelen.

## Veelgestelde vragen

### Kan ik de implementatie in minder dan vijf dagen doen?

Bij een solo-makelaar met één bron van een paar honderd contacten gaat het sneller; dag 1 en dag 2 passen dan vaak in één dag. Bij meerdere bronnen en een team kost het opschonen en trainen de tijd die het kost.

### Moet ik alle oude notities meenemen?

Neem notities van verkopers en lopende kopers mee, met de datum. Notities van zoekers zonder contact in de afgelopen jaren kun je archiveren in plaats van importeren.

### Wat doe ik met contacten zonder toestemming voor mail?

Importeer ze wel, maar met het veld toestemming leeg. Ze krijgen dan geen nieuwsbrief of marketingflow, terwijl de makelaar ze nog wel persoonlijk kan benaderen.

### Wie mag velden toevoegen?

Alleen de eigenaar van de implementatie. Elke makelaar mag een veld voorstellen, maar één persoon beslist. Zo blijft het CRM leesbaar.

### Wanneer zet ik automatiseringen aan voor de geïmporteerde portefeuille?

Pas na de eerste dertig dagen, als de data gecontroleerd is. Begin dan met één kleine groep, bijvoorbeeld de verkopers van vorig jaar, en kijk hoe de eerste berichten landen.

## Conclusie: vijf dagen, één bron

Een CRM-implementatie bij een makelaarskantoor slaagt of faalt op twee momenten: de import op dag 2 en de afspraak op dag 5. Een schone import geeft het team een CRM dat het vertrouwt. Een harde afspraak dat alles erin gaat, voorkomt dat de oude Excel stilletjes blijft bestaan.

Neem de drie besluiten voor dag 1 deze week, maak je lijst van bronnen en plan de proefimport. Wil je weten wat een ingericht CRM met koppelingen en automatiseringen bij ons kost, bekijk dan de [tarieven van WoningAI](https://www.woningai.nl/tarieven): koppelingen met je eigen software zitten in het volledige systeem, zelf te gebruiken of managed.
