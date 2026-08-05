/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
                    { source: '/blog/tweede-mening-makelaars-na-flat-fee-teleurstelling', destination: '/', permanent: true },
            { source: '/blog/vraagprijs-strategie-makelaars-4-modellen', destination: '/', permanent: true },
            { source: '/blog/woonboot-verkoop-ligplaats-romp-keuring-makelaar-niche', destination: '/', permanent: true },
            { source: '/blog/verhuur-makelaar-beleggers-maandtarief-courtage-makelaar-specialisme', destination: '/', permanent: true },
            { source: '/blog/notaris-coordinator-makelaar-regisseur-transactie-klantcommunicatie', destination: '/', permanent: true },
            { source: '/blog/internationale-verkoop-makelaar-duitse-expat-kopers-specialisme', destination: '/', permanent: true },
            { source: '/blog/recreatiewoning-verkoop-makelaar-vakantieparken-specialisme', destination: '/', permanent: true },
            { source: '/blog/courtage-uitleggen-als-makelaar-voorkom-discussie', destination: '/', permanent: true },
            { source: '/blog/makelaar-courtage-uitleggen-discussie-voorkomen', destination: '/', permanent: true },
            { source: '/blog/bedrijfsmakelaardij-commercieel-vastgoed-makelaar-2026', destination: '/', permanent: true },
            { source: '/blog/aankoopmakelaardij-toevoegen-makelaarskantoor-rendement', destination: '/', permanent: true },
            { source: '/blog/taxatie-dienstverlening-makelaar-propositie', destination: '/', permanent: true },
            { source: '/blog/ai-makelaar-verkoopt-huis', destination: '/', permanent: true },
            { source: '/blog/no-shows-bezichtiging-makelaar', destination: '/blog/bezichtiging-no-show-voorkomen-makelaar', permanent: true },
            { source: '/blog/no-shows-bezichtigingen-makelaar', destination: '/blog/bezichtiging-no-show-voorkomen-makelaar', permanent: true },
            { source: '/blog/bezichtiging-no-shows-voorkomen-makelaar', destination: '/blog/bezichtiging-no-show-voorkomen-makelaar', permanent: true },
            { source: '/blog/makelaar-vindbaar-google', destination: '/blog/makelaar-vindbaar-google-lokale-seo', permanent: true },
            { source: '/blog/reviews-makelaar-na-bezichtiging', destination: '/blog/meer-google-reviews-makelaarskantoor', permanent: true },
            { source: '/blog/social-media-voor-makelaars', destination: '/blog/social-media-makelaars-bezichtigingen', permanent: true },
            { source: '/blog/meer-opdrachten-met-ai', destination: '/blog/meer-google-reviews-makelaarskantoor', permanent: true },
            { source: '/blog/reviews-automatiseren-makelaar-vertrouwen', destination: '/blog/meer-google-reviews-makelaarskantoor', permanent: true },
        ];
    },
};

export default nextConfig;
