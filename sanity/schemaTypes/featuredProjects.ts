import { defineField, defineType } from 'sanity'

export const featuredProjects = defineType({
  name: 'featuredProjects',
  title: 'Featured Projects',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Featured Projects',
    }),
    defineField({
      name: 'projects',
      title: 'Select Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'showViewAll',
      title: 'Show "View All Projects" Button',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})