import React, { useEffect } from 'react';
import { siteConfig, pageMetadataMap } from '../config/siteConfig';
import { contactConfig } from '../config/contactConfig';

interface SEOHeadProps {
  currentRoute: string;
}

export default function SEOHead({ currentRoute }: SEOHeadProps) {
  const meta = pageMetadataMap[currentRoute] || {
    title: 'Page Not Found | Saffron & Soul',
    description: 'The requested corridor was not found in our dining sanctuary.',
    canonicalPath: currentRoute,
    ogType: 'website' as const
  };

  const canonicalUrl = `${siteConfig.productionDomain.replace(/\/$/, '')}${meta.canonicalPath}`;
  const ogImageUrl = meta.ogImage || siteConfig.defaultOgImage;

  useEffect(() => {
    // 1. Update Title
    document.title = meta.title;

    // Helper to create or update meta tags
    const setMetaTag = (attribute: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to create or update link tags (canonical)
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Standard Meta
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'robots', 'index, follow');
    setLinkTag('canonical', canonicalUrl);

    // Open Graph
    setMetaTag('property', 'og:site_name', siteConfig.siteName);
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', meta.ogType || 'website');
    setMetaTag('property', 'og:image', ogImageUrl);
    setMetaTag('property', 'og:image:alt', `${siteConfig.siteName} Culinary Visual`);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:image', ogImageUrl);

    // 2. Structured Data (JSON-LD) - Only verified facts, omit unconfigured address/phone
    let scriptTag = document.getElementById('saffron-schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'saffron-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": siteConfig.siteName,
      "description": "Premium pure-vegetarian multi-cuisine Indian restaurant showcasing authentic regional traditions.",
      "url": canonicalUrl,
      "image": ogImageUrl,
      "servesCuisine": siteConfig.cuisineType,
      "hasMenu": `${siteConfig.productionDomain}/menu`,
      "acceptsReservations": "True",
      "suitableForDiet": "https://schema.org/VegetarianDiet"
    };

    // Only attach address/phone if explicitly confirmed and configured
    if (contactConfig.isAddressConfigured) {
      structuredData.address = {
        "@type": "PostalAddress",
        "streetAddress": contactConfig.address
      };
    }
    if (contactConfig.isPhoneConfigured) {
      structuredData.telephone = contactConfig.phone;
    }

    scriptTag.text = JSON.stringify(structuredData, null, 2);
  }, [currentRoute, meta, canonicalUrl, ogImageUrl]);

  return null;
}
