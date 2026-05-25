import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Makelaars", url: "/chatbot" },
            { text: "Voice AI voor Makelaars", url: "/voice-ai" },
            { text: "SEO voor Makelaars", url: "/seo" },
            { text: "Social Media voor Makelaars", url: "/social-media" },
            { text: "Reviews voor Makelaars", url: "/reviews" },
            { text: "Review Pakket", url: "/review-pakket" },
            { text: "CRM voor Makelaars", url: "/crm" },
            { text: "Automatisering voor Makelaars", url: "/automatisering" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
