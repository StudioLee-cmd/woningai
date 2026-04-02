import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Makelaars", url: "/chatbot-voor-makelaars" },
            { text: "Voice AI voor Makelaars", url: "/voice-ai-voor-makelaars" },
            { text: "SEO voor Makelaars", url: "/seo-voor-makelaars" },
            { text: "Social Media voor Makelaars", url: "/social-media-voor-makelaars" },
            { text: "Reviews voor Makelaars", url: "/reviews-voor-makelaars" },
            { text: "Review Pakket", url: "/review-pakket" },
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
