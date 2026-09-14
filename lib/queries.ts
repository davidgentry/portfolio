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


// ==================== SERVICES ====================

// Get all services (ordered)
export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc, title asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    price,
    featured
  }
`

// Get featured services only
export const featuredServicesQuery = groq`
  *[_type == "service" && featured == true] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    price
  }
`

// Get a single service by slug (with full content)
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    content,
    price,
    featured
  }
`

// Get all published blog posts (with categories & tags)
export const allPostsQuery = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->{
      _id,
      title,
      slug
    },
    "tags": tags[]->{
      _id,
      title,
      slug
    }
  }
`

// Get a single post by slug
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    body,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->{
      _id,
      title,
      slug
    },
    "tags": tags[]->{
      _id,
      title,
      slug
    }
  }
`

// Get all categories (with post count)
export const allCategoriesQuery = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`

// Get all tags (with post count)
export const allTagsQuery = `
  *[_type == "tag"] | order(title asc) {
    _id,
    title,
    slug,
    "postCount": count(*[_type == "post" && references(^._id)])
  }
`

// Get posts by category slug
export const postsByCategoryQuery = `
  *[_type == "post" && $slug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "mainImage": mainImage.asset->url,
    "categories": categories[]->{
      title,
      slug
    }
  }
`

// Get posts by tag slug
export const postsByTagQuery = `
  *[_type == "post" && $slug in tags[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "mainImage": mainImage.asset->url,
    "tags": tags[]->{
      title,
      slug
    }
  }
`

// Get latest posts (useful for sidebar or homepage)
export const latestPostsQuery = `
  *[_type == "post"] | order(publishedAt desc)[0...5] {
    _id,
    title,
    slug,
    publishedAt
  }
`