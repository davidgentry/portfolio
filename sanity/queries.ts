import { groq } from 'next-sanity'

// ==================== SITE SETTINGS ====================
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    logo,
    navigation,
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }
`

// ==================== PROFILE ====================
export const profileQuery = groq`
  *[_type == "profile"][0] {
    name,
    title,
    bio,
    profileImage,
    location,
    email,
    resumeUrl,
    socialLinks[] {
      platform,
      url
    }
  }
`

// ==================== PROJECTS ====================
export const allProjectsQuery = groq`
  *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    description,
    technologies,
    liveUrl,
    githubUrl,
    publishedAt
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    description,
    content,
    technologies,
    liveUrl,
    githubUrl,
    publishedAt,
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
  }
`

// ==================== PAGES (with sections) ====================
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    seo {
      metaTitle,
      metaDescription,
      ogImage
    },
    sections[] {
      _type,
      ...,
      projects[]-> {
        _id,
        title,
        slug,
        mainImage,
        description
      }
    }
  }
`