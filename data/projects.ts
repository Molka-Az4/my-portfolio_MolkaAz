// data/projects.ts
export type Project = {
    id: string;
    title: string;
    description: string;
    tech: string[];
    link?: string;
    github?: string;
  };
  
  export const projects: Project[] = [
    {
      id: 'mayview',
      title: 'Mayview – AI Product Comparison Platform',
      description:
        'Web platform that uses AI and NLP to analyze product reviews and help users choose high-tech products.',
      tech: ['Next.js', 'NestJS', 'MongoDB', 'OpenAI', 'n8n'],
      link: 'https://mayview.fr',
    },
    {
      id: 'barbarij',
      title: 'Barbarij.tn – Marketplace for Local Artisans',
      description:
        'E-commerce platform for Tunisian local products with multi-vendor marketplace features and automation.',
      tech: ['Next.js', 'NestJS', 'MongoDB', 'Tailwind CSS'],
      link: 'http://barbarij.tn',
    },
    {
      id: 'automation',
      title: 'Automation Workflows with n8n & APIs',
      description:
        'Set of workflows that connect Google Sheets, social media, and AI models to automate content generation.',
      tech: ['n8n', 'OpenAI', 'REST APIs'],
    },
  ];
  