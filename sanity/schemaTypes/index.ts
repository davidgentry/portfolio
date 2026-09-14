import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { profile } from './profile'
import { siteSettings } from './siteSettings'
import { hero } from './hero'
import { featuredProjects } from './featuredProjects'
import { about } from './about'
import { skills } from './skills'
import { cta } from './cta'
import { page } from './page'
import { blog } from './blog'
import { category } from './category'
import { tag } from './tag'

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  page,
  blog,
  project,
  profile,
  hero,
  featuredProjects,
  about,
  skills,
  cta,
  category,
  tag,
]