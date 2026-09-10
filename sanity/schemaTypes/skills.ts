import { defineField, defineType } from 'sanity'

export const skills = defineType({
  name: 'skills',
  title: 'Skills Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Skills & Technologies',
    }),
    defineField({
      name: 'skillsList',
      title: 'Skills',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
  ],
})