import { defineField, defineType } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'About Me',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { 
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
        {
          name: 'imageURL',
          title: 'Image URL',
          type: 'url',
        }
      ],
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Learn more',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Button Link',
      type: 'string',
    }),
  ],
})