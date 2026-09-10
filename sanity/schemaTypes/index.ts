import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { profile } from './profile'
import { siteSettings } from './siteSettings'
import { hero } from './hero'
import { featuredProjects } from './featuredProjects'
import { aboutSection } from './aboutSection'
import { skills } from './skills'
import { cta } from './cta'
import { page } from './page'

export const schemaTypes: SchemaTypeDefinition[] = [
  page,
  project,
  profile,
  siteSettings,
  hero,
  featuredProjects,
  aboutSection,
  skills,
  cta
]